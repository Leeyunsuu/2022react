import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const getmovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getmovieInfo();
  }, []);
  console.log("영화입니다" + JSON.stringify(movie, null, 2));

  return (
    <div>
      <h1>Detail</h1>
      <Movie
        key={movie.id}
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        title={movie.title}
        summary={movie.description_intro}
        genres={movie.genres}
      />
    </div>
  );
}

export default Detail;
