"use client";
import React from "react";
import { quicksand } from "../fonts/allFonts";
import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa6";
import {shopNowTypes} from "./componentsTypes"

const ShopNowCard : React.FC<shopNowTypes>=({heading, image, onclick}) => {
  return (
    <div
      style={{ width: "405px", height: "237px", backgroundColor: "" }}
      className=" rounded-4 box-shadow p-3"
    >
      <span className={`heading fw-7 ${quicksand.className}`}>
        {heading || "Everyday with Our Products"}
      </span>
      <div className="d-flex  w-100 align-items-center justify-content-between px-3">
        <div
          className={`p-2 red rounded-2 text-white  bg-green fw-7${quicksand.className} `}
          onClick={() => onclick()}
        >
          Shop Now
        </div>
        {/* <FaArrowRight /> */}

        <Image
          src={image||
            "https://media.istockphoto.com/id/1496008525/photo/onion-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=ZIFBFZ0yLtpyABlyF6HkEqbvort0vZD6qlmxG5R0VSs="
          }
          alt="fresh product"
          height={120}
          width={150}
        />
      </div>
    </div>
  );
};

export default ShopNowCard;
