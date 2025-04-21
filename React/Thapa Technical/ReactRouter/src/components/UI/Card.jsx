import React from 'react';

const Card = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      margin: '16px',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      background: '#fff',
    }}>
      <img
        src={posterUrl}
        alt={title}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h2>{title}</h2>
      <p><strong>Release:</strong> {release_date}</p>
      <p><strong>Rating:</strong> ⭐ {vote_average}</p>
      <p style={{ fontSize: '14px', color: '#555' }}>{overview}</p>
    </div>
  );
};

export default Card;
