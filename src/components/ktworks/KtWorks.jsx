import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  knowntechnologies,
  webPortfolio,
  mobilePortfolio,
  /*designPortfolio,
  contentPortfolio,*/
} from "../../data";

export default function KtWorks() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "tech",
      title: "Technologies",
    },
    {
      id: "web",
      title: "Web Designs",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    /*{
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },*/
  ];

  useEffect(() => {
    switch (selected) {
      case "tech":
        setData(knowntechnologies);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      /*case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;*/
      default:
        setData(knowntechnologies);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="ktworks">
      <h1>Known Technologies & Designed Works</h1>
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
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
