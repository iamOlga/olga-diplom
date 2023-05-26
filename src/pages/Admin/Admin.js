import React, {useEffect, useState} from 'react'
import './Admin.css';
import Button from "../../components/Button/Button";
import axios from "axios";

function Admin() {

    const description1 = "В миллионах километров от самого большого каньона Земли, располагающегося в Гренландии, поверхность Марса прорезает крупнейшая система каньонов Солнечной системы – долины Маринер. Долины Маринер пролегают вдоль экватора планеты, простираясь на 4000 км – практически на четверть её окружности.";

    const tabLinks = document.querySelectorAll(".tabs a");
    const tabPanels = document.querySelectorAll(".tabs-panel");
    const [options, setOptions] = useState([]);
    const [tours, setTours] = useState([]);
    const [activeTour, setActiveTour] = useState()
    const [description, setDescription] = useState(activeTour?.description)

    const handleTab1 = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get-passangers');
            setTours(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleTab2Select = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get_tours_select');
            setOptions(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleTab2Get = async (id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/get-tour', {id});
            setActiveTour(response.data);
            setDescription(response.data.description)
        } catch (error) {
            console.error(error);
        }
    }

    const handleTab2Edit = async (id, name, planet, description, duration, residence, count_passengers, price, date_flight, image) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/edit-tours', {
                id: id,
                name: name,
                planet: planet,
                description: description,
                duration: duration,
                residence: residence,
                count_passengers: count_passengers,
                price: price,
                date_flight: date_flight,
                image: image,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleTab2Get(1);
    }, [])

    const changeTour = (e) => {
        handleTab2Get(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    for (let el of tabLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();

            document.querySelector(".tabs li.active").classList.remove("active");
            document.querySelector(".tabs-panel.active").classList.remove("active");

            const parentListItem = el.parentElement;
            parentListItem.classList.add("active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") === index);
            panel[0].classList.add("active");
        });
    }

    return (

        <div className="admin__container">
            <h2>Вы зашли как админ</h2>
            <div className="button_container">
                <Button className="button" value="Выйти" isrow="row"/>
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


                <input type="radio" name="tabs" id="tab-first"/>
                <label htmlFor="tab-first" onClick={() => handleTab1()}>
                    <p>Заявки на билет</p>
                </label>

                <input type="radio" name="tabs" id="tab-second"/>
                <label htmlFor="tab-second" onClick={() => handleTab2Select()}>
                    <p>Туры</p>
                </label>

                <input type="radio" name="tabs" id="tab-third"/>
                <label htmlFor="tab-third">
                    <p>Отзывы</p>
                </label>

                <div id="tab-content-1" className="tab-content">
                    <div className="tab_cont">
                        <div className="ticket">
                            {tours.map((tour) => (
                                <div>
                                    <p className="name">{tour.tourName}</p>
                                    {tour.users.length !== 0 ?
                                        tour.users.map((user) => (
                                            <>
                                                <div key={user.id} className="row">
                                                    <p className="name">{user.firstname} {user.lastname}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="gender">пол: <span>{user.gender}</span></p>
                                                    <p className="date">дата рождения: <span>{user.birthday}</span></p>
                                                </div>
                                                <div className="row">
                                                    <p className="email">почта: <span>{user.email}</span></p>
                                                </div>
                                                <div className="row">
                                                    <p className="country">место
                                                        жительство: <span>{user.country}, {user.city}</span>
                                                    </p>
                                                </div>
                                            </>
                                        )) :
                                        <div> users not found </div>
                                    }
                                </div>

                            ))}

                        </div>
                    </div>
                </div>

                <div id="tab-content-2" className="tab-content">
                    <div className="tab_cont">
                        <div className="tour">
                            <div className="row">
                                <p>название</p>
                                <select className="tour_name" onChange={changeTour}>
                                    {options.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="row">
                                <p>планета</p>
                                <input type="text" className="planet" value={activeTour?.planet || ""} readOnly/>
                            </div>
                            <div className="row">
                                <p>описание</p>
                                <textarea type="text" className="description" onChange={changeDescription}
                                          value={description}/>
                            </div>
                            <div className="row">
                                <p>время полета</p>
                                <input type="text" className="time_fly" value={activeTour?.duration || ""}/>
                            </div>
                            <div className="row">
                                <p>время на планете</p>
                                <input type="text" className="time_onplanet" value={activeTour?.residence || ""}/>
                            </div>
                            <div className="row">
                                <p>число пассажиров</p>
                                <input type="text" className="amount_people"
                                       value={activeTour?.count_passengers || ""}/>
                            </div>
                            <div className="row">
                                <p>цена</p>
                                <input type="text" className="price" value={activeTour?.price || ""}/>
                            </div>
                            <div className="row">
                                <p>дата</p>
                                <input type="date" className="date" value={activeTour?.date_flight || ""}/>
                            </div>
                            <div className="row">
                                <button className="save"
                                        onClick={() => handleTab2Edit(activeTour?.id, activeTour?.name,
                                            activeTour?.planet, description, activeTour?.duration,
                                            activeTour?.residence, activeTour?.count_passengers,
                                            activeTour?.price, activeTour?.date_flight, activeTour?.image)}>
                                    сохранить
                                    изменения
                                </button>
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
                                <p className="review_text">fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj
                                    jvfnldvfnvdjlvnf jlfvnldfjvnfnk</p>
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