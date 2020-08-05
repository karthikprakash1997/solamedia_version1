/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import speaker1 from "../assets/images/testImages/speaker-img1.png";

const data = [
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
];

function Scheduler() {
  return (
    <section id="schedule-part">
      <div className="container">
        <div className="section-title">
          <h2>Celebrities</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12">
            {data.map((value, index) => (
              <div className="col-lg-10 offset-lg-1 col-md-12" key={index}>
                <div className="row mx-0">
                  <div className="col-lg-6 col-md-6">
                    <div className="speakers-item">
                      <div className="speakers-img">
                        <img src={value.image} alt="speaker-img1" />
                      </div>
                      <div className="speakers-text">
                        <h3>{value.name}</h3>
                        <div className="speaker-icon">
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-pinterest-p"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="speakers-item">
                      <div className="speakers-img">
                        <img src={speaker1} alt="speaker-img2" />
                      </div>
                      <div className="speakers-text">
                        <h3>{value.name}</h3>
                        <div className="speaker-icon">
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-pinterest-p"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scheduler;
