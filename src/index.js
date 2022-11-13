//External Lib Import
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//Internal Lib Import
import store from "./redux/store/store";
import App from "./App";
import "./assets/css/bootstrap.css";
import "./assets/css/custom.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
