import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";

export const quicksand = Quicksand({
    subsets: ["latin"],
    weight:["300","400","500","600","700"]
})

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100","300","400","700","900"],
});