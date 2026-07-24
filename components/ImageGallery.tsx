'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox';

interface ImageGalleryProps {
  house: 'vela' | 'mala' | 'grounds';
}

const imageMap: Record<string, string[]> = {
  vela: [
    '/images/vela_entrace_upstairs_pretty.jpeg',
    '/images/vela_double_main.jpeg',
    '/images/vela_single_upstairs.jpeg',
    '/images/vela_2single_downstairs.jpeg',
    '/images/vela_living_area_upstairs.jpeg',
    '/images/vela_kamin_upstairs.jpeg',
    '/images/vela_kitchen_upstairs.jpeg',
    '/images/vela_kitchen_downstairs.jpeg',
    '/images/vela_table_terrace.jpeg',
    '/images/vela_terrace_view_olives.jpg',
    '/images/vela_loungechairs.jpeg',
    '/images/vela_front_olive_view.jpg',
  ],
  mala: [
    '/images/mala_room1.jpeg',
    '/images/mala_room2.jpeg',
    '/images/mala_room3.jpeg',
    '/images/mala_room4.jpeg',
    '/images/mala_kitchen.jpeg',
    '/images/mala_bathroom.jpeg',
    '/images/mala_porch.jpeg',
  ],
  grounds: [
    '/images/sunset.jpg',
    '/images/olives_with_hammock.jpg',
    '/images/vela_terrace_view_olives_right.jpg',
    '/images/vela_back_garden.jpeg',
    '/images/vela_front_olive_view.jpg',
    '/images/vela_table_terrace.jpeg',
  ],
};

export default function ImageGallery({ house }: ImageGalleryProps) {
  const images = imageMap[house] || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Nature shots look best centered; interiors have their subject near the top.
  // Desktop-only (md:) crop tweaks per album — phones keep the defaults, which
  // already look right there. 0% = top of photo, 50% = center, 100% = bottom.
  const positionOverrides: Record<string, Record<string, string>> = {
    vela: {
      '/images/vela_single_upstairs.jpeg': 'md:object-[50%_45%]',
      '/images/vela_living_area_upstairs.jpeg': 'md:object-[50%_25%]',
      '/images/vela_kamin_upstairs.jpeg': 'md:object-[50%_45%]',
      '/images/vela_kitchen_upstairs.jpeg': 'md:object-[50%_25%]',
      '/images/vela_front_olive_view.jpg': 'md:object-[50%_25%]',
    },
    mala: {
      '/images/mala_porch.jpeg': 'md:object-[50%_15%]',
      '/images/mala_room4.jpeg': 'md:object-[50%_50%]',
    },
    grounds: {
      '/images/vela_terrace_view_olives_right.jpg': 'md:object-[50%_40%]',
      '/images/vela_back_garden.jpeg': 'md:object-[50%_15%]',
      '/images/vela_table_terrace.jpeg': 'md:object-[50%_20%]',
    },
  };
  const defaultPos = house === 'grounds' ? 'object-center' : 'object-top';
  const posFor = (img: string) =>
    `${defaultPos} ${positionOverrides[house]?.[img] ?? ''}`.trim();

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
          className={`object-cover ${posFor(images[selectedIndex])} group-hover:scale-105 transition-transform duration-300`}
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
              className={`object-cover ${posFor(img)}`}
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
