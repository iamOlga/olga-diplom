import React, { useEffect } from "react";
import "./Account.css";
import SignIn from "../../components/signIn/SignIn";
import account_bg from "../../Images/booking-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserState } from "../../redux/slices/userSlice";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);
  useEffect(() => {
    if (userEmail) {
      navigate("/account_info");
    }
    return () => dispatch(clearUserState());
  }, [userEmail, navigate, dispatch]);

  return (
    <div
      className="account__container"
      style={{
        backgroundImage: `url(${account_bg})`,
      }}
    >
      {/*этот заголовок нужно будет показать только когда мы уже вошли в аккаунт*/}
      {/* <h2>Ваш аккаунт</h2> */}

      <div className="account__cont">
        <SignIn />
        <div className="button_row">
          <Link className="button_secondary" to={"/register"}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
