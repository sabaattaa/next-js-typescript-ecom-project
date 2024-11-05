import Image from "next/image";
import { sidebarCardContent } from "../utiils.functions";
import category1 from "../../assets/category-1.svg.png";
import category2 from "../../assets/category-2.png";
import category3 from "../../assets/category-3.png";
import category4 from "../../assets/category-4.svg.png";
import category5 from "../../assets/category-5.png";
import mango from "../../assets/mango.png";

const categoryImages = [category1, category2, category3, category4, category5];

export const SidebarBox1 = () => {
  return (
    <div
      className=" b-gray rounded-2 column b-gray p-4"
      // style={{ minWidth: "18rem" }}
    >
      <h4>Category</h4>
      <div className="bg-green " style={{ height: "2px", width: "35%" }}></div>
      <div
        className="w-100 "
        style={{ height: "1px", border: "1px solid #ECECEC" }}
      ></div>

      {sidebarCardContent?.map((item, index) => (
        <div
          key={index}
          className="mt-3 d-flex align-items-center justify-content-between py-2 px-3 rounded-2 b-gray"
        >
          <Image src={categoryImages[index]} alt="categri images" />
          <div className=" d-flex align-items-center justify-content-start w-100 ps-3">
            {item.text}
          </div>
          <span
            className="rounded-5 text-black  p-1 d-flex align-items-center justify-content-center"
            style={{
              fontSize: "12px",
              height: "25px",
              width: "25px",
              backgroundColor: "#BCE3C9",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "1 / 1",
            }}
          >
            {item?.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export const SidebarBox2 = () => {
  return (
    <div
      className=" b-gray rounded-2 column b-gray p-4"
      // style={{ minWidth: "18rem" }}
    >
      <h4>Fill by price</h4>
      <div className="bg-green " style={{ height: "2px", width: "35%" }}></div>
      <div
        className="w-100 "
        style={{ height: "1px", border: "1px solid #ECECEC" }}
      ></div>

      <input
        type="range"
        className="mt-3 form-range w-100 custom-range "
        min="0"
        max="50"
      />
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <span>
          From:<span className="green-text">$500</span>
        </span>
        <span>
          To:<span className="green-text">$1,000</span>
        </span>
      </div>
    </div>
  );
};

export const SidebarBox3 = () => {
  return (
    <div
      className=" b-gray rounded-2 column b-gray p-4"
      // style={{ minWidth: "18rem", maxWidth:"20rem" }}
    >
      <h4>New Products</h4>
      <div className="bg-green " style={{ height: "2px", width: "35%" }}></div>
      <div
        className="w-100 "
        style={{ height: "1px", border: "1px solid #ECECEC" }}
      ></div>
      <div className="d-flex mt-3 p-2 align-items-center justify-content-between row b-bottom-gray ">
        <div className="col-auto">
          <Image src={mango} alt="Next.js logo" />
        </div>
        <div className="col-auto column ">
          <div className="green-text fw-700"> Chen Cardigan</div>
          <div className="gray-text">$99.50</div>

          <div style={{ color: "orange", fontSize: "25px" }}>★</div>
        </div>
      </div>
      <div className="d-flex mt-3 p-2 align-items-center justify-content-between row b-bottom-gray ">
        <div className="col-auto">
          <Image src={mango} alt="Next.js logo" />
        </div>
        <div className="col-auto column ">
          <div className="green-text fw-700"> Chen Cardigan</div>
          <div className="gray-text">$99.50</div>

          <div style={{ color: "orange", fontSize: "25px" }}>★</div>
        </div>
      </div>
      <div className="d-flex mt-3 p-2 align-items-center justify-content-between row b-bottom-gray ">
        <div className="col-auto">
          <Image src={mango} alt="Next.js logo" />
        </div>
        <div className="col-auto column ">
          <div className="green-text fw-700"> Chen Cardigan</div>
          <div className="gray-text">$99.50</div>

          <div style={{ color: "orange", fontSize: "25px" }}>★</div>
        </div>
      </div>
    </div>
  );
};
