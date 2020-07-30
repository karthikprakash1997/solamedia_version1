import React from "react";
import Image from "../assets/images/backgrounds/festive/festive-img2.png";

function Introduction() {
  return (
    <section id="festive-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="festive-left">
              <div class="festive-active">
                <div class="festive-img">
                  <img class="img" src={Image} alt="festive-img2" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="festive-right">
              <div class="festive-text">
                <h2>About Us</h2>
                <p class="fest-para1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostr ud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="fest-para2">
                  Duis aut e irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat n ulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim laborum. Sed ut perspiciatis unde omnis
                  ist e natus error sit voluptatem accusantium doloremque
                  laudantium, totam aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
