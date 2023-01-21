import React from "react";
import Team from "./Team";

// const perez = require("../../Assets/marcelo-perez.jpg");

const teamMembers = [
  {
    id: 1,
    name: "Marcelo Andres Perez",
    repo: "https://github.com/mandresp",
    // img: "perez",
  },
  {
    id: 2,
    name: "Britt Boyd",
    repo: "https://github.com/thatthembritt",
    // img: 'BrittBoyd'
  },
  {
    id: 3,
    name: "Charles Dykstra",
    repo: "https://github.com/cdthe1nonly1",
    // img: 'Charley'
  },
  {
    id: 4,
    name: "Michael Giordano",
    repo: "https://github.com/MG1919",
    // img: 'michael'
  },
  {
    id: 5,
    name: "Zach Weston",
    repo: "https://github.com/zestnachow",
    // img: 'zach'
  },
];

export default function About() {
  return (
    <div className="d-flex">
      {teamMembers.map((person) => (
        <Team person={person} key={person.id} />
      ))}
    </div>
  );
}
