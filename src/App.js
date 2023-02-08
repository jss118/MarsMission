import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppBody from "./components/AppBody";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppBody />
      </BrowserRouter>
    </div>
  );
}

export default App;
