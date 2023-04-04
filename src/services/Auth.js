// services/Auth.js
import { CONNECTION_ERROR, VALIDATION_ERROR } from "../redux/constants";

const TIMEOUT = 1000;
const USER = { name: "Jon Snow" };

const Auth = {
  login({ username, password }) {
    return new Promise((resolve, reject) =>
      setTimeout(function() {
        if (username === "" || password === "") {
          return reject(new Error(VALIDATION_ERROR));
        } else if (username === "z" && password === "z") {
          return reject(new Error(CONNECTION_ERROR));
        }
        resolve(USER);
      }, TIMEOUT)
    );
  }
};

export default Auth;
