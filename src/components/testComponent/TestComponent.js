import React, { useEffect } from "react";
import Button from "../Button/Button";
import Question from "./../questions/Questions";
import { questionsConfig } from "../../config/index";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postTestData } from "../../redux/slices/testSlice";
import {useNavigate} from 'react-router-dom'
import "./test_component_style.css"


const TestComponent = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isResponseOk } = useSelector(state => state.test)
  const userEmail = localStorage.getItem('userEmail')

    const onClickSubmitHandler = (data) => {
      dispatch(
        postTestData({
          targetUrl: "submit-test",
          body: { ...data, email: userEmail },
        })
      );
      
    };

    useEffect(() => {
      if(isResponseOk) navigate("/testresult");
    })
  return (
    <div className="test__container">
      <h2>
        Пройди тест и узнай, какой полёт подходит именно для тебя!
        <br />А может ты не готов лететь в космос...
      </h2>
      <form onSubmit={handleSubmit(onClickSubmitHandler)}>
        <div className="question_container">
          {/*
        смысл таков:
        у меня есть 10 вопросов, по 3 варианта
        за 1 вариант будет: -1 балл (это значит что все плохо)
        за 2: 0 баллов (средненько)
        за 3: +1 балл (супер)

        и дальше будет считаться: (примерно пока что) (и формулировки потом перефразирую)
        0-4 (или там в минус уйдет, но если минусы, то просто будет 0): все плохо никуда не летим
        5-7: лучше не лететь или если хочется то максы на орбиту
        8-10 супер ты готов лететь куда угодно вот предлагаем тебе полет на луну

        и дальше я подпишу за какой вариант сколько балло
        */}

          {/* value1=0 value2=+1 value3=-1" */}
          {/*value1=+1 value2=0 value3=-1" */}
          {/*value1=-1 value2=0 value3=+1" */}
          {/*value1=-1 value2=0 value3=+1" */}
          {/*value1=+1 value2=0 value3=-1" */}
          {/*тут нужно будет вставить видео но я его еще не нашла*/}
          {/* value1=-1 value2=0 value3=+1" */}
          {/*тут сделаем так value1=0 value2=+1 value3=0" */}
          {/*value1=+1 value2=0 value3=-1" */}
          {/*value1=+1 value2=0 value3=-1" */}
          {/*value1=+1 value2=0 value3=-1" */}

          {questionsConfig.map((obj) => {
            return <Question {...obj} control={control} name={(`q${obj.num}`)} />;
          })}
        </div>

          <Button className="button" value="Завершить тест" isrow="row" />
      </form>
    </div>
  );
};

export default TestComponent;
