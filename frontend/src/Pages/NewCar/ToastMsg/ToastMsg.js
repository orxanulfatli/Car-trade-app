import React from 'react'
import { Link } from 'react-router-dom';

const ToastMsg = ({ closeToast }) => {
  return (
    <div style={{ padding: "0px" }}>
      Offer is succesfully added.Go to the
      <Link to='/profile'
        style={{ padding: "5px", color: "rgb(34, 49, 84)" }}
        onClick={closeToast}
      >
        Profile page
      </Link>
      to see your offer
    </div>
  );
};

export default ToastMsg