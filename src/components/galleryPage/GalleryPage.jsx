import React, { useState, useRef } from "react";
import video from "../../assets/video/marathon.MP4";
import "./galleryPage.style.scss";

const GalleryPage = () => {
  const videoRef = useRef(null);
  const [setIsPlaying] = useState(false);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="gallery" id="gallery">
      <div className="gallery__video">
        <video
          ref={videoRef}
          className="gallery__video__part"
          controls
          onClick={togglePlay}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="gallery__text">
        <p>
          Silk Way Run is not just a marathon, it's a story that we shouldn't
          forget.
        </p>
        <p>
          A large fair, a variety of national cuisines, many prizes and an
          official opening with the participation of celebrity guests await you.
          All funds raised will go to charity! The event is organized by the
          Geek Network IT bootcamp with the support of communities in Central
          Asian countries.
        </p>
        <div className="gallery__text__flags">
          <p>🇰🇬 🇰🇿 🇹🇷 🇹🇲 🇹🇯 🇺🇿</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
