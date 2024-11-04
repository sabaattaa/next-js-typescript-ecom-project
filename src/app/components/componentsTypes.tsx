export interface ProductCardTypes {
  status: string;
  image: string;
  ratingNo: number;
  basePrice: number;
  offerPrice?: number;
  companyName: string;
  productName: string;
  starsRating: number;
  productNickName: string;
}

export type shopNowTypes = {
  heading: string;
  image: string;
  onclick: () => void;
};
