import React, { useState } from "react";
import Wish from "./Wish";

function Search(props) {
  
  return (
    <div className="searchbar-container">
      <div className="container">
        <div className="row">
          <div className="logo-container col-3">
            <img src="pictures/logo 1.png" alt="" />
          </div>

          <div className="col-4">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-warning">
                search
              </button>
            </div>
          </div>

          <div className="col-2"></div>
          <div className="col-3 signin-container">
            <div className="signin">
              <i className="bi bi-person"></i>
              <span className="space"> </span>
              Sign in
            </div>
            <div className="favorite">
              <i className="bi bi-heart" >
                {props.wishList.length}
              </i>
            </div>
            <div className="basket">
              <i className="bi bi-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
