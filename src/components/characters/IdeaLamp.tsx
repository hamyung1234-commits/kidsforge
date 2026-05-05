import React from 'react';

interface Props {
  className?: string;
}

const IdeaLamp: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      {/* Bulb */}
      <circle cx="60" cy="55" r="25" fill="#F8E71C" opacity="0.9" />
      {/* Filament */}
      <path d="M50,55 Q55,45 60,55 Q65,45 70,55" stroke="#F5A623" strokeWidth="2" fill="none" />
      {/* Base */}
      <rect x="50" y="78" width="20" height="8" rx="2" fill="#95A5A6" />
      <rect x="52" y="86" width="16" height="6" rx="2" fill="#7F8C8D" />
      {/* Rays */}
      <line x1="60" y1="20" x2="60" y2="28" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="30" x2="36" y2="36" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="30" x2="84" y2="36" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round" />
      <line x1="25" y1="55" x2="33" y2="55" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round" />
      <line x1="95" y1="55" x2="87" y2="55" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round" />
      {/* Face */}
      <circle cx="52" cy="50" r="3" fill="#2C3E50" />
      <circle cx="68" cy="50" r="3" fill="#2C3E50" />
      <path d="M56,60 Q60,64 64,60" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

export default IdeaLamp;
