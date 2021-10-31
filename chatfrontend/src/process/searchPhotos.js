import React, { useState } from "react";
import { createApi } from 'unsplash-js';
const unsplash = createApi({accessKey: process.env.REACT_APP_API_KEY});
export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search.getPhotos({
            query: query
          }).then(result=>{setPics(result.response.results)})
      };
    return (
      <>
        <form className="form" onSubmit={searchPhotos}> 
          <label className="label" htmlFor="query"> 
            {" "}
            📷
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Enter Your Favorite Place`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <div className="card-list">
        {
          pics.map((pic) =>
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
        }
      </div>
      </>
    );
  }