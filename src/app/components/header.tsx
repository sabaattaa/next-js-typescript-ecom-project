import Image from "next/image";
import { DropdownC } from "./dropdown";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import circle from "../../assets/circle.png";
import { currancy } from "../utiils.functions";
import account from "../../assets/account.png";
import { language } from "../utiils.functions";
import { categories } from "../utiils.functions";
import location from "../../assets/location.png";
import { headerCompare } from "../utiils.functions";
import { tobHeadreContent } from "../utiils.functions";
import { tobHeadreContent3 } from "../utiils.functions";

const iconImg = [circle, heart, cart, account];

const TopHeader = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center b-bottom-gray">
      <div className="d-inline-flex justify-content-start align-items-center flex-wrap mb-2 mb-md-0 py-2">
        {tobHeadreContent?.map((item, index) => (
          <span className="px-2 h-about py-2" key={index}>
            {item?.text}
          </span>
        ))}
      </div>
      <span className="px-2 h-about py-3 text-center text-md-start">
        100% Secure delivery without contacting the courier
      </span>
      <div className="d-inline-flex justify-content-end align-items-center flex-wrap">
        <span className="gray-text">
          Need help? Call Us:
          <span className="green-text"> +1800 900</span>
        </span>
        <span className="gray-text ps-2">|</span>
        <DropdownC text={"English"} optionsArray={language} />
        <span className="gray-text">|</span>
        <DropdownC text={"USD"} optionsArray={currancy} />
      </div>
    </div>
  );
};

const TopHeader2 = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center  py-2">
      <a href={"/home"}>
        {" "}
        <Image src={logo} height={50} width={200} alt="logo" />
      </a>
      <div className=" row g-0 p-0 align-items-center green-border rounded-1  justify-content-between">
        <div className="col-auto ">
          <DropdownC text={"All Categories"} optionsArray={categories} />
        </div>

        <div className="col-auto ">
          <div className="input-group  w-10">
            <input
              type="text"
              className="form-control border-0  outline-none border-none "
              placeholder="Search..."
            />{" "}
            <span className="input-group-text border-0 ">
              <i className="bi bi-search border-0 "></i>
            </span>
          </div>
        </div>
      </div>

      <div className="col-auto b-gray rounded-1">
        <DropdownC
          icon={
            <Image
              src={location}
              alt="Location Icon"
              height={20}
              width={20}
              className="mb-1 pe-1"
            />
          }
          text={"Your Location"}
          style={{ color: "#3BB77E" }}
          optionsArray={categories}
        />
      </div>
      <div className="row ">
        {headerCompare?.map((item, index) => (
          <div className="row col-auto" key={index}>
            <div
              key={index}
              className="position-relative col-auto              
               d-flex align-items-end justify-content-end
              "
            >
              <Image
                src={iconImg[index]}
                height={30}
                width={30}
                alt="logo"
                style={{ objectFit: "none" }}
              />

              <span
                className="position-absolute bg-green rounded-5 text-white p-1 d-flex align-items-center justify-content-center"
                style={{
                  fontSize: "9px",
                  left: "30px",
                  top: "-8px",
                  height: "20px",
                  width: "20px",
                }}
              >
                20
              </span>
              <span className="garyText">{item?.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TopHeader3 = () => {
  return (
    <div className="container-fluid d-flex flex-wrap  justify-content-between align-items-center  b-gray py-3">
      {tobHeadreContent3?.map((item, index) =>
        item?.type === "dropdown" ? (
          <div className="" key={index}>
            <DropdownC
              text={item?.text}
              optionsArray={item?.categories ?? []}
              style={{
                backgroundColor: index == 0 ? "#3BB77E" : "",
                color: index == 0 ? "#ffff" : "#7E7E7E",
                padding: index == 0 ? "5px" : "0px",
              }}
            />
          </div>
        ) : (
          <a href={item?.link}>
            <div className="col-auto gray-text" key={index}>
              {item?.text}
            </div>
          </a>
        )
      )}
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <TopHeader />
      <TopHeader2 />
      <TopHeader3 />
    </>
  );
};
