"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { lato } from "../fonts/allFonts";

type buttonTypes = {
  text: string;
  btnType?: "button" | "submit" | "reset";
  img?: StaticImageData;
  onclick: () => void;
};

const ButtonG: React.FC<buttonTypes> = ({ img, text, btnType, onclick }) => {
  const handleClick = () => {
    if (onclick) {
      onclick(); // Call the passed function if it exists
    } else {
      console.log("No function passed in props");
    }
  };
  return (
    <button
      type={btnType || "button"}
      onClick={handleClick}
      style={{ height: "36px", gap: "3px" }}
      className=" input-field  light-bg-green d-flex align-items-center justify-content-center rounded-1 w-100"
    >
      {img && <Image src={img} height={23} width={20} alt="Green cart" />}
      <span
        className={`fw-9 green-text ps-0 ${lato.className}`}
        style={{ fontSize: "14px" }}
      >
        {text}
      </span>
    </button>
  );
};

export default ButtonG;
