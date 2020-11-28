import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import ScrollMemory from "react-router-scroll-memory";
import { CircularProgress } from "@material-ui/core";
const App = React.lazy(() => {
  return Promise.all([
    import("./App"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollMemory />
      <Suspense
        fallback={
          <>
            <div
              style={{
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%,-50%,0)",
                position: "absolute",
              }}
            >
              <CircularProgress color="secondary" size={100} />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 100,
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%,-50%,0)",
                position: "absolute",
              }}
            >
              <p
                style={{
                  color: "#ff1493",
                  fontWeigth: 200,
                  fontSize: 30,
                }}
              >
                WELCOME TO SOLAMEDIA
              </p>
            </div>
          </>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
