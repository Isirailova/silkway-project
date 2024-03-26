// App.js
import React from "react";
import logoImage from "../src/assets/images/logo.png";
import ImageSlider from "./components/imageSlider/ImageSlider";
import RacePage from "./components/racePage/RacePage";
import InfoPage from "./components/infoPage/InfoPage";
import GalleryPage from "./components/galleryPage/GalleryPage";
import Questions from "./components/questions/Questions";
import RegisterPage from "./components/registerPage/RegisterPage";
import Footer from "./components/footer/Footer";

import "./app.style.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <RacePage />
      <InfoPage />
      <GalleryPage />
      <Questions />
      <RegisterPage />
      <Footer />
    </div>
  );
}

function Navbar() {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logoImage} alt="Marathon" width="80" />
      </div>
      <div className="navbar__links">
        <a href="#race" onClick={(e) => scrollToSection("race", e)}>
          Race
        </a>
        <a href="#info" onClick={(e) => scrollToSection("info", e)}>
          Info
        </a>
        <a href="#gallery" onClick={(e) => scrollToSection("gallery", e)}>
          Gallery
        </a>
      </div>
      <div className="navbar__btn">
        <button
          href="#"
          id="register"
          onClick={(e) => scrollToSection("registration", e)}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
