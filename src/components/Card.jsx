import React from "react";
import Watchlist from "./Watchlist";

const Card = ({
  image,
  title,
  addtoWatchlist,
  movieObj,
  watchlist,
  removefromWatchlist,
}) => {

  function doesContainMovie(movieObj) {
    for ( let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="w-[20vh] h-[35vh] bg-cover flex flex-col items-end justify-between bg-center rounded-xl hover:scale-110 duration:300 m-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`,
      }}
    >
      {doesContainMovie(movieObj) ? ( 
      <div 
        onClick={()=>removefromWatchlist(movieObj)} 
        className="m-2 bg-slate-500/60 flex justify-center rounded-lg hover:cursor-pointer"
      >
        &#10060;
      </div>
    ) : (
      <div
        onClick={()=>addtoWatchlist(movieObj)}
        className="m-2 bg-slate-500/60 flex justify-center rounded-lg hover:cursor-pointer"
      >
        &#129321;
      </div>
    )}
      
      <div className="bg-slate-500/60 text-white w-full text-center rounded-b-xl">{title}</div> 
    </div>
  );
};



export default Card;
