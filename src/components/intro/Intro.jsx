import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full Stack Developer", "Frontend Developer", "Software Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBnXFgkufz9WnF4rp4u_6zZ3mgVWTkOyb_A&usqp=CAU" alt="profile_pic" roundedCircle/> 
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sunkari Krishnaveni</h1>
          <h2>Want to become</h2>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
