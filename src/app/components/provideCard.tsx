import Image, { StaticImageData } from "next/image";

type cardTypes = {
  img: StaticImageData;
  heading: string;
  text: string;
};
export const ProvideCard: React.FC<cardTypes> = ({ img, heading, text }) => (
  <div className="d-flex flex-column red col-12 align-items-center justify-content-center" >
    <Image src={img} alt="text" height={100} width={100} />
    <h4>{heading || "Best Prices &#39; Offers"}</h4>
    <p>
      {text ||
        `There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form`}
    </p>

    <span>Read More</span>
  </div>
);