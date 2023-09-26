"use client"
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import loading from './loading.gif'

interface propsImage {
  src: string | "" |any;
  className?: string,
  size?: number
}

export function ImageCommon({ src,className,size, ...props }: propsImage) {
  const [finalLink, setFinalLink] = useState<any>((prev: any) => src);
  return (
    <Image
      width={size ||100}
      height={size || 100}
      className={classNames("!w-full !h-full object-contain",className)}
      src={finalLink}
      onError={() => setFinalLink('https://i.pinimg.com/originals/c4/3b/2d/c43b2d56b4ec611ac450e6782f7143b7.gif')}
      loader={(value) => value.src}
      alt=""
      {...props}
    />
  );
}