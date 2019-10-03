

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
    { title: 'Nanobrick', 
      smallTitle: 'nanobrick smallTitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et aliquet arcu. Suspendisse lacinia semper pulvinar. Donec posuere leo et sem varius ultricies. Phasellus quis cursus urna. Curabitur bibendum tincidunt justo, sed faucibus mi suscipit eu. Etiam condimentum tellus id augue ultricies, a dapibus tellus pretium. Vivamus ipsum velit, ultricies euismod mollis non, luctus ut urna. Integer ullamcorper lorem vel lacus porttitor, eu vestibulum purus iaculis. Fusce mollis eu odio in dictum. Vivamus venenatis dictum augue, vitae tristique nulla auctor quis. Ut eu tortor sem.',
      thumbnail: '//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg',
      images: ['//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg','//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg'],
      href: 'https://naver.com'
    },
    { title: 'Pickle', 
      smallTitle: 'Pickle smallTitle',
      description: 'Pickle description',
      thumbnail: '//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg',
      images: ['//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg','//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg'],
      href: 'https://naver.com'
    },
    { title: 'Klient Manager', 
      smallTitle: 'KM smallTitle',
      description: 'KM description',
      thumbnail: '//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg',
      images: ['//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg','//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg'],
      href: 'https://naver.com'
    },
    { title: 'Jivida', 
      smallTitle: 'Jivida smallTitle',
      description: 'Jivida description',
      thumbnail: '//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg',
      images: ['//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg','//cdn1.editmysite.com/merchandised-screenshots/57e1c5a58d027_tablet_1x.jpg'],
      href: 'https://naver.com'
    }
]

export const getEntireHeight = (document) => {
  let height = 0;
  
  if (document) {
    height = document.body.scrollHeight;
  }

  return height;
}