'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ShortcutButton = () => {
    
    return (
        <button className="fixed right-4 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-[#f43f5e] text-white text-xs cursor-pointer z-20 bottom-24">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 201 201" fill="none" className="m-1">
            <path d="M201 0V201H0V0H201ZM16 185H185V51.5H16V185ZM16 35.5H185V16H16V35.5Z" fill="white"/>
            <rect x="88" y="64" width="85" height="110" stroke="white" strokeWidth="8" />
            <path d="M151.539 132.071L134.011 91.5L131.813 95.4705C129.834 99.0449 127.378 102.333 124.512 105.245L122.404 107.387C119.249 110.592 115.692 113.374 111.821 115.663L105.296 119.523C101.964 121.494 100.521 125.569 101.87 129.198C103.225 132.842 107.002 134.984 110.825 134.278L128.168 131.071L136.302 130.477C139.985 130.208 143.689 130.45 147.306 131.197L151.539 132.071Z" fill="white"/>
            <path d="M151.829 118.095C151.424 113.076 149.041 108.424 145.205 105.162L147.148 102.877C151.59 106.654 154.35 112.041 154.82 117.853L154.982 119.861L151.992 120.103L151.829 118.095ZM158.328 117.812C157.703 110.086 154.035 102.924 148.129 97.9024L150.073 95.6173C156.584 101.154 160.629 109.051 161.318 117.571L161.461 119.337L158.471 119.579L158.328 117.812Z" fill="white"/>
            <path d="M135.039 144.5L122.039 125.5L111.539 130.5L126.039 146.5L135.039 144.5Z" fill="white"/>
            <path d="M26 64H72M26 81.5H72M26 97H72M26 114H57M26 139.5H72M26 155.5H72M26.0001 173H57" stroke="white" strokeWidth="8"/>
          </svg>
          전단
        </button>
    );
};

export default ShortcutButton;