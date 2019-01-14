import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import posterStore from "./store/PosterStore";
import modalStore from "./store/ModalStore";

const stores = {
  posterStore,
  modalStore
};

ReactDOM.render(
  <Provider {...stores}>
        <App /> 
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
