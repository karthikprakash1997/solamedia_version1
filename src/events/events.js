import React, { useCallback } from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import "../assets/css/demo.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
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

function UpcomingEvents() {
  const animatedImages = useCallback(
    () => (
      <BannerAnim autoPlay autoPlaySpeed={3000} autoPlayEffect={false}>
        <Element key="aaa" prefixCls="banner-user-elem">
          <BgElement key="bg" class="test" />
          {/* <img
            src={"https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg"}
            alt={"hello"}
          /> */}
          <QueueAnim name="QueueAnim">
            <h1 key="h1">Ant Motion Demo</h1>
          </QueueAnim>
          <TweenOne
            animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
            name="TweenOne"
          >
            Ant Motion Demo.Ant Motion Demo
          </TweenOne>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            style={{
              backgroundImage:
                "url(" +
                require("../assets/images/testImages/speaker-img1.png") +
                ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <QueueAnim name="QueueAnim">
            <h1 key="h1">Ant Motion Demo</h1>
          </QueueAnim>
          <TweenOne
            animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
            name="TweenOne"
          >
            Ant Motion Demo.Ant Motion Demo
          </TweenOne>
        </Element>
      </BannerAnim>
    ),
    []
  );
  return (
    <section id="testimonial-part">
      <div class="container">
        <div class="section-title">
          <h2>Events </h2>
        </div>
        <div class="row testimonial-active">
          {data.map(() => (
            <div class="col-lg-4">
              <div class="single-testimonial">
                <div class="testi-text">{animatedImages()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
