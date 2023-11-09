import React from "react";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";
import CanvasModel from "./canvas";
const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
};

export default App;
