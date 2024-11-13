'use client'
import React from "react";
import "./style.css";
const CssTesting = () => {
  return (
    <>
      <div>This is div 1</div>
      <div>This is div 2</div>
      <p>This is div 3</p>
      <h1 className="myh1">This is div 3</h1>
      <strong id="myh1">This is div 3</strong>
      <input
        placeholder="enter email"
        name="email"
        type="email"
        required
        autoCapitalize="true"
        autoCorrect="true"
        accept="true"
        about="an eamil filed"
        accessKey="123wmail"
        alt="altt of email"
        // onBeforeInput={() => {
        //   alert("before input");
        // }}
        // onBlur={() => {
        //   alert("this is onblur");
        // }}
        autoComplete="true"
        defaultValue={"saba@gmail.com"}
        draggable
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          const inputValue = (e.target as HTMLInputElement).value;
          console.log(inputValue);
        }}
        pattern=""
      />
      <input
        id="phone"
        name="phone"
        type="text"
        pattern="^\d{3}-\d{3}-\d{4}$"
        required
        placeholder="XXX-XXX-XXXX"
        title="Only numbers and dashes (-) are allowed"
        onChange={(event) => {
          const inputValue = event.target.value;
          event.target.value = inputValue.replace(/[^0-9\-]/g, "");
        }}
      />
      <a href="https://chatgpt.com/c/6734418a-1420-8011-851c-b1f882a614e8">
        Click me
      </a>
      <div id="mydiv">
        <p>this is p1</p>
        <p>this is p2</p>
        <p>this is p3</p>

        <span id="span-sedo">span 1</span>
        <span>span 2</span>
        <span>span 3</span>

        <h1>h1 </h1>
        <h1>h2 </h1>
        <h1>h3 </h1>

        <ul>
          <li id="span-sedo">First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      <div>
        <p>Paragraph 1</p>
        <div>
          <p>Paragraph 2 inside nested div</p>
          <div>
            <p>Paragraph 2 inside nested div</p>
            <div>
              <p>Paragraph 2 inside nested div</p>
            </div>
          </div>
        </div>
      </div>
      {/* Adjacent Sibling Combinator */}
      <div>
        <h1>Heading 1</h1>
        <span>Paragraph 1</span>
        <p>Paragraph 2</p>
      </div>
    </>
  );
};

export default CssTesting;
