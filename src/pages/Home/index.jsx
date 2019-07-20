import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faTruck,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

const Home = props => (
  <>
    <section className="hero-img">
      <div className="border-box">
        <div className="title-box">
          <h2 className="title"> Minimal Shine </h2>
          <p className="heading"> Your minimalistic accessory shop</p>
          <button className="title-button">discover now</button>
        </div>
      </div>
    </section>

    <section className="menu">
      <div className="menu-1">
        <p className="menu-text"> free shipping</p>
        <p className="menu-text-2">free international shipping</p>
        <FontAwesomeIcon className="menu-icon" icon={faTruck} />
      </div>
      <div className="menu-2">
        <p className="menu-text"> fast delivery</p>
        <p className="menu-text-2">2-3 days local delivery</p>
        <FontAwesomeIcon className="menu-icon" icon={faBell} />
      </div>
      <div className="menu-3">
        <p className="menu-text"> free returns</p>
        <p className="menu-text-2">one month free return</p>
        <FontAwesomeIcon className="menu-icon" icon={faShoppingBag} />
      </div>
    </section>
    <section className="home-grid">
        <div className="grid">

        </div>
        <div className="grid-window1"></div>
        <div className="grid-window2"></div>

    </section>
  </>
);

export default Home;
