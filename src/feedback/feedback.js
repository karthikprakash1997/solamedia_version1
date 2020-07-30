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
      <div class="container">
        <div class="section-title">
          <h2>Feedback</h2>
        </div>
        <div class="row testimonial-active">
          {data.map(() => (
            <div class="col-lg-4">
              <div class="single-testimonial">
                <p class="testi-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  dosmod tempor incididunt ut labore etdolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div class="testi-img">
                  <img src={speaker1} alt="testimonial-img1" />
                  <div class="icon">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
                <h4 class="name">Jonathon Reverse</h4>
                <p class="designation">Event Sponsor</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedback;
