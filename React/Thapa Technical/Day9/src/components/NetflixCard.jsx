import React from "react";
import "./NetflixCard.css";
import styled from "styled-components";

const NetflixCard = ({data}) => {
  const {img_url, name, rating, description, genre, watch_url} = data;
  
  const Btn = styled.button({
    backgroundColor : "#000000",
  });
  
  return (
    <div>
      <div className="container">
        <div className="banner">
          <img src={img_url}  alt="photo" />
        </div>
        <div>
          <h3>Title : {name}</h3>
        </div>
        <div>
          <p>rating : <span className={ rating >= 8.5 ? "green" : "red"}>{rating}</span></p>
        </div>
        <div>
          <p style={{color : "red"}}>Summary : {description}</p>
        </div>
        <div>
          <p>Genre : {genre}</p>
        </div>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <Btn>Watch Now</Btn>
        </a>
      </div>
    </div>
  );
};

export default NetflixCard;
