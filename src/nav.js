import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Nav from "./nav-1";
import Foter from "./fotter";
import { Link } from "react-router-dom";

const SearchAppBar = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="nav-stop">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="menu-edit">
                  Home
                </Link>
                <Link to="story" className="menu-edit">
                  Our Story
                </Link>
                <img
                  src="https://oldladygang.com/wp-content/uploads/2017/03/olg-logo-sticky-1.png"
                  style={{
                    padding: "10px 0",
                    width: "20%",
                  }}
                  alt=""
                />
                <Link to="/menu" className="menu-edit">
                  Menu
                </Link>
                <Link to="careers" className="menu-edit">
                  Careers
                </Link>
              </Typography>

              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="slid">
        <div className="back-img">
          <div className="back-head container">
            <h2 className="head-edit">OUR MENU</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
                className="img-edit"
              />
            </div>
            <h2 className="edit-2">
              <strong>
                Please enjoy your time with us! 18% gratuity is included on all
                checks.
              </strong>
            </h2>
            <h2 className="edit-3">
              We know mistakes can happen, & we are always happy to correct any
              errors made by our staff. However, food & drinks that are prepared
              according to our recipe may NOT be returned. This applies to
              everything, from spicy dishes to cocktails. Please inform your
              server if you have a sensitive palate!
            </h2>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-3">
          <div className="all-box">
            <ul className="menu-list">
              <li>
                <h3 className="title-1">Bottled Beer Offerings</h3>
                <p>
                  Stella | Blue Moon | Red Stripe | Corona | Yuengling |
                  Sweetwater 420 | Bud Light | Michelob Ultra | Redd’s Apple Ale
                  | Heineken | Budweiser | Coors Light | Guinness
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>8
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Juice </h3>
                <p>$5 for 8oz pour and $2.50 to add 4oz to a spirit</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>5
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Other Beverages </h3>
                <p>bottled sparkling or flat water, soft drinks, sweet tea</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>5
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Red (Wine) </h3>
                <p>
                  Pinot Noir, Noble Wines 9/31 Malbec, Septima 10/35 Merlot,
                  Tunnel of Elms 8/27 Cabernet, Tunnel of Elms 8/27
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>4
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Sparkling / Rose / Whites (Wines) </h3>
                <p>
                  Prosecco, Cupcake 9/31 Riesling, Chateau Ste. Michelle 10/35
                  Moscato, Piquitos 10/35 Chardonnay, Tunnel of Elms 8/27 Pinot
                  Grigio, Tunnel of Elms 8/27
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>10
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-3">
          <div className="all-box">
            <ul className="menu-list">
              <li>
                <h3 className="title-1">Aunt Nora’s Sneaky Georgia Peach </h3>
                <p>vodka, peach schnapps, peach, pineapple juice</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Momma Joyce’s House Punch </h3>
                <p>
                  coconut rum, peach schnapps, strawberry, pineapple juice,
                  orange juice
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>13
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">OLG Reggae </h3>
                <p>
                  coconut rum, strawberry, pineapple & orange juice, banana
                  liqueur, topped with blue curacaos, and 151 rum
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">OLG Strawberry Margarita </h3>
                <p>
                  hennessy, fresh strawberries, agave, sweet & sour, lime juice
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>17
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Stubborn Atlanta Mule </h3>
                <p>cognac, vodka, lime juice, topped with ginger beer</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">The Housewife </h3>
                <p>
                  patron, fresh lemon & lime, triple sec, agave, topped with
                  soda
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Todd’s Margarita </h3>
                <p>don julio, grand mariner, agave, sweet & sour, lime juice</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>16
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Bottled Beer Offerings</h3>
                <p>
                  Stella | Blue Moon | Red Stripe | Corona | Yuengling |
                  Sweetwater 420 | Bud Light | Michelob Ultra | Redd’s Apple Ale
                  | Heineken | Budweiser | Coors Light | Guinness
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>8
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Bottled Beer Offerings</h3>
                <p>
                  Stella | Blue Moon | Red Stripe | Corona | Yuengling |
                  Sweetwater 420 | Bud Light | Michelob Ultra | Redd’s Apple Ale
                  | Heineken | Budweiser | Coors Light | Guinness
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>8
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slid">
        <div className="back-img-2">
          <div className="back-head container">
            <h2 className="head-edit">STARTERS</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
              />
            </div>
            <h2 className="edit-2">
              <strong>The perfect start to a great meal begins here.</strong>
            </h2>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-3">
          <div className="all-box">
            <ul className="menu-list">
              <li>
                <h3 className="title-1">OLG Signature Wings </h3>
                <p>5 wings fried then grilled, tossed in OLG hot sauce.</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Fried Green Tomatoes </h3>
                <p>topped with pulled bbq chicken and feta cheese.</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>13
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Deep Fried Whipped Deviled Eggs </h3>
                <p>
                  topped with crispy brown sugar bacon + add grilled shrimp for
                  $5.
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>12
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Todd’s Crispy Salmon Bites </h3>
                <p>
                  deep fried salmon bites, served with our house-made cajun
                  remoulade
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slid">
        <div className="back-img-3">
          <div className="back-head container">
            <h2 className="head-edit">SOUTHERN FAVORITES & ENTREES</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
              />
            </div>
            <h2 className="edit-2">
              <strong>
                Big flavor in every bite. Our entrees are as delicious as they
                are diverse.
              </strong>
            </h2>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-3">
          <div className="all-box">
            <ul className="menu-list">
              <li>
                <h3 className="title-1">OLG Signature Wings </h3>
                <p>5 wings fried then grilled, tossed in OLG hot sauce.</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Fried Green Tomatoes </h3>
                <p>topped with pulled bbq chicken and feta cheese.</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>13
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Deep Fried Whipped Deviled Eggs </h3>
                <p>
                  topped with crispy brown sugar bacon + add grilled shrimp for
                  $5.
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>12
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Todd’s Crispy Salmon Bites </h3>
                <p>
                  deep fried salmon bites, served with our house-made cajun
                  remoulade
                </p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>15
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">Mama Sharon’s Seared Crabcake </h3>
                <p>fresh lump crab, served with mango salsa and remoulade</p>
                <span className="prise-tag">
                  <span>
                    <span>$</span>14
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slid">
        <div className="back-img-4">
          <div className="back-head container">
            <h2 className="head-edit">SWEET FINISHES</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
              />
            </div>
            <h2 className="edit-2">
              <strong>
                Satisfy your sweet tooth with one of our desserts here or to go.
              </strong>
            </h2>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-3">
          <div className="all-box">
            <ul className="menu-list">
              <li>
                <h3 className="title-1">Bananas Foster Banana Pudding </h3>

                <span className="prise-tag">
                  <span>
                    <span>$</span>9
                  </span>
                </span>
              </li>
              <li>
                <h3 className="title-1">
                  Kandi’s Peach Cobbler Bread Pudding{" "}
                </h3>

                <span className="prise-tag">
                  <span>
                    <span>$</span>9
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="last-head">
          <div className="last-head-1">
            <div className="last-head-2">
              <h2 className="edit-h2">
                <span>
                  <p className="edit-p">
                    If you have allergies or preferences please alert your
                    server. Not all ingredients are listed in the description.
                  </p>
                  <p style={{ fontSize: "17px" }}>
                    *WE ARE OBLIGED TO TELL YOU THAT CONSUMING RAW OR
                    UNDERCOOKED MEAT, SEAFOOD, or EGGS MAY INCREASE YOUR RISK OF
                    FOODBORNE ILLNESS
                  </p>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Foter></Foter>
    </div>
  );
};
export default SearchAppBar;
