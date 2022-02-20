import React from "react";
import Navbar from "./components/Navigation/navbar";
// import { Heading } from "./components/heading";
// import { Common } from "./components/common";
// import Counter from "./components/counter";
import RpsHome from "./components/rps/rps-home";

function App() {
  return (
    <div>
      <Navbar name={"Sai"} />
      <main className="container">
        {/* <Counter /> */}
        <RpsHome />
      </main>
    </div>
  );
}

export default App;
