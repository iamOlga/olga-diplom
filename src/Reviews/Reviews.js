import React from 'react'
import './Reviews.css';
import Review from "./Review";
import Review_input from "./Review_input";
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button';

function Reviews() {
    const isUserLogged = localStorage.getItem('userEmail')

    return (
      <div className="reviews__container">
        <h2>Отзывы</h2>
        {isUserLogged ? (
          <div className="reviews">
            <Review
              name="Olga Babich"
              date="23.05.2022"
              text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"
            />
            <Review_input
              name="Olga Babich"
              text="fvndjk jreslmdf ldjv jrfnrdkes;nv fkne lrjnvlfnvdjlnvflj jvfnldvfnvdjlvnf jlfvnldfjvnfnk"
            />
          </div>
        ) : (
          <div className="link__container">
            <h3>Войдите в личный аккаунт для того, чтобы оставлять отзывы</h3>
            <Link to="/login">
              <Button className="button" value="Войти в аккаунт" isrow="row" />
            </Link>
          </div>
        )}
      </div>
    );
}

export default Reviews;