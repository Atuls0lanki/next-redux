import { all } from "redux-saga/effects";

import auth from "./auth/AuthSaga";

export default function* rootSaga() {
  return yield all([auth]);
}
