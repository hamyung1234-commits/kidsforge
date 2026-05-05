import React from 'react';

interface Props {
  className?: string;
}

const GearBear: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="35" cy="30" r="12" fill="#8D6E63" />
      <circle cx="85" cy="30" r="12" fill="#8D6E63" />
      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#8D6E63" />
      {/* Snout */}
      <ellipse cx="60" cy="58" rx="12" ry="9" fill="#D7CCC8" />
      <circle cx="60" cy="55" r="4" fill="#2C3E50" />
      {/* Eyes */}
      <circle cx="50" cy="45" r="4" fill="#2C3E50" />
      <circle cx="70" cy="45" r="4" fill="#2C3E50" />
      {/* Gear body */}
      <circle cx="60" cy="88" r="22" fill="#95A5A6" />
      <circle cx="60" cy="88" r="10" fill="#BDC3C7" />
      {/* Gear teeth */}
      <rect x="56" y="62" width="8" height="6" rx="1" fill="#95A5A6" />
      <rect x="56" y="108" width="8" height="6" rx="1" fill="#95A5A6" />
      <rect x="34" y="84" width="6" height="8" rx="1" fill="#95A5A6" />
      <rect x="80" y="84" width="6" height="8" rx="1" fill="#95A5A6" />
    </svg>
  );
};

export default GearBear;
