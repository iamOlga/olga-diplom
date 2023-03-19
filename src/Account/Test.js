import React from 'react'
import './Account.css';
import Button from "../Button/Button";
import Question from "./Question";

function Test() {


    return (
        <div className="test__container">
            <h2>Пройди тест и узнай, какой полёт подходит именно для тебя!<br/>А может ты не готов лететь в космос...</h2>
            <div className="question_container">

                {/*
                    тут при нажатии на кнопку должны меняться по очереди модули вопросов
                    пока хз как это реализовать, мб у тебя что получится

                    */}

                <Question title="вопрос1" num="1" value1="ответ1" value2="ответ2" value3="ответ3"/>
            </div>
            <Button className="button" value="Следующий вопрос" isrow="row" />
        </div>
    )
}

export default Test;