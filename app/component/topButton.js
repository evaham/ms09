'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TopButton = ({isButton}) => {
    
    return (
        <button className={`fixed right-4 flex items-center justify-center w-14 h-14 rounded-full bg-slate-950/70 text-amber-50 cursor-pointer z-20 ${isButton ? "bottom-26" : "bottom-4"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          맨위로
        </button>
    );
};

export default TopButton;