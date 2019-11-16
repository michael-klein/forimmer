<h1 align="center">forimmer <img alt="build status" src="https://travis-ci.org/michael-klein/simmer.js.svg?branch=master" /><a href="https://www.npmjs.com/package/forimmer"> <img alt="npm" src="https://img.shields.io/npm/v/forimmer"></a></h1>
<div align="center"><b>Immutable state store for react apps with suspense integration.</b></div>

## What is this?

**forimmer** is a functional state store for react apps, which uses [immer](https://github.com/immerjs/immer) for immutability and integrates with the new react [suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) API. It was in part inspired by the excellent [pullstate](https://github.com/lostpebble/pullstate).

The name is just a silly play with words. "immer" means "always" or "ever" in German and "für immer" means "forever". So, forimmer is basically just a fun, bad translation (that you might encounter from actual Germans trying to speak English). I'm not good at naming things.

## How does it work?

First, here is a codesandbox with a very contrived example:
[link](https://codesandbox.io/s/mystifying-leaf-bec9j?fontsize=14&hidenavigation=1&theme=dark)

You can install **forimmer** from npm:
```bash
npm install forimmer -s
```

### Creating a store

A new store is created with the createStore function:
```typescript
import { createStore } from "forimmer";

const store = createStore<{
  foo: string;
  bar: string;
}>();
```
You can also supply an initial state:
```typescript
import { createStore } from "forimmer";

const store = createStore<{
  foo: string;
  bar: string;
}>({foo: "foo"});
```

If your initial state covers the entire desired State interface, you may omit the generics and createStore will infer the type of your state:
```typescript
import { createStore } from "forimmer";

const store = createStore({foo: "foo", bar: "bar"});
```

### Using the store state in your react app:

If you just want to access the current state of the store, use:
```
const state = store.getCurrentState();
```

The useStoreState hooks allows you to pick values from the store (returning them in an array) and subscribe to changes thereof:
```typescript
function SomeComponent() {
  const [foo] = useStoreState(store, state => [state.foo]); // useStoreState will infer the type of foo
  return <div>{foo}</div>
}
```
Whenever state.foo changes (and not any other value), the component will re-render and foo will be updated to the new value.

### Suspense integration

If any of the values returned from useStoreState is undefined OR if trying to access a value deeper in the state tree would throw an error, useStoreState will throw a Promise which resolves once the store has been updated and the desired values become available.

You can wrap your component in React.Suspense to show a fallback UI that will automatically appear when useStoreState throws and the loading Promise is pending:
```typescript
function ComponentWithSuspense() {
  return <React.Suspense fallback={<div>...loading foo</div>}>
    <SomeComponent />
  </React.Suspense>
}
```

### Modifying the store state with actions

In order to modify the store state, you can define store actions. A store action is an async function (that might for instance fetch data from an API) which returns a state recipe, which in turn is a function which is passed a draft state to modify (see the immer docs):
```typescript

// this will create a store action with a payload:
const setFoo = store.createStoreAction(
  async (newFoo: string) => draft => {
    draft.foo = newFoo;
  }
);

setFoo("foo") // set store.foo to "foo"

const fetchFoo = store.createStoreAction(
  async () => {
    const foo:string = await someApiCall();
    return draft => {
      draft.foo = newFoo;
    }
  }
);
fetchFoo() // fetch foo from some api
```

