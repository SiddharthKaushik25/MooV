import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  function addtoWatchlist(movieObj) {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('movies', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    //console.log(newWatchlist)
  }

  function removefromWatchlist(movieObj){
    let newWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(newWatchlist);
    //console.log(newWatchlist);

  }

  useEffect(()=>{
    let storedMovies = localStorage.getItem('movies');
    if(!storedMovies){
      return
    }
    setWatchlist(JSON.parse(storedMovies))
  })

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies addtoWatchlist={addtoWatchlist} removefromWatchlist={removefromWatchlist} watchlist={watchlist}/>
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
