

export const MENU_ITEMS = [
    { title: '홈', href: 'card1' },
    { title: '자기소개', href: 'card2' },
    { title: '프로젝트', href: 'card3' },
    { title: '연락처', href: 'card4' },
];

export const MY_STATUS = [
    { title: 'JAVASCRIPT', status: 60, duration: '.3s' },
    { title: 'REACT', status: 40, duration: '.4s' },
    { title: 'NODEJS', status: 50, duration: '.45s' },
    { title: 'HTML5', status: 70, duration: '.5s' },
    { title: 'CSS', status: 50, duration: '.55s' },
]

export const MY_PORTFOLIO = [
    { title: 'Nanobrick M check+', 
      smallTitle: '유통 관리 서비스',
      description: '- 프론트엔드<br/><br/>' +
      '1. 서비스 모바일 웹앱 (50%) - React로 제작했으며 상품 인증, 이벤트, 유통 관리 페이지의 기능 & facebook, weibo의 sns 로그인 기능 & 다국어 기능을 작업하고 Android, iOS 앱과의 브릿지 통신 부분을 작업했습니다.<br/><br/>' +
      '- 백엔드<br/><br/>' +
      '1. API 서버 (20%) - Node.js를 활용한 API들을 일부 제작했습니다. (이벤트, 유통 내역, 유통 상품 인수인계 API 등)<br/>' +
      '2. DB (5%) - MongoDB를 활용하여 이벤트 부분의 DB를 제작했습니다.',
      thumbnail: '/static/assets/portfolio/nanobrick_thumbnail.png',
      images: ['/static/assets/portfolio/nanobrick_1.jpg','/static/assets/portfolio/nanobrick_2.jpg','/static/assets/portfolio/nanobrick_3.jpg','/static/assets/portfolio/nanobrick_4.jpg'],
      href_web: 'https://valid.mcheckplus.com/user/auth',
      href_apple: '',
      href_android: '',
    },
    { title: 'Pickle', 
      smallTitle: '스포츠 퀴즈 서비스',
      description: '- 프론트엔드<br/><br/>' +
      '1. 관리자 페이지 (90%) - React를 사용하여 관리자 페이지 전반을 작업했습니다.<br/><br/>' +
      '- 백엔드<br/><br/>' +
      '1. API 서버 (20%) - 퀴즈 생성, 퀴즈 정답 제출, 생존자 수 계산 등의 API 를 제작했으며 다른 분이 만드신 API들의 유지보수도 함께 담당했습니다.<br/>' +
      '2. DB (30%) - MySQL로 개발 초기에 DB 구조를 설계하고 개발 기간동안 API에 연결할 MySQL 프로시저를 작업했습니다.',
      thumbnail: '/static/assets/portfolio/pickle_thumbnail.png',
      images: ['/static/assets/portfolio/pickle_1.jpg','/static/assets/portfolio/pickle_2.jpg'],
      href_web: '',
      href_apple: 'https://apps.apple.com/kr/app/%ED%94%BC%ED%81%B4%ED%94%8C%EB%A0%88%EC%9D%B4-pickle-play-%EB%AA%A8%EB%93%A0-%EC%8A%A4%ED%8F%AC%EC%B8%A0%EA%B0%80-%EC%A6%90%EA%B2%81%EB%8B%A4/id1438592933',
      href_android: 'https://play.google.com/store/apps/details?id=com.wagti.pickle',    
    },
    { title: 'Klient Manager', 
      smallTitle: '식당 관리 서비스',
      description: '- 프론트엔드<br/><br/>' +
      '1. 메인 서비스 페이지 (60%) - React로 제작했으며 여러 페이지 간의 실시간 예약 정보, 수신된 전화 정보 등을 Redux로 관리했습니다.<br/>' +
      '2. 관리자 페이지 (20%) - 개발된 페이지의 테스트 & 유지보수 작업을 했습니다. (React)<br/><br/>' +
      '- 백엔드<br/><br/>' +
      '1. API 서버 (80%) - Node.js를 활용하여 서비스 전반의 API들을 제작, 유지보수했습니다.<br/>' +
      '2. DB (80%) - MySQL을 활용하여 서비스 전반의 DB를 제작하고 API에 사용할 MySQL 프로시저를 작업했습니다.',
      thumbnail: '/static/assets/portfolio/klientmanager_thumbnail.png',
      images: ['/static/assets/portfolio/klientmanager_1.jpg','/static/assets/portfolio/klientmanager_3.jpg','/static/assets/portfolio/klientmanager_4.jpg'],
      href_web: 'https://klientmanager.com',
      href_apple: '',
      href_android: '',
    },
    { title: 'Jivida', 
      smallTitle: '부동산 서비스',
      description: '- 프론트엔드<br/><br/>' +
      '1. 메인 서비스 페이지 (20%) - React를 활용하여 서비스 단 (매물 관리, 부동산 상세 페이지) 과 Google Maps API를 활용하여 지역 별 매물 검색 서비스를 작업했습니다.<br/>' +
      '2. 관리자 페이지 (40%) - React를 사용하여 관리자 페이지의 매물 관리, 고객 관리, 푸시 메시지 전송 기능을 작업했습니다.<br/><br/>' +
      '- 백엔드<br/><br/>' +
      '1. API 서버 (20%) - 매물 관리, 부동산 회원, 고객 관리 API를 제작하고 유지보수를 담당했습니다.<br/>',
      thumbnail: '/static/assets/portfolio/jivida_thumbnail.png',
      images: ['/static/assets/portfolio/jivida_1.jpg','/static/assets/portfolio/jivida_2.jpg','/static/assets/portfolio/jivida_3.jpg'],
      href_web: 'https://jivida.com',
      href_apple: '',
      href_android: 'https://play.google.com/store/apps/details?id=com.jivida&hl=ko',
    }
]

export const MY_CONTACT = [
  { src: '/static/assets/btn/btn_github.png', href: 'https://github.com/GOT1000' },
  { src: '/static/assets/btn/btn_rocketpunch.png', href: 'https://www.rocketpunch.com/@53e485e990ea449c' },
]

export const getEntireHeight = (document) => {
  let height = 0;
  
  if (document) {
    height = document.body.scrollHeight;
  }

  return height;
}