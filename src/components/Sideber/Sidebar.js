import React from "react";
import {Workouts} from "../Workouts/Workouts";

export function Sidebar() {
  return (
      <div className="sidebar">
        <img src="./img/logo.png" alt="Logo" className="logo" />

        <Workouts />

        <p className="copyright">
          &copy; Copyright by
          <a rel="noreferrer" className="twitter-link" target="_blank" href="https://github.com/evxeen">
            Evgeniy Lysenko
          </a>
        </p>
      </div>
  )
}