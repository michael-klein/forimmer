import produce, { Draft, setAutoFreeze } from 'immer';

setAutoFreeze(true);
if (process.env.NODE_ENV !== 'production') {
  setAutoFreeze(false);
}

export type StateProducer<State extends {}> = (
  draft: Draft<State | undefined>
) => Draft<State> | void;

export type StateListener<State extends {}> = (
  state: State | undefined
) => void;

export type Unsubscribe = () => void;

export interface Store<State extends {}> {
  getCurrentState(): State | undefined;
  subscribe(listener: StateListener<State>): Unsubscribe;
  createStoreAction<
    Action extends (payload: any) => Promise<StateProducer<State>> = (
      payload: any
    ) => Promise<StateProducer<State>>
  >(
    action: Action
  ): Action;
  createStoreAction<
    Action extends () => Promise<StateProducer<State>> = () => Promise<
      StateProducer<State>
    >
  >(
    action: Action
  ): Action;
}

export function createStore<State extends {}>(
  currentState?: State
): Store<State> {
  const listeners: StateListener<State>[] = [];

  function setState(state: State): void {
    currentState = state;
    [...listeners].forEach(listener => listener(currentState));
  }

  function updateState(producer: StateProducer<State>): void {
    const newState: State = produce(currentState || {}, draft =>
      producer(draft as Draft<State>)
    ) as State;
    if (newState !== currentState && Object.keys(newState).length > 0) {
      setState(newState);
    }
  }

  return {
    getCurrentState: () => currentState,
    subscribe: listener => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    },
    createStoreAction<
      Action extends (payload?: any) => Promise<StateProducer<State>> = (
        payload?: any
      ) => Promise<StateProducer<State>>
    >(action: Action): Action {
      return ((payload?: any) => {
        return action(payload).then(producer => updateState(producer));
      }) as Action;
    },
  };
}
