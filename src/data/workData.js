// 이미지 import
import GroupwareImg from '@/assets/images/groupware.png';
import MessengerImg from '@/assets/images/messenger.png';
import ParkingImg from '@/assets/images/parking.png';
import BrochureImg from '@/assets/images/ebrochure.png';

const workData = [
  {
    type: 'work',
    sectionClass: 'section01',
    title: '그룹웨어 UI/UX 기획, 디자인 및 퍼블리싱 ',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: GroupwareImg,
    duration: '2023.07 ~ 2025.01',
    skills: ['Vue.js', 'Kendo UI Library', 'MongoDB', 'Pinia', 'Node.js'],
    tasks: ['기획', '디자인', '퍼블리싱', '리디자인', '유지보수'],
    features: [
      '대시보드',
      '전자보고',
      '메일 (리디자인)',
      '캘린더/부서캘린더',
      '간호사 근무표 캘린더',
      '당직표 캘린더',
      '공유자원관리',
      '커뮤니티',
      '관리자 페이지',
    ],
    contribution: '100%',
    background:
      '4개 병원, 1,000여 명의 실사용자가 사용할 그룹웨어 시스템의 UI/UX 설계 및 웹 퍼블리싱이 필요했습니다.',
    responsibilities:
      '기획 단계부터 참여해 사용자 중심의 UI/UX 설계 및 디자인을 진행하였고, 퍼블리싱과 유지보수를 전담했습니다.',
    achievements:
      '다양한 병원 조직의 요구사항을 반영하여 캘린더, 전자보고, 공유자원관리 등 협업 기능을 최적화하고, 직관적인 관리자 페이지를 통해 사용 편의성을 향상시켰습니다.',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 메신저 시스템',
    link: 'https://www.notion.so/1e4ecdd53fa480cbb20ae04a9a676163?pvs=4',
    imageSrc: MessengerImg,
    duration: '2024.02 ~ 2024.08',
    skills: ['Vue.js', 'Tailwind', 'Pinia', 'Socket.io', 'Electron'],
    tasks: ['기획', '디자인', '퍼블리싱'],
    contribution: '40%',
    background:
      '병원 내 실시간 커뮤니케이션 강화를 위해 업무용 메신저 시스템이 필요했습니다.',
    responsibilities:
      '채팅 UI 설계 및 퍼블리싱을 주도하고, 쪽지 기능 등 실사용자 니즈를 반영한 화면 기획에 참여했습니다.',
    achievements:
      '반복 사용 요소를 컴포넌트화해 유지보수성과 일관성을 높였고, 시각적 피로도를 줄인 병원 맞춤 UI를 구현했습니다.',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 주차관제 시스템 (모바일)',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa480018b48d0e1dad6ff4e?pvs=4',
    imageSrc: ParkingImg,
    duration: '2023.10 ~ 2024.02',
    skills: ['Vue.js', 'Pinia', 'Socket.io'],
    tasks: ['기획', '퍼블리싱', '리디자인', '유지보수'],
    features: [
      '입차/출차',
      'vip 입차 등록/관리',
      '주차이력',
      '주차정산',
      '주차 만족도 조사',
      '주차관제 대시보드',
      '환경설정',
      '반응형',
    ],
    contribution: '100%',
    background:
      '협소한 병원 주차 공간 문제를 개선하기 위해 발렛 중심의 실시간 주차 관리 시스템이 요구되었습니다.',
    responsibilities:
      '모바일과 데스크탑 환경 모두를 고려한 UI/UX 설계 및 퍼블리싱 전반을 담당했습니다.',
    achievements:
      '실시간 차량 정보 연동 및 대시보드 구축을 통해 주차 효율성과 사용자 편의성을 크게 향상시켰습니다.',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: 'E-브로슈어 쇼핑몰 메인, 상세페이지',
    imageSrc: BrochureImg,
    link: 'https://www.notion.so/e-1a2ecdd53fa480ad9d30d721d66c9aee?pvs=4',
    duration: '2024.11',
    skills: ['HTML', 'CSS', 'JQuery', 'REST API'],
    tasks: ['리디자인', '퍼블리싱', '유지보수'],
    features: ['메인페이지', '상세페이지', '반응형'],
    contribution: '100%',
    background:
      '상담사가 고객이 보는 상품 정보를 실시간으로 확인할 수 없어 상담 효율에 한계가 있었습니다.',
    responsibilities:
      '검색 및 페이지네이션이 가능한 반응형 페이지를 기획하고 퍼블리싱 및 기능 연동을 담당했습니다.',
    achievements:
      '동기화 버튼 및 상품 상세 연동 기능을 통해 상담 편의성과 고객 경험을 모두 개선했습니다.',
  },
];

export default workData;
