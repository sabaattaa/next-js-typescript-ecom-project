"use client";
import { useState } from "react";
import { Dropdown } from "../typesFiles/homePhageTypes";

export const DropdownC: React.FC<Dropdown> = ({
  text,
  icon,
  style,
  optionsArray,
  getSelectedValue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    text ||
      (optionsArray.length > 0 && optionsArray[0]?.option) ||
      "Select option"
  );
  return (
    <div className="dropdown ">
      <button
        className="btn  dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          color: style?.color || "#7E7E7E",
          backgroundColor: style?.backgroundColor || "",
          padding:style?.padding,
        }}
      >
        {icon ? icon : ""}

        {selectedOption || "Select an option"}

        <span className="dropdown-icon">
          <i
            className="bi bi-chevron-down fw-900"
            style={{ marginLeft: "5px", fontSize: "14px" }}
          ></i>
        </span>
      </button>
      <ul className="dropdown-menu">
        {optionsArray.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedOption(item.option);
              if (getSelectedValue) {
                getSelectedValue(item.option);
              }
            }}
            style={{ color: "#7E7E7E" }}
          >
            <a className="dropdown-item" href="#">
              {item.option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
