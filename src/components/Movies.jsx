import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({addtoWatchlist , removefromWatchlist, watchlist}) => {
  const [movies, setMovies] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  function increasePage(){
    setPageNo(pageNo+1);
  }

  function decreasePage(){
    if(pageNo==1){
      return pageNo;
    }
    setPageNo(pageNo-1);
  }

    useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=705e3621f0be0d0036787d127796bf2f&page='+ pageNo).then((res) => {
      setMovies(res.data.results);})
  }, [pageNo]) 

  return (
    <>
      <div className="text-2xl m-10 w-full text-center font-bold">
        Trending Movies
      </div>
      <div className="flex flex-row justify-around flex-wrap">
        {movies.map((movieObj) => {
          return <Card addtoWatchlist={addtoWatchlist} watchlist={watchlist} removefromWatchlist={removefromWatchlist} key={movieObj.id} image={movieObj.poster_path} title={movieObj.title} movieObj={movieObj}/>;
        })}
      </div>
      <Pagination pageNo={pageNo} increasePage={increasePage} decreasePage={decreasePage}/>
    </>
  );
};

export default Movies;
