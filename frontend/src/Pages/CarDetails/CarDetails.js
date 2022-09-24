import React from "react";
import "./CarDetails.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/lazy";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCarDetailsAC } from "../../Global/actions/carActions";
import ImageSlider from "./ImageSlider/ImageSlider";
import CarInfo from "./CarInfo/CarInfo";

const CarDetails = () => {
  const dispatch = useDispatch();
  const { carDetails, isLoading, error } = useSelector((state) => state.car);
  const { id } = useParams();
  console.log(carDetails?.image);

  useEffect(() => {
    dispatch(getCarDetailsAC(id));
  }, [id]);
  return (
    <div>
      <div>Car Details</div>
      {isLoading && <div>....loading</div>}
      {carDetails && (
        <div className="car-details">
          <div className="car-details_galery">
            <ImageSlider images={carDetails.image} />
          </div>
          <div className="car-details_info">
            <CarInfo carDetails={carDetails} />
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default CarDetails;
