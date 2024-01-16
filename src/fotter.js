import * as React from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Foter = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#121212", minHeight: "100px" }}>
        <div
          style={{
            margin: "0 auto",
            width: "1140px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <img
            src="https://oldladygang.com/wp-content/uploads/2022/12/desktop.jpg"
            alt=""
            style={{ width: "100%", paddingLeft: "15px", paddingRight: "15px" }}
          />
        </div>
      </div>
      <div style={{ fontSize: "14px", color: "white", fontWeight: "400" }}>
        <div style={{ backgroundColor: "#262526" }}>
          <div style={{ width: "1140px", margin: "0 auto" }}>
            <span
              style={{
                padding: "25px 0 25px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                letterSpacing: "0",
              }}
            >
              Copyright All Rights Reserved © 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Foter;
