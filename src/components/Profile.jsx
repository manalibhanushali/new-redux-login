import React from "react";

import Link from "./Link";

export default ({ name, viewProfile, logout }) => (
  <div>
    Welcome, {name}
    <hr />
    <Link onClick={logout}>Log out</Link>
  </div>
);
