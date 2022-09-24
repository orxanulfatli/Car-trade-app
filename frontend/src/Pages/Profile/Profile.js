import React, { useEffect } from "react";
import "./Profile.css";
import personImage from "../../assets/image/user.png";
import advertisingImage from "../../assets/image/advertising.png";
import walletImage from "../../assets/image/wallet.png";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAC } from "../../Global/actions/userActions";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation()
  console.log(location)
  const dispatch = useDispatch();
  const{user} = useSelector(state=>state.user)
  const handleClick = () => { dispatch(fetchUserAC()) }
  console.log(user)
  return (
    <div className="profile">
      <ProfileCard title="Hesabım" img={personImage} descriptionKey="Orxan" handleClick={handleClick}>
        <i className="bi bi-person"></i>
      </ProfileCard>

      <ProfileCard
        title="Elanlarım"
        img={advertisingImage}
        leftAction="Elan yerləşdir"
      >
        <i className="bi bi-megaphone"></i>
      </ProfileCard>

      <ProfileCard
        title="Balans"
        img={walletImage}
        descriptionKey="Pul kisəsinin balansı:"
        descriptionValue="0 Manat"
        leftAction="Balansı artır"
      >
        <i className="bi bi-wallet2"></i>{" "}
      </ProfileCard>
  
      <div>{ user?.email}</div>
    </div>
  );
};

export default Profile;
