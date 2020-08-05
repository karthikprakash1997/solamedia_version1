import React from "react";
import speaker1 from "../assets/images/testImages/testimonial-img1.png";

const data = [
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
];
function Feedback() {
  return (
    <section id="testimonial-part">
      <div className="container">
        <div className="section-title">
          <h2>Feedback</h2>
        </div>
        <div className="row testimonial-active">
          {data.map((_1, index) => (
            <div className="col-lg-4" key={index}>
              <div className="single-testimonial">
                <p className="testi-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  dosmod tempor incididunt ut labore etdolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div className="testi-img">
                  <img src={speaker1} alt="testimonial-img1" />
                  <div className="icon">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
                <h4 className="name">Jonathon Reverse</h4>
                <p className="designation">Event Sponsor</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedback;
