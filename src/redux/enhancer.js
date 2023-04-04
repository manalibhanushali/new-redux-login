import { compose } from "redux";
import { connect } from "react-redux";

import { CONNECTION_ERROR } from "./constants";

import { login, logout, tryAgain } from "../redux/actions";

export default connect(
  state => state,
  dispatch => ({
    login: compose(
      dispatch,
      login
    ),
    tryAgain: compose(
      dispatch,
      tryAgain
    ),
    logout: compose(
      dispatch,
      logout
    )
  })
);
