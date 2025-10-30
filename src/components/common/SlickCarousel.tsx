"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ISlickCarouselProps } from "@/utils/interface";




const SlickCarousel: React.FC<ISlickCarouselProps> = ({
  setting,
  children,
  ...rest
}) => {
  return (
    <Slider {...setting} {...rest}>
      {children}
    </Slider>
  );
};

export default SlickCarousel;
