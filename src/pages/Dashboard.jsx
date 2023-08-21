import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <section>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </section>
  );
}

export default Dashboard;
