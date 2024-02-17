import React, { useState, useEffect } from "react";
import "./cardStyle.css";
import { Heading, Text } from "@chakra-ui/react";

const Card = (props) => {
  const [number, setNumber] = useState(0);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getRoute();
  }, []);

  const getRoute = () => {
    setLocations([]);
    let routeArray = props.sloc;
    let opt = [];
    let resultLocations = [];
    const routes = {
      RT101: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Trichy",
        "Perungulathur",
        "Chennai"
      ],
      RT102: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Karur",
        "Salem",
        "Hosur",
        "Bengaluru"
      ],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Dharmapuri",
        "Hosur",
        "Bengaluru"
      ],
      RT106: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Viluppuram",
        "Tindivanam",
        "Chennai"
      ],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: [
        "Bengaluru",
        "Dharmavaram",
        "Anantapur",
        "Mahbubnagar",
        "Hyderabad"
      ],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"]
    };

    routeArray.forEach((route) => {
      if (props.stype === "Buses" || props.stype === "Flights") {
        for (var obj in routes) {
          if (route === obj) {
            opt = routes[obj].map((arr) => <li key={arr}> {arr} </li>);
          }
        }
      } else if (props.stype === "Hotels") {
        opt = <li key={route}> {route} </li>;
      }
      let dropdown = (
        <div key={route} className="journey">
          <ul> {opt} </ul>
        </div>
      );
      resultLocations.push(dropdown);
    });

    setNumber(resultLocations.length);
    setLocations(resultLocations);
  };

  return (
    <section className="card">
      <Heading as={'h2'} fontSize={'22px'}>{props.sname}</Heading>
      <Text color={'red'}>{number} {props.stype} available</Text>
      <div> {locations} </div>
    </section>
  );
};

export default Card;