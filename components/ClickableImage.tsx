'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox';

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ClickableImage({ src, alt, width, height, className }: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge image"
        className="block w-full cursor-zoom-in"
      >
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </button>
      <Lightbox
        images={[src]}
        index={open ? 0 : null}
        onClose={() => setOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}
