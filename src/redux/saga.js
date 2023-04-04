import createSagaMiddleware from "redux-saga";
import { takeLatest, call, put, select } from "redux-saga/effects";

import { LOGIN, TRY_AGAIN } from "./constants";
import { loginSuccessful, loginFailed } from "./actions";
import Auth from "../services/Auth";

const getCredentials = state => state.credentials;

export default function* saga() {
  yield takeLatest([LOGIN, TRY_AGAIN], function*() {
    try {
      const credentials = yield select(getCredentials);
      const userData = yield call(Auth.login, credentials);
      yield put(loginSuccessful(userData));
    } catch (error) {
      yield put(loginFailed(error));
    }
  });
}

export const sagaMiddleware = createSagaMiddleware();
