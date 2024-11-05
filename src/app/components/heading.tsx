import React from 'react'
import { quicksand } from "../fonts/allFonts"

type heading = {
    heading: string;
};

export const Heading: React.FC<heading> = ({ heading }) => (
  <>
    <span className={`heading fw-7 ${quicksand.className}`}>{heading}</span>
  </>
);
