import './PeliculasCard.css';

export const PeliculasCard = ({ pelicula }) => {
    const imgUrl= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
  
    return (
    <li className="moviesCard">
        <img src={imgUrl} alt={pelicula.title} className="movieImage" />
      <div>{pelicula.original_title}</div>
    </li>
  );
};
