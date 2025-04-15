
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const images = ['/img/image1.jpg','/img/image2.jpg','/img/image3.jpg',];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const startX = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : (prevIndex - 1)
        );
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!startX.current) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX.current - currentX;

        if (diffX > 50) {
            nextSlide();
            startX.current = null; // Reset
        } else if (diffX < -50) {
            prevSlide();
            startX.current = null; // Reset
        }
    };

    return (
        <div className="relative overflow-hidden flex items-center justify-center slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="absolute top-2 left-2 flex items-center justify-center w-36 h-5 bg-slate-900/50 rounded-full text-xs text-white z-10">남은시간 7일 12:20:45</div>
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%`, }}>
                {images.map((src, index) => (
                    <Image key={index} src={src} width={300} height={300} alt="상품 이미지" className="w-full rounded-lg bg-gray-300 object-cover aspect-square" style={{ flex: '0 0 100%' }} />
                ))}
            </div>
            <div className="absolute bottom-2 flex space-x-2">
                {images.map((_, index) => (
                    <span key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-slate-600' }`}></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
