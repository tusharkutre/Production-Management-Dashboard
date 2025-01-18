import React from "react";
import "./App.css";
import Stage from "./components/Stage";
import Machines from "./components/Machines";
import Die from "./components/Die";
import Process from "./components/Process";
import Details from "./components/Details";
import Products from "./components/Products";

// Arrow functional component
const App = () => {
  return (
    <>
        <h1>Production Management Dashboard</h1>

        <div className="first-row">
          <Stage/>
          <Machines/>
          <Die/>
          <Process/>
          <Products/>
          {/* <Details/> */}
        </div>
    </>
  );
};

export default App;
