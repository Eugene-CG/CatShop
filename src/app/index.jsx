import { Provider } from "react-redux";
import { Router } from "../pages";
import { store } from "./store";
import "./style.css";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};
