import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { footerContent } from ".././utiils.functions";
import { lato, quicksand } from "../fonts/allFonts";

const Footer2 = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <span className="small-gray-text fw-7 green-text ps-1">
          Created By Saba Atta
        </span>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className="d-flex flex-wrap flex-column justify-content-between align-items-around  py-4">
      <div className="d-flex  flex-wrap justify-content-around
      justify-content-betwwn
       px-3 ">
        <div className="d-flex flex-column ">
          <Image src={logo} height={50} width={150} alt="logo" />

          {[
            "Awesome grocery store website template",
            "Address: 5171 W Campbell Ave",
            "Call Us:(+91) - 540-025-124553",
            "Email:sale@Nest.com",
            "Hours:10:00 - 18:00, Mon - Sat",
          ].map((item, index) => (
            <span
              key={index}
              className={`${lato.className} fw-5 p-1`}
              style={{ color: "#253D4E", fontSize: "15px" }}
            >
              {item}
            </span>
          ))}
        </div>
        {footerContent?.map((item, index) => {
          return (
            <div className="d-flex flex-column " key={index}>
              <span
                className={`${quicksand.className} fw-7 p-1`}
                style={{ color: "#253D4E", fontSize: "20px" }}
              >
                {item?.heading}
              </span>

              {item?.subHeadings?.map((item2, index2) => {
                return (
                  <span
                    className={`${lato.className} fw-5 p-1`}
                    style={{ color: "#253D4E", fontSize: "15px" }}
                  >
                    {item2?.name}
                  </span>
                );
              })}
            </div>
          );
        })}

        <div className="d-flex flex-column ">
          <span
            className={`${quicksand.className} fw-7 p-1`}
            style={{ color: "#253D4E", fontSize: "20px" }}
          >
            Install App
          </span>

          <span
            className={`${lato.className} fw-5 p-1`}
            style={{ color: "#253D4E", fontSize: "15px" }}
          >
            Play Store
          </span>
        </div>
      </div>
      <hr />
      <div className="">
        <Footer2 />
      </div>
    </div>
  );
};

export default Footer;
