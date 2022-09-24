import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "../../components/FormControl/FormControl";
import { loginAC, useVerify } from "../../Global/actions/authActions";
import Input from "../../components/FormControl/Input/Input";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const verifyAC = useVerify();
  const from = location?.state?.from?.pathname || "/";
  const { error, isLoading, isOtp, email } = useSelector(
    (state) => state.auth
  );
  const [counter, setCounter] = useState(null);
  const [value, setValue] = useState(" ");
  const dispatch = useDispatch();
 console.log(error)
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleLogin = (value) => () => {
    dispatch(loginAC(value));
    setCounter(59);
    setValue("");
  };
  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="login-modal">
      <div className="close-btn"></div>
      <div className="login">
        <button onClick={handleClose}>close</button>
        <div className="login__title">Daxil ol</div>
        <div style={{ width: "100%" }}>
          <Input  value={value} onChange={handleChange} />
        </div>
        {isLoading && <div>...isLoading </div>}

        <div>
          {!isOtp && (
            <button className="btn btn--gradient" onClick={handleLogin(value)}>
              daxil ol
            </button>
          )}
          {isOtp && (
            <>
              <button
                className="btn--gradient"
                onClick={() => {
                  dispatch(verifyAC(email, value, from));
                  setCounter(0);
                }}
              >
                Təsdiqlə
              </button>

              {counter > 0 && (
                <p className="under-text">
                  Emailə göndərilmiş kodu daxil et {counter}
                </p>
              )}

              {counter === 0 && (
                <p onClick={handleLogin(value)}>Birdə göndər</p>
              )}
            </>
          )}
        </div>

        {/* {error && <div>{error}</div>} */}
      </div>
    </div>
  );
};

export default Login;
