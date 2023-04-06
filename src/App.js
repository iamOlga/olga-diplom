import "./dist/App.css";
import Menu from "./Menu/Menu";
import Timer from "./Main/Timer/Timer";
import Footer from "./Footer/Footer";
import Home from "./Main/Home";
import Tours from "./Tours/Tours";
import Tour_page from "./Tours/Tour_page";
import Booking from "./pages/Booking/Booking";
import Reviews from "./Reviews/Reviews";
import Help from "./Help/Help";
import Admin from "./pages/Admin/Admin";
import Error from "./Error/Error";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LogingPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import AccountInfoPage from "./pages/AccountInfoPage/AccountInfoPage";
import InfoFormPage from "./pages/InfoFormPage/InfoFormPage";
import VirtualTour from "./pages/VirtualTour/VirtualTour";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "туры" },
    { value: "забронировать" },
    { value: "галерея" },
  ];

  function menu() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/virtual_tour" element={<VirtualTour />} />
          <Route path="/error" element={<Error />} />
          <Route path="/account_info" element={<AccountInfoPage />} />
          <Route path="/info_form" element={<InfoFormPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/help" element={<Help />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/tour" element={<Tour_page />} />
        </Routes>
      </main>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
