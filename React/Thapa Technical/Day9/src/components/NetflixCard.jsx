import React from "react";

const NetflixCard = ({data}) => {
    const {img_url, name, rating, description, genre, watch_url} = data;
  return (
    <div>
      <div>
        <div>
          <img src={img_url} height="20%" width="20%" alt="" />
        </div>
        <div>
          <h3>Title : {name}</h3>
        </div>
        <div>
          <p>rating : {rating}</p>
        </div>
        <div>
          <p>Summary : {description}</p>
        </div>
        <div>
          <p>Genre : {genre}</p>
        </div>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default NetflixCard;
