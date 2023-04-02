import './dist/App.css';
import Menu from './Menu/Menu';
import Timer from './Main/Timer/Timer';
import Footer from './Footer/Footer';
import Home from './Main/Home';
import Gallery from './Gallery/Gallery'
import Tours from './Tours/Tours'
import Booking from './Booking/Booking'
import Account from './Account/Account'
import Virtual_tour from './Virtual_tour/Virtual_tour'
import Reviews from './Reviews/Reviews'
import Account_info from './Account/Account_info'
import SignUp from "./Account/SignUp";
import SignIn from "./Account/SignIn";
import Error from './Error/Error'
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LogingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"туры"}, {value:"забронировать"}, {value:"галерея"}];

    function menu(){
        let menu = document.getElementById("menu");
        if (menu.classList.contains("active"))
        {
            menu.classList.remove('active');
        }
        else {
            menu.classList.add('active');
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">
            <div className="logo"></div>
          </Link>

          <div className="timer__container">
            <Timer days={130} hours={15} minutes={5} />
          </div>

          <div className="burger-btn" onClick={() => menu()}>
            <div className="burger-btn-2">
              <div className="burger-btn-3"></div>
            </div>
          </div>
        </nav>

        <Menu active={menuActive} setActive={setMenuActive} items={items} />
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/tours" component={Tours} />
          <Route path="/booking" component={Booking} />
          {/* <Route path='/account' component={Account}/> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/virtual_tour" component={Virtual_tour} />
          <Route path="/error" component={Error} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/account_info" component={Account_info} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </main>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
