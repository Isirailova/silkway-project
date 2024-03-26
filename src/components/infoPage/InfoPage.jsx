import React from "react";
import image from "../../assets/images/finish.jpg";
import "./infoPage.style.scss";

const InfoPage = () => {
  return (
    <div className="container2" id="info">
      <div className="container2__schedule">
        <h1>Saturday, May 11 - race day!</h1>
        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>8:00 am</span>
          </strong>
          - Meeting & Greeting
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>8:30 am </span>
          </strong>
          - Warm-up Session
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>9:00 am </span>
          </strong>
          - 5km Race start
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>9:15 am </span>
          </strong>
          - 10km Race start
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>9:30 am </span>
          </strong>
          - 15km Race start
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>12:00 pm </span>
          </strong>
          - Congratulations & Awards
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>14:00 pm </span>
          </strong>
          - Lunch
        </p>

        <p>
          <strong>
            <span style={{ color: "rgb(18, 175, 227)" }}>15:00 pm </span>
          </strong>
          - Concert
        </p>

        <div className="container2__schedule__details">
          <p>
            <strong>Marathon's Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/silkwayrun?igsh=MXYwaHNrMzVtNXZwNg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @silkwayrun
            </a>
          </p>
          <p>
            <strong>Organizers:</strong>{" "}
            <a
              href="https://www.instagram.com/geeknetwork.io?igsh=MWdjcWF2MGUyZmgydg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @geeknetwork.io
            </a>
          </p>
        </div>
      </div>
      <div className="container2__image">
        <img src={image} alt="Race car speeding on a track" />
      </div>
    </div>
  );
};

export default InfoPage;
