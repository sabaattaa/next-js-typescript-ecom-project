import Image from "next/image";
import React from "react";
import { lato, quicksand } from "../fonts/allFonts";
import women from "../../assets/women.png";
import { Heading } from "../components/heading";

const Page = () => {
  return (
    <div className="p-3">
      <section className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
        <Image
          src={women}
          alt="Women Image"
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <div className="d-flex flex-column justify-content-center align-items-center p-3">
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
                style={{ maxWidth: "30%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="red d-flex flex-column">
        <Heading heading={"What We Provide?"} />
      </section>
    </div>
  );
};

export default Page;
