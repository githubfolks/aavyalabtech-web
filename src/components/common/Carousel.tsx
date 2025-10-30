"use client";

import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  return <Carousel infinite={true} {...props}>{children}</Carousel>;
};

export default CustomCarousel;
