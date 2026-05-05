import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HammerNyan from '../components/characters/HammerNyan';
import TaxiBot from '../components/characters/TaxiBot';
import RulerFairy from '../components/characters/RulerFairy';
import GearBear from '../components/characters/GearBear';
import IdeaLamp from '../components/characters/IdeaLamp';
import { generateSteps, ParsedCommand } from '../lib/commandProcessor';
import { ArrowLeft, RefreshCcw, CheckCircle2 } from 'lucide-react';

const characterMap = [
  { key: 'idea', name: '아이디어 램프', Component: IdeaLamp, color: 'bg-kf-yellow' },
  { key: 'ruler', name: '자요정', Component: RulerFairy, color: 'bg-kf-green' },
  { key: 'hammer', name: '함머냥', Component: HammerNyan, color: 'bg-kf-pink' },
  { key: 'gear', name: '톱니곰', Component: GearBear, color: 'bg-kf-sky' },
  { key: 'taxi', name: '택시봇', Component: TaxiBot, color: 'bg-kf-orange' },
];

interface LocationState {
  command?: ParsedCommand;
  raw?: string;
}

const Work: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state as LocationState) || {};
  const { command, raw } = state;

  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const steps = command ? generateSteps(command) : generateSteps({ type: 'unknown', target: '프로젝트', confidence: 0 });

  useEffect(() => {
    if (!isRunning) return;
    if (currentStep >= steps.length) {
      setIsRunning(false);
      return;
    }
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 1800);
    return () => clearTimeout(timer);
  }, [currentStep, isRunning, steps.length]);

  if (!command) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-black text-gray-800 mb-4">먼저 명령을 입력해주세요!</h2>
        <p className="text-gray-500 mb-8">홈 화면에서 만들고 싶은 것을 말로 입력하면 친구들이 작업을 시작해요.</p>
        <button onClick={() => navigate('/')} className="kf-btn bg-kf-blue inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const progress = Math.min(((currentStep + 1) / steps.length) * 100, 100);
  const isFinished = currentStep >= steps.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-9 h-9 rounded-xl bg-white shadow-kf flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-black text-gray-800">작업실</h1>
          <p className="text-sm text-gray-500">“{raw}” 작업 중이에요</p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-kf shadow-kf p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-600">진행 상황</span>
          <span className="text-sm font-bold text-kf-blue">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-kf-blue rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4 mb-8">
        {steps.map((stepText, idx) => {
          const char = characterMap[idx % characterMap.length];
          const isActive = idx === currentStep;
          const isDone = idx < currentStep;
          const isPending = idx > currentStep;

          return (
            <div
              key={idx}
              className={`kf-card flex items-center gap-4 transition-all duration-500 ${
                isActive ? 'ring-2 ring-kf-blue scale-[1.02]' : ''
              } ${isPending ? 'opacity-40' : 'opacity-100'}`}
            >
              <div className={`w-14 h-14 rounded-xl ${char.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                <char.Component className={`w-10 h-10 ${isActive ? 'animate-bounce-soft' : ''}`} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-400 mb-0.5">{char.name}</div>
                <div className="font-bold text-gray-700">{stepText}</div>
              </div>
              <div className="shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-6 h-6 text-kf-green" />
                ) : isActive ? (
                  <div className="w-6 h-6 border-2 border-kf-blue border-t-transparent rounded-full animate-spin" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Result Preview */}
      {isFinished && (
        <div className="bg-white rounded-kf shadow-kf-lg p-8 text-center animate-slide-up">
          <div className="w-16 h-16 bg-kf-green bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-kf-green" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">작업 완료!</h2>
          <p className="text-gray-500 mb-6">
            “{raw}” 요청이 완료되었어요.<br />
            (실제 결과물은 AI 엔진 연동 후 여기에 표시됩니다.)
          </p>
          <div className="bg-kf-cream rounded-xl p-6 mb-6 border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-sm">🖼️ 미리보기 영역</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setCurrentStep(0);
                setIsRunning(true);
              }}
              className="kf-btn bg-kf-blue inline-flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              다시 만들기
            </button>
            <button
              onClick={() => navigate('/')}
              className="kf-btn bg-gray-200 text-gray-700 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              홈으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
