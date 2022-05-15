import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "./component/card.js";

function App() {
  const [title, setTitle] = useState("Harry Potter");
  const [movie, setMovie] = useState([]);
  const Getdata = async () => {
    const Key = "dfa7dca1";
    const API = await fetch(`http://www.omdbapi.com/?apikey=${Key}&s=${title}`);
    const Data = await API.json();
    setMovie(Data.Search);
  };
  useEffect(() => {

  }, []);
  console.log(movie);
  const dataaos = [
    "flip-right",
    "flip-left",
    "flip-up",
    "zoom-in",
    "fade-up",
    "zoom-up",
  ];

  return (
    <div className="container">
      <div className="title">
        <h1><span>Movie</span> Search App</h1>

        </div>
          <div className="form">
  <input type="text" placeholder="Search...." id="text" onChange={
    (e)=>{
      setTitle(e.target.value)
    }
  } />
   <button onClick={()=>{
     Getdata()
   }} className="btn">Search</button>
              </div>
      <div className="card-container">
      {
       movie.map((res, index) => (
          <Card
            poster={res.Poster}
            key={index}
            aos={dataaos[Math.floor(Math.random() * dataaos.length)]}
            year={res.Year}
            title={res.Title}
          />
        ))}
        
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("react-app"));
