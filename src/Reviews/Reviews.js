import React from 'react'
import {Link} from "react-router-dom";
import './Reviews.css';
import Review from "./Review";
import Review_input from "./Review_input";
import Button from './../Button/Button';

function Reviews() {

    return (
        <div className="reviews__container">
            <h2>Отзывы</h2>

            <div className="reviews">
                <Review name="Olga Babich" date="23.05.2022" text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"/>
                <Review_input name="Olga Babich" text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"/>
            </div>

            //а это будет показываться, если ты НЕ вошел в аккаунт
            {/*<div className="link__container">*/}
            {/*    <h3>Войдите в личный аккаунт для того, чтобы оставлять отзывы</h3>*/}
            {/*    <Link to="/account"><Button className="button" value="Войти в аккаунт" isrow="row"/></Link>*/}
            {/*</div>*/}
        </div>
    )
}

export default Reviews;