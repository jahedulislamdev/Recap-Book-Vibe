import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Books from "./components/Books/Books";
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <div className="container m-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Books></Books>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;