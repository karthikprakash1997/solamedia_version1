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
      <div class="container">
        <div class="section-title">
          <h2>Celebrities</h2>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-md-12">
            {data.map((value) => (
              <div class="col-lg-10 offset-lg-1 col-md-12">
                <div class="row mx-0">
                  <div class="col-lg-6 col-md-6">
                    <div class="speakers-item">
                      <div class="speakers-img">
                        <img src={value.image} alt="speaker-img1" />
                      </div>
                      <div class="speakers-text">
                        <h3>{value.name}</h3>
                        <div class="speaker-icon">
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="speakers-item">
                      <div class="speakers-img">
                        <img src={speaker1} alt="speaker-img2" />
                      </div>
                      <div class="speakers-text">
                        <h3>{value.name}</h3>
                        <div class="speaker-icon">
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
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
