import { createStore } from '../src';

describe('store', () => {
  it('creates a store without initial value', () => {
    createStore();
  });

  it('returns correct inital state from getCurrentState', () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    expect(intialState).toMatchObject(store.getCurrentState());
  });

  it('creates a store action successfully', () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    store.createStoreAction(async () => draft => draft);
  });

  it('calls a store action successfully', () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    const action = store.createStoreAction(async () => draft => draft);
    action();
  });

  it('calls a store action that modifies state successfully', async () => {
    const intialState = { foo: 'foo' };
    const newFoo = 'bar';
    const store = createStore(intialState);
    const action = store.createStoreAction(async () => draft => {
      draft.foo = newFoo;
    });
    await action();
    expect(store.getCurrentState().foo).toBe(newFoo);
  });

  it('checks that current state is differen object than initial after action (immutability)', async () => {
    const intialState = { foo: 'foo' };
    const newFoo = 'bar';
    const store = createStore(intialState);
    const action = store.createStoreAction(async () => draft => {
      draft.foo = newFoo;
    });
    await action();
    expect(store.getCurrentState()).not.toBe(intialState);
  });

  it('can subscribe to a store', async () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    store.subscribe(state => state);
  });

  it('can unsubscribe from a store', async () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    const unsubscribe = store.subscribe(state => state);
    unsubscribe();
  });

  it('calls listener after store action that changes state', async () => {
    const intialState = { foo: 'foo' };
    const newFoo = 'bar';
    const store = createStore(intialState);
    const listener = jest.fn(state => state);
    store.subscribe(listener);
    const action = store.createStoreAction(async () => draft => {
      draft.foo = newFoo;
    });
    await action();
    expect(listener).toBeCalled();
  });

  it('does not call listener after store action that does not change state', async () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    const listener = jest.fn(state => state);
    store.subscribe(listener);
    const action = store.createStoreAction(async () => draft => {
      draft.foo = intialState.foo;
    });
    await action();
    expect(listener).not.toBeCalled();
  });

  it('calls listener the correct amount of time', async () => {
    const intialState = { foo: 'foo' };
    const store = createStore(intialState);
    const listener = jest.fn(state => state);
    store.subscribe(listener);
    let numCalls = 0;
    function changeFoo() {
      const action = store.createStoreAction(async () => draft => {
        draft.foo += 'f';
        numCalls++;
      });
      return action();
    }
    await Promise.all([
      changeFoo(),
      changeFoo(),
      changeFoo(),
      changeFoo(),
      changeFoo(),
    ]);
    expect(listener).toBeCalledTimes(numCalls);
  });

  it('does not call listener anymore after unsubscribe', async () => {
    const intialState = { foo: 'foo' };
    const newFoo = 'bar';
    const store = createStore(intialState);
    const listener = jest.fn(state => state);
    const unsubscribe = store.subscribe(listener);
    const action = store.createStoreAction(async () => draft => {
      draft.foo = newFoo;
    });
    unsubscribe();
    await action();
    expect(listener).not.toBeCalled();
  });
});
