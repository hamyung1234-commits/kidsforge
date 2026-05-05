export type CommandType = 'build' | 'design' | 'fix' | 'create' | 'unknown';

export interface ParsedCommand {
  type: CommandType;
  target: string;
  confidence: number;
}

const keywords: Record<CommandType, string[]> = {
  build: ['만들어', '만들', '제작', '생성', '코딩', '빌드', 'build', 'create'],
  design: ['디자인', '꾸며', '색깔', '모양', 'design', 'color'],
  fix: ['고쳐', '수정', 'fix', 'bug', '에러'],
  create: ['새로', '추가', '만들', 'add', 'new'],
  unknown: [],
};

export function parseCommand(input: string): ParsedCommand {
  const lower = input.toLowerCase();

  let bestType: CommandType = 'unknown';
  let bestScore = 0;

  (Object.keys(keywords) as CommandType[]).forEach((type) => {
    if (type === 'unknown') return;
    const score = keywords[type].reduce((acc, keyword) => {
      if (lower.includes(keyword.toLowerCase())) return acc + 1;
      return acc;
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      bestType = type;
    }
  });

  const target = lower.replace(/[^\uAC00-\uD7AFa-zA-Z0-9\s]/g, '').trim();

  return {
    type: bestType,
    target: target || '프로젝트',
    confidence: Math.min(bestScore * 0.3 + 0.2, 1),
  };
}

export function generateSteps(command: ParsedCommand): string[] {
  switch (command.type) {
    case 'build':
      return [
        '💡 아이디어 램프가 반짝이며 아이디어를 모아요!',
        '📏 자요정이 설계도를 그려요.',
        '🔨 함머냥이 망치로 꼼꼼히 조립해요.',
        '⚙️ 톱니곰이 부품을 맞춰 테스트해요.',
        '🚕 택시봇이 완성된 작품을 배달해요!',
      ];
    case 'design':
      return [
        '🎨 색깔 팔레트를 꺼내요.',
        '📐 자요정이 비율을 재요.',
        '💡 아이디어 램프가 색 조합을 추천해요.',
        '🔨 함머냥이 디자인을 적용해요.',
        '✨ 완성! 예쁜 디자인이 탄생했어요.',
      ];
    case 'fix':
      return [
        '🔍 택시봇이 문제를 찾아요.',
        '⚙️ 톱니곰이 원인을 분석해요.',
        '🔨 함머냥이 고쳐요.',
        '📏 자요정이 다시 검사해요.',
        '✅ 고쳐졌어요! 다시 작동해요.',
      ];
    default:
      return [
        '🤔 명령을 해석하고 있어요...',
        '📋 작업 계획을 세우고 있어요.',
        '🚀 출발! 코딩 친구들이 모였어요.',
        '⏳ 작업 중이에요...',
        '✨ 완료됐어요!',
      ];
  }
}
