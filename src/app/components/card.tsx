import React from "react";
import "./component.css";
import Image from "next/image";
import snaks from "../../assets/snaks.png";
import greencart from "../../assets/greencart.png";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import {ProductCardTypes} from "./componentsTypes"
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700", "400", "500"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "100", "900"],
});

const ProductCard: React.FC<ProductCardTypes> =({
  status,
  image,
  ratingNo,
  basePrice,
  offerPrice,
  companyName,
  productName,
  starsRating,
  productNickName,
}) => {
  console.log(
    status,
    image,
    ratingNo,
    basePrice,
    offerPrice,
    companyName,
    productName,
    starsRating,
    productNickName
  );
  return (
    <div className="b-gray col-3 card-size d-flex flex-column rounded-4">
      <div className="card-status">Hot</div>

      <div className="d-flex align-items-center justify-content-center w-100">
        <Image alt="product img" src={snaks} width={181} height={181} />
      </div>

      <div className=" d-flex-flex-column p-3">
        <span className="small-gray-text fw-4">Snack</span>
        <div className={quicksand.className}>
          <h1 className="card-heading-text fw-7">
            Seeds of Change Organic Quinoe
          </h1>
        </div>
        <div className="d-flex w-100 ">
          <span style={{ color: "yellow", fontSize: "16px" }}> ★</span>
          <span style={{ color: "yellow", fontSize: "16px" }}> ★</span>
          <span style={{ color: "yellow", fontSize: "16px" }}> ★</span>
          <span style={{ color: "yellow", fontSize: "16px" }}> ★</span>
          <span style={{ color: "yellow", fontSize: "16px" }}> ★</span>
          <span
            className="ps-3"
            style={{ color: "#B6B6B6", fontSize: "14px", fontFamily: "Lato" }}
          >
            {" "}
            (4.0)
          </span>
        </div>
        <div className="d-flex w-100 ">
          <span className="small-gray-text fw-4">By</span>
          <span className="small-gray-text fw-7 green-text ps-1">NestFood</span>
        </div>
        <div className="d-flex w-100 align-items-center justify-content-between ">
          <span
            className={`fw-9 green-text ps-0 ${quicksand.className}`}
            style={{ fontSize: "18px" }}
          >
            $28.85
          </span>

          
          <span
            className={`fw-9 gray-text ps-0 ${quicksand.className}`}
            style={{
              fontSize: "14px",
              color: "#ADADAD",
              textDecoration: "line-through",
            }}
          >
            $32.0
          </span>

          <div
            className=" light-bg-green d-flex align-items-center justify-content-center rounded-1"
            style={{ height: "36px", width: "84px", gap: "3px" }}
          >
            <Image src={greencart} height={23} width={20} alt="Green cart" />
            <span
              className={`fw-9 green-text ps-0 ${lato.className}`}
              style={{ fontSize: "14px" }}
            >
              Add
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
