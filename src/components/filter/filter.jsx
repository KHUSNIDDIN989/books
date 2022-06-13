import React from "react";

import "./filter.css";
const Filter = () => {
  return (
    <div className="mt-5">
      <form className=" w-100 d-flex justify-content-center " role="search">
        <div class="input-group mb-3 w-50">
          <input
            type="text"
            class="form-control"
            placeholder="search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn bg-btn" type="button" id="button-addon2">
            Izlash
          </button>
        </div>
      </form>
      <form action="" className="  d-flex justify-content-evenly px-5 mt-3">
        <select class="form-select select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>{" "}
        <select class="form-select select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>{" "}
        <select class="form-select select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>{" "}
        <select class="form-select select" aria-label="size 3 select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
