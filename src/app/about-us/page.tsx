"use client";
import "./about.css";
import React from "react";
import Image from "next/image";
import women from "../../assets/women.png";
import { Heading } from "../components/heading";
import aboutGirl from "../../assets/about-5.png";
import { provideCard } from "../utiils.functions";
import { lato, quicksand } from "../fonts/allFonts";
import { ProvideCard } from "../components/provideCard";

type aboutUsCardTypes = {
  heading: string;
  text: string;
};
const AboutUsCard: React.FC<aboutUsCardTypes> = ({ heading, text }) => {
  return (
    <div
      className="
      p-md-3
    col-12
    col-sm-6
    col-md-4 "
    >
      <span
        style={{
          fontSize: "32px",
          fontWeight: "700",
          fontFamily: quicksand.className || "sans-serif",
          color: "#253D4E",
        }}
      >
        {heading}
      </span>
      <p className="gray-text">{text}</p>
    </div>
  );
};

const Page = () => {
  return (
    <div className="p-3">
      <section className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
        <div className="d-flex w-100 w-md-50 flex-column justify-content-center align-items-center p-3">
          <Image
            src={women}
            alt="Women Image"
            width={500}
            height={300}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="d-flex  w-100 w-md-50 flex-column justify-content-center align-items-center p-3">
          <h2 className={`${quicksand.className} fw-7`}> Welcome to Nest</h2>

          <p
            className={`${lato.className} gray-text text-center`}
            style={{ fontSize: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p
            className={`${lato.className} gray-text text-center mt-3`}
            style={{ fontSize: "16px" }}
          >
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>

          <div
            className="d-flex flex-wrap w-100  justify-content-center"
            style={{
              gap: "20px",
              //   maxWidth: "30%"
            }}
          >
            {[women, women, women].map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="Women Image"
                //   width={80}
                //   height={200}
                style={{ maxWidth: "29%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className=" d-flex flex-column align-items-center justify-content-center mt-3 mt-md-4 ">
        <Heading heading={"What We Provide?"} />
        <div className="d-flex flex-wrap  gap-15  align-items-center justify-content-center">
          {provideCard.map((item, index) => (
            <ProvideCard
              img={item.img}
              heading={item.heading}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="mt-4 d-flex flex-column flex-md-row justify-content-center">
        <div className="p-md-3 w-100 w-md-50  d-flex flex-column flex-md-row justify-content-center">
          <Image
            src={aboutGirl}
            alt=""
            className=""
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="w-100 w-md-50 p-md-3  d-flex flex-column justify-content-center align-items-center">
          <span className=" mt-3 small-gray-text gray-text fw-4 d-flex">
            Our performance
          </span>
          <Heading
            heading="Your Partner for e-
commerce grocery
solution"
          />
          <span className="mt-3 small-gray-text gray-text fw-4 d-flex">
            Our Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </span>
          <span className="mt-3 gray-text small-gray-text fw-4 d-flex">
            Our Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </span>
        </div>
      </section>
      <section className="d-flex flex-wrap ">
        {[
          {
            heading: "Who we are",
            text: `Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.`,
          },
          {
            heading: "Our mission",
            text: `Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.`,
          },
          {
            heading: "Our history",
            text: `Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.`,
          },
        ].map((item, index) => {
          return (
            <AboutUsCard key={index} heading={item.heading} text={item.text} />
          );
        })}
      </section>
      <section className="mt-4 d-flex flex-wrap justify-content-center justify-content-md-between   men-bg py-5 px-1">
        <div className="darkbg"></div>
        {[
          { count: "0", text: "Glorious years" },
          { count: "12", text: "Happy clients" },
          { count: "23", text: "Projects complete" },
          { count: "34", text: "Team advisor" },
          { count: "65", text: "Products Sale" },
        ].map((item, index) => (
          <div
            key={index}
            className=" d-flex align-items-center  justify-content-center flex-wrap
          
flex-column
       p-2
          "
            style={{ zIndex: "1" }}
          >
            <span
              className={`text-white fw-7 p-0 ${quicksand.className}`}
              style={{
                fontSize: "72px",
              }}
            >
              {item.count}+
            </span>
            <span
              className={`text-white fw-7 p-0 ${quicksand.className}`}
              style={{
                fontSize: "24px",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
