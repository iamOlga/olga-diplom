import React, {useEffect, useState} from "react";
// import "./Account.css";
import Button from "../../components/Button/Button";

import img1 from "../../assets/testResultPage/result1.jpg";
import img2 from "../../assets/testResultPage/result2.jpg";
import img3 from "../../assets/testResultPage/result3.jpg";
import axios from "axios";

const Test_result = ({value}) => {

    const [test_result, setTest_result] = useState("")
    const userEmail = localStorage.getItem('userEmail')

    let result;

    const getTestResult = async (email) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/get-points', {email});
            result = response.data;
            setTestResult(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTestResult(userEmail);
    }, [])

    const setTestResult = (result) => {
        if (result !== 0){
            if (result <= 4) {
                setTest_result("Тебе лучше остаться на Земле! К сожалению, ты не готов к дальним полетам, а твое тело не выдержит таких физических нагрузок. Но не отчаивайся, а пройди полное медецинское обследование для точного результата!")
            } else if (result > 4 && result <= 7) {
                setTest_result("Ты уверен, что ты сможешь полететь в космос? Результаты показали, что тебе лучше отказаться от этой идеи, по крайней мере, не лететь на большие расстояния. Однако ты можешь попробовать отправиться на орбиту нашей Земли!")
            } else if (result > 7) {
                setTest_result("Ого! Ты готов к полету в любую точку космоса! Но возможности наши не настолько большие. Мы можем предложить тебе отправиться в космическое путешествие на Луну или Марс. Ждем тебя!")
            }
        }
    }

    return (
        <div className="test__container">
            {result !== 0 &&
                <>
                    <h2>Результаты теста</h2>
                    <div className="question_container">
                        <p>{test_result}</p>
                        {/*<img src={img_src} alt=""/>*/}
                    </div>
                    <Button className="button" value="Далее" isrow="row"/>
                </>
            }
        </div>
    );
};

export default Test_result;
