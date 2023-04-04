import React from "react";

import LoginForm from "./LoginForm";
import Loading from "./Loading";
import Profile from "./Profile";
import Error from "./Error";
import Link from "./Link";

import enhancer from "../redux/enhancer";

import {
  IDLE,
  LOGIN,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  LOGIN_FAILED,
  TRY_AGAIN,
  CONNECTION_ERROR
} from "../redux/constants";

const Widget = ({ status, user, error, login, logout, tryAgain }) => {
  switch (status) {
    case LOGIN:
    case TRY_AGAIN: {
      return <Loading />;
    }

    case LOGIN_FAILED: {
      return (
        <Error
          tryAgain={tryAgain}
          restart={logout}
          message="Connection problem!"
        />
      );
    }

    case LOGIN_SUCCESSFUL: {
      return <Profile name={user.name} logout={logout} />;
    }

    default: {
      return <LoginForm submit={login} error={error} />;
    }
  }
};

export default enhancer(Widget);
