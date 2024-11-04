import React from "react";
import backveg from "../../assets/backveg.png";
import { quicksand, lato } from "../fonts/allFonts";
import greencart from "../../assets/greencart.png";
import Image from "next/image";

const DealsCard = () => {
  return (
    <div
      className="deals-card-size  d-flex align-items-center justify-content-center position-relative  flex-column rounded-3"
      style={{ backgroundImage: `url(${backveg.src})` }}
      // style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="d-flex" style={{ gap: "14px" }}>
        <div
          style={{
            height: "65px",
            width: "48px",
            backgroundColor: "white",
          }}
          className="d-flex align-items-center justify-content-center flex-column rounded-2"
        >
          <span
            className={`green-text fw-5 ${quicksand.className}`}
            style={{ fontSize: "20px" }}
          >
            357
          </span>
          <span
            className={`fw-5 ${lato.className}`}
            style={{ fontSize: "16px", color: "#7E7E7E" }}
          >
            Days
          </span>
        </div>
        <div
          style={{
            height: "65px",
            width: "48px",
            backgroundColor: "white",
          }}
          className="d-flex align-items-center justify-content-center flex-column rounded-2"
        >
          <span
            className={`green-text fw-5 ${quicksand.className}`}
            style={{ fontSize: "20px" }}
          >
            357
          </span>
          <span
            className={`fw-5 ${lato.className}`}
            style={{ fontSize: "16px", color: "#7E7E7E" }}
          >
            Days
          </span>
        </div>{" "}
        <div
          style={{
            height: "65px",
            width: "48px",
            backgroundColor: "white",
          }}
          className="d-flex align-items-center justify-content-center flex-column rounded-2"
        >
          <span
            className={`green-text fw-5 ${quicksand.className}`}
            style={{ fontSize: "20px" }}
          >
            357
          </span>
          <span
            className={`fw-5 ${lato.className}`}
            style={{ fontSize: "16px", color: "#7E7E7E" }}
          >
            Days
          </span>
        </div>{" "}
        <div
          style={{
            height: "65px",
            width: "48px",
            backgroundColor: "white",
          }}
          className="d-flex align-items-center justify-content-center flex-column rounded-2"
        >
          <span
            className={`green-text fw-5 ${quicksand.className}`}
            style={{ fontSize: "20px" }}
          >
            357
          </span>
          <span
            className={`fw-5 ${lato.className}`}
            style={{ fontSize: "16px", color: "#7E7E7E" }}
          >
            Days
          </span>
        </div>
      </div>

      <div
        className=" d-flex-flex-column p-3  bg-white rounded-3 position-absolute box-shadow"
        style={{ width: "256px", bottom: "-85px" }}
      >
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

export default DealsCard;
