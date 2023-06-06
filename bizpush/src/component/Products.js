import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import dashbaord_shoes from "../images/dashboard_shoes.png";
import shoes2 from "../images/shoes2.png";
import shoes3 from "../images/shoes3.png";
import shoes4 from "../images/shoes4.png";

const Products = () => {
  const [state, setState] = useState([
    {
      image: dashbaord_shoes,
      rating: "(11.6k Reviews)",
      product: "Nike Running Shoe",
      price: "$100",
      discount: "500 Sold Out",
    },
    {
      image: shoes2,
      rating: "(11.6k Reviews)",
      product: "Nike Shoe Airmax",
      price: "$115",
      discount: "100 Sold Out",
    },
    {
      image: shoes3,
      rating: "(11.6k Reviews)",
      product: "Jordan Sneaker",
      price: "$50",
      discount: "1500 Sold Out",
    },
    {
      image: shoes4,
      rating: "(11.6k Reviews)",
      product: "Nike Running Shoe 2",
      price: "$220",
      discount: "210 Sold Out",
    },
  ]);
  return (
    <div style={{ marginTop: "232px", marginLeft: "165px" }}>
      <h1 className="mainhead_prod">Popular Products</h1>
      <div style={{ display: "flex" }}>
        {state.map((item, i) => {
          return (
            <Card
              style={{
                display: "flex",
                width: "277px",
                height: "293px",
                background: "none",
                marginRight: "28px",
                border: "0.93px solid",
                borderImageSource:
                  "linear-gradient(144.76deg, rgba(166, 20, 115, 0.33) -0.67%, #FFFFFF 43.53%, rgba(5, 242, 242, 0.37) 88.65%)",
              }}
            >
              <div className="img_product_div">
                <AiOutlineHeart className="like_prod" />
                <Card.Img
                  variant="top"
                  className="product_img"
                  src={item.image}
                />
              </div>
              <Card.Body style={{ marginTop: "185px" }}>
                <div className="rating" style={{ display: "flex" }}>
                  <FaStar className="rating_star" />
                  <Card.Text className="rating_text">{item.rating}</Card.Text>
                </div>
                <Card.Text className="head_txt">{item.product}</Card.Text>
                <div style={{ display: "flex" }}>
                  <Card.Text className="price">{item.price}</Card.Text>
                  <Card.Text className="discount">{item.discount}</Card.Text>
                  <Button className="product_btn">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
