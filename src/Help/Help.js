import React from 'react'
import './Help.css';

import help1 from "./../Images/help1.png"
import video1 from "./../Images/video1.mp4";
function Help() {

    return (
        <div className="help__container">
            <div className="info_block">
                <h2>Этапы</h2>
                <img src={help1} alt=""/>
            </div>

            <div className="info_block2">
                <div className="info_block2_container">
                    <h2>Требования к кандидату</h2>
                    <div className="row">
                        <div className="item">
                            <p>&#10022;</p>
                            <p>Отправиться в космос можно только с 18 лет. Весить космонавт должен от 50 до 90 килограммов, а ростом быть от 150 до 190 сантиметров.</p>
                        </div>
                        <div className="item">
                            <p>&#10022;</p>
                            <p>К тому же все претенденты должны быть выносливыми, сильными и ловкими.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="item">
                            <p>&#10022;</p>
                            <p>У претендентов не должно быть хронических заболеваний, зависимостей, а главное - проблем с вестибулярным аппаратом.</p>
                        </div>
                        <div className="item">
                            <p>&#10022;</p>
                            <p>Также важно обладать хорошей памятью, умением удерживать внимание, способностью работать в экстремальных ситуациях и в условиях жесткого дефицита времени.</p>
                        </div>
                    </div>
                    {/*/!*<img src={help1} alt=""/>*!/*/}
                </div>
            </div>

            <div className="info_block2">
                <h3><span>&#10022;</span> 1 этап <span>&#10022;</span></h3>
                <div className="info_block2_container">
                    <h2>Прохождение медицинской комиссии</h2>
                </div>
            </div>

            <div className="info_block2">
                <h3><span>&#10022;</span> 2 этап <span>&#10022;</span></h3>
                <div className="info_block2_container">
                    <h2>Подготовка документов</h2>
                    <div className="row">
                        <div className="item item2">
                            <p>&#10022; Паспорт</p>
                            <p className="p2">Для заключения договора необходим паспорт. Юристы проверят данные и сделают ксерокопию.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item item2">
                            <p>&#10022; Медицинская справка</p>
                            <p className="p2">После прохождения медосмотра вам выдадут заключение, с которым необходимо явиться к нам. У вас обзательно должно быть утверждение, что вы годны к полетам. А также должны стоять все печати медицинского учреждения. Комиссию проходят в специальных отделениях.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item item2">
                            <p>&#10022; Страховое свидетельство</p>
                            <p className="p2">Возьмите страховое свидетельство на заключение договора. Также вы можете оформить страховку у нас при заключении договора.</p>
                        </div>
                    </div>
                    <p className="p3">Перечень дополнительных документов вам дадут на консультации.</p>

                </div>

                <div className="info_block2_container">
                    <h2>Процесс оплаты</h2>
                    <div className="row">
                        <div className="item item2">
                            <p className="p2">Подав заявку на космический полет и разместив временную авторизацию кредитной карты на сумму 10 000 долларов США, вы гарантируете, что ваша заявка будет рассмотрена нашей командой. Как только ваша заявка будет принята, вам будет предложено обсудить детали и вопросы в личном звонке с нашим офисом астронавтов.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item item2">
                            <p className="p2">Если вы решите сделать твердое бронирование, вам нужно заполнить предварительные документы и внести полную сумму депозита в размере 150 000 долларов США. В этот момент ваше путешествие в космос будет подтверждено, и вы будете официально приглашены.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item item2">
                            <p className="p2">За год до вашего полета необходимо внести оставшюся часть суммы.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info_block2">
                <h3><span>&#10022;</span> 3 этап <span>&#10022;</span></h3>
                <div className="info_block2_container">
                    <h2>Подготовка и инструктаж</h2>
                    <div className="row">
                        <div className="item item2">
                            <p className="p2">Наша программа обучения с полным погружением подготовит вас к космическому полету, чтобы вы могли насладиться каждым моментом. Вы и ваши коллеги-космонавты будете участвовать в брифингах пилотов, обучаться у наших экспертов по космическим полетам мирового класса.</p>
                            {/*нужно видео*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className="info_block2">
                <h3><span>&#10022;</span> 4 этап <span>&#10022;</span></h3>
                <div className="info_block2_container">
                    <h2>Вылет!</h2>
                    <p className="p2">Посмотри видео с запуском нашей ракеты.</p>
                    <video src={video1} controls="controls" onPause="true"/>
                </div>
            </div>
        </div>
    )
}

export default Help;