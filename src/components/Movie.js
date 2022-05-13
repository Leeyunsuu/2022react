function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

export default Movie;
