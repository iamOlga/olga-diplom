import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Review from "./Review";
import ReviewInput from "./ReviewInput";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsData, postReviewData, setResponseStatus } from "../redux/slices/reviewsSlice";
import { getUserData } from "../redux/slices/userSlice";
import { useForm } from "react-hook-form";

function Reviews() {
  const dispatch = useDispatch();
  const { reviewsData, isResponseOk } = useSelector(
    (state) => state.reviews
  );
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    dispatch(getReviewsData());
    if (userEmail) dispatch(getUserData(`get_info?email=${userEmail}`));
    return () => {};
  }, []);

  const { register, handleSubmit } = useForm();

  const onClickSubmitHandler = (data) => {
    dispatch(
      postReviewData({
        targetUrl: "add-review",
        body: { ...data, email: userEmail },
      })
    );
  };

  useEffect(() => {
    if (isResponseOk) {
      dispatch(getReviewsData());
    }
    dispatch(setResponseStatus(null))
  }, [isResponseOk]);

  return (
    <div className="reviews__container">
      <h2>Отзывы</h2>
      {userEmail ? (
        <div className="reviews">
          {reviewsData?.map((object) => {
            return (
              <Review
                name={`${object.firstname} ${object.lastname}`}
                date={object.date}
                text={object.review}
              />
            );
          })}
          <form onSubmit={handleSubmit(onClickSubmitHandler)}>
            <ReviewInput
              name={`${accountInfo?.firstname} ${accountInfo?.lastname}`}
              register={register("review_area")}
            />
          </form>
        </div>
      ) : (
        <div className="link__container">
          <h3>Войдите в личный аккаунт для того, чтобы оставлять отзывы</h3>
          <Link to="/login">
            <Button
              className="button"
              value="Войти в аккаунт"
              isrow="row"
              onClickAction={onClickSubmitHandler}
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Reviews;
