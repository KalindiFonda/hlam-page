'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox';

interface ImageGalleryProps {
  house: 'vela' | 'mala';
}

const imageMap: Record<string, string[]> = {
  vela: [
    '/images/vela_entrace_upstairs_pretty.jpeg',
    '/images/vela_loungechairs.jpeg',
    '/images/vela_table_terrace.jpeg',
    '/images/vela_double_main.jpeg',
    '/images/vela_kitchen_upstairs.jpeg',
    '/images/vela_living_area_upstairs.jpeg',
  ],
  mala: [
    '/images/mala_room1.jpeg',
    '/images/mala_room2.jpeg',
    '/images/mala_room3.jpeg',
    '/images/mala_room4.jpeg',
    '/images/mala_kitchen.jpeg',
    '/images/mala_porch.jpeg',
  ],
};

export default function ImageGallery({ house }: ImageGalleryProps) {
  const images = imageMap[house] || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setLightboxIndex(selectedIndex)}
        aria-label="Enlarge image"
        className="relative h-80 w-full bg-sage/10 rounded-lg overflow-hidden group cursor-zoom-in block"
      >
        <Image
          src={images[selectedIndex]}
          alt="Property image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </button>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative h-20 rounded overflow-hidden border-2 transition ${
              idx === selectedIndex ? 'border-sage' : 'border-sage/20 hover:border-sage/50'
            }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => {
          setLightboxIndex(i);
          setSelectedIndex(i);
        }}
      />
    </div>
  );
}
