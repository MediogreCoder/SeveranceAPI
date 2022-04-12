import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import CardApp from './cardApp';

function App() {

  const [ep, setEp] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => 
  {
    apiFetch();
  }, [])

  let apiFetch = () => {

    fetch('https://severance-api.herokuapp.com/api/episodes', {
    headers: new Headers({
      Accept: "application/json",
    }),
  })
    .then((response) => response.json())
    .then((data) =>
    setEp(data))
     .then(console.log(ep))
}

let capFirstLetter = (string) => {
  let q = string.charAt(0).toUpperCase() + string.slice(1);
  setQuery(q);
};
  
  return (
    <div className="App">
      <div class="header">
        <div class="searchBar">
          <input type="text" placeholder="Search Anything!" onChange={(e) => capFirstLetter(e.target.value)}  />
          </div>
      </div>
      <div class="episodeContainer">
        {ep.map((props) => 
         ( props.name.includes(query) || props.episode.toString().includes(query) || props.rating.toString().includes(query)) &&
          <CardApp episodeInfo={props} />)}
        </div>
    </div>
  );
}


export default App;
