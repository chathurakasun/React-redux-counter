# redux-counter

## Using redux on a React app

![Intro Image](/src/assets/intro.jpg)

### Initial steps

To work with redux in a react app, need to install two packages

> npm install redux react-redux

### Providing the store

To provide the store for the all components in the app, need to go highest level of the component tree, which is the index.js which includes the root render of App.
Then import `Provider` from 'react-redux' lib.

```
import {Provider} from 'react-redux'
```

Then wrap the app by _Provider_ hence all the child components can have access to the _store_
But to explicitly tell what store that we provide, import the store js and then set store prop with the imported store

```
import store from "./store/index";
root.render(<Provider store={store}><App /></Provider>);

```

### Using Redux Data in React Components

import `useSelector` hook

> import { useSelector } from "react-redux/es/exports";

Provide the function to acces the data

> const counter = useSelector((state) => state.counter);

**Note**
useSelector(): here we have to pass a function which tells what data should be access.
when use useSelector, react-redux will automatically set a `subscription` to the redux store for this component.
Hence the component will be updated and receive `latest state`.
when the component unmount, react-redux will also remove the subscription also.

### Dispatching Actions from inside Components

To dispatch, need to import `useDispatch` hook.

Then use `useDispatch()` , no arguments needed to pass. But should assign a function for dispatch an action to the reducer function in the store.

```
const dispatch = useDispatch();
const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
```

Now in the `<button>` , can use `incrementHandler` and `decrementHander` with `onClick` prop to make an action

### Attaching Payloads to Actions

Usually we dispatch not only action.type but also action _payload_.

It's a best practice to keep reducer _dynamic_ so that we only explicitly code in the dispatch handlers.

```
 if (action.type === "increase") {
    return { counter: state.counter + action.amount };
  }
```

Now in the Counter, have to dispatch an action with both _type_ and _payload_ and set `increaseHandler` to a new button component

```
const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
```

**Updated Counter APP**

![update1](/src/assets/update1.jpg)

### Working with Multiple State Properties
