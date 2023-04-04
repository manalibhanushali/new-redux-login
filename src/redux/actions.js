import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  TRY_AGAIN,
  LOGOUT
} from "./constants";

export const login = credentials => ({ type: LOGIN, payload: credentials });
export const loginSuccessful = userData => ({
  type: LOGIN_SUCCESSFUL,
  payload: userData
});
export const logout = data => ({ type: LOGOUT });
export const loginFailed = error => ({ type: LOGIN_FAILED, payload: error });
export const tryAgain = () => ({ type: TRY_AGAIN });
