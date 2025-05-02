// 이미지 import
import InsightImg from '@/assets/images/homeWork-insight-main.png';
import InterparkImg from '@/assets/images/homeWork-interpark.png';
import DesignSystemImg from '@/assets/images/work-design-system.png';
import B2BImg from '@/assets/images/work-b2b.png';
import B2CImg from '@/assets/images/work-b2c.png';
import OttImg from '@/assets/images/work-ott.png';

const projectData = [
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: InsightImg,
    title: '강의 플랫폼 UI/UX 디자인 및 퍼블리싱',
    desc: '피그마로 UI를 설계하고 컴포넌트 기반으로 구조화한 후, Vue.js와 SCSS로 반응형 퍼블리싱한 강의 사이트입니다.',
    figmaLink:
      'https://www.figma.com/design/i7LessEiDIKX96l8QxymFa/Beyond-Insight?node-id=87-1082&t=4mnakiN4m58PrcJa-1',
    link: 'https://dnjswlekd.github.io/flexible-web/',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: InterparkImg,
    title: '인터파크 클론코딩',
    desc: 'HTML, CSS, jQuery를 사용해 인터파크 웹사이트를 클론코딩하고, REST API 형식을 참고해 퍼블리싱했습니다.',
    link: 'https://dnjswlekd.github.io/interpark-clone/index.html',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: DesignSystemImg,
    title: '피그마를 활용한 디자인 시스템 설계',
    desc: 'Primitive, Semantic, Theme 컬러를 체계적으로 구성하고, 브랜드 컬러, 이펙트, Border, Spacing, 타이포그래피 등 디자인 토큰을 직접 설계해 디자인 시스템의 기초를 구축했습니다.',
    figmaLink:
      'https://www.figma.com/design/6GMoKknGsvcGFedxvrEmwQ/Design-System-Guide---Publish?node-id=2013-34&t=iK4EkjfBOKVcnc3B-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: DesignSystemImg,
    title: 'UI 워크스페이스 제작 및 컴포넌트화',
    desc: '디자인 시스템을 기반으로 Label, Checkbox, Modal, Side Navigation, Pagination 등 주요 UI 요소를 컴포넌트화하여 재사용 가능한 UI 라이브러리를 구축했습니다.',
    figmaLink:
      'https://www.figma.com/design/gjjNUveQLWPu4tT7yBWHcQ/UI-Workspace?node-id=18-1933&t=oLVPf0pNpbAvT5pb-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: B2BImg,
    title: '디자인시스템을 활용한 B2B 사이트',
    desc: '디자인 시스템을 기반으로 정보 구조와 사용자 흐름을 고려해 B2B 환경에 적합한 UI를 설계했습니다.',
    figmaLink:
      'https://www.figma.com/design/EIjY7Bbrn2eBMF5voyTXG8/B2B-Admin?node-id=2-2&t=ASAZMsEljPhWZ9Qg-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: B2CImg,
    title: '디자인시스템을 활용한 B2C 사이트',
    desc: '사용자 친화적인 디자인 시스템을 바탕으로 강의 플랫폼 사용성을 고려한 B2C UI를 구성했습니다.',
    figmaLink:
      'https://www.figma.com/design/VbOysRQ7ADwpJV4GJLSXni/B2C-E-Learning-Platform?node-id=0-1&t=kdv6Sanyk80XnQGP-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: OttImg,
    title: '디자인시스템을 활용한 Mobile OTT',
    desc: '모바일 사용 경험을 고려한 OTT UI를 디자인 시스템을 활용해 설계하고, 콘텐츠 중심의 레이아웃을 구성했습니다.',
    figmaLink:
      'https://www.figma.com/design/eJHivSf3RuKfhUb6DiHLV8/Mobile-OTT?node-id=0-1&t=IkWRJ7bc1dy0lELh-1',
  },
];

export default projectData;
