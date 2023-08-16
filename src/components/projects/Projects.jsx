import { useState} from "react";
import "./works.scss";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videodata = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "COWIN Web Design",
      desc: "I have designed a small CoWIN Application using Advanced Java Programming.",
      sources: "assets/CoWINHome.mp4",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Olympics Medal Tally Visualization Dashboard",
      desc: "This is designed using Data Analysis and Visualisation using Python.",
      sources: "assets/1_DASHBOARD.mp4",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Brazil COVID Dashboard",
      desc: "This is designed using Data Analysis and Visualisation using Python. Shows all the visualizations w.r.t the Cases types, ",
      sources: "assets/COVID_DASH_KRISHNA.mp4",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < videodata.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="projects">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {videodata.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/*<span>Projects</span>*/}
                  {/*<video width="700" height="600" autoPlay controls>
                      <source src="assets/CoWINHome.mp4" type="video/mp4" />
                    </video>*/}
                </div>
              </div>
              <div className="right">
              
                  <div>
                    <video width="700" height="600" autoPlay controls>
                      <source src={d.sources} type="video/mp4" /> {/*{v.sources}*/}
                    </video>
                  </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
