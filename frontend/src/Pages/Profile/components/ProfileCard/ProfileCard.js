import React from "react";
import './ProfileCard.css'

const ProfileCard = ({
  title,
  img,
  descriptionKey,
  descriptionValue,
  leftAction,
  children,
  handleClick
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <h5 className="profile-card__header--title">{title}</h5>
        <span className="profile-card__header--icon">{children}</span>
      </div>

      <div className="profile-card__body">
        <div className="profile-card__body--image">
          <img src={img} alt="#" />
        </div>
        <div className="profile-card__body--description">
          <p className="key">{descriptionKey}</p>
          <span className="value">{descriptionValue}</span>
        </div>
      </div>
      <div className="profile-card__actions">
        <div className="profile-card__actions--left">
          <a >{leftAction}</a>
        </div>
        <div className="profile-card__actions--right" onClick={handleClick}>
          etrafli
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
