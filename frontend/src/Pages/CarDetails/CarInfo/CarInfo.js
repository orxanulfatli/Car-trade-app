import React from "react";
import "./CarInfo.css";

const CarInfo = ({ carDetails }) => {
  const {
    price,
    country,
    mark,
    model,
    fuel,
    driveType,
    body,
    transmission,
    kmsDriven,
    release,
    color,
    engineCapacity,
    enginePower,
    credit,
    barter,
    additionalInformation,
    features,
    firstName,
    email,
  } = carDetails;
  return (
    <div className="car-info">
      <div className="quick-info">
        <h1>{`${mark} ${model}`}</h1>
        <div className="quick-info_price">{`${price.cost} ${price.currency}`}</div>
        <div>
          <div className="quick-info_contact">
            <div>
              <i class="bi bi-envelope-fill"></i>
            </div>
            <div>
              <div>{email}</div>
              <div>{firstName}</div>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <li>
          <span>City</span> {country}
        </li>
        <li>
          <span>Mark</span> {mark}
        </li>
        <li>
          <span>Model</span> {model}
        </li>
        <li>
          <span>Release Year</span> {release}
        </li>
        <li>
          <span>Body</span> {body}
        </li>
        <li>
          <span>Color</span> {color}
        </li>
        <li>
          <span>Engine capacity</span> {`${engineCapacity} sm3`}
        </li>
        <li>
          <span>Engine power</span> {`${enginePower} h.p`}
        </li>
        <li>
          <span>Fuel</span> {fuel}
        </li>
        <li>
          <span>Kms driven</span> {kmsDriven}
        </li>
        <li>
          <span>Transmission</span> {transmission}
        </li>
        <li>
          <span>Drive type</span> {driveType}
        </li>
        <li>
          <span>Price</span> {`${price?.cost} ${price?.currency}`}
        </li>
      </ul>
    </div>
  );
};

export default CarInfo;
