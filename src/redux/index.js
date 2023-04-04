import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";
import saga, { sagaMiddleware } from "./saga";

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
