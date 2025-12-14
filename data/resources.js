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
  }
};

module.exports = resources;