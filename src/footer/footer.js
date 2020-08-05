import React from "react";

function Footer() {
  return (
    <section id="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="footer-widget">
              <div className="footer-icon">
                <a href="YOUR_FACEBOOK_LINK.html">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="YOUR_TWITTER_LINK.html">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="YOUR_LINKEDIN_LINK.html">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="YOUR_GOOGLE_LINK.html">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2020. All rights reserved by Designer</p>
      </div>
    </section>
  );
}

export default Footer;
