
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const images = ['../img/image1.jpg','../img/image2.jpg','../img/image3.jpg',];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
            <div className="absolute top-2 left-2 flex items-center justify-center px-2 py-0.5 bg-teal-500 rounded-full text-sm text-white z-10">신청마감 7일 12:20:45</div>
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%`, }}>
            {images.map((src, index) => (
                <Image key={index} src={src} width={300} height={300} alt="상품 이미지" className="w-full object-cover aspect-square" style={{ flex: '0 0 100%' }} />
            ))}
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-950/50 text-white py-3 px-1 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#fff"><path d="M560-276 356-480l204-204 20 20-184 184 184 184-20 20Z"/></svg>            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-950/50 text-white py-3 px-1 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#fff"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
            </button>
            <div className="absolute bottom-2 flex space-x-2">
            {images.map((_, index) => (
                <span key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-teal-500' : 'bg-slate-500/50' }`}></span>
            ))}
            </div>
        </div>
    );
};

export default ImageSlider;
