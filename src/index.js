import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// Import Routes
import routes from './routes';
import FancyRoute from './components/loadingBar/loadingBar';


ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) =>
        <FancyRoute key={i} {...route} />
      )}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
