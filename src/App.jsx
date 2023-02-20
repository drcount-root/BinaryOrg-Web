import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";

export default function App() {
  return (
    <Fragment>
      <NavBar />

      {/* <h2 className="text-center mt-32 w-[100%] ">Tailwind CSS Added</h2> */}

      <div className="lg:m-6 lg:my-24 my-20">
        <Grids />
      </div>
    </Fragment>
  );
}
