'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TopButton = ({isButton}) => {
    
    return (
        <button className={`fixed right-4 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-black/70 text-white text-xs cursor-pointer z-20 ${isButton ? "bottom-26" : "bottom-4"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
          맨위로
        </button>
    );
};

export default TopButton;