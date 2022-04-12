import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './App.css';


function CardApp(props) {
  let { episodeInfo } = props;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div class="epContainer" key={episodeInfo.episode} >
      <Card>
       <div class="imageDiv">
          <Card.Img class="top" src={episodeInfo.image} />
          </div>
        <Card.Body>
          <div class="infoBody">
        <Card.Title>{episodeInfo.name}</Card.Title>
        <Card.Text>
        <p>Season: {episodeInfo.season}</p>
        <p>Episode: {episodeInfo.episode}</p>
        <p>AirDate: {episodeInfo.airdate}</p>
        <p>Runtime: {episodeInfo.runtime}</p>
        <p>Rating: {episodeInfo.rating}</p>
        <p>{episodeInfo.synopsis}</p>
            </Card.Text>
            <div class="imdbButton">
           <Button onClick={() => openInNewTab(episodeInfo.imdb)}>IMDb</Button>
           </div>
            </div>
      </Card.Body>
      </Card>
      </div>
  )
}

export default CardApp