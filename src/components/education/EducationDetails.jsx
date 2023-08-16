import "./testimonials.scss";

export default function EducationDetails() {
  const data = [
    {
      id: 1,
      name: "Matriculation",
      title: "Infant Jesus High School, Tekkali",
      img:
        "https://t4.ftcdn.net/jpg/03/11/24/19/360_F_311241990_vHZLXvq2CiT0ZHTl22HDpUix7wWGi5LU.jpg",
      /*icon: "assets/insta.png",*/
      desc:
        "I have completed my matriculation in the year 2017 with 9.5 CGPA",
    },
    {
      id: 2,
      name: "Intermediate",
      title: "Sri Viswajyothi Junior College, Tekkali",
      img:
        "https://us.123rf.com/450wm/zamollxis/zamollxis1802/zamollxis180202056/96626419-number-12-isolated-on-white-background.jpg?ver=6",
      /*icon: "assets/youtube.png",*/
      desc:
        "I have completed my 12th in the year 2019 with 9.69 CGPA",
      featured: true,
    },
    {
      id: 3,
      name: "Graduation",
      title: "Centurion University of Technology & Management, Paralakhemundi",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYsGeuCfzZCpQE1vLYRNUdhkeiuGIusByusHtih5LU6DYOmABqddrY_USpSL4h8g0X3I&usqp=CAU",
      /*icon: "assets/linkedin.png",*/
      desc:
        "I have been graduated in the year 2023 in B.Tech Computer Science and Engineering",
    },
  ];
  return (
    <div className="testimonials" id="educationdetails">
      <h1>Education Details</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
