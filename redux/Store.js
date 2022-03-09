import { applyMiddleware, createStore } from "redux";
import Cookies from "js-cookie";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import rootSaga from "../redux/RootSaga";
import rootReducer from "./RootReducer";

export const LocalStoreName = "persistState";

function saveToLocalStorage(state) {
  try {
    const serialState = JSON.stringify(state);
    Cookies.set(LocalStoreName, serialState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const Data = Cookies.get(LocalStoreName);
    if (Data === undefined || typeof window === "undefined") return undefined;
    return JSON.parse(Data);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case "SERVER_ACTION":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case "CLIENT_ACTION":
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};

// export const makeStore = (context) => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [logger, sagaMiddleware];
//   const store = createStore(
//     rootReducer,
//     loadFromLocalStorage(),
//     applyMiddleware(...middleware)
//   );

//   store.sagaTask = sagaMiddleware.run(rootSaga);
//   store.subscribe(() => {
//     saveToLocalStorage(store.getState());
//   });

//   return store;
// };

// create a makeStore function
const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, { debug: true });
