import Image, { StaticImageData } from "next/image";
import { quicksand } from "../fonts/allFonts";

type cardTypes = {
  img: StaticImageData;
  heading: string;
  text: string;
};
export const ProvideCard: React.FC<cardTypes> = ({ img, heading, text }) => (
  <div
    className="d-flex p-3 b-gray rounded-3  flex-column  align-items-center justify-content-center
  col-12
  col-sm-5
  col-md-5
  col-lg-5
  col-xl-3  
  "  >
    <Image src={img} alt="text" height={100} width={100} />
    <h4>{heading || "Best Prices &#39; Offers"}</h4>
    <p className="text-center">
      {text ||
        `There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form`}
    </p>
    <span className={`green-text fw-5 ${quicksand.className}`} style={{}}>
      Read More
    </span>
  </div>
);
