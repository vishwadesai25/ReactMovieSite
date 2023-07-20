import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate} from "react-router-dom";
import './App.css';

function KnowYourMovie() {
  const { imdbID } = useParams();
  const [yourMovie, setYourMovie] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    setTimeout(()=> {
    axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b`)
      .then((res) => setYourMovie(res.data));
    }, 1000)
  }, [imdbID]);
  if (!yourMovie) {
    return <div className="message">Calm yourself down details are coming😉</div>;
  }

  return (
    <>
      <button onClick={() => history(-1)} class="button-19" role="button">Back</button>
      <h2>Your Movie Details</h2>
      <div className="detail1">
        <div className="img1"><img src={yourMovie.Poster} alt={yourMovie.Title} /></div>
        <p>Title   : {yourMovie.Title}</p>
        <p>Year    : {yourMovie.Year} </p>
        <p>imdbID  : {yourMovie.imdbID}</p>
        <p>Type    : {yourMovie.Type}</p>
        <p></p>
      </div>
    </>
  );
}
export default KnowYourMovie;
