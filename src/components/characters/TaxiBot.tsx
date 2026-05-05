import React from 'react';

interface Props {
  className?: string;
}

const TaxiBot: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="20" y="45" width="80" height="50" rx="12" fill="#F5A623" />
      {/* Roof light */}
      <rect x="45" y="32" width="30" height="10" rx="3" fill="#F8E71C" />
      {/* Windshield */}
      <rect x="30" y="52" width="60" height="20" rx="6" fill="#E0F7FA" />
      {/* Eyes on windshield */}
      <circle cx="45" cy="62" r="5" fill="#2C3E50" />
      <circle cx="75" cy="62" r="5" fill="#2C3E50" />
      {/* Mouth */}
      <path d="M55,72 Q60,77 65,72" stroke="#2C3E50" strokeWidth="2" fill="none" />
      {/* Wheels */}
      <circle cx="35" cy="95" r="10" fill="#2C3E50" />
      <circle cx="85" cy="95" r="10" fill="#2C3E50" />
      <circle cx="35" cy="95" r="4" fill="#95A5A6" />
      <circle cx="85" cy="95" r="4" fill="#95A5A6" />
    </svg>
  );
};

export default TaxiBot;
