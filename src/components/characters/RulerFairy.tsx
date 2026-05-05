import React from 'react';

interface Props {
  className?: string;
}

const RulerFairy: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <ellipse cx="30" cy="45" rx="18" ry="12" fill="#87CEEB" opacity="0.7" />
      <ellipse cx="90" cy="45" rx="18" ry="12" fill="#87CEEB" opacity="0.7" />
      {/* Body */}
      <rect x="45" y="35" width="30" height="55" rx="10" fill="#7ED321" />
      {/* Head */}
      <circle cx="60" cy="30" r="18" fill="#7ED321" />
      {/* Eyes */}
      <circle cx="54" cy="28" r="3" fill="#2C3E50" />
      <circle cx="66" cy="28" r="3" fill="#2C3E50" />
      {/* Smile */}
      <path d="M56,35 Q60,39 64,35" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
      {/* Ruler */}
      <rect x="82" y="40" width="8" height="50" rx="2" fill="#F5A623" />
      <line x1="82" y1="50" x2="90" y2="50" stroke="#FFF" strokeWidth="1" />
      <line x1="82" y1="60" x2="90" y2="60" stroke="#FFF" strokeWidth="1" />
      <line x1="82" y1="70" x2="90" y2="70" stroke="#FFF" strokeWidth="1" />
    </svg>
  );
};

export default RulerFairy;
