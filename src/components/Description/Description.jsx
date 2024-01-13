import React from "react";

import "./Description.css";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { MdWindPower } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { BiHappy } from "react-icons/bi";
import { MdCompress } from "react-icons/md";

export default function Description({ wheather, units }) {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      tittle: "min",
      data: wheather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      tittle: "max",
      data: wheather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      tittle: "feels like",
      data: wheather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      tittle: "pressure",
      data: wheather.pressure.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <IoWaterOutline />,
      tittle: "humidity",
      data: wheather.humidity.toFixed(),
      unit: "%",
    },
    {
      id: 6,
      icon: <MdWindPower />,
      tittle: "wind speed",
      data: wheather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, tittle, data, unit }) => (
        <div key={id} className="card">
          <div className="descriptions__card-icon">
            {icon}
            <small>{tittle}</small>
          </div>
          <h3>{`${data} ${unit}`}</h3>
        </div>
      ))}
    </div>
  );
}
