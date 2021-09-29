import { Section } from './Section';

export const sections: Section[] = [
  {
    id: '10',
    name: 'General Questions',
    stepLabel: 'General Questions',
    icon: 'question_answer',
    content: '',
    questions: [
      {
        id: '0',
        q_text: 'Do you already have an existing product to start from',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 9,
            max_price: 9,
          },
          {
            id: '1',
            text: 'No',
            min_price: 99,
            max_price: 99,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text:
          'How would you describe the size of your desired digital solution',
        options: [
          {
            id: '0',
            text: 'Small',
            min_price: 50,
            max_price: 100,
          },
          {
            id: '1',
            text: 'Medium',
            min_price: 100,
            max_price: 150,
          },
          {
            id: '2',
            text: 'Large',
            min_price: 150,
            max_price: 200,
          },
        ],
        multiple_allowed: false,
      },
    ],
  },
  {
    id: '21',
    name: 'Strategy',
    icon: 'psychology',
    stepLabel: 'Strategy',
    content:
      'It all begins with narrowing down your strategy. A thought-out strategy is the solid base of your digital project. It’s an important part of your digital transformation, if not, the most important part. When defining your strategy, we try to find an answer to questions such as: “who is your target audience, what is the message, which channels do we need, how is this going to fit the market, and at what cost?”.',
    questions: [
      {
        id: '11',
        q_text:
          'To what extent do you feel like you need some help in digital strategy?',
        options: [
          {
            id: '0',
            text: '1',
            min_price: 20,
            max_price: 30,
          },
          {
            id: '1',
            text: '2',
            min_price: 30,
            max_price: 40,
          },
          {
            id: '2',
            text: '3',
            min_price: 40,
            max_price: 50,
          },
          {
            id: '3',
            text: '4',
            min_price: 50,
            max_price: 60,
          },
          {
            id: '4',
            text: '5',
            min_price: 60,
            max_price: 70,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '10',
        q_text:
          'Do you want us to help you define the business objectives for your project?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 100,
            max_price: 150,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '9',
        q_text:
          'Do you want us to help you define KPI’s and targets for your objectives?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 100,
            max_price: 150,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '8',
        q_text:
          'Do you want us to (further) investigate your target groups and their needs?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '7',
        q_text: ' Do you want us to (further) investigate your competition?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '6',
        q_text:
          'Do you want us to guide you through the trends in your industry?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '5',
        q_text:
          'Do you want us to create a clear picture of the strengths and weaknesses of your current offering?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '4',
        q_text:
          'Do you want us to analyse your current analytics in order to offer more personalised recommendations?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '3',
        q_text:
          'Do you want us to translate your business goals into a proposal for a concrete digital solution?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '2',
        q_text: 'Do you want us to define a roadmap for your offering?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text: ' Do you need branding for your product?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '0',
        q_text: ' Do you need a technical analysis of your product?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
    ],
  },
  {
    id: '32',
    name: 'UX/UI',
    stepLabel: 'UX/UI',
    icon: 'important_devices',
    content:
      'Of course, you want your digital product to look good and make it as easy as possible to use. Through a thorough analysis of your and your users’ needs, our designers can create the most sharp-looking digital product with the most intelligent user experience.',
    questions: [
      {
        id: '0',
        q_text: 'Select the aspects you need for UX',
        options: [
          {
            id: '0',
            text: 'WIREFRAMES',
            min_price: 99,
            max_price: 99,
          },
          {
            id: '1',
            text: 'VISUAL DESIGNS',
            min_price: 99,
            max_price: 99,
          },
          {
            id: '2',
            text: 'USER STORIES',
            min_price: 99,
            max_price: 99,
          },
          {
            id: '3',
            text: 'MVP',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '4',
            text: 'USER TESTS',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '5',
            text: 'ANALYTICS',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '6',
            text: 'AB TESTING',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '7',
            text: 'I DON’T NEED ANY UX',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: true,
      },
      {
        id: '1',
        q_text: 'Mark the aspects you need for UI',
        options: [
          {
            id: '0',
            text: 'ANIMATIONS',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '1',
            text: 'ILLUSTRATIONS',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '2',
            text: 'DESIGN SYSTEM',
            min_price: 50,
            max_price: 99,
          },
          {
            id: '3',
            text: 'I DON’T NEED ANY UI',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Development',
    stepLabel: 'Development',
    icon: 'settings_applications',
    content:
      'We’re at the core of our services, the development process. The following questions will measure your needs in terms of product type, desired features, implementations, … Due to our broad technology stack and our excellent team of front- and backend experts we can develop any custom software or digital product. So don’t hold back!',
    questions: [
      {
        id: '0',
        q_text: 'What devices does your application have to support?',
        options: [
          {
            id: '0',
            text: 'PHONE',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '1',
            text: 'TABLET',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '2',
            text: 'BROWSER',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '3',
            text: 'DESKTOP',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '4',
            text: 'TV',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '5',
            text: 'CMS',
            min_price: 90,
            max_price: 99,
          },
          {
            id: '6',
            text: 'OTHER',
            min_price: 90,
            max_price: 99,
          },
        ],
        multiple_allowed: true,
      },
      {
        id: '1',
        q_text: 'Do you have your own backend systems?',
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 0,
            max_price: 0,
          },
          {
            id: '1',
            text: 'No',
            min_price: 95,
            max_price: 99,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '2',
        q_text:
          "Are there external API's to take into account for integration?",
        options: [
          {
            id: '0',
            text: 'Yes',
            min_price: 99,
            max_price: 99,
          },
          {
            id: '1',
            text: 'No',
            min_price: 0,
            max_price: 0,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '3',
        q_text:
          'Check off the features you want your product to have. Features that might seem minor to you, can have a big impact on your application and the building process. Be very precise about the options you pick, that way you’ll get the best indication of the required budget. If you don’t have a clue about the meaning of these features, just contact us and our team will be happy to help you out',
        options: [
          {
            id: '0',
            text: 'LOCATION / MAPS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: 'SOCIAL ENGAGEMENT',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '2',
            text: 'BILLING',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '3',
            text: '2 FACTOR AUTHENTICATION',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '4',
            text: 'PUSH NOTIFICATIONS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '5',
            text: 'CAMERA',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '6',
            text: 'OTHER',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '7',
            text: 'BIOMETRICS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '8',
            text: 'VIDEO / AUDIO',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '9',
            text: 'SOCIAL MEDIA',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '10',
            text: 'IN APP PURCHASES',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '11',
            text: 'CALENDAR',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '12',
            text: 'CHAT',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '13',
            text: 'SCANNING',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '14',
            text: '3D',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '15',
            text: 'AUGMENTED REALITY',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '16',
            text: 'ITSME INTEGRATION',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '17',
            text: 'WIDGETS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '18',
            text: 'GRAPHS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '19',
            text: 'VOICE ACTIONS / ASSISTANT INTEGRATION',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '20',
            text: 'APP ACTIONS / SHORTCUTS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '21',
            text: "'APP PREVIEW' MODE: APP CLIPS / INSTANT APPS",
            min_price: 95,
            max_price: 99,
          },
          {
            id: '22',
            text: 'CAR PLATFORM INTEGRATION',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '23',
            text: 'ARTIFICIAL INTELLIGENCE/MACHINE LEARNING',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '24',
            text: 'ADVANCED ACCESSIBILITY',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '25',
            text: 'AUTHENTICATION (OPEN ID, SSO, SAML, ...)',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '26',
            text: 'WEBSOCKETS',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '27',
            text: ' WEB OFFLINE SUPPORT',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '28',
            text: 'STREAMING',
            min_price: 95,
            max_price: 99,
          },
        ],
        multiple_allowed: true,
      },
    ],
  },
  {
    id: '4',
    name: 'Product Growth',
    stepLabel: 'Product Growth',
    icon: 'insights',
    content:
      'Once your product is developed, it’s ready to be launched. Will you be doing this yourself or do you need some support in your “go to market” strategy? Other than that, we can take care of your product by just fixing bugs or we can help you ensure your product’s growth by analyzing your users’ needs and making the right changes. Let’s find out how close we’ll be partnering.',
    questions: [
      {
        id: '0',
        q_text:
          'Select your preference: After the release of my product I need…',
        options: [
          {
            id: '0',
            text: '... THE ASSURANCE THAT EVERYTHING KEEPS WORKING SMOOTHLY ALL THE TIME AND A SERVICE DESK FOR ALL OF MY QUESTIONS AND REPORTS.',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: '... THE ASSURANCE THAT MY PRODUCT WILL GET ALL OF THE REQUIRED UPDATES.',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '2',
            text: '... A CUSTOM MADE PARTNERSHIP THAT ENSURES MY PRODUCT TO EXCEL.',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '3',
            text: '... NO MORE GUIDANCE.',
            min_price: 95,
            max_price: 99,
          },
        ],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text: 'For the go-to-market of my solution I need…',
        options: [
          {
            id: '0',
            text: "... LITTLE SUPPORT FOR THE 'GO TO MARKET' OF MY PRODUCT.",
            min_price: 95,
            max_price: 99,
          },
          {
            id: '1',
            text: '... PROACTIVE SUPPORT AND FITTING MARKETING ACTIONS ON A PERSONALISED ROADMAP.',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '2',
            text: '... A CUSTOM MADE PARTNERSHIP THAT ENSURES MY PRODUCT TO EXCEL IN THE MARKET.',
            min_price: 95,
            max_price: 99,
          },
          {
            id: '3',
            text: '… NO MORE GUIDANCE.',
            min_price: 95,
            max_price: 99,
          },
        ],
        multiple_allowed: false,
      },
    ],
  },
];
export const sectionsWithoutOptions: Section[] = [
  {
    id: '0',
    name: 'General Questions',
    stepLabel: 'General Questions',
    icon: '',
    content: '',
    questions: [
      {
        id: '0',
        q_text: 'Do you already have an existing product to start from',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text:
          'How would you describe the size of your desired digital solution',
        options: [],
        multiple_allowed: false,
      },
    ],
  },
  {
    id: '1',
    name: 'Strategy',
    stepLabel: 'Strategy',
    icon: '',
    content:
      'It all begins with narrowing down your strategy. A thought-out strategy is the solid base of your digital project. It’s an important part of your digital transformation, if not, the most important part. When defining your strategy, we try to find an answer to questions such as: “who is your target audience, what is the message, which channels do we need, how is this going to fit the market, and at what cost?”.',
    questions: [
      {
        id: '0',
        q_text:
          'To what extent do you feel like you need some help in digital strategy?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text:
          'Do you want us to help you define the business objectives for your project?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '2',
        q_text:
          'Do you want us to help you define KPI’s and targets for your objectives?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '3',
        q_text:
          'Do you want us to (further) investigate your target groups and their needs?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '4',
        q_text: ' Do you want us to (further) investigate your competition?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '5',
        q_text:
          'Do you want us to guide you through the trends in your industry?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '6',
        q_text:
          'Do you want us to create a clear picture of the strengths and weaknesses of your current offering?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '7',
        q_text:
          'Do you want us to analyse your current analytics in order to offer more personalised recommendations?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '8',
        q_text:
          'Do you want us to translate your business goals into a proposal for a concrete digital solution?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '9',
        q_text: 'Do you want us to define a roadmap for your offering?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '10',
        q_text: ' Do you need branding for your product?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '11',
        q_text: ' Do you need a technical analysis of your product?',
        options: [],
        multiple_allowed: false,
      },
    ],
  },
  {
    id: '2',
    name: 'UX/UI',
    stepLabel: 'UX/UI',
    icon: '',
    content:
      'Of course, you want your digital product to look good and make it as easy as possible to use. Through a thorough analysis of your and your users’ needs, our designers can create the most sharp-looking digital product with the most intelligent user experience.',
    questions: [
      {
        id: '0',
        q_text: 'Select the aspects you need for UX',
        options: [],
        multiple_allowed: true,
      },
      {
        id: '1',
        q_text: 'Mark the aspects you need for UI',
        options: [],
        multiple_allowed: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Development',
    stepLabel: 'Development',
    icon: '',
    content:
      'We’re at the core of our services, the development process. The following questions will measure your needs in terms of product type, desired features, implementations, … Due to our broad technology stack and our excellent team of front- and backend experts we can develop any custom software or digital product. So don’t hold back!',
    questions: [
      {
        id: '0',
        q_text: 'What devices does your application have to support?',
        options: [],
        multiple_allowed: true,
      },
      {
        id: '1',
        q_text: 'Do you have your own backend systems?',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '2',
        q_text:
          "Are there external API's to take into account for integration?",
        options: [],
        multiple_allowed: false,
      },
      {
        id: '3',
        q_text:
          'Check off the features you want your product to have. Features that might seem minor to you, can have a big impact on your application and the building process. Be very precise about the options you pick, that way you’ll get the best indication of the required budget. If you don’t have a clue about the meaning of these features, just contact us and our team will be happy to help you out',
        options: [],
        multiple_allowed: true,
      },
    ],
  },
  {
    id: '4',
    name: 'Product Growth',
    stepLabel: 'Product Growth',
    icon: '',
    content:
      'Once your product is developed, it’s ready to be launched. Will you be doing this yourself or do you need some support in your “go to market” strategy? Other than that, we can take care of your product by just fixing bugs or we can help you ensure your product’s growth by analyzing your users’ needs and making the right changes. Let’s find out how close we’ll be partnering.',
    questions: [
      {
        id: '0',
        q_text:
          'Select your preference: After the release of my product I need…',
        options: [],
        multiple_allowed: false,
      },
      {
        id: '1',
        q_text: 'For the go-to-market of my solution I need…',
        options: [],
        multiple_allowed: false,
      },
    ],
  },
];
