// Resources data for non-academic roadmaps
const resources = {
  'web-dev': {
    notes: [
      {
        id: 'html-notes',
        title: 'HTML Complete Notes',
        description: 'Comprehensive HTML notes covering all fundamentals',
        author: 'CodeWithHarry',
        type: 'pdf',
        url: '/resources/HTML_Complete_Notes_CodeWithHarry.pdf',
        downloadable: true
      },
      {
        id: 'css-notes',
        title: 'CSS Complete Guide',
        description: 'Complete CSS guide from basics to advanced',
        author: 'Code With Harry',
        type: 'pdf',
        url: '/resources/CSS_Complete_Notes_cwh.pdf',
        downloadable: true
      },
      {
        id: 'js-notes',
        title: 'JavaScript Essentials',
        description: 'JavaScript fundamentals and ES6+ features',
        author: 'Code With Harry',
        type: 'pdf',
        url: '/resources/JSNotes.pdf',
        downloadable: true
      },
      {
        id: 'react-notes',
        title: 'React JS',
        description: 'Component-based frontend framework',
        author: 'Topperworld',
        type: 'pdf',
        url: '/resources/ReactJSnotes.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'web-dev-playlist',
        title: 'Complete Web Development Course',
        description: 'Comprehensive web development tutorials from HTML to full-stack',
        author: 'CodeWithHarry',
        playlistId: 'PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=gT6aGsSi0XfV_V3S&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
      },
      {
        id: 'web-dev-playlist-2',
        title: 'Complete Web Development Course',
        description: 'Comprehensive web development tutorials from HTML to full-stack',
        author: 'Coder Army',
        playlistId: 'PLQEaRBV9gAFsistSzOgnD4cWgFGRVda4X',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=IUYFGF-e5Xbb86Ol&amp;list=PLQEaRBV9gAFsistSzOgnD4cWgFGRVda4X'
      },
      {
        id: 'web-dev-playlist-3',
        title: 'Backend Development',
        description: 'Server-side logic and operations',
        author: 'freecodecamp.org',
        playlistId: 'PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=IylhHW0_ESeovXPN&amp;list=PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM'
      },
      {
        id: 'typescript',
        title: 'Typescript Full Course',
        description: 'Safer, scalable JS development',
        author: 'Code Step by Step',
        playlistId: 'PL8p2I9GklV44fWXJGEsBvR_ylJClgdVAN',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=c1mIFZ2WDSS8_mSq&amp;list=PL8p2I9GklV44fWXJGEsBvR_ylJClgdVAN'
      }
    ]
  },

  'app-dev': {
    notes: [
      {
        id: 'android-notes',
        title: 'Android Development Guide',
        description: 'Complete Android development with Kotlin',
        author: 'Android Team',
        type: 'pdf',
        url: '/resources/Android_Development_Guide.pdf',
        downloadable: true
      },
      {
        id: 'react-native-notes',
        title: 'React Native Complete Guide',
        description: 'Build cross-platform apps with React Native',
        author: 'Akshat Paul',
        type: 'pdf',
        url: '/resources/reactNative.pdf',
        downloadable: true
      },
      {
        id: 'flutter-notes',
        title: 'Flutter Apprentice',
        description: 'Complete Flutter development guide',
        author: 'Mike Katz , Kevin Moore',
        type: 'pdf',
        url: '/resources/Flutter.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'React Native',
        title: 'Complete React Native Course',
        description: 'Cross-platform mobile development framework',
        author: 'Chai With Code',
        playlistId: 'PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=F_MbkGqNIid30UFc&amp;list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c'
      }
    ]
  },

  'ml': {
    notes: [
      {
        id: 'ml-notes',
        title: 'Hands on Machine Learning ',
        description: 'Scikit-Learn , Keras and tensorflow',
        author: 'Aurelion Geren',
        type: 'pdf',
        url: '/resources/homl.pdf',
        downloadable: true
      },
      {
        id: 'python-ml-notes',
        title: 'Machine Learning with Python Tutorial',
        description: 'Python libraries and tools for ML',
        author: 'Bernd Klein',
        type: 'pdf',
        url: '/resources/pmlt.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'ml-playlist',
        title: '100 days of Machine Learning',
        description: 'Learn ML, AI, Python, TensorFlow, and data science',
        author: 'CampusX',
        playlistId: 'PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=PZWsUgdxG1v7rBM5&amp;list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH'
      },

      {
        id: 'ml-playlist-2',
        title: '100 days of Deep Learning',
        description: 'A complete end-to-end playlist on Deep Learning where topics like ANN, CNN, and RNN are covered.',
        author: 'CampusX',
        playlistId: 'PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=YvgKeJj6qKT2PQff&amp;list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn'
      },

    ]
  },

  'cybersecurity': {
    notes: [
      {
        id: 'cybersecurity-notes',
        title: 'Cybersecurity Fundamentals',
        description: 'Complete guide to cybersecurity and ethical hacking',
        author: 'Security Experts',
        type: 'pdf',
        url: '/resources/Cybersecurity_Fundamentals.pdf',
        downloadable: true
      },
      {
        id: 'penetration-testing-notes',
        title: 'Penetration Testing Guide',
        description: 'Comprehensive penetration testing methodology',
        author: 'Pen Test Team',
        type: 'pdf',
        url: '/resources/Penetration_Testing_Guide.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'cybersecurity-playlist',
        title: 'Complete Cybersecurity Course',
        description: 'Learn ethical hacking, penetration testing, and cybersecurity',
        author: 'CodeWithHarry',
        playlistId: 'PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=gT6aGsSi0XfV_V3S&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
      }
    ]
  },

  'cloud': {
    notes: [
      {
        id: 'aws-notes',
        title: 'AWS Complete Guide',
        description: 'Comprehensive AWS cloud computing guide',
        author: 'Cloud Experts',
        type: 'pdf',
        url: '/resources/AWS_Complete_Guide.pdf',
        downloadable: true
      },
      {
        id: 'docker-notes',
        title: 'Docker and Kubernetes Guide',
        description: 'Containerization and orchestration guide',
        author: 'DevOps Team',
        type: 'pdf',
        url: '/resources/Docker_Kubernetes_Guide.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'cloud-playlist',
        title: 'Complete Cloud Computing Course',
        description: 'Learn AWS, Docker, Kubernetes, and DevOps',
        author: 'CodeWithHarry',
        playlistId: 'PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=gT6aGsSi0XfV_V3S&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
      }
    ]
  },

  'uiux': {
    notes: [
      {
        id: 'uiux-notes',
        title: 'UI/UX Design Complete Guide',
        description: 'Comprehensive guide to UI/UX design principles',
        author: 'Design Masters',
        type: 'pdf',
        url: '/resources/UIUX_Design_Guide.pdf',
        downloadable: true
      },
      {
        id: 'figma-notes',
        title: 'Figma Design System Guide',
        description: 'Complete guide to designing with Figma',
        author: 'Figma Team',
        type: 'pdf',
        url: '/resources/Figma_Design_Guide.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'uiux-playlist',
        title: 'Complete UI/UX Design Course',
        description: 'Learn UI/UX design, Figma, and design thinking',
        author: 'CodeWithHarry',
        playlistId: 'PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=gT6aGsSi0XfV_V3S&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
      }
    ]
  },

  'game-dev': {
    notes: [
      {
        id: 'unity-notes',
        title: 'Unity Game Development Guide',
        description: 'Complete Unity game development handbook',
        author: 'Unity Technologies',
        type: 'pdf',
        url: '/resources/Unity_Game_Development.pdf',
        downloadable: true
      },
      {
        id: 'game-design-notes',
        title: 'Game Design Fundamentals',
        description: 'Core principles of game design and mechanics',
        author: 'Game Design Academy',
        type: 'pdf',
        url: '/resources/Game_Design_Fundamentals.pdf',
        downloadable: true
      },
      {
        id: 'csharp-unity-notes',
        title: 'C# for Unity Developers',
        description: 'C# programming specifically for Unity',
        author: 'Unity Experts',
        type: 'pdf',
        url: '/resources/CSharp_Unity_Guide.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'game-dev-playlist',
        title: 'Complete Game Development Course',
        description: 'Learn Unity, C#, game design, and game development',
        author: 'CodeWithHarry',
        playlistId: 'PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=gT6aGsSi0XfV_V3S&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
      }
    ]
  },

  // Academic Resources with Notes, PYQs, and Videos
  'dld': {
    notes: [
      {
        id: 'dld-notes-1',
        title: 'Digital Logic Design Complete Notes',
        description: 'Comprehensive notes covering Boolean algebra, logic gates, and circuits',
        author: 'Gate Smashers',
        type: 'pdf',
        url: '/resources/DLD_Complete_Notes.pdf',
        downloadable: true
      },
      {
        id: 'dld-notes-2',
        title: 'Sequential Circuits Guide',
        description: 'Flip-flops, registers, and counters explained',
        author: 'Engineering Notes',
        type: 'pdf',
        url: '/resources/DLD_Sequential_Circuits.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'dld-pyq-1',
        title: 'DLD Previous Year Questions 2020-2024',
        description: 'Solved previous year questions with detailed explanations',
        year: '2020-2024',
        type: 'pdf',
        url: '/resources/DLD_PYQs_2020_2024.pdf',
        downloadable: true
      },
      {
        id: 'dld-pyq-2',
        title: 'GATE DLD Questions',
        description: 'GATE exam questions on Digital Logic Design',
        year: 'GATE',
        type: 'pdf',
        url: '/resources/DLD_GATE_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'dld-playlist-1',
        title: 'Digital Logic Design Complete Course',
        description: 'Complete DLD course from basics to advanced topics',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiFNaEcELTfnDi8--UgZgN7o',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example1&list=PLxCzCOWd7aiFNaEcELTfnDi8--UgZgN7o'
      },
      {
        id: 'dld-playlist-2',
        title: 'Digital Electronics',
        description: 'Digital electronics and logic design tutorials',
        author: 'Neso Academy',
        playlistId: 'PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example2&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm'
      }
    ]
  },

  'ds': {
    notes: [
      {
        id: 'ds-notes-1',
        title: 'Data Structures Complete Notes',
        description: 'Arrays, linked lists, stacks, queues, trees, and graphs',
        author: 'Love Babbar',
        type: 'pdf',
        url: '/resources/DS_Complete_Notes.pdf',
        downloadable: true
      },
      {
        id: 'ds-notes-2',
        title: 'Advanced Data Structures',
        description: 'AVL trees, B-trees, heaps, and hashing',
        author: 'CodeHelp',
        type: 'pdf',
        url: '/resources/DS_Advanced_Notes.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'ds-pyq-1',
        title: 'Data Structures PYQs 2019-2024',
        description: 'University exam questions with solutions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/DS_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'ds-pyq-2',
        title: 'GATE Data Structures Questions',
        description: 'GATE previous year questions on DS',
        year: 'GATE',
        type: 'pdf',
        url: '/resources/DS_GATE_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'ds-playlist-1',
        title: 'Data Structures Full Course',
        description: 'Complete DSA course with C++ implementation',
        author: 'Love Babbar',
        playlistId: 'PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example3&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA'
      },
      {
        id: 'ds-playlist-2',
        title: 'Data Structures and Algorithms',
        description: 'DSA tutorials with problem solving',
        author: 'Abdul Bari',
        playlistId: 'PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example4&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O'
      }
    ]
  },

  'oop': {
    notes: [
      {
        id: 'oop-notes-1',
        title: 'OOP Concepts Complete Guide',
        description: 'Classes, objects, inheritance, polymorphism, and encapsulation',
        author: 'Java Point',
        type: 'pdf',
        url: '/resources/OOP_Complete_Notes.pdf',
        downloadable: true
      },
      {
        id: 'oop-notes-2',
        title: 'Design Patterns in OOP',
        description: 'Common design patterns and SOLID principles',
        author: 'Refactoring Guru',
        type: 'pdf',
        url: '/resources/OOP_Design_Patterns.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'oop-pyq-1',
        title: 'OOP Previous Year Questions 2019-2024',
        description: 'Solved university exam questions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/OOP_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'oop-pyq-2',
        title: 'Java OOP Interview Questions',
        description: 'Common OOP interview questions and answers',
        year: 'Interview',
        type: 'pdf',
        url: '/resources/OOP_Interview_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'oop-playlist-1',
        title: 'Object Oriented Programming in Java',
        description: 'Complete OOP course with Java',
        author: 'Apna College',
        playlistId: 'PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example5&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop'
      },
      {
        id: 'oop-playlist-2',
        title: 'OOP Concepts and Design Patterns',
        description: 'OOP principles and design patterns explained',
        author: 'Programming with Mosh',
        playlistId: 'PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example6&list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f'
      }
    ]
  },

  'dbms': {
    notes: [
      {
        id: 'dbms-notes-1',
        title: 'DBMS Complete Notes',
        description: 'Database concepts, SQL, normalization, and transactions',
        author: 'Gate Smashers',
        type: 'pdf',
        url: '/resources/Flutter.pdf',
        downloadable: true
      },
      {
        id: 'dbms-notes-2',
        title: 'SQL Query Guide',
        description: 'Comprehensive SQL queries and examples',
        author: 'Tutorials Point',
        type: 'pdf',
        url: '/resources/DBMS_SQL_Guide.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'dbms-pyq-1',
        title: 'DBMS Previous Year Questions 2019-2024',
        description: 'University exam questions with detailed solutions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/DBMS_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'dbms-pyq-2',
        title: 'GATE DBMS Questions',
        description: 'GATE previous year questions on DBMS',
        year: 'GATE',
        type: 'pdf',
        url: '/resources/DBMS_GATE_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'dbms-playlist-1',
        title: 'DBMS Complete Course',
        description: 'Database management systems from basics to advanced',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example7&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y'
      },
      {
        id: 'dbms-playlist-2',
        title: 'Database Management System',
        description: 'DBMS concepts and SQL tutorials',
        author: 'Knowledge Gate',
        playlistId: 'PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example8&list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV'
      }
    ]
  },

  'os': {
    notes: [
      {
        id: 'os-notes-1',
        title: 'Operating Systems Complete Notes',
        description: 'Process management, memory management, and file systems',
        author: 'Gate Smashers',
        type: 'pdf',
        url: '/resources/OS_Complete_Notes.pdf',
        downloadable: true
      },
      {
        id: 'os-notes-2',
        title: 'OS Scheduling Algorithms',
        description: 'CPU scheduling and disk scheduling algorithms',
        author: 'Study Tonight',
        type: 'pdf',
        url: '/resources/OS_Scheduling_Notes.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'os-pyq-1',
        title: 'OS Previous Year Questions 2019-2024',
        description: 'Solved university exam questions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/OS_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'os-pyq-2',
        title: 'GATE OS Questions',
        description: 'GATE previous year questions on Operating Systems',
        year: 'GATE',
        type: 'pdf',
        url: '/resources/OS_GATE_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'os-playlist-1',
        title: 'Operating System Full Course',
        description: 'Complete OS course covering all concepts',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example9&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p'
      },
      {
        id: 'os-playlist-2',
        title: 'Operating Systems',
        description: 'OS concepts and implementation',
        author: 'Neso Academy',
        playlistId: 'PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example10&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O'
      }
    ]
  },

  'cn': {
    notes: [
      {
        id: 'cn-notes-1',
        title: 'Computer Networks Complete Notes',
        description: 'OSI model, TCP/IP, routing, and network protocols',
        author: 'Gate Smashers',
        type: 'pdf',
        url: '/resources/PYQ/CN End sem.pdf',
        downloadable: true
      },
      {
        id: 'cn-notes-2',
        title: 'Network Layer Protocols',
        description: 'IP, ICMP, routing algorithms explained',
        author: 'Networking Academy',
        type: 'pdf',
        url: '/resources/CN_Network_Layer.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'cn-pyq-1',
        title: 'CN End Sem',
        description: 'VSSUT PYQ',
        year: '2024',
        type: 'pdf',
        url: '/resources/PYQ/CN End sem.pdf',
        downloadable: true
      },
      {
        id: 'cn-pyq-2',
        title: 'CN Mid Sem 2025',
        description: 'VSSUT PYQ',
        year: '2025',
        type: 'pdf',
        url: '/resources/PYQ/CNmidsem2025.pdf',
        downloadable: true
      },
      {
        id: 'cn-pyq-3',
        title: 'CN Mid Sem 2025',
        description: 'VSSUT PYQ',
        year: '2025',
        type: 'pdf',
        url: '/resources/PYQ/CNmidsem2025.pdf',
        downloadable: true
      },
    ],
    videos: [
      {
        id: 'cn-playlist-1',
        title: 'Computer Networks Full Course',
        description: 'Complete CN course from basics to advanced',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example11&list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_'
      },
      {
        id: 'cn-playlist-2',
        title: 'Computer Networks',
        description: 'Networking concepts and protocols',
        author: 'Neso Academy',
        playlistId: 'PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example12&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx'
      }
    ]
  },

  'coa': {
    notes: [
      {
        id: 'coa-notes-1',
        title: 'Computer Organization Complete Notes',
        description: 'Dept of CSE, VSSUT',
        author: '',
        type: 'pdf',
        url: '/resources/notes/coa1.pdf',
        downloadable: true
      },
      {
        id: 'coa-notes-2',
        title: 'Pipeline and Memory Organization',
        description: 'Instruction pipelining and cache memory',
        author: 'CS Notes',
        type: 'pdf',
        url: '/resources/COA_Pipeline_Memory.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'coa-pyq-1',
        title: 'COA End Sem',
        description: 'VSSUT',
        year: '2025',
        type: 'pdf',
        url: '/resources/COA End sem.pdf',
        downloadable: true
      },
      {
        id: 'coa-pyq-2',
        title: 'COA mid Sem',
        description: 'VSSUT',
        year: '2025',
        type: 'pdf',
        url: '/resources/COAmidsem2025.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'coa-playlist-1',
        title: 'Computer Organization and Architecture',
        description: 'Complete COA course with detailed explanations',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example13&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX'
      },
      {
        id: 'coa-playlist-2',
        title: 'Computer Architecture',
        description: 'Computer architecture concepts and design',
        author: 'Neso Academy',
        playlistId: 'PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=example14&list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q'
      }
    ]
  },
  'daa': {
    notes: [
      {
        id: 'daa-notes-1',
        title: 'Design and Analysis of Algorithms Complete Notes',
        description: 'VSSUT Notes',
        author: 'Mr. S.K. Sathua, Dr. M.R. Kabat, Dr. R. Mohanty',
        type: 'pdf',
        url: '/resources/notes/daa2.pdf',
        downloadable: true
      },
      {
        id: 'daa-notes-2',
        title: 'Advanced Algorithm Techniques',
        description: 'Dynamic programming, greedy algorithms, and graph algorithms',
        author: '',
        type: 'pdf',
        url: '/resources/notes/daa1.pdf',
        downloadable: true
      },
      {
        id: 'daa-notes-3',
        title: 'Advanced Algorithm Techniques',
        description: 'DAA notes OUTR',
        author: 'Dr. Subasish Mohapatra',
        type: 'pdf',
        url: '/resources/notes/daa3.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'daa-pyq-1',
        title: 'DAA End Sem',
        description: 'VSSUT PYQ ',
        year: '2025',
        type: 'pdf',
        url: '/resources/PYQ/DAA End sem.pdf',
        downloadable: true
      },
      {
        id: 'daa-pyq-2',
        title: 'DAA Mid Sem',
        description: 'VSSUT PYQ ',
        year: '2025',
        type: 'pdf',
        url: '/resources/PYQ/DaaMid2025.pdf',
        downloadable: true
      },
      {
        id: 'daa-pyq-3',
        title: 'DAA Mid Sem',
        description: 'VSSUT PYQ ',
        year: '2024',
        type: 'pdf',
        url: '/resources/PYQ/DAA mid sem.pdf',
        downloadable: true
      },
    ],
    videos: [
      {
        id: 'daa-playlist-1',
        title: 'Algorithm Design and Analysis',
        description: 'Complete DAA course with problem solving',
        author: 'Abdul Bari',
        playlistId: 'PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=daaexample1&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O'
      },
      {
        id: 'daa-playlist-2',
        title: 'Design and Analysis of Algorithms',
        description: 'Complete DAA course covering algorithms, complexity analysis, and problem solving',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=z-5e_nv2xjRrhNi5&list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa'
      }

    ]
  },

  'toc': {
    notes: [
      {
        id: 'toc-notes-1',
        title: 'Theory of Computation Complete Notes',
        description: 'Automata theory, formal languages, and computability',
        author: 'Gate Smashers',
        type: 'pdf',
        url: '/resources/TOC_Complete_Notes.pdf',
        downloadable: true
      },
      {
        id: 'toc-notes-2',
        title: 'Turing Machines and Complexity',
        description: 'Turing machines, decidability, and complexity theory',
        author: 'Theory Notes',
        type: 'pdf',
        url: '/resources/TOC_Turing_Complexity.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'toc-pyq-1',
        title: 'TOC Previous Year Questions 2019-2024',
        description: 'University exam questions with step-by-step solutions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/TOC_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'toc-pyq-2',
        title: 'GATE TOC Questions',
        description: 'GATE previous year questions on Theory of Computation',
        year: 'GATE',
        type: 'pdf',
        url: '/resources/TOC_GATE_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'toc-playlist-1',
        title: 'Theory of Computation Full Course',
        description: 'Complete TOC course covering all concepts',
        author: 'Gate Smashers',
        playlistId: 'PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=tocexample1&list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i'
      },
      {
        id: 'toc-playlist-2',
        title: 'Automata Theory and Formal Languages',
        description: 'Automata, grammars, and Turing machines',
        author: 'Neso Academy',
        playlistId: 'PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=tocexample2&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev'
      }
    ]
  },

  'python': {
    notes: [
      {
        id: 'python-notes-1',
        title: 'Python Programming Complete Guide',
        description: 'Python basics, data structures, and OOP in Python',
        author: 'Python.org',
        type: 'pdf',
        url: '/resources/Python_Complete_Guide.pdf',
        downloadable: true
      },
      {
        id: 'python-notes-2',
        title: 'Advanced Python Programming',
        description: 'Decorators, generators, context managers, and more',
        author: 'Real Python',
        type: 'pdf',
        url: '/resources/Python_Advanced_Notes.pdf',
        downloadable: true
      }
    ],
    pyqs: [
      {
        id: 'python-pyq-1',
        title: 'Python Previous Year Questions 2019-2024',
        description: 'University exam questions with code solutions',
        year: '2019-2024',
        type: 'pdf',
        url: '/resources/Python_PYQs_2019_2024.pdf',
        downloadable: true
      },
      {
        id: 'python-pyq-2',
        title: 'Python Programming Practice Questions',
        description: 'Practice questions for Python programming',
        year: 'Practice',
        type: 'pdf',
        url: '/resources/Python_Practice_Questions.pdf',
        downloadable: true
      }
    ],
    videos: [
      {
        id: 'python-playlist-1',
        title: 'Python Programming Full Course',
        description: 'Complete Python course from basics to advanced',
        author: 'Code With Harry',
        playlistId: 'PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=pythonexample1&list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME'
      },
      {
        id: 'python-playlist-2',
        title: 'Python for Beginners',
        description: 'Learn Python programming step by step',
        author: 'Programming with Mosh',
        playlistId: 'PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
        embedUrl: 'https://www.youtube.com/embed/videoseries?si=pythonexample2&list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f'
      }
    ]
  }
};

module.exports = resources;