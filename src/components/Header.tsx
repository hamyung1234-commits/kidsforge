import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Wrench } from 'lucide-react';

const KidsForgeLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="10" fill="#2563EB" />
    {/* Left bracket */}
    <path d="M10 12 h4 v3 h-2 v18 h2 v3 h-4 z" fill="white" />
    {/* K stem */}
    <rect x="19" y="12" width="4" height="24" rx="1" fill="white" />
    {/* K upper arm */}
    <path d="M23 18 L32 12 L35 12 L26 20 L35 28 L32 28 L23 22 Z" fill="white" />
    {/* Right bracket */}
    <path d="M34 12 h4 v3 h-2 v18 h2 v3 h-4 z" fill="white" />
    {/* Code slash accent */}
    <path d="M14 36 L16 38 L15 39 L13 37 Z" fill="#FBBF24" />
    <circle cx="18" cy="38" r="1" fill="#FBBF24" />
  </svg>
);

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-kf sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-kf group-hover:scale-105 transition-transform">
            <KidsForgeLogo className="w-9 h-9" />
          </div>
          <span className="font-black text-3xl text-kf-blue tracking-tight">키즈포지</span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" active={location.pathname === '/'} icon={<HomeIcon className="w-4 h-4" />} label="홈" />
          <NavLink to="/work" active={location.pathname === '/work'} icon={<Wrench className="w-4 h-4" />} label="작업실" />
        </nav>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ to: string; active: boolean; icon: React.ReactNode; label: string }> = ({ to, active, icon, label }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-kf font-bold text-sm transition-all ${
        active
          ? 'bg-kf-blue text-white shadow-kf'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Header;
