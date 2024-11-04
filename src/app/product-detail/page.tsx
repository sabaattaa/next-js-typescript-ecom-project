import Image from 'next/image';
import React from 'react'
import { quicksand } from '../fonts/allFonts';
import men from "../../assets/men.png";

const ProductDetail = () => {
  return (
    <div>
      <section
        className="light-bg-green d-flex flex-column flex-md-row  align-items-center rounded-4"
        style={{ height: "349px" }}
      >
        <div
          className="px-3 w-50  d-flex flex-column align-items-start"
          style={{ gap: "30px" }}
        >
          <span className={`heading fw-7 ${quicksand.className}`}>
            Stay home & get your daily needs from our shop
          </span>
          <div className="d-flex w-100 ">
            <span className="small-gray-text fw-4">
              Start You'r Daily Shopping with{" "}
            </span>
            <span className="small-gray-text fw-7 green-text ps-1">
              Nest Mart
            </span>
          </div>
          <div className="ps-3 rounded-5 d-flex b-gray bg-white">
            <input
              placeholder="Type your email"
              style={{ outline: "none", border: "none" }}
            />
            <div className="p-3 rounded-5 d-flex text-white  bg-green">
              Subscribe
            </div>
          </div>
        </div>
        <div className="w-50 h-100 d-none  d-md-flex align-items-end justify-content-end position-relative">
          <Image
            src={men}
            alt="vegetable men"
            height={300}
            className="position-absolute bottom-0 end-0"
          />
        </div>
      </section>
    </div>
  );
}

export default ProductDetail
