import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-kf-cream">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-100 py-6 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-400 text-sm">
          © 2024 키즈포지 KidsForge — 아이들의 첫 코딩 친구들
        </div>
      </footer>
    </div>
  );
};

export default Layout;
