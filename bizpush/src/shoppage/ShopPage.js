import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Image3 from "../images/Image3.png";
import Image4 from "../images/Image4.png";
import Image5 from "../images/Image5.png";
import Image6 from "../images/Image6.png";
import Image7 from "../images/Image7.png";
import Image8 from "../images/Image8.png";
import Image9 from "../images/Image9.png";
import Image10 from "../images/Image10.png";
import Image11 from "../images/Image11.png";
import Image12 from "../images/Image12.png";
import InnerNav from "./InnerNav";

const MyCard = () => {
  const [state, setState] = useState([
    {
      image: Image1,
      heading: "Apple Air Pods 2",
      price: "$600",
    },
    {
      image: Image2,
      heading: "Samsung Smart Watch",
      price: "$600",
    },
    {
      image: Image3,
      heading: "Apple Monitor Pro",
      price: "$600",
    },
    {
      image: Image4,
      heading: "Apple Watch Series 4",
      price: "$600",
    },
    {
      image: Image5,
      heading: "Google Pixel 4 XL",
      price: "$600",
    },
    {
      image: Image6,
      heading: "Amazon Smart Speaker",
      price: "$600",
    },
    {
      image: Image7,
      heading: "Apple MacBook Pro 16",
      price: "$600",
    },
    {
      image: Image8,
      heading: "Apple iPad 10.2",
      price: "$600",
    },
    {
      image: Image9,
      heading: "Microsoft Surface Book",
      price: "$600",
    },
    {
      image: Image10,
      heading: "Google Nest",
      price: "$600",
    },
    {
      image: Image11,
      heading: "Apple iMac Pro ",
      price: "$600",
    },
    {
      image: Image12,
      heading: "Samsung Smart Watch",
      price: "$600",
    },
  ]);
  return (
    <div>
      <InnerNav />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "149px",
          marginTop: "13px",
          width: "1110px",
          height: "1110px",
        }}
      >
        {state.map((item, i) => {
          return (
            <Card className={`shop_card ${i > 3 && "card_top"}`}>
              <div
                className="position-absolute ml-2"
                style={{ marginTop: "-7px" }}
              >
                <input
                  type="checkbox"
                  className="rounded-checkbox"
                  id="myCheckbox"
                />
                <label htmlFor="myCheckbox"></label>
              </div>
              <Card.Img variant="top" src={item.image} className="shop_prod" />
              <Card.Body>
                <Card.Title className="shop_prod_head">
                  {item.heading}
                </Card.Title>
                <Button className="shop_prod_btn" variant="primary">
                  {item.price}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyCard;
