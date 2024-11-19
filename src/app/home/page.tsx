"use client";
import React from "react";
import {
  SidebarBox1,
  SidebarBox2,
  SidebarBox3,
} from "../components/sidebarBox";

import { quicksand } from ".././fonts/allFonts";
import ProductCard from "../components/card";
import DealsCard from "../components/dealsCard";
import ShopNowCard from "../components/shopNowCard";
import CategoryUi from "../components/categoryUi";
import { categories, productsList } from "../utiils.functions";
import men from "../../assets/men.png";
import Image from "next/image";
const Page = () => {
  return (
    <div className="row pt-4 px-3 px-md-0">
      <div
        className="col-12 col-md-3 d-flex flex-column flex-md-column"
        style={{ gap: "30px" }}
      >
        <SidebarBox1 />
        <SidebarBox2 />
        <SidebarBox3 />
      </div>

      <div className="col-12 col-md-9 pe-md-4  ">
        <div
          className="col-12 bg-amazing  px-2 d-flex align-items-center justify-content-center  flex-column"
          style={{ gap: "20px" }}
        >
          {" "}
          <h2 className="amazing-grocery">Don’t miss amazing grocery deals</h2>
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

        <div
          className="d-flex flex-column flex-xl-row  align-items-center justify-content-between w-100"
          style={{ height: "137px" }}
        >
          <span className={`heading fw-7 ${quicksand.className}`}>
            Popular Products
          </span>

          <div
            className="d-flex align-items-center justify-content-between flex-wrap  "
            style={{ gap: "10px" }}
          >
            <span
              className={`green-text fw-6 ${quicksand.className}`}
              style={{ cursor: "pointer" }}
            >
              All
            </span>
            {categories?.map((item, index) =>
              index < 7 ? (
                <span
                  className={` fw-6 ${quicksand.className}`}
                  key={index}
                  style={{ color: "#253D4E", cursor: "pointer" }}
                >
                  {item?.option}
                </span>
              ) : null
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between red">
          {productsList.map((item: any, index: any) => (
            <ProductCard
              producrId={index}
              key={index}
              status={"Hot"}
              image={""}
              ratingNo={3}
              basePrice={item.price}
              offerPrice={5}
              companyName={""}
              productName={item?.productName}
              starsRating={6}
              productNickName={""}
            />
          ))}
        </div>

        <div
          className="d-flex align-items-center justify-content-between "
          style={{ height: "137px" }}
        >
          <span className={`heading fw-7 ${quicksand.className}`}>
            Deals Of The Day
          </span>
        </div>
        <div
          className="d-flex flex-wrap align-items-centerc justify-content-between "
          style={{ height: "360px", gap: "10px" }}
        >
          <DealsCard />
          <DealsCard />
          <DealsCard />
        </div>

        <section
          className="d-flex  flex-wrap flex-md-nowrap align-items-centerc justify-content-between    "
          style={{ marginTop: "10px" }}
        >
          <ShopNowCard
            heading=""
            image=""
            onclick={() => {
              console.log("im 1st card");
            }}
          />
          <ShopNowCard
            heading=""
            image=""
            onclick={() => {
              console.log("im 2st card");
            }}
          />
          <ShopNowCard
            heading=""
            image=""
            onclick={() => {
              console.log("im 3st card");
            }}
          />
        </section>
      </div>

      <section className="d-flex flex-column px-3 " style={{ gap: "68px" }}>
        <section className="d-flex align-items-centerc justify-content-between  flex-column  ">
          <div
            className="d-flex align-items-center justify-content-between "
            style={{ height: "137px" }}
          >
            <span className={`heading fw-7 ${quicksand.className}`}>
              Shop by Categories
            </span>
          </div>

          <div
            className="d-flex flex-wrap align-items-center justify-content-between "
            style={{ gap: "10px" }}
          >
            <CategoryUi />
            <CategoryUi />
            <CategoryUi />
            <CategoryUi />
            <CategoryUi />
            <CategoryUi />
          </div>
        </section>

        <section className="d-flex flex-wrap w-100 align-items-center justify-content-between ">
          <SidebarBox3 />
          <SidebarBox3 />
          <SidebarBox3 />
          <SidebarBox3 />
        </section>

        <section
          className="light-bg-green d-flex flex-column flex-md-row  align-items-center rounded-4"
          style={{ height: "349px" }}
        >
          <div
            className="px-3 w-50  d-flex flex-column align-items-start"
            style={{ gap: "30px" }}
          >
            <span className={`heading fw-7 ${quicksand.className}`}>
              Stay home and get your daily needs from our shop
            </span>
            <div className="d-flex w-100 ">
              <span className="small-gray-text fw-4">
                Start You&apos;r Daily Shopping with{" "}
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
      </section>
    </div>
  );
};

export default Page;
