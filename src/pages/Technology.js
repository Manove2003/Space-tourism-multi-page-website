import React, { useState } from "react";
import Header from "../component/Header";
import "./Technology.css";
import Launchvehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Launchvehicle1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import Spaceport1 from "../assets/technology/image-spaceport-landscape.jpg";
import Spacecapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import Spacecapsule1 from "../assets/technology/image-space-capsule-landscape.jpg";

const technologyData = [
  {
    name: "Launch vehicle",
    images: {
      portrait: Launchvehicle,
      landscape: Launchvehicle1,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: Spaceport,
      landscape: Spaceport1,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: Spacecapsule,
      landscape: Spacecapsule1,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [currentTech, setCurrentTech] = useState(technologyData[0]);
  const [activeCircle, setActiveCircle] = useState(0); // To track which circle is active

  const handleCircleClick = (index) => {
    setCurrentTech(technologyData[index]);
    setActiveCircle(index); // Set the clicked circle as active
  };

  return (
    <div className="technology-container">
      <Header />
      <h3 className="headingtext">
        <span id="number">03</span>Space Launch 101
      </h3>
      <div className="technology-content">
        <div className="circle-container">
          {technologyData.map((_, index) => (
            <div
              key={index}
              className={`circle ${activeCircle === index ? "" : "active"}`}
              onClick={() => handleCircleClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="left-section">
          <div className="technology-details">
            <p className="subheading">The terminology...</p>
            <h1 className="title">{currentTech.name}</h1>
            <p className="description">{currentTech.description}</p>
          </div>
        </div>

        <div className="right-section">
          <img
            src={currentTech.images.portrait}
            alt={currentTech.name}
            className="launch-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
