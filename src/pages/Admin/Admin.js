import React, {useEffect, useState} from 'react'
import './Admin.css';
import Button from "../../components/Button/Button";
import axios from "axios";

function Admin() {

    //let thumbnail = $('input[name="thumbnail"]').val().split('\\').pop();

    const description1 = "В миллионах километров от самого большого каньона Земли, располагающегося в Гренландии, поверхность Марса прорезает крупнейшая система каньонов Солнечной системы – долины Маринер. Долины Маринер пролегают вдоль экватора планеты, простираясь на 4000 км – практически на четверть её окружности.";

    const tabLinks = document.querySelectorAll(".tabs a");
    const tabPanels = document.querySelectorAll(".tabs-panel");
    const [options, setOptions] = useState([]);
    const [tours, setTours] = useState([]);
    const [activeTour, setActiveTour] = useState()
    const [description, setDescription] = useState(activeTour?.description)
    const [duration, setDuration] = useState(activeTour?.duration)
    const [residence, setResidence] = useState(activeTour?.residence)
    const [count_passengers, setСount_passengers] = useState(activeTour?.count_passengers)
    const [price, setPrice] = useState(activeTour?.price)
    const [date_flight, setDate_flight] = useState(activeTour?.date_flight)

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
            handleTab2Get("1")
        } catch (error) {
            console.error(error);
        }
    }
    const handleTab2Get = async (id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/get-tour', {id});
            setActiveTour(response.data);
            setDescription(response.data.description)
            setDuration(response.data.duration)
            setResidence(response.data.residence)
            setСount_passengers(response.data.count_passengers)
            setPrice(response.data.price)
            setDate_flight(response.data.date_flight)
        } catch (error) {
            console.error(error);
        }
    }

    const handleTab2Delete = async (id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/delete-tours', {id});
            window.location.reload();
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

    //variables
    const [a_name, set_a_name] = useState("")
    const [a_place, set_a_place] = useState("")
    const [a_description, set_a_description] = useState("")
    const [a_time_fly, set_a_time_fly] = useState("")
    const [a_time_onplanet, set_a_time_onplanet] = useState("")
    const [a_amount_people, set_a_amount_people] = useState("")
    const [a_price, set_a_price] = useState("")
    const [a_date, set_a_date] = useState("")
    const [a_img, set_a_img] = useState("")

    //handlers
    const change_a_name = (e) => {
        set_a_name(e.target.value)
    }
    const change_a_place = (e) => {
        set_a_place(e.target.value)
    }
    const change_a_description = (e) => {
        set_a_description(e.target.value)
    }
    const change_a_time_fly = (e) => {
        set_a_time_fly(e.target.value)
    }
    const change_a_time_onplanet = (e) => {
        set_a_time_onplanet(e.target.value)
    }
    const change_a_amount_people = (e) => {
        set_a_amount_people(e.target.value)
    }
    const change_a_price = (e) => {
        set_a_price(e.target.value)
    }
    const change_a_date = (e) => {
        set_a_date(e.target.value)
    }
    const change_a_img = (e) => {
        set_a_img(e.target.value)
    }


    const handleTab2Add = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/add-tours', {
                name: a_name,
                planet: a_place,
                description: a_description,
                duration: a_time_fly,
                residence: a_time_onplanet,
                count_passengers: a_amount_people,
                price: a_price,
                date_flight: a_date,
                image: a_img,
                // image: activeTour?.image,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     handleTab2Get(1);
    // }, [])

    const changeTour = (e) => {
        handleTab2Get(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const changeDuration = (e) => {
        setDuration(e.target.value)
    }
    const changeResidence = (e) => {
        setResidence(e.target.value)
    }
    const changeСount_passengers = (e) => {
        setСount_passengers(e.target.value)
    }
    const changePrice = (e) => {
        setPrice(e.target.value)
    }
    const changeDate_flight = (e) => {
        setDate_flight(e.target.value)
    }

    const [reviews, setReviews] = useState([])
    const handleTab3 = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get-admin-reviews');
            setReviews(response.data);
        } catch (error) {
            console.error(error);
        }
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

    var now = new Date();
    console.log( now );

    const handleTab3Delete = async (id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/failure-review', {id});
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="admin__container">
            <h2>Вы зашли как админ</h2>
            {/*<div className="button_container">*/}
            {/*    <Button className="button" value="Выйти" isrow="row"/>*/}
            {/*</div>*/}

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
                <label htmlFor="tab-third" onClick={() => handleTab3()}>
                    <p>Отзывы</p>
                </label>

                <div id="tab-content-1" className="tab-content">
                    <div className="tab_cont">
                        <div className="ticket">
                            {tours.map((tour) => (
                                <div>
                                    <p className="name-tour">{tour.tourName}</p>
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
                                        <div className="not-found"> users not found </div>
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
                                <input type="text" className="time_fly" onChange={changeDuration} value={duration} />
                            </div>
                            <div className="row">
                                <p>время на планете</p>
                                <input type="text" className="time_onplanet" onChange={changeResidence} value={residence}/>
                            </div>
                            <div className="row">
                                <p>число пассажиров</p>
                                <input type="text" className="amount_people"
                                       onChange={changeСount_passengers} value={count_passengers}/>
                            </div>
                            <div className="row">
                                <p>цена</p>
                                <input type="text" className="price" onChange={changePrice} value={price}/>
                            </div>
                            <div className="row">
                                <p>дата</p>
                                <input type="date" className="date" onChange={changeDate_flight} value={date_flight}/>
                            </div>
                            <div className="row">
                                <button className="save"
                                        onClick={() => handleTab2Edit(activeTour?.id, activeTour?.name,
                                            activeTour?.planet, description, duration,
                                            residence, count_passengers,
                                            price, date_flight, activeTour?.image)}>
                                    сохранить
                                    изменения
                                </button>
                                <button className="delete" onClick={() => handleTab2Delete(activeTour?.id)}>удалить
                                    тур
                                </button>
                            </div>
                        </div>

                        <div className="tour tour_add">
                            <h2>Добавить новый тур</h2>
                            <div className="row">
                                <p>название</p>
                                <input type="text" className="tour_name" value={a_name} onChange={change_a_name}/>
                            </div>
                            <div className="row">
                                <p>место</p>
                                <input type="text" className="place" value={a_place} onChange={change_a_place}/>
                            </div>
                            <div className="row">
                                <p>описание</p>
                                <textarea type="text" className="description" value={a_description}
                                          onChange={change_a_description}/>
                            </div>
                            <div className="row">
                                <p>время полета</p>
                                <input type="text" className="time_fly" value={a_time_fly}
                                       onChange={change_a_time_fly}/>
                            </div>
                            <div className="row">
                                <p>время на планете</p>
                                <input type="text" className="time_onplanet" value={a_time_onplanet}
                                       onChange={change_a_time_onplanet}/>
                            </div>
                            <div className="row">
                                <p>число пассажиров</p>
                                <input type="text" className="amount_people" value={a_amount_people}
                                       onChange={change_a_amount_people}/>
                            </div>
                            <div className="row">
                                <p>цена</p>
                                <input type="text" className="price" value={a_price} onChange={change_a_price}/>
                            </div>
                            <div className="row">
                                <p>дата</p>
                                <input type="date" className="date" min="2024-01-01" value={a_date} onChange={change_a_date}/>
                            </div>
                            <div className="row">
                                <p>изображение</p>
                                <input type="file" className="img" value={a_img} onChange={change_a_img}/>
                            </div>
                            <div className="row">
                                <button className="add" onClick={() => handleTab2Add()}>добавить тур</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tab-content-3" className="tab-content">
                    <div className="tab_cont">
                        {reviews.length === 0 ?
                            <div className="review">
                                <p className="review_text">Нет отзывов</p>
                            </div>
                            :
                            <>
                                {reviews.map((review) => (
                                    <div key={review.id} className="review">
                                        <div className="row">
                                            <p className="review_name">{review.firstname + " " + review.lastname}</p>
                                            <p className="review_date">{review.date}</p>
                                        </div>
                                        <div className="row">
                                            <p className="review_text">{review.review}</p>
                                        </div>
                                        <div className="row">
                                            <button className="delete"
                                                    onClick={() => handleTab3Delete(review.id)}>удалить
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Admin;