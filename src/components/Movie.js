import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, medium_cover_image, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
