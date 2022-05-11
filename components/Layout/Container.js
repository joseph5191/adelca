import React from "react";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="container p-3">{ children }</div>
    </>
  );
}
