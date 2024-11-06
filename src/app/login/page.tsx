"use client";
import Image from "next/image";
import ButtonG from "../components/button";
import { Input } from "@mui/material";

const Login = () => {
  return (
    <>
      <section className="d-flex flex-column p-2 flex-md-row ">
        <div className="d-flex flex-md-row w-100 w-md-50 ">
          <Image
            className="rounded-3"
            src="https://media.istockphoto.com/id/1067203316/photo/woman-hand-hold-shopping-cart-with-abstract-blur-supermarket-aisle-background.jpg?s=1024x1024&w=is&k=20&c=8Jtm6N_wFvIDHPCGh85lgg1fnhGUSaawJ79U7XAmlL8="
            alt="delivery boy"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div className="d-flex w-100 w-md-50 mt-md-0 mt-3 justify-content-center align-items-center">
          <form className="b-gray p-3 rounded-3 gap-15 d-flex flex-column w-100">
            <Input
              type="text"
              name="username"
              placeholder="Enter email or username"
              required
              onChange={(e) => console.log(e.target.value)}
              className="input-field "
            />
            <Input
              type="text"
              name="password"
              placeholder="Enter password"
              required
              className="input-field "
              onChange={(e) => console.log(e.target.value)}
            />
            <ButtonG
              text="Login"
              onclick={() => {
                console.log("login button");
              }}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
