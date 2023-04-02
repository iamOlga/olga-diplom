import React from 'react'
import './Admin.css';
import Button from "../Button/Button";

function Admin() {

    const description1 = "В миллионах километров от самого большого каньона Земли, располагающегося в Гренландии, поверхность Марса прорезает крупнейшая система каньонов Солнечной системы – долины Маринер. Долины Маринер пролегают вдоль экватора планеты, простираясь на 4000 км – практически на четверть её окружности.";

    const tabLinks = document.querySelectorAll(".tabs a");
    const tabPanels = document.querySelectorAll(".tabs-panel");

    for (let el of tabLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();

            document.querySelector(".tabs li.active").classList.remove("active");
            document.querySelector(".tabs-panel.active").classList.remove("active");

            const parentListItem = el.parentElement;
            parentListItem.classList.add("active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }

    return (

        <div className="admin__container">
                <h2>Вы зашли как админ</h2>
                <div className="button_container">
                    <Button className="button" value="Выйти" isrow="row" />
                </div>

            {/*1 заявки на билет: присылаются данные люей кто на что забронировал билет
                                    админ: просматривает
               2 туры: вывод всех туров
                                    админ: удаляет/изменяет/добавляет
               3 галерея (?)
                                    админ: добавляет/удаляет фото
               4: отзывы
                                    админ: просматривает/удаляет*/}


            <div className="tabs">


                <input type="radio" name="tabs" id="tab-first" />
                <label htmlFor="tab-first">
                    <p>Заявки на билет</p>
                </label>

                <input type="radio" name="tabs" id="tab-second"/>
                <label htmlFor="tab-second">
                    <p>Туры</p>
                </label>

                <input type="radio" name="tabs" id="tab-third"/>
                <label htmlFor="tab-third">
                    <p>Отзывы</p>
                </label>

                <div id="tab-content-1" className="tab-content">
                    <div className="tab_cont">
                        <div className="ticket">
                            <div className="row">
                                <p className="name">Ольга Бабич</p>
                            </div>
                            <div className="row">
                                <p className="gender">пол: <span>женский</span></p>
                                <p className="date">дата рождения: <span>28.06.2001</span></p>
                            </div>
                            <div className="row">
                                <p className="email">почта: <span>qqwdwq@email.com</span></p>
                            </div>
                            <div className="row">
                                <p className="country">место жительство: <span>Беларусь, Минск</span></p>
                            </div>
                            <div className="row">
                                <p className="tour_to">тур: <span>Луна</span></p>
                            </div>
                            <div className="row">
                                {/*отменен, активен, завершен*/}
                                <p className="status ">статус: <span>на рассмотрении</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tab-content-2" className="tab-content">
                    <div className="tab_cont">
                        <div className="tour">
                            <div className="row">
                                <p>название</p>
                                <input type="text" className="tour_name" value="Mars"/>
                            </div>
                            <div className="row">
                                <p>место</p>
                                <input type="text" className="place" value="Долины Маринер"/>
                            </div>
                            <div className="row">
                                <p>описание</p>
                                <textarea type="text" className="description" value={description1}/>
                            </div>
                            <div className="row">
                                <p>время полета</p>
                                <input type="text" className="time_fly" value="117 дней"/>
                            </div>
                            <div className="row">
                                <p>время на планете</p>
                                <input type="text" className="time_onplanet" value="7 дней"/>
                            </div>
                            <div className="row">
                                <p>число пассажиров</p>
                                <input type="text" className="amount_people" value="5 человек"/>
                            </div>
                            <div className="row">
                                <p>цена</p>
                                <input type="text" className="price" value="2 000 000$"/>
                            </div>
                            <div className="row">
                                <p>дата</p>
                                <input type="text" className="date" value="01.05.2024"/>
                            </div>
                            <div className="row">
                                <button className="save">сохранить изменения</button>
                                <button className="delete">удалить тур</button>
                            </div>
                        </div>

                        <div className="tour tour_add">
                            <h2>Добавить новый тур</h2>
                            <div className="row">
                                <p>название</p>
                                <input type="text" className="tour_name" value=""/>
                            </div>
                            <div className="row">
                                <p>место</p>
                                <input type="text" className="place" value=""/>
                            </div>
                            <div className="row">
                                <p>описание</p>
                                <textarea type="text" className="description" value=""/>
                            </div>
                            <div className="row">
                                <p>время полета</p>
                                <input type="text" className="time_fly" value=""/>
                            </div>
                            <div className="row">
                                <p>время на планете</p>
                                <input type="text" className="time_onplanet" value=""/>
                            </div>
                            <div className="row">
                                <p>число пассажиров</p>
                                <input type="text" className="amount_people" value=""/>
                            </div>
                            <div className="row">
                                <p>цена</p>
                                <input type="text" className="price" value=""/>
                            </div>
                            <div className="row">
                                <p>дата</p>
                                <input type="text" className="date" value=""/>
                            </div>
                            <div className="row">
                                <button className="add">добавить тур</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tab-content-3" className="tab-content">
                    <div className="tab_cont">
                        <div className="review">
                            <div className="row">
                                <p className="review_name">Olga Babich</p>
                                <p className="review_date">23.05.2022</p>
                            </div>
                            <div className="row">
                                <p className="review_text">fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk</p>
                            </div>
                            <div className="row">
                                <button className="delete">удалить</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Admin;