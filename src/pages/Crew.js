import React, { useState } from "react";
import Header from "../component/Header";
import "./Crew.css";
import DouglasHurley from "../assets/crew/image-douglas-hurley.png";
import DouglasHurley1 from "../assets/crew/image-douglas-hurley.webp";
import MarkShuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import MarkShuttleworth1 from "../assets/crew/image-mark-shuttleworth.webp";
import VictorGlover from "../assets/crew/image-victor-glover.png";
import VictorGlover1 from "../assets/crew/image-victor-glover.webp";
import AnoushehAnsari from "../assets/crew/image-anousheh-ansari.png";
import AnoushehAnsari1 from "../assets/crew/image-anousheh-ansari.webp";

const crewData = [
  {
    name: "Douglas Hurley",
    images: {
      png: DouglasHurley,
      webp: DouglasHurley1,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: MarkShuttleworth,
      webp: MarkShuttleworth1,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: VictorGlover,
      webp: VictorGlover1,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: AnoushehAnsari,
      webp: AnoushehAnsari1,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData[0]);

  const handleCrewChange = (index) => {
    setSelectedCrew(crewData[index]);
  };

  return (
    <div className="crew">
      <Header />
      <h1 className="heading">
        <span id="section-number">02</span> Meet Your Crew
      </h1>
      <div className="crew-container">
        <div className="crew-info">
          <h3 className="crew-role">{selectedCrew.role}</h3>
          <h1 className="crew-name">{selectedCrew.name}</h1>
          <p className="crew-description">{selectedCrew.bio}</p>
          <div className="crew-navigation">
            {crewData.map((crew, index) => (
              <button
                key={crew.name}
                className={`crew-button ${
                  selectedCrew.name === crew.name ? "active" : ""
                }`}
                onClick={() => handleCrewChange(index)}
              />
            ))}
          </div>
        </div>
        <div className="crew-image">
          <img
            src={selectedCrew.images.png}
            alt={selectedCrew.name}
            className="crew-member-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
