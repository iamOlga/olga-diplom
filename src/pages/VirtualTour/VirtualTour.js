import React from 'react'
import './VirtualTour.css';
import bg0 from '../../assets/virtualTour/virtual_tour_bg.jpg';
import bg1 from '../../assets/virtualTour/virtual_tour_1.jpg';
import bg2 from '../../assets/virtualTour/virtual_tour_2.jpg';
import bg3 from '../../assets/virtualTour/virtual_tour_3.jpg';
import bg4 from '../../assets/virtualTour/virtual_tour_4.jpg';
import bg5 from '../../assets/virtualTour/virtual_tour_5.jpg';
import bg6 from '../../assets/virtualTour/virtual_tour_6.jpg';
import bg7 from '../../assets/virtualTour/virtual_tour_7.jpg';
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";

function VirtualTour() {

    return (
        <div className="virtual_tour__container"
             style={{
                 backgroundImage: `url(${bg0})`,
             }}>
            <h2>Посмотри, как может проходить твое путешествие в космос!</h2>
            <div className="virtual_tour">
                <div className="horizontal-scroll-wrapper squares">
                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg1})`,
                             }}>
                            <div className="virtual_tour_content-text">
                                <p className="title">Космическое путешествие –<br/>это маленькая жизнь.</p>
                                <p className="info">Узнай, как будет проходить незабываемый период при подготовке и во время полета.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="virtual_tour_content"
                            style={{
                                backgroundImage: `url(${bg2})`,
                            }}>
                            <div className="virtual_tour_content-text content-2">
                                <div className="info">
                                    <span>1 этап</span>
                                    <p>У нас есть подробная медицинская анкета и осмотр для всех участников, чтобы убедиться, что вы готовы к полету. Этот процесс адаптирован под каждого индивидуально. В среднем медицинская подготовка занимает 3 месяца.</p>
                                    <Link to="/help"><Button className="button" value="подробнее о требованиях" isrow="row"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg3})`,
                             }}>
                            <div className="virtual_tour_content-text content-2 content-3">
                                <div className="info">
                                    <span>2 этап</span>
                                    <p>После оплаты и подписания договора о сотрудничестве вас ждет наша программа подготовки к полету в космос. Она состоит из специальных мероприятий, занятий и тренировок, призванных помочь вам физически, умственно и духовно подготовиться к космосу. От начала до конца, вас будут сопровождать на каждом этапе, чтобы обеспечить вашу безопасность и комфорт.</p>
                                    <Link to="/help"><Button className="button" value="подробнее об оплате" isrow="row"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg4})`,
                             }}>
                            <div className="virtual_tour_content-text content-2 content-4">
                                <div className="info">
                                    <span>3 этап</span>
                                    <p>Ваше путешествие начнется с плавного взлета с взлетно-посадочной полосы, когда наш космический корабль, прикрепленный к материнскому кораблю, поднимется к небу. Наша система космических полетов использует воздушный старт, поэтому ваше путешествие на высоту будет спокойным и приятным.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg5})`,
                             }}>
                            <div className="virtual_tour_content-text content-2 content-4 content-5">
                                <div className="info">
                                    <span>4 этап</span>
                                    <p>Поднявшись на высоту примерно 50 000 футов, вы услышите крик пилотов: «3, 2, 1, отпустите», когда космический корабль отделяется от корабля-носителя. Через несколько коротких мгновений включится ракетный двигатель, и вы полетите к звездам.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg6})`,
                             }}>
                            <div className="virtual_tour_content-text content-2 content-6">
                                <div className="info">
                                    <span>5 этап</span>
                                    <p>Добро пожаловать в космос! Насладись своим туром в полной мере.</p>
                                    <Link to="/tours"><Button className="button" value="выбрать тур" isrow="row"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="virtual_tour_content"
                             style={{
                                 backgroundImage: `url(${bg7})`,
                             }}>
                            <div className="virtual_tour_content-text content-2 content-3 content-7">
                                <div className="info">
                                    <span>6 этап</span>
                                    <p>Тем временем корабль готовится к возвращению в атмосферу Земли. Добро пожаловать домой, космонавт!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default VirtualTour;