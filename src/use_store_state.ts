import { Store } from './store';
import * as React from 'react';

export function useStoreState<ST extends Store<any>, A = any>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => [A]
): [A];

export function useStoreState<ST extends Store<any>, A = any, B = any>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => [A, B]
): [A, B];

export function useStoreState<ST extends Store<any>, A = any, B = any, C = any>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => [A, B, C]
): [A, B, C];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any
>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => [A, B, C, D]
): [A, B, C, D];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any
>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => [A, B, C, D, E]
): [A, B, C, D, E];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F]
): [A, B, C, D, E, F];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G]
): [A, B, C, D, E, F, G];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H]
): [A, B, C, D, E, F, G, H];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I]
): [A, B, C, D, E, F, G, H, I];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J]
): [A, B, C, D, E, F, G, H, I, J];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K]
): [A, B, C, D, E, F, G, H, I, J, K];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L]
): [A, B, C, D, E, F, G, H, I, J, K, L];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M]
): [A, B, C, D, E, F, G, H, I, J, K, L, M];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any,
  V = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any,
  V = any,
  W = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any,
  V = any,
  W = any,
  X = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any,
  V = any,
  W = any,
  X = any,
  Y = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y
  ]
): [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y];

export function useStoreState<
  ST extends Store<any>,
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
  J = any,
  K = any,
  L = any,
  M = any,
  N = any,
  O = any,
  P = any,
  Q = any,
  R = any,
  S = any,
  T = any,
  U = any,
  V = any,
  W = any,
  X = any,
  Y = any,
  Z = any
>(
  store: ST,
  subsetProducer: (
    state: ReturnType<ST['getCurrentState']>
  ) => [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z
  ]
): [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z
];

export function useStoreState<ST extends Store<any>>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => any
): any {
  const subsetRef = React.useRef<any[]>();
  const [, reRender] = React.useState(0);
  if (subsetRef.current === undefined) {
    subsetRef.current = tryToGetSubset(store.getCurrentState(), subsetProducer);
  }
  if (subsetRef.current === undefined) {
    throwSubsetPromise(store, subsetProducer);
  }
  React.useEffect(() => {
    const unsub = store.subscribe(state => {
      const newSubset = tryToGetSubset(state, subsetProducer);
      if (
        newSubset === undefined ||
        subsetRef.current === undefined ||
        newSubset.length !== subsetRef.current.length ||
        newSubset.some((v, i) => !subsetRef.current[i] !== v)
      ) {
        subsetRef.current = newSubset;
        reRender(Date.now());
      }
    });
    return () => {
      unsub();
    };
  }, []);
  return subsetRef.current;
}

function throwSubsetPromise<ST extends Store<any>>(
  store: ST,
  subsetProducer: (state: ReturnType<ST['getCurrentState']>) => any
): void {
  throw new Promise(resolve => {
    const unsub = store.subscribe(state => {
      if (tryToGetSubset(state, subsetProducer) !== undefined) {
        unsub();
        resolve();
      }
    });
  });
}

function tryToGetSubset<State extends {}>(
  state: State,
  subsetProducer: (state: State) => any
): any[] | undefined {
  let subset: any[];
  try {
    subset = subsetProducer(state);
  } catch (e) {}
  if (subset === undefined || subset.findIndex(v => v === undefined) > -1) {
    return undefined;
  }
  return subset;
}
