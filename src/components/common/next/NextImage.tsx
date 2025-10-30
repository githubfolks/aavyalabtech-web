"use client";
import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: StaticImageData;
}


const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const {  fallbackSrc, alt, ...rest } = props;
  return (
    <Image
      {...rest}
      alt={alt}
      onError={(event: any) => {
        if (event.target)
          event.target.srcset = fallbackSrc?.src ?? "/logo_half.png";
      }}
    />
  );
};

export default ImageWithFallback;
