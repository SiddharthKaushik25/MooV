/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Watchlist = ({ watchlist, removefromWatchlist}) => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className="flex justify-center gap-6">
        <button
          type="button"
          className="text-white bg-slate-600 hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          All Genres
        </button>
        <button
          type="button"
          className="text-white bg-slate-600 hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Action
        </button>
        <button
          type="button"
          className="text-white bg-slate-600 hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Crime
        </button>
      </div>
      <div className="flex justify-center m-5">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="bg-slate-200 rounded-lg align-center px-2"
          placeholder="Search Movie"
        />
      </div>
      <div className="overflow-hidden rounded-lg m-8 border border-gray-200">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <>
                    <tr className="border-b-2">
                      <td className="flex gap-2 items-center">
                        <img
                          className="h-[10rem] w-[7rem] m-2"
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        />
                        <div className="mx-10">{movieObj.title}</div>
                      </td>
                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>Action</td>
                      <td onClick={()=>removefromWatchlist(movieObj)} className="text-red-800">Delete</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
