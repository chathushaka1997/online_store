import React from "react";
import deafultImage from "../../assests/images/defaultImage.png";
import "./Products.css";

const ProductSkeletonLoading = ({ cardsNumber = 0 }) => {
  const createCards = () => {
    const cards = []
    for (let index = 0; index < cardsNumber; index++) {
      cards.push(
        <div className="col-6 col-md-4 col-lg-3 product-container" key={index}>
          <div className="sub-container">
            <img className="placeholder" src={deafultImage} alt={"Default image"} />
            <div className="details-container p-2 ">
              <p className="title placeholder text-truncate w-75"></p>
              <br />
              <p className="price placeholder fw-bold w-50" style={{ width: "50px" }}></p>
              <span className="ratings"></span>
            </div>
          </div>
        </div>
      );
    }
    return cards
  };
  return <div className="row placeholder-glow">{createCards()}</div>;
};

export default ProductSkeletonLoading;
