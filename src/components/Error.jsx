import React from "react";

import Link from "./Link";

export default ({ message, tryAgain, restart }) => (
  <div className="tac">
    <p className="error">{message}</p>
    <Link onClick={tryAgain}>Try again</Link>
    &nbsp;
    <Link onClick={restart}>Restart</Link>
  </div>
);
