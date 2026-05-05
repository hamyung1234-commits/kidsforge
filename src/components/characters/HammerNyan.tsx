import React from 'react';

interface Props {
  className?: string;
}

const HammerNyan: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <polygon points="30,40 20,10 50,30" fill="#FF6B9D" />
      <polygon points="90,40 100,10 70,30" fill="#FF6B9D" />
      {/* Head */}
      <circle cx="60" cy="55" r="30" fill="#FF6B9D" />
      {/* Eyes */}
      <circle cx="50" cy="50" r="4" fill="#2C3E50" />
      <circle cx="70" cy="50" r="4" fill="#2C3E50" />
      {/* Mouth */}
      <path d="M55,62 Q60,68 65,62" stroke="#2C3E50" strokeWidth="2" fill="none" />
      {/* Hammer */}
      <rect x="85" y="45" width="8" height="30" rx="2" fill="#8B4513" transform="rotate(15 85 45)" />
      <rect x="80" y="35" width="30" height="12" rx="3" fill="#4A90E2" transform="rotate(15 80 35)" />
      {/* Paws */}
      <circle cx="45" cy="90" r="8" fill="#FF6B9D" />
      <circle cx="75" cy="90" r="8" fill="#FF6B9D" />
    </svg>
  );
};

export default HammerNyan;
