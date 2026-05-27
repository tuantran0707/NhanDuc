"use client";

import Image from "next/image";
import { useState } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  thumbWrapperClassName: string;
  thumbImageClassName?: string;
};

export default function LightboxImage({
  src,
  alt,
  thumbWrapperClassName,
  thumbImageClassName = "object-cover"
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative block overflow-hidden ${thumbWrapperClassName}`}
        aria-label={`Xem ảnh: ${alt}`}
      >
        <Image src={src} alt={alt} fill className={thumbImageClassName} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white text-black text-2xl font-bold leading-none hover:bg-gray-100"
            aria-label="Đóng"
          >
            ×
          </button>

          <div
            className="relative w-[min(95vw,1200px)] h-[min(86vh,820px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain" priority />
          </div>
        </div>
      )}
    </>
  );
}
