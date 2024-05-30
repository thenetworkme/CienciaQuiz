import React from "react";
import ReactDOM from "react-dom/client";
import App, { QuizProvider } from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      {" "}
      <App />
    </QuizProvider>
  </React.StrictMode>
);
