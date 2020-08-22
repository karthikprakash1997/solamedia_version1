import React from "react";
import Solamedia from "../assets/images/logo/output-onlinepngtools-ConvertImage.png";

function App() {
  return (
    <section id="slider-part">
      <div className="single-slider">
        <div className="overlay">
          <div className="container">
            <div className="row" style={{ maxHeight: 280 }}>
              <div className="col-lg-12">
                <div className="slider-text">
                  <p>Welcome to</p>
                  <img
                    src={Solamedia}
                    alt="Solamedia"
                    style={{ height: 200, with: 200 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
