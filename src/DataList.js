
const skillList = [
  {
    skill: 'Vue',
    desc: [
      'vuex 사용 경험이 있습니다.',
      'Vue2 option api를 사용할 수 있습니다.',
      'Params를 활용한 동적 라우트 매칭이 가능합니다.',
      '컴포넌트를 이용해 재사용성을 높힐 수 있습니다.',
    ],
    icon: 'vue-icon.png',
    iconCustomWidth: '32px',
  }, {
    skill: 'React',
    desc: [
      'ReactHook 사용 경험이 있습니다.',
      'yarn, npm 사용 경험이 있습니다.'
    ],
    icon: 'react-icon.png',
    iconCustomWidth: '34px',
  }, {
    skill: 'HTML/CSS',
    desc: [
      '웹표준을 지키려 노력합니다.',
      'SCSS 문법에 익숙합니다.',
      '반응형 웹 구현이 가능합니다.',
      '크로스 브라우징에 대응할 수 있습니다.',
      'Bootstrap, BootstrapVue 등의 css 라이브러리를 사용할 수 있습니다.',
      'keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.',
      '가독성을 위한 시멘틱 구조에 맞게 작성할 수 있습니다.',
    ],
    icon: 'html-css-icon.png',
    iconCustomWidth: '45px',
  }, {
    skill: 'Javascript',
    desc: [
      'ES6+ 문법에 익숙합니다.',
      'Dataset을 이용한 Dom 사용이 가능합니다.',
      'jQuery를 활용해 DOM을 제어하고 Ajax로 데이터를 가져올 수 있습니다.',
      'async-await 비동기 문법을 사용할 수 있습니다. ',
      'React와 Vue를 활용해 SPA의 상태를 관리할 수 있습니다.',
      'Web Animation API를 이용한 다양한 애니메이션을 구현할 수 있습니다.'
    ],
    icon: 'js-icon.png'
  }, {
    skill: 'Infra',
    desc: [
      'Kubernetes nginx 서버 배포 및 플러그인 적용 경험이 있습니다.',
    ],
    icon: 'infra-icon.png',
    iconCustomWidth: '36px',
  }, {
    skill: 'ETC',
    desc: [
      'Git, GitHub, GitLab, SVN, Jenkins를 사용한 경험이 있습니다.',
      'Figma, AdobeXD 디자인툴 협업 경험이 있습니다.',
      'Postman을 이용한 Require 테스트 경험이 있습니다.',
      'Swagger 라이브러리를 사용한 API 테스트 경험이 있습니다.',
    ],
    icon: 'etc-icon.png',
    iconCustomWidth: '38px',
    filterWhite: true,
  },
]

const careerList = [
  {
    company: '(주)에이피위즈덤',
    project: [
      {
        name: 'KT Paperless 플랫폼',
        order: 'KT',
        dateFrom : '2021.09',
        dateTo : '2022.04',
        role: '개발',
        skill: ['HTML', 'Sass', 'Java', 'Javascript', 'jQuery', 'Thymeleaf'],
        desc: '',
      },
    ],
  },
  {
    company: '(주)케이원',
    project: [
      {
        name: 'NH투자증권 모바일 등기 서비스',
        order: 'NH투자증권',
        dateFrom : '2022.05',
        dateTo : '2022.11',
        role: '개발',
        skill: ['jsp', 'Javascript', 'jQuery', 'Thymeleaf', 'Jaspersoft Studio'],
        desc: '',
      },
      {
        name: '미즈호 전자문서 유통 플랫폼 meDP 시스템',
        order: '미즈호',
        dateFrom : '2022.12',
        dateTo : '2023.06',
        role: '개발',
        skill: ['Vue', 'Vuex', 'Javascript', 'Bootstrap', 'Bootstrap-vue', 'Thymeleaf'],
        desc: '',
      },
      {
        name: 'DX 플랫폼 개발',
        order: '(주)케이원',
        dateFrom : '2023.07',
        dateTo : '2023.12',
        role: '개발',
        skill: ['Vue', 'Vuex', 'Javascript', 'Bootstrap', 'Bootstrap-vue', 'Thymeleaf'],
        desc: '',
      },
      {
        name: 'PayGo 근로관리 App',
        order: '(주)케이원',
        dateFrom : '2024.01',
        dateTo : '현재',
        role: '개발',
        skill: ['Vue', 'Vuex', 'Javascript', 'Bootstrap', 'Bootstrap-vue', 'Thymeleaf'],
        desc: '',
      },
    ],
  },
]
export { skillList, careerList }