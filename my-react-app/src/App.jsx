import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StylesExComp from "./components/StylesExComp/StylesExComp";
import Hello from "./components/Hello/Hello";
import NyTimes from "./components/NyTimes/NyTimes";
import Forms from "./components/Forms/Forms";
// import Greet from "./components/Hello/Greet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greet from "./components/Greet/Greet";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      {/* <Greet/> */}
      {/* <StylesExComp/> */}
      {/* <Hello name="Alice" age={30} occupation="Engineer" >
        <p>This is a child prop</p>
      </Hello>
      <Hello name="Bob" age={38} occupation="Doctor" >
        <button>Action</button>
        </Hello>
      <Hello name="Charlie" age={39} occupation="Designer" /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello name="Bob"/>} />
          <Route path="/NyTimes" element={<NyTimes/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Forms/> */}

      <Greet name="Bob"/>
        <Counter/>
    </>
  );
}

export default App;
