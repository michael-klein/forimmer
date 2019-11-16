import { Draft } from 'immer';
export declare type StateProducer<State extends {}> = (draft: Draft<State | undefined>) => Draft<State> | void;
export declare type StateListener<State extends {}> = (state: State | undefined) => void;
export declare type Unsubscribe = () => void;
export interface Store<State extends {}> {
    getCurrentState(): State | undefined;
    subscribe(listener: StateListener<State>): Unsubscribe;
    createStoreAction<Action extends (payload: any) => Promise<StateProducer<State>> = (payload: any) => Promise<StateProducer<State>>>(action: Action): Action;
    createStoreAction<Action extends () => Promise<StateProducer<State>> = () => Promise<StateProducer<State>>>(action: Action): Action;
}
export declare function createStore<State extends {}>(currentState?: State): Store<State>;
