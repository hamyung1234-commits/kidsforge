import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HammerNyan from '../components/characters/HammerNyan';
import TaxiBot from '../components/characters/TaxiBot';
import RulerFairy from '../components/characters/RulerFairy';
import GearBear from '../components/characters/GearBear';
import IdeaLamp from '../components/characters/IdeaLamp';
import { parseCommand } from '../lib/commandProcessor';
import { Sparkles, ArrowRight } from 'lucide-react';

const characters = [
  { name: '함머냥', role: '만들기 담당', color: 'bg-kf-pink', Component: HammerNyan },
  { name: '택시봇', role: '배달 담당', color: 'bg-kf-orange', Component: TaxiBot },
  { name: '자요정', role: '디자인 담당', color: 'bg-kf-green', Component: RulerFairy },
  { name: '톱니곰', role: '수리 담당', color: 'bg-kf-sky', Component: GearBear },
  { name: '아이디어 램프', role: '아이디어 담당', color: 'bg-kf-yellow', Component: IdeaLamp },
];

const GenieLampIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Lamp base */}
    <ellipse cx="32" cy="50" rx="16" ry="6" fill="#F59E0B" />
    <path d="M22 50 Q22 40 32 40 Q42 40 42 50" fill="#FBBF24" />
    <ellipse cx="32" cy="40" rx="10" ry="4" fill="#F59E0B" />
    {/* Lamp spout */}
    <path d="M42 42 Q52 38 54 32" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="55" cy="30" r="3" fill="#60A5FA" opacity="0.6" />
    {/* Lamp handle */}
    <path d="M22 42 Q12 38 14 48" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Smoke / cloud */}
    <circle cx="32" cy="22" r="10" fill="#E0F2FE" opacity="0.8" />
    <circle cx="24" cy="26" r="7" fill="#DBEAFE" opacity="0.8" />
    <circle cx="40" cy="26" r="7" fill="#DBEAFE" opacity="0.8" />
    {/* Genie emerging */}
    <circle cx="32" cy="16" r="7" fill="#3B82F6" />
    <path d="M26 16 Q32 10 38 16" fill="#60A5FA" opacity="0.5" />
    {/* Genie face */}
    <circle cx="30" cy="14" r="1" fill="white" />
    <circle cx="34" cy="14" r="1" fill="white" />
    <path d="M30 18 Q32 20 34 18" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
    {/* Ears listening */}
    <ellipse cx="24" cy="14" rx="2" ry="3" fill="#3B82F6" transform="rotate(-20 24 14)" />
    <ellipse cx="40" cy="14" rx="2" ry="3" fill="#3B82F6" transform="rotate(20 40 14)" />
    {/* Hands listening pose */}
    <circle cx="28" cy="24" r="2" fill="#3B82F6" />
    <circle cx="36" cy="24" r="2" fill="#3B82F6" />
  </svg>
);

const Home: React.FC = () => {
  const [command, setCommand] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    const parsed = parseCommand(command);
    navigate('/work', { state: { command: parsed, raw: command } });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-kf mb-6">
            <Sparkles className="w-4 h-4 text-kf-yellow" />
            <span className="text-sm font-bold text-gray-600">6~12세를 위한 AI 코딩 플랫폼</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight mb-4">
            말로 하면 <span className="text-kf-blue">코딩 친구들</span>이<br />만들어줘요!
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            키즈포지의 다섯 친구들이 여러분의 아이디어를 모아<br />
            멋진 작품으로 만들어 드려요.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="예: '게임 캐릭터를 만들어줘' 또는 '파란색 버튼 디자인해줘'"
              className="kf-input pr-16 py-4 h-14 text-base rounded-2xl"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-kf-blue rounded-xl flex items-center justify-center text-white shadow-kf hover:shadow-kf-lg hover:-translate-y-0.5 active:translate-y-0 transition-all group sparkle-btn"
            >
              <GenieLampIcon className="w-8 h-8 group-hover:animate-bounce" />
            </button>
          </form>
        </div>
      </section>

      {/* Characters */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-800 mb-10">
            다섯 코딩 친구들을 소개할게요!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {characters.map((char) => (
              <div
                key={char.name}
                className="kf-card flex flex-col items-center text-center cursor-pointer group"
              >
                <div className={`w-20 h-20 rounded-2xl ${char.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <char.Component className="animate-breathe" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{char.name}</h3>
                <p className="text-xs text-gray-500">{char.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-800 mb-10">
            어떻게 작동하나요?
          </h2>
          <div className="space-y-4">
            {[
              { step: 1, title: '말로 요청하기', desc: '만들고 싶은 것을 말로 입력해요.' },
              { step: 2, title: '친구들이 모이기', desc: '다섯 친구가 각자 역할을 정해요.' },
              { step: 3, title: '함께 만들기', desc: '단계별로 차근차근 작품을 완성해요.' },
              { step: 4, title: '완성!', desc: '멋진 결과물을 확인하고 공유해요.' },
            ].map((item) => (
              <div key={item.step} className="kf-card flex items-center gap-4">
                <div className="w-12 h-12 bg-kf-blue text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                const el = document.querySelector('input');
                el?.focus();
              }}
              className="kf-btn bg-kf-orange inline-flex items-center gap-2"
            >
              지금 시작하기
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
