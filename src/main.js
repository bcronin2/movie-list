import "../styles/styles.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(
  <App
    movies={[
      { title: "Mean Girls" },
      { title: "Hackers" },
      { title: "The Grey" },
      { title: "Sunshine" },
      { title: "Ex Machina" }
    ]}
  />,
  document.getElementById("app")
);
