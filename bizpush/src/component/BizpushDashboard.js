import React from "react";

import NavBar from "./Nav";
import Card from "react-bootstrap/Card";
import dashboard_shoes from "../images/dashboard_shoes.png";
import arrow from "../images/arrow.png";
import Design from "../images/Design.png";
import star from "../images/star.png";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

const BizpushDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash_main_nav">
      <NavBar />
      <div>
        <div>
          <h1 className="dash_head">PURCHASE YOUR SHOES NOW.</h1>
          <p className="dash_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            possimus soluta autem enim vel voluptatibus suscipit!
          </p>
          <button
            className="dash_btn"
            onClick={() => {
              navigate("/shoppage");
            }}
          >
            Shop Now
          </button>
          <img src={arrow} className="arrow_sign" />
          <img src={star} className="star_rating" />
          <p className="star_para">(11.6k Total Review)</p>
        </div>

        <img src={dashboard_shoes} className="shoesdash_img" />
        <img src={Design} className="design_img" />
      </div>

      <Card className="card_dash">
        <Card.Body>
          <Card.Title className="card_title">GET UPTO 30% OFF</Card.Title>
          <Card.Text className="card_text">
            You can get 30% off this product if you are buying now
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default BizpushDashboard;
