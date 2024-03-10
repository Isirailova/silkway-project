import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./racePage.style.scss";

const RacePage = () => {
  const [selectedRace, setSelectedRace] = useState("5km");

  const raceLocations = {
    "5km":
      "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3167.0401169292777!2d-88.02080603493849!3d42.01588949009809!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m3!3m2!1d42.0157757!2d-88.01886239999999!4m3!3m2!1d42.013990899999996!2d-88.0001453!4m3!3m2!1d42.0157814!2d-88.0188488!5e0!3m2!1sen!2sus!4v1708761027914!5m2!1sen!2sus",
    "10km":
      "https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d5728.261885350707!2d-88.0206270280304!3d42.031858235327206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m3!3m2!1d42.0360696!2d-88.024838!4m3!3m2!1d42.0166464!2d-88.0182507!4m3!3m2!1d42.016739799999996!2d-88.0019918!4m3!3m2!1d42.014483299999995!2d-87.9997683!4m3!3m2!1d42.0167447!2d-88.0019624!4m3!3m2!1d42.0167437!2d-88.01828359999999!4m3!3m2!1d42.0361018!2d-88.0247954!5e0!3m2!1sen!2sus!4v1708899029332!5m2!1sen!2sus",
    "15km":
      "https://www.google.com/maps/embed?pb=!1m53!1m12!1m3!1d33647.488150943886!2d-88.00992298539802!3d42.02464757677396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m38!3e2!4m4!2s42.04079%2C%20-88.02861!3m2!1d42.04079!2d-88.02861!4m3!3m2!1d42.0357479!2d-88.0233662!4m3!3m2!1d42.0160641!2d-88.01890159999999!4m3!3m2!1d42.014181699999995!2d-88.0001279!4m3!3m2!1d42.0166531!2d-87.998408!4m3!3m2!1d42.0235188!2d-87.9899497!4m3!3m2!1d42.032115399999995!2d-87.9876711!4m3!3m2!1d42.0376336!2d-87.99151909999999!4m3!3m2!1d42.035716799999996!2d-88.0233409!5e0!3m2!1sen!2sus!4v1708760735711!5m2!1sen!2sus",
  };

  const handleRaceSelect = (event) => {
    setSelectedRace(event.target.value);
  };

  useEffect(() => {
    console.log("Selected race:", selectedRace);
  }, [selectedRace]);

  return (
    <div className="race" id="race">
      <div className="race__container">
        <div className="race__container__one">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="race__container__one__icon"
          />
          <a
            href="https://maps.google.com?q=Busse+Woods+IL+60008"
            target="_blank"
            rel="noopener noreferrer"
            className="race__container__one__link"
          >
            Busse Woods, IL 60008
          </a>
        </div>
        <div className="race__container__two">
          <p>
            Your selected race is:
            <select onChange={handleRaceSelect} value={selectedRace}>
              <option value="5km">5km</option>
              <option value="10km">10km</option>
              <option value="15km">15km</option>
            </select>
          </p>
        </div>
      </div>
      <div className="race__content">
        {selectedRace && (
          <iframe
            title="Google Maps"
            frameBorder="0"
            style={{ border: 0 }}
            src={raceLocations[selectedRace]}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          quisquam totam officia, illum quos amet facilis ducimus inventore
          voluptatum atque sapiente dignissimos velit modi ullam rem. Omnis
          dolorum fugiat asperiores.
        </p>
      </div>
    </div>
  );
};

export default RacePage;
