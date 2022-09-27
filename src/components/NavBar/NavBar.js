import React from "react";
// import "./NavBar.css";
import "./NavBar2.css";
import { Add, NotificationAdd, Search } from "@mui/icons-material";

export default function NavBar() {
  return (
    <div className="NavBar">
      <button type="button" className="NavBar__button">
        <div className="NavBar__buttonIcon">
          <Add />
        </div>
        <p className="NavBar__buttonText">New Diagnosis</p>
      </button>
      <div className="NavBar__action">
        <Search />
        <NotificationAdd />
        {/* this should show the logged in user */}
        <>
          <p>Karece</p>
        </>
      </div>
    </div>
  );
}
