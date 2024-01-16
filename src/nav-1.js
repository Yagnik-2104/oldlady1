import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div className="back">
        <div className="container">
          <div>
            <div className="nav-edit">
              <ul className="m-0 p-0">
                <li className="nav-li">
                  <a href="" className="nav-a">
                    <span style={{ paddingRight: "7px" }}>
                      <FaLocationDot className="icon-loca" />
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      Locations & Updated Hours
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <span className="nav-sec">
              <BsFillTelephoneOutboundFill className="sec-ico" />
              <a href="tel:404.748.9689">404.748.9689</a>
            </span>
            <span className="nav-sec">
              <MdMailOutline className="sec-icon" />
              <a href="mailto:events@oldladygang.com">events@oldladygang.com</a>
            </span>
            <div className="social">
              <ul className="d-flex">
                <li>
                  <a href="https://www.facebook.com/OldLadygang/" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/oldladygang/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsearch%3Ff%3Dtweets%26vertical%3Ddefault%26q%3D%2522oldladygang%2522%26src%3Dtypd" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};
export default Nav;
