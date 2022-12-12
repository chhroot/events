import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../containers/socialfollow/SocialFollow";
import SocialFollow from "../../containers/socialfollow/SocialFollow";
import aryan from "../../assets/aryan.jpg";
import kapil from "../../assets/kapil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import puneet from "../../assets/puneet.jpg";
import raghav from "../../assets/raghav.png";
const Footer1 = () => (
  <div className="gpt3__footer1 section__padding">
    <h4 style={{ color: "white", fontSize: "30px", marginBottom: "20px" }}>Creators of EvntOrg 🚀</h4>
    <div className="container">
      <div className="indi">
        <img src={kapil} />
        <div className="text">
          <p>
            Kapil Dev Tamrakar{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kapil-dev-tamrakar-%F0%9F%9A%80-%F0%9F%87%AE%F0%9F%87%B3-16324a210/"
              className="tele social"
            >
              <FontAwesomeIcon style={{ color: "white", cursor: "pointer" }} icon={faLinkedin} size="2x" />
            </a>
          </p>
          <span>Founder & CEO</span>
        </div>
      </div>
      <div className="indi">
        <img src={aryan} />
        <div className="text">
          <p>
            Aryan Ghosh{" "}
            <a target="_blank" href="https://www.linkedin.com/in/aryanghosh001/" className="tele social">
              <FontAwesomeIcon style={{ color: "white", cursor: "pointer" }} icon={faLinkedin} size="2x" />
            </a>
          </p>
          <span>CTO</span>
        </div>
      </div>
      <div className="indi">
        <img src={puneet} />
        <div className="text">
          <p>
            Puneet Gupta
            <a target="_blank" href="https://www.linkedin.com/in/puneet-gupta-265a62227/" className="tele social">
              <FontAwesomeIcon style={{ color: "white", cursor: "pointer" }} icon={faLinkedin} size="2x" />
            </a>
          </p>
          <span>Co-Founder</span>
        </div>
      </div>
      <div className="indi">
        <img style={{ objectFit: "contain", backgroundColor: "black" }} src={raghav} />
        <div className="text">
          <p>
            Raghav Jindal
            <a target="_blank" href="https://www.linkedin.com/in/raghav-jindal-a56538212/" className="tele social">
              <FontAwesomeIcon style={{ color: "white", cursor: "pointer" }} icon={faLinkedin} size="2x" />
            </a>
          </p>
          <span>Tech Lead</span>
        </div>
      </div>
    </div>
    {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">  
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        {/* <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p> */}
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>evntorg@gmail.com</p>
        {/* <p>626620514</p>
        <p>9315677209</p> */}
        <p>New Delhi</p>
      </div>
    </div>
    <SocialFollow />
    <div className="gpt3__footer-copyright">
      <p>@2022 EvntOrg. All rights reserved.</p>
    </div>
  </div>
);

export default Footer1;
