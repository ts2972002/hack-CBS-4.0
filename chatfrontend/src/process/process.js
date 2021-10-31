import "./process.scss";
import React from 'react';
import './process.scss';
import SearchPhotos from "./searchPhotos"

function Process() {
  return (
    <div className="Main">
      <div className="container">
        <h1 className="title">Your Home Traveller</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}
export default Process;