// 이미지 import
import GroupwareImg from '@/assets/images/groupware.png';
import MessengerImg from '@/assets/images/messenger.png';
import ParkingImg from '@/assets/images/parking.png';
import BrochureImg from '@/assets/images/ebrochure.png';

const workData = [
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 그룹웨어 ',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: GroupwareImg,
    duration: '2023.07 ~ 2025.01',
    skills: ['vue.js', 'Options API', 'Kendo UI Library'],
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
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 메신저 시스템',
    link: 'https://www.notion.so/1e4ecdd53fa480cbb20ae04a9a676163?pvs=4',
    imageSrc: MessengerImg,
    duration: '2024.02 ~ 2024.08',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['기획', '디자인', '퍼블리싱'],
    contribution: '40%',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 주차관제 시스템 (모바일)',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa480018b48d0e1dad6ff4e?pvs=4',
    imageSrc: ParkingImg,
    duration: '2023.10 ~ 2024.02',
    skills: ['vue.js', 'Composition API'],
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
  },
];

export default workData;
