"use client";
import React, { useState } from "react";
import backveg from "../../assets/backveg.png";
import Image from "next/image";
import { lato, quicksand } from "../fonts/allFonts";
import greencart from "../../assets/greencart.png";
import ProductCard from "../components/card";
import { Heading } from "../components/heading";

const Page = () => {
  const [count, setCount] = useState(1);
  const [proPrice, setProPrice] = useState(5);
  const [price, setPrice] = useState(proPrice);
  const handleIncrement = (buttonType: any) => {
    buttonType == "minus"
      ? setCount(count > 1 ? count - 1 : 1)
      : setCount(count + 1);

    setPrice(proPrice * count);
  };
  return (
    <div className=" px-3">
      <section>
        <div className="d-flex  flex-column flex-sm-row  gap-15">
          <div className="w-100 w-md-50 d-flex  justify-content-center align-items-center">
            <Image
              src={backveg}
              alt="Product iamge"
              // style={{ height: "30%", width: "40%", objectFit: "contain" }}
            />{" "}
          </div>

          <div className="d-flex w-100 w-md-50 flex-column  flex-wrap  justify-content-center align-items-centerd ">
            <span
              className={`${quicksand.className} green-text  fw-7 mt-1`}
              style={{ fontSize: "22px" }}
            >
              {" "}
              Vegitable, cocombar, palak muli gajjar{" "}
            </span>
            <span>Product description will here </span>
          </div>

          <div className="d-flex  w-100 w-md-50 flex-column  flex-wrap  justify-content-center align-items-centerd ">
            <span
              className={`${quicksand.className} fw-5 mt-1`}
              style={{ fontSize: "20px" }}
            >
              {" "}
              Price: ${price}
            </span>
            <span
              className={`${quicksand.className} mt-1 fw-4 gray-text align-items-center `}
              style={{ fontSize: "18px" }}
            >
              Quantity
            </span>
            <div className="d-flex w-100  gap-15 justify-content-around b-gray mt-1 rounded-3">
              <span
                className={`${quicksand.className} fw-7 light-bg-green green-text align-items-center  p-2 px-3`}
                style={{ fontSize: "24px", padding: "3px 10 3px 10px" }}
                onClick={() => handleIncrement("minus")}
              >
                -
              </span>
              <span
                className={`${quicksand.className}  fw-7 green-text b-`}
                style={{ fontSize: "18px", margin: "auto" }}
              >
                {count}
              </span>
              <span
                className={`${quicksand.className} fw-7 light-bg-green green-text  `}
                style={{ fontSize: "24px", padding: "3px 10px 3px 10px" }}
                onClick={() => handleIncrement("add")}
              >
                +
              </span>
            </div>

            <div className=" mt-2 light-bg-green d-flex align-items-center justify-content-center rounded-1 p-2">
              <Image src={greencart} height={23} width={20} alt="Green cart" />
              <span
                className={`fw-9 green-text ps-2 ${lato.className}`}
                style={{ fontSize: "16px" }}
              >
                Add
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="mt-2">
        <Heading heading={"More Products"} />
        <div className=" d-flex flex-wrap gap-20 justify-content-center align-items-center">
          <ProductCard
            status={"Hot"}
            image={""}
            ratingNo={3}
            basePrice={4}
            offerPrice={5}
            companyName={""}
            productName={""}
            starsRating={6}
            productNickName={""}
          />{" "}
          <ProductCard
            status={"Hot"}
            image={""}
            ratingNo={3}
            basePrice={4}
            offerPrice={5}
            companyName={""}
            productName={""}
            starsRating={6}
            productNickName={""}
          />{" "}
          <ProductCard
            status={"Hot"}
            image={""}
            ratingNo={3}
            basePrice={4}
            offerPrice={5}
            companyName={""}
            productName={""}
            starsRating={6}
            productNickName={""}
          />{" "}
          <ProductCard
            status={"Hot"}
            image={""}
            ratingNo={3}
            basePrice={4}
            offerPrice={5}
            companyName={""}
            productName={""}
            starsRating={6}
            productNickName={""}
          />{" "}
          <ProductCard
            status={"Hot"}
            image={""}
            ratingNo={3}
            basePrice={4}
            offerPrice={5}
            companyName={""}
            productName={""}
            starsRating={6}
            productNickName={""}
          />{" "}
        </div>
      </section>
    </div>
  );
};

export default Page;
