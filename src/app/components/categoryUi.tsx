import Image from "next/image";
import React from "react";
import { quicksand } from "../fonts/allFonts";
import milk from "../../assets/milk.png";

const CategoryUi = () => {
  return (
    <div
      className=" d-flex flex-column
      
    align-items-center justify-content-center px-3  
      rounded-3
      
      "
      style={{
        width: "178px",
        height: "215px",
        backgroundColor: "#F4F6FA",
        gap: "10px",
      }}
    >
      <Image src={milk} alt="category" />
      <span
        className={`
          ${quicksand.className}
fw-7 
          `}
        style={{ fontSize: "16px", textAlign: "center" }}
      >
        Milks and Dairies
      </span>
    </div>
  );
};

export default CategoryUi;
