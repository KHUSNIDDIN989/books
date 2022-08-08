import React from "react";
import { useEffect } from "react";

import "./filter.css";
const Filter = () => {
  return (
    <div className="mt-5">
      <form action="" className="  d-flex justify-content-evenly px-5 mt-3">
        <select className="form-select select">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>{" "}
        <select className="form-select select">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>{" "}
        <select className="form-select select">
          <option>Kitob holati</option>
          <option value="1">Yangi</option>
          <option value="2">O‘rtacha</option>
          <option value="3">Eski</option>
        </select>{" "}
        <select
          className="form-select select"
          aria-label="size 3 select example"
        >
          <option>Kitob tili</option>
          <option value="1">Ingilis tili</option>
          <option value="2">Rus tili</option>
          <option value="3">O‘zbek tili</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
