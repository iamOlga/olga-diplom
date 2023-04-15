import React from "react";
// import "./Account.css";
import Button from "../../components/Button/Button";

import img1 from "../../assets/testResultPage/result1.jpg";
import img2 from "../../assets/testResultPage/result2.jpg";
import img3 from "../../assets/testResultPage/result3.jpg";

const Test_result = ({ value }) => {
  let text_result;
  let img_src;
  if (value === "result1") {
    text_result =
      "Тебе лучше остаться на Земле! К сожалению, ты не готов к дальним полетам, а твое тело не выдержит таких физических нагрузок. Но не отчаивайся, а пройди полное медецинское обследование для точного результата!";
    img_src = img1;
  } else if (value === "result2") {
    text_result =
      "Ты уверен, что ты сможешь полететь в космос? Результаты показали, что тебе лучше отказаться от этой идеи, по крайней мере, не лететь на большие расстояния. Однако ты можешь попробовать отправиться на орбиту нашей Земли!";
    img_src = img2;
  } else if (value === "result3") {
    text_result =
      "Ого! Ты готов к полету в любую точку космоса! Но возможности наши не настолько большие. Мы можем предложить тебе отправиться в космическое путешествие на Луну или Марс. Ждем тебя!";
    img_src = img3;
  }

  return (
    <div className="test__container">
      <h2>Результаты теста</h2>
      <div className="question_container">
        <p>{text_result}</p>
        <img src={img_src} alt="" />
      </div>
      <Button className="button" value="Далее" isrow="row" />
    </div>
  );
};

export default Test_result;
