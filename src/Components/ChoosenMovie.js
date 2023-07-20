import './App.css';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChoosenMovie() {
  const [myData , setMyData] = useState([])

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => setMyData((res.data.Search || []))
    );
  }, []);

  return (
    <>
    <h3>Welcome to Movies Section🎥🍿</h3>
    
    <div className="movie">
    <h1>Marvel <br></br>Movies </h1>
        {myData.map((post) => (
          <div className="detail" key={post.imdbID}  >
            <Link to={`/KnowYourMovie/${post.imdbID}`}>
              <img src={post.Poster} alt={post.Title} />
            </Link>
          </div>
        ))}
    </div>
    </>
  )
}

export default ChoosenMovie;
