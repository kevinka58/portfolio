import { React, useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {featuredPortfolio, webApp} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    // {
    //   id: "web",
    //   title: "Web App",
    // },
    // {
    //   id: "game",
    //   title: "Games",
    // },
  ];

  useEffect(()=>{
    switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "web":
            setData(webApp);
            break;
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {data.map((d) => (
              <div className="item">
          <img src={d.img} alt="FC Board (Web App)" />
          <h3><a href={d.link} target="_blank" rel="noreferrer">{d.title}</a></h3>
        </div>
            ))}
      </div>
    </div>
  );
}
