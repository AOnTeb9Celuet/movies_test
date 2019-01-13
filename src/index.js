import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { mobxStore } from './store/MobxStore'

ReactDOM.render(<App store = {mobxStore} />, document.getElementById("root")
);

serviceWorker.unregister();
