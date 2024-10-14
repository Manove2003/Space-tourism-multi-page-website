import React, { useState } from "react";
import "./Destination.css";
import Header from "../component/Header";
import moon from "../assets/destination/image-moon.webp";
import moon1 from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.webp";
import mars1 from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.webp";
import europa1 from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.webp";
import titan1 from "../assets/destination/image-titan.png";

const destinations = [
  {
    name: "Moon",
    images: {
      png: moon1,
      webp: moon,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: mars1,
      webp: mars,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: europa1,
      webp: europa,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: titan1,
      webp: titan,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  return (
    <div className="destination">
      <Header />
      <main className="destination-content">
        <h1 className="heading">
          {" "}
          <span id="number">01</span>PICK YOUR DESTINATION
        </h1>

        <div className="destination-grid">
          <div className="planet-image">
            <img
              src={selectedDestination.images.webp}
              alt={selectedDestination.name}
              className="rotate"
            />
          </div>
          <div className="destination-info">
            <nav className="destination-nav">
              <ul>
                {destinations.map((destination, index) => (
                  <li
                    key={index}
                    className={
                      destination.name === selectedDestination.name
                        ? "active"
                        : ""
                    }
                    onClick={() => setSelectedDestination(destination)}
                  >
                    {destination.name.toUpperCase()}
                  </li>
                ))}
              </ul>
            </nav>

            <h2 className="destination-name">{selectedDestination.name}</h2>

            <p className="destination-description">
              {selectedDestination.description}
            </p>

            <div className="destination-stats">
              <div className="stat">
                <h3>AVG. DISTANCE</h3>
                <p>{selectedDestination.distance}</p>
              </div>
              <div className="stat">
                <h3>EST. TRAVEL TIME</h3>
                <p>{selectedDestination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
