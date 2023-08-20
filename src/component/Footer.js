import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer--section">
      <div className="footer--body">
        <div className="footer--sec1">
          <div className="footer--socials">
            <h3 className="footer--site--name">J-FOODS</h3>

            <p className="address-info">
              NO.15 Jack Bull Street <br />
              Niche Anambra, Nigeria
            </p>

            <div className="phone--contact">
              <p className="phone--num">
                Phone: <span className="phone--digits">+234 84252 39987</span>
              </p>
              <p className="email--contact">
                Email: <span className="email--add">jfoods@gmail.com</span>
              </p>
            </div>

            <div className="media--info">
              <div className="media--icon--div">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="media--icon--div">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="media--icon--div">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="media--icon--div">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="media--icon--div">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>

          <div className="footer--site--links">
            <h3 className="footer--nav">Navigation</h3>
            <div className="footer--link--div">
              <a href="#" className="footer--link">
                <span className="footer--link--bullet">&#62;</span> Home
              </a>
            </div>
            <div className="footer--link--div">
              <a href="#" className="footer--link">
                <span className="footer--link--bullet">&#62;</span> About Us
              </a>
            </div>
            <div className="footer--link--div">
              <a href="#" className="footer--link">
                <span className="footer--link--bullet">&#62;</span> Our Menu
              </a>
            </div>
            <div className="footer--link--div">
              <a href="#" className="footer--link">
                <span className="footer--link--bullet">&#62;</span> Reservation
              </a>
            </div>
          </div>
        </div>

        <div className="footer--sec2">
          <div className="contact--us-sec">
            <h3 className="contactUs--head">Contact Us</h3>
            <form>
              <div className="footer--input--div">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Full name"
                  className="footer--input"
                />
              </div>
              <div className="footer--input--div">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  className="footer--input"
                />
              </div>
              <div className="footer--input--div">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message"
                />
              </div>
              <div className="footer--input--div">
                <button type="submit" className="contactUs-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="copyright">
          &#169; Copyright <strong>J-Foods</strong>. All Rights Reserved.
        </p>
        <p className="designed-by">
          Designed by <span className="designer--name">Jerryemmanuel</span>
        </p>
      </div>
    </div>
  );
}
