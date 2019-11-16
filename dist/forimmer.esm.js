import produce, { setAutoFreeze } from 'immer';
import { useRef, useState, useEffect } from 'react';

setAutoFreeze(true);

if (process.env.NODE_ENV !== 'production') {
  setAutoFreeze(false);
}

function createStore(currentState) {
  var listeners = [];

  function setState(state) {
    currentState = state;
    [].concat(listeners).forEach(function (listener) {
      return listener(currentState);
    });
  }

  function updateState(producer) {
    var newState = produce(currentState || {}, function (draft) {
      return producer(draft);
    });

    if (newState !== currentState && Object.keys(newState).length > 0) {
      setState(newState);
    }
  }

  return {
    getCurrentState: function getCurrentState() {
      return currentState;
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function () {
        var index = listeners.indexOf(listener);

        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    },
    createStoreAction: function createStoreAction(action) {
      return function (payload) {
        return action(payload).then(function (producer) {
          return updateState(producer);
        });
      };
    }
  };
}

function useStoreState(store, subsetProducer) {
  var subsetRef = useRef();

  var _React$useState = useState(0),
      reRender = _React$useState[1];

  if (subsetRef.current === undefined) {
    subsetRef.current = tryToGetSubset(store.getCurrentState(), subsetProducer);
  }

  if (subsetRef.current === undefined) {
    throwSubsetPromise(store, subsetProducer);
  }

  useEffect(function () {
    var unsub = store.subscribe(function (state) {
      var newSubset = tryToGetSubset(state, subsetProducer);

      if (newSubset === undefined || subsetRef.current === undefined || newSubset.length !== subsetRef.current.length || newSubset.findIndex(function (v) {
        return !subsetRef.current.includes(v);
      }) > -1) {
        subsetRef.current = newSubset;
        reRender(Date.now());
      }
    });
    return function () {
      unsub();
    };
  }, []);
  return subsetRef.current;
}

function throwSubsetPromise(store, subsetProducer) {
  throw new Promise(function (resolve) {
    var unsub = store.subscribe(function (state) {
      if (tryToGetSubset(state, subsetProducer) !== undefined) {
        unsub();
        resolve();
      }
    });
  });
}

function tryToGetSubset(state, subsetProducer) {
  var subset;

  try {
    subset = subsetProducer(state);
  } catch (e) {}

  if (subset === undefined || subset.findIndex(function (v) {
    return v === undefined;
  }) > -1) {
    return undefined;
  }

  return subset;
}

export { createStore, useStoreState };
//# sourceMappingURL=forimmer.esm.js.map
