import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";
const CarCard = ({
  id,
  front,
  credit,
  barter,
  price,
  mark,
  release,
  engineCapacity,
  kmsDriven,
}) => {
  return (
    <div className="car-card">
      <Link
        to={`/carDetails/${id}`}
        target="_blank"
        className="car-card__link"
      ></Link>
      <div className="car-card__image">
        <img alt="#" src={front} />
        <div className="car-card__overlay">
          {credit && (
            <div className="overlay-credit" title="kreditdədir">
              <i class="bi bi-percent"></i>
            </div>
          )}

          {barter && (
            <div className="overlay-barter" title="barter mümkündür">
              <i class="bi bi-arrow-repeat"></i>
            </div>
          )}
          <div className="overlay-star">
            <i class="bi bi-star"></i>
          </div>
          {/* <div className="overlay-item3">z</div> */}
        </div>
      </div>
      <div className="car-card__details">
        <h3 className="car-card__details--price">
          {price?.cost + price?.currency}
        </h3>
        <h3 className="car-card__details--title">{mark}</h3>
        <div className="car-card__details--infos">
          {`${release},${engineCapacity} L,${kmsDriven}`}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
