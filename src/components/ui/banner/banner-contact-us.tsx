import React from "react";
import Button from "../../form/button/button";

interface Props {
  image: string;
}

export default function BannerContactUs({ image }: Props) {
  return (
    <div className="relative h-[450px] w-full">
      <img src={image} className="object-cover object-center w-full h-full" />
      <div className="absolute top-0 bottom-0 left-0 right-0 px-[75px] py-[71px] bg-black/50">
        <h5 className="mb-[10px] font-semibold text-heading-8 text-wheat">
          Best Room Decor Items
        </h5>
        <h3 className="mb-[30px] text-heading-4 leading-[60px] text-white w-[465px]">
          Our goods have the best quality and materials in the world
        </h3>
        <Button
          title="Shop Now"
          variant="wheat"
          className="px-9 py-[15px] text-heading-7 leading-[30px] font-bold"
        />
      </div>
    </div>
  );
}
