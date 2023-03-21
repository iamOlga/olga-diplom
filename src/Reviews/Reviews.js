import React from 'react'
import './Reviews.css';
import Review from "./Review";
import Review_input from "./Review_input";

function Reviews() {

    return (
        <div className="reviews__container">
            <h2>Отзывы</h2>

            <div className="reviews">
                <Review name="Olga Babich" date="23.05.2022" text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"/>
                <Review_input name="Olga Babich" text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"/>
            </div>
        </div>
    )
}

export default Reviews;