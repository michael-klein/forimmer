import { createStore, useStoreState } from '../src';
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

interface State {
  foo: string;
  bar: string;
}
const initalState: State = { foo: 'foo', bar: undefined };
const bar = 'bar';
const store = createStore<State>(initalState);
const fallbackText = 'fallback';

const reset = store.createStoreAction(async () => () => initalState);

const fetchBar = store.createStoreAction(
  () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve(draft => {
          draft.bar = bar;
        });
      }, 100)
    )
);
const setBar = store.createStoreAction(async (newBar: string) => draft => {
  draft.bar = newBar;
});

const setFoo = store.createStoreAction(async (newFoo: string) => draft => {
  draft.foo = newFoo;
});

let container: RenderResult;
describe('useStoreState', () => {
  afterEach(() => {
    if (container) {
      container.unmount();
      container = undefined;
    }
  });

  it('gets correct store value with useStoreState', async () => {
    await reset();
    const App = () => {
      const [foo] = useStoreState(store, state => [state.foo]);
      return <div>{foo}</div>;
    };
    container = render(<App />);
    expect(container.findByText(initalState.foo)).toBeDefined();
  });

  it('throws when trying to use undefined state value', async () => {
    await reset();
    expect(() => {
      const App = () => {
        const [bar] = useStoreState(store, state => [state.bar]);
        return <div>{bar}</div>;
      };
      container = render(<App />);
    }).toThrow();
  });

  it('shows fallback with suspense when thrown error', async () => {
    await reset();

    const App = () => {
      const [bar] = useStoreState(store, state => [state.bar]);
      return <div>{bar}</div>;
    };
    container = render(
      <React.Suspense fallback={<div>{fallbackText}</div>}>
        <App />
      </React.Suspense>
    );
    expect(container.findByText(fallbackText)).toBeDefined();
  });

  it('shows fallback with suspense, then correct text once fetch is done', async () => {
    await reset();

    const App = () => {
      const [bar] = useStoreState(store, state => [state.bar]);
      return <div>{bar}</div>;
    };
    container = render(
      <React.Suspense fallback={<div>{fallbackText}</div>}>
        <App />
      </React.Suspense>
    );
    expect(container.findByText(fallbackText)).toBeDefined();
    await fetchBar();

    expect(container.findByText(bar)).toBeDefined();
  });

  it('will re-render when action changes state', async () => {
    await reset();
    const App = () => {
      const [foo] = useStoreState(store, state => [state.foo]);
      return <div>{foo}</div>;
    };
    container = render(<App />);
    expect(container.findByText(initalState.foo)).toBeDefined();

    await setFoo(bar);

    expect(container.findByText(bar)).toBeDefined();
  });

  it('will not re-render when action changes part of state not subscribed to', async () => {
    await reset();
    const App = jest.fn(() => {
      const [foo] = useStoreState(store, state => [state.foo]);
      return <div>{foo}</div>;
    }) as any;
    container = render(<App />);

    await setBar(bar);

    expect(App).toBeCalledTimes(1);
  });
});
