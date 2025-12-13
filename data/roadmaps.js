const resources = require('./resources');

const roadmaps = {
  academic: [
    {
      id: 'dld',
      title: 'Digital Logic Design',
      category: 'academic',
      description: 'Master digital circuits, Boolean algebra, and hardware design fundamentals',
      prerequisites: ['Basic Mathematics', 'Binary Number System'],
      tools: ['Logisim', 'Quartus', 'Vivado', 'ModelSim'],
      books: ['Digital Design by Morris Mano', 'Digital Fundamentals by Floyd'],
      useCases: ['CPU Design', 'Memory Systems', 'Digital Controllers', 'FPGA Programming'],
      topics: [
        {
          id: 'dld-1',
          title: 'Number Systems and Codes',
          level: 'beginner',
          subtopics: [
            'Binary, Octal, Decimal, Hexadecimal',
            'Number System Conversions',
            'Binary Arithmetic (Addition, Subtraction)',
            'Signed Number Representations (1\'s, 2\'s Complement)',
            'BCD, Gray Code, ASCII',
            'Error Detection Codes (Parity, Hamming)'
          ]
        },
        {
          id: 'dld-2',
          title: 'Boolean Algebra and Logic Gates',
          level: 'beginner',
          subtopics: [
            'Boolean Operations (AND, OR, NOT)',
            'Boolean Laws and Theorems',
            'De Morgan\'s Theorems',
            'Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)',
            'Universal Gates',
            'Boolean Expression Simplification'
          ]
        },
        {
          id: 'dld-3',
          title: 'Combinational Logic Circuits',
          level: 'intermediate',
          subtopics: [
            'Sum of Products (SOP) and Product of Sums (POS)',
            'Karnaugh Maps (K-Maps) for 2, 3, 4 variables',
            'Don\'t Care Conditions',
            'Quine-McCluskey Method',
            'Multiplexers and Demultiplexers',
            'Encoders and Decoders',
            'Adders (Half, Full, Ripple Carry)',
            'Subtractors',
            'Comparators',
            'Parity Generators and Checkers'
          ]
        },
        {
          id: 'dld-4',
          title: 'Sequential Logic Circuits',
          level: 'intermediate',
          subtopics: [
            'Latches (SR, D)',
            'Flip-Flops (SR, D, JK, T)',
            'Master-Slave Flip-Flops',
            'Edge Triggering vs Level Triggering',
            'Flip-Flop Conversions',
            'Registers (SISO, SIPO, PISO, PIPO)',
            'Shift Registers',
            'Counters (Asynchronous, Synchronous)',
            'Up/Down Counters',
            'Ring and Johnson Counters'
          ]
        },
        {
          id: 'dld-5',
          title: 'Memory and Programmable Logic',
          level: 'advanced',
          subtopics: [
            'RAM (SRAM, DRAM)',
            'ROM (PROM, EPROM, EEPROM)',
            'Memory Organization and Addressing',
            'Programmable Logic Devices (PLD)',
            'PAL (Programmable Array Logic)',
            'PLA (Programmable Logic Array)',
            'CPLD and FPGA Architecture',
            'HDL Introduction (Verilog/VHDL)'
          ]
        },
        {
          id: 'dld-6',
          title: 'Advanced Topics',
          level: 'advanced',
          subtopics: [
            'State Machines (Mealy and Moore)',
            'State Diagram and State Table',
            'State Minimization',
            'Algorithmic State Machines (ASM)',
            'Timing Analysis and Hazards',
            'Race Conditions',
            'Asynchronous Sequential Circuits',
            'FPGA Design Flow',
            'Hardware Description Languages'
          ]
        }
      ]
    },
    {
      id: 'ds',
      title: 'Data Structures',
      category: 'academic',
      description: 'Learn efficient data organization, storage, and manipulation techniques',
      prerequisites: ['Programming Basics (C/C++/Java/Python)', 'Basic Mathematics'],
      tools: ['GDB', 'Valgrind', 'Visual Studio Code', 'IntelliJ IDEA'],
      books: ['Introduction to Algorithms by CLRS', 'Data Structures by Tanenbaum'],
      useCases: ['Algorithm Optimization', 'Database Systems', 'Operating Systems', 'Compilers'],
      topics: [
        {
          id: 'ds-1',
          title: 'Introduction and Complexity Analysis',
          level: 'beginner',
          subtopics: [
            'What are Data Structures?',
            'Abstract Data Types (ADT)',
            'Time Complexity (Big O, Omega, Theta)',
            'Space Complexity',
            'Best, Average, Worst Case Analysis',
            'Asymptotic Notations',
            'Analyzing Loops and Recursion'
          ]
        },
        {
          id: 'ds-2',
          title: 'Arrays and Strings',
          level: 'beginner',
          subtopics: [
            'Array Declaration and Initialization',
            'Single and Multi-dimensional Arrays',
            'Array Operations (Insert, Delete, Search)',
            'Dynamic Arrays',
            'String Manipulation',
            'String Matching Algorithms',
            'Matrix Operations'
          ]
        },
        {
          id: 'ds-3',
          title: 'Linked Lists',
          level: 'beginner',
          subtopics: [
            'Singly Linked List',
            'Doubly Linked List',
            'Circular Linked List',
            'Operations (Insert, Delete, Traverse)',
            'Reversing a Linked List',
            'Detecting Cycles (Floyd\'s Algorithm)',
            'Merging Linked Lists'
          ]
        },
        {
          id: 'ds-4',
          title: 'Stacks and Queues',
          level: 'intermediate',
          subtopics: [
            'Stack ADT and Operations',
            'Array and Linked List Implementation',
            'Applications (Expression Evaluation, Parenthesis Matching)',
            'Queue ADT and Operations',
            'Circular Queue',
            'Priority Queue',
            'Deque (Double-ended Queue)',
            'Applications (BFS, Scheduling)'
          ]
        },
        {
          id: 'ds-5',
          title: 'Trees',
          level: 'intermediate',
          subtopics: [
            'Tree Terminology',
            'Binary Trees',
            'Tree Traversals (Inorder, Preorder, Postorder, Level Order)',
            'Binary Search Trees (BST)',
            'BST Operations (Insert, Delete, Search)',
            'AVL Trees (Self-Balancing)',
            'Red-Black Trees',
            'B-Trees and B+ Trees',
            'Heap (Min Heap, Max Heap)',
            'Heap Operations and Heapify',
            'Trie (Prefix Tree)',
            'Segment Trees',
            'Fenwick Tree (Binary Indexed Tree)'
          ]
        },
        {
          id: 'ds-6',
          title: 'Graphs',
          level: 'advanced',
          subtopics: [
            'Graph Representation (Adjacency Matrix, List)',
            'Graph Traversals (BFS, DFS)',
            'Topological Sorting',
            'Shortest Path (Dijkstra, Bellman-Ford)',
            'Minimum Spanning Tree (Kruskal, Prim)',
            'Strongly Connected Components',
            'Articulation Points and Bridges',
            'Graph Coloring',
            'Network Flow Algorithms'
          ]
        },
        {
          id: 'ds-7',
          title: 'Hashing',
          level: 'intermediate',
          subtopics: [
            'Hash Functions',
            'Collision Resolution (Chaining, Open Addressing)',
            'Linear Probing, Quadratic Probing',
            'Double Hashing',
            'Hash Tables',
            'Applications of Hashing',
            'Bloom Filters'
          ]
        },
        {
          id: 'ds-8',
          title: 'Advanced Data Structures',
          level: 'advanced',
          subtopics: [
            'Disjoint Set Union (Union-Find)',
            'Suffix Arrays and Suffix Trees',
            'Splay Trees',
            'Skip Lists',
            'Fibonacci Heap',
            'Persistent Data Structures',
            'Van Emde Boas Trees',
            'K-D Trees',
            'Interval Trees'
          ]
        }
      ]
    },
    {
      id: 'oop',
      title: 'Object Oriented Programming',
      category: 'academic',
      description: 'Master OOP concepts, design patterns, and software architecture principles',
      prerequisites: ['Programming Basics', 'Data Structures'],
      tools: ['Eclipse', 'IntelliJ IDEA', 'Visual Studio', 'NetBeans'],
      books: ['Head First Design Patterns', 'Effective Java by Joshua Bloch'],
      useCases: ['Software Development', 'Game Development', 'Enterprise Applications'],
      topics: [
        {
          id: 'oop-1',
          title: 'OOP Fundamentals',
          level: 'beginner',
          subtopics: [
            'Procedural vs Object-Oriented Programming',
            'Classes and Objects',
            'Attributes and Methods',
            'Constructors and Destructors',
            'Access Modifiers (Public, Private, Protected)',
            'this/self Keyword',
            'Static Members'
          ]
        },
        {
          id: 'oop-2',
          title: 'Four Pillars of OOP',
          level: 'beginner',
          subtopics: [
            'Encapsulation and Data Hiding',
            'Abstraction',
            'Inheritance (Single, Multiple, Multilevel, Hierarchical)',
            'Method Overriding',
            'super Keyword',
            'Polymorphism (Compile-time and Runtime)',
            'Method Overloading',
            'Operator Overloading'
          ]
        },
        {
          id: 'oop-3',
          title: 'Advanced OOP Concepts',
          level: 'intermediate',
          subtopics: [
            'Abstract Classes',
            'Interfaces',
            'Multiple Inheritance via Interfaces',
            'Composition vs Inheritance',
            'Aggregation and Association',
            'Inner Classes and Nested Classes',
            'Anonymous Classes',
            'Lambda Expressions'
          ]
        },
        {
          id: 'oop-4',
          title: 'Exception Handling',
          level: 'intermediate',
          subtopics: [
            'Errors vs Exceptions',
            'try-catch-finally Blocks',
            'Throwing Exceptions',
            'Custom Exceptions',
            'Checked vs Unchecked Exceptions',
            'Exception Propagation',
            'Best Practices'
          ]
        },
        {
          id: 'oop-5',
          title: 'Design Patterns - Creational',
          level: 'advanced',
          subtopics: [
            'Singleton Pattern',
            'Factory Pattern',
            'Abstract Factory Pattern',
            'Builder Pattern',
            'Prototype Pattern',
            'Object Pool Pattern'
          ]
        },
        {
          id: 'oop-6',
          title: 'Design Patterns - Structural',
          level: 'advanced',
          subtopics: [
            'Adapter Pattern',
            'Bridge Pattern',
            'Composite Pattern',
            'Decorator Pattern',
            'Facade Pattern',
            'Flyweight Pattern',
            'Proxy Pattern'
          ]
        },
        {
          id: 'oop-7',
          title: 'Design Patterns - Behavioral',
          level: 'advanced',
          subtopics: [
            'Observer Pattern',
            'Strategy Pattern',
            'Command Pattern',
            'Iterator Pattern',
            'State Pattern',
            'Template Method Pattern',
            'Chain of Responsibility',
            'Mediator Pattern',
            'Memento Pattern',
            'Visitor Pattern'
          ]
        },
        {
          id: 'oop-8',
          title: 'SOLID Principles',
          level: 'advanced',
          subtopics: [
            'Single Responsibility Principle',
            'Open/Closed Principle',
            'Liskov Substitution Principle',
            'Interface Segregation Principle',
            'Dependency Inversion Principle',
            'DRY (Don\'t Repeat Yourself)',
            'KISS (Keep It Simple, Stupid)',
            'YAGNI (You Aren\'t Gonna Need It)'
          ]
        }
      ]
    }
  ],
  nonAcademic: [
    {
      id: 'web-dev',
      title: 'Web Development',
      category: 'non-academic',
      description: 'Complete roadmap from HTML basics to full-stack web applications',
      prerequisites: ['Basic Computer Skills', 'Problem-Solving Mindset'],
      tools: ['VS Code', 'Chrome DevTools', 'Git', 'Postman', 'Docker'],
      frameworks: ['React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask'],
      projects: [
        'Personal Portfolio Website',
        'Todo App with CRUD',
        'E-commerce Platform',
        'Social Media Clone',
        'Real-time Chat Application',
        'Blog with CMS'
      ],
      resources: resources['web-dev'],
      topics: [
        {
          id: 'web-1',
          title: 'HTML Fundamentals',
          level: 'beginner',
          subtopics: [
            'HTML Structure and Syntax',
            'Semantic HTML5 Elements',
            'Forms and Input Types',
            'Tables and Lists',
            'Links and Navigation',
            'Images and Multimedia',
            'Meta Tags and SEO Basics',
            'Accessibility (ARIA, Alt Text)'
          ]
        },
        {
          id: 'web-2',
          title: 'CSS Fundamentals',
          level: 'beginner',
          subtopics: [
            'CSS Selectors and Specificity',
            'Box Model',
            'Colors and Typography',
            'Positioning (Static, Relative, Absolute, Fixed, Sticky)',
            'Display and Visibility',
            'Flexbox Layout',
            'CSS Grid Layout',
            'Responsive Design and Media Queries',
            'CSS Variables',
            'Transitions and Animations'
          ]
        },
        {
          id: 'web-3',
          title: 'JavaScript Basics',
          level: 'beginner',
          subtopics: [
            'Variables (var, let, const)',
            'Data Types and Type Conversion',
            'Operators and Expressions',
            'Control Flow (if-else, switch)',
            'Loops (for, while, do-while)',
            'Functions and Arrow Functions',
            'Arrays and Array Methods',
            'Objects and JSON',
            'DOM Manipulation',
            'Event Handling',
            'Form Validation'
          ]
        },
        {
          id: 'web-4',
          title: 'Advanced JavaScript',
          level: 'intermediate',
          subtopics: [
            'ES6+ Features',
            'Destructuring and Spread Operator',
            'Template Literals',
            'Promises and Async/Await',
            'Fetch API and AJAX',
            'Closures and Scope',
            'this Keyword',
            'Prototypes and Inheritance',
            'Classes',
            'Modules (Import/Export)',
            'Error Handling',
            'Local Storage and Session Storage'
          ]
        },
        {
          id: 'web-5',
          title: 'Frontend Framework - React',
          level: 'intermediate',
          subtopics: [
            'React Basics and JSX',
            'Components (Functional and Class)',
            'Props and State',
            'Hooks (useState, useEffect, useContext)',
            'Custom Hooks',
            'React Router',
            'State Management (Context API, Redux)',
            'API Integration',
            'Forms in React',
            'Performance Optimization',
            'React Testing Library'
          ]
        },
        {
          id: 'web-6',
          title: 'Backend Development - Node.js',
          level: 'intermediate',
          subtopics: [
            'Node.js Fundamentals',
            'NPM and Package Management',
            'Express.js Framework',
            'RESTful API Design',
            'Middleware',
            'Routing',
            'Request/Response Handling',
            'Error Handling',
            'Authentication (JWT, OAuth)',
            'File Upload',
            'Environment Variables'
          ]
        },
        {
          id: 'web-7',
          title: 'Databases',
          level: 'intermediate',
          subtopics: [
            'SQL Basics (MySQL, PostgreSQL)',
            'CRUD Operations',
            'Joins and Relationships',
            'Indexes and Optimization',
            'NoSQL Databases (MongoDB)',
            'Mongoose ODM',
            'Database Design',
            'Transactions',
            'Database Security',
            'ORMs (Sequelize, TypeORM)'
          ]
        },
        {
          id: 'web-8',
          title: 'Advanced Topics',
          level: 'advanced',
          subtopics: [
            'TypeScript',
            'GraphQL',
            'WebSockets and Real-time Communication',
            'Server-Side Rendering (Next.js)',
            'Progressive Web Apps (PWA)',
            'Web Performance Optimization',
            'Security Best Practices (XSS, CSRF, SQL Injection)',
            'Testing (Jest, Mocha, Cypress)',
            'CI/CD Pipelines',
            'Docker and Containerization',
            'Cloud Deployment (AWS, Azure, Heroku)',
            'Microservices Architecture'
          ]
        }
      ]
    },
    {
      id: 'app-dev',
      title: 'App Development',
      category: 'non-academic',
      description: 'Build native and cross-platform mobile applications',
      prerequisites: ['Programming Basics', 'OOP Concepts'],
      tools: ['Android Studio', 'Xcode', 'VS Code', 'Expo', 'Firebase'],
      frameworks: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Ionic'],
      projects: [
        'Weather App',
        'Todo List with Local Storage',
        'Social Media App',
        'E-commerce Mobile App',
        'Fitness Tracker',
        'Chat Application'
      ],
      resources: resources['app-dev'],
      topics: [
        {
          id: 'app-1',
          title: 'Mobile Development Basics',
          level: 'beginner',
          subtopics: [
            'Native vs Cross-Platform Development',
            'Mobile UI/UX Principles',
            'Screen Sizes and Resolutions',
            'Touch Gestures',
            'Mobile Design Patterns',
            'App Architecture (MVC, MVVM, MVP)',
            'Development Environment Setup'
          ]
        },
        {
          id: 'app-2',
          title: 'Android Development - Kotlin',
          level: 'beginner',
          subtopics: [
            'Kotlin Basics',
            'Android Studio Setup',
            'Activities and Fragments',
            'Layouts (LinearLayout, RelativeLayout, ConstraintLayout)',
            'Views and ViewGroups',
            'Intents and Navigation',
            'RecyclerView and Adapters',
            'Material Design Components',
            'Handling User Input'
          ]
        },
        {
          id: 'app-3',
          title: 'iOS Development - Swift',
          level: 'beginner',
          subtopics: [
            'Swift Basics',
            'Xcode Setup',
            'UIKit Fundamentals',
            'View Controllers',
            'Storyboards and Interface Builder',
            'Auto Layout',
            'Table Views and Collection Views',
            'Navigation Controllers',
            'Delegates and Protocols'
          ]
        },
        {
          id: 'app-4',
          title: 'Cross-Platform - React Native',
          level: 'intermediate',
          subtopics: [
            'React Native Setup',
            'Components and Props',
            'State Management',
            'Styling in React Native',
            'Navigation (React Navigation)',
            'FlatList and ScrollView',
            'Handling User Input',
            'Async Storage',
            'Native Modules',
            'Platform-Specific Code'
          ]
        },
        {
          id: 'app-5',
          title: 'Cross-Platform - Flutter',
          level: 'intermediate',
          subtopics: [
            'Dart Programming Language',
            'Flutter Setup',
            'Widgets (Stateless and Stateful)',
            'Layouts and Positioning',
            'Material Design and Cupertino',
            'Navigation and Routing',
            'State Management (Provider, Bloc, Riverpod)',
            'Forms and Validation',
            'Animations',
            'Platform Channels'
          ]
        },
        {
          id: 'app-6',
          title: 'Backend Integration',
          level: 'intermediate',
          subtopics: [
            'REST API Integration',
            'HTTP Requests',
            'JSON Parsing',
            'Authentication and Authorization',
            'Firebase Integration',
            'Push Notifications',
            'Real-time Databases',
            'Cloud Storage',
            'Analytics Integration'
          ]
        },
        {
          id: 'app-7',
          title: 'Advanced Features',
          level: 'advanced',
          subtopics: [
            'Camera and Gallery Access',
            'Geolocation and Maps',
            'Sensors (Accelerometer, Gyroscope)',
            'Biometric Authentication',
            'Background Tasks',
            'Local Notifications',
            'In-App Purchases',
            'Deep Linking',
            'Offline Support and Caching',
            'Performance Optimization'
          ]
        },
        {
          id: 'app-8',
          title: 'Testing and Deployment',
          level: 'advanced',
          subtopics: [
            'Unit Testing',
            'Integration Testing',
            'UI Testing',
            'Debugging Tools',
            'App Signing',
            'Google Play Store Deployment',
            'Apple App Store Deployment',
            'App Store Optimization (ASO)',
            'Beta Testing (TestFlight, Firebase App Distribution)',
            'Crash Reporting and Analytics',
            'Continuous Integration'
          ]
        }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      category: 'non-academic',
      description: 'Master ML algorithms, deep learning, and AI model development',
      prerequisites: ['Python Programming', 'Mathematics (Linear Algebra, Calculus, Statistics)', 'Data Structures'],
      tools: ['Jupyter Notebook', 'Google Colab', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      frameworks: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'XGBoost'],
      projects: [
        'House Price Prediction',
        'Image Classification',
        'Sentiment Analysis',
        'Recommendation System',
        'Object Detection',
        'Chatbot Development'
      ],
      resources: resources['ml'],
      topics: [
        {
          id: 'ml-1',
          title: 'Python for ML',
          level: 'beginner',
          subtopics: [
            'Python Basics Review',
            'NumPy for Numerical Computing',
            'Pandas for Data Manipulation',
            'Matplotlib and Seaborn for Visualization',
            'Jupyter Notebooks',
            'Virtual Environments',
            'Package Management (pip, conda)'
          ]
        },
        {
          id: 'ml-2',
          title: 'Mathematics for ML',
          level: 'beginner',
          subtopics: [
            'Linear Algebra (Vectors, Matrices, Eigenvalues)',
            'Calculus (Derivatives, Gradients, Chain Rule)',
            'Probability Theory',
            'Statistics (Mean, Variance, Distributions)',
            'Hypothesis Testing',
            'Bayes Theorem',
            'Information Theory'
          ]
        },
        {
          id: 'ml-3',
          title: 'Data Preprocessing',
          level: 'beginner',
          subtopics: [
            'Data Collection and Loading',
            'Exploratory Data Analysis (EDA)',
            'Handling Missing Values',
            'Data Cleaning',
            'Feature Scaling (Normalization, Standardization)',
            'Encoding Categorical Variables',
            'Feature Engineering',
            'Train-Test Split',
            'Cross-Validation'
          ]
        },
        {
          id: 'ml-4',
          title: 'Supervised Learning - Regression',
          level: 'intermediate',
          subtopics: [
            'Linear Regression',
            'Multiple Linear Regression',
            'Polynomial Regression',
            'Ridge and Lasso Regression',
            'Elastic Net',
            'Cost Functions',
            'Gradient Descent',
            'Model Evaluation (MSE, RMSE, R²)'
          ]
        },
        {
          id: 'ml-5',
          title: 'Supervised Learning - Classification',
          level: 'intermediate',
          subtopics: [
            'Logistic Regression',
            'K-Nearest Neighbors (KNN)',
            'Decision Trees',
            'Random Forests',
            'Support Vector Machines (SVM)',
            'Naive Bayes',
            'Gradient Boosting (XGBoost, LightGBM)',
            'Evaluation Metrics (Accuracy, Precision, Recall, F1, ROC-AUC)',
            'Confusion Matrix'
          ]
        },
        {
          id: 'ml-6',
          title: 'Unsupervised Learning',
          level: 'intermediate',
          subtopics: [
            'K-Means Clustering',
            'Hierarchical Clustering',
            'DBSCAN',
            'Principal Component Analysis (PCA)',
            't-SNE',
            'Autoencoders',
            'Anomaly Detection',
            'Association Rules (Apriori, FP-Growth)'
          ]
        },
        {
          id: 'ml-7',
          title: 'Deep Learning Fundamentals',
          level: 'advanced',
          subtopics: [
            'Neural Networks Basics',
            'Activation Functions',
            'Backpropagation',
            'Optimizers (SGD, Adam, RMSprop)',
            'Loss Functions',
            'Regularization (Dropout, L1/L2)',
            'Batch Normalization',
            'TensorFlow and Keras',
            'PyTorch Basics'
          ]
        },
        {
          id: 'ml-8',
          title: 'Advanced Deep Learning',
          level: 'advanced',
          subtopics: [
            'Convolutional Neural Networks (CNN)',
            'Image Classification and Object Detection',
            'Transfer Learning',
            'Recurrent Neural Networks (RNN)',
            'LSTM and GRU',
            'Natural Language Processing',
            'Transformers and Attention Mechanism',
            'Generative Adversarial Networks (GAN)',
            'Reinforcement Learning Basics',
            'Model Deployment (Flask, FastAPI, TensorFlow Serving)',
            'MLOps and Model Monitoring'
          ]
        }
      ]
    }
  ]
};

module.exports = roadmaps;

// Adding more academic roadmaps
roadmaps.academic.push(
  {
    id: 'dbms',
    title: 'Database Management System',
    category: 'academic',
    description: 'Master database design, SQL, transactions, and database optimization',
    prerequisites: ['Data Structures', 'Basic Programming'],
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
    books: ['Database System Concepts by Silberschatz', 'SQL Performance Explained'],
    useCases: ['Web Applications', 'Enterprise Systems', 'Data Warehousing', 'Analytics'],
    topics: [
      {
        id: 'dbms-1',
        title: 'Database Fundamentals',
        level: 'beginner',
        subtopics: [
          'What is a Database?',
          'DBMS vs File System',
          'Database Architecture',
          'Data Models (Hierarchical, Network, Relational)',
          'Schema and Instances',
          'Data Independence',
          'Database Users and Administrators'
        ]
      },
      {
        id: 'dbms-2',
        title: 'Relational Model',
        level: 'beginner',
        subtopics: [
          'Relations and Tuples',
          'Attributes and Domains',
          'Keys (Primary, Foreign, Candidate, Super)',
          'Relational Algebra Operations',
          'Selection, Projection, Join',
          'Set Operations',
          'Relational Calculus'
        ]
      },
      {
        id: 'dbms-3',
        title: 'SQL Basics',
        level: 'beginner',
        subtopics: [
          'DDL (CREATE, ALTER, DROP)',
          'DML (INSERT, UPDATE, DELETE)',
          'SELECT Queries',
          'WHERE Clause and Conditions',
          'ORDER BY and GROUP BY',
          'Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)',
          'HAVING Clause',
          'DISTINCT and LIMIT'
        ]
      },
      {
        id: 'dbms-4',
        title: 'Advanced SQL',
        level: 'intermediate',
        subtopics: [
          'Joins (INNER, LEFT, RIGHT, FULL, CROSS)',
          'Subqueries and Nested Queries',
          'Views',
          'Indexes',
          'Stored Procedures',
          'Triggers',
          'Cursors',
          'Transactions (COMMIT, ROLLBACK)',
          'ACID Properties'
        ]
      },
      {
        id: 'dbms-5',
        title: 'Database Design',
        level: 'intermediate',
        subtopics: [
          'ER Model (Entity-Relationship)',
          'ER Diagrams',
          'Entities, Attributes, Relationships',
          'Cardinality and Participation',
          'Weak Entities',
          'ER to Relational Mapping',
          'Normalization (1NF, 2NF, 3NF, BCNF)',
          'Denormalization',
          'Functional Dependencies'
        ]
      },
      {
        id: 'dbms-6',
        title: 'Transaction Management',
        level: 'advanced',
        subtopics: [
          'Transaction States',
          'Concurrency Control',
          'Lock-Based Protocols',
          'Two-Phase Locking',
          'Deadlock Handling',
          'Timestamp Ordering',
          'Isolation Levels',
          'Serializability'
        ]
      },
      {
        id: 'dbms-7',
        title: 'Advanced Topics',
        level: 'advanced',
        subtopics: [
          'Query Optimization',
          'Indexing Strategies (B-Tree, Hash)',
          'Database Recovery',
          'Backup and Restore',
          'Distributed Databases',
          'NoSQL Databases',
          'CAP Theorem',
          'Data Warehousing',
          'OLAP vs OLTP',
          'Database Security'
        ]
      }
    ]
  },
  {
    id: 'os',
    title: 'Operating Systems',
    category: 'academic',
    description: 'Understand OS architecture, process management, memory, and file systems',
    prerequisites: ['Computer Organization', 'Data Structures', 'C Programming'],
    tools: ['Linux', 'VirtualBox', 'GDB', 'Valgrind'],
    books: ['Operating System Concepts by Silberschatz', 'Modern Operating Systems by Tanenbaum'],
    useCases: ['System Programming', 'Kernel Development', 'Device Drivers', 'Embedded Systems'],
    topics: [
      {
        id: 'os-1',
        title: 'OS Fundamentals',
        level: 'beginner',
        subtopics: [
          'What is an Operating System?',
          'OS Functions and Services',
          'Types of OS (Batch, Time-Sharing, Real-Time)',
          'System Calls',
          'OS Structure (Monolithic, Layered, Microkernel)',
          'Kernel vs User Mode',
          'Interrupts and System Calls'
        ]
      },
      {
        id: 'os-2',
        title: 'Process Management',
        level: 'beginner',
        subtopics: [
          'Process Concept',
          'Process States',
          'Process Control Block (PCB)',
          'Process Creation and Termination',
          'Context Switching',
          'Process Scheduling',
          'CPU Scheduling Algorithms (FCFS, SJF, Priority, Round Robin)',
          'Multilevel Queue Scheduling'
        ]
      },
      {
        id: 'os-3',
        title: 'Threads and Concurrency',
        level: 'intermediate',
        subtopics: [
          'Thread Concept',
          'User-Level vs Kernel-Level Threads',
          'Multithreading Models',
          'Thread Libraries (Pthreads)',
          'Race Conditions',
          'Critical Section Problem',
          'Synchronization Mechanisms',
          'Mutex and Semaphores',
          'Monitors',
          'Classical Synchronization Problems'
        ]
      },
      {
        id: 'os-4',
        title: 'Deadlocks',
        level: 'intermediate',
        subtopics: [
          'Deadlock Characterization',
          'Necessary Conditions',
          'Resource Allocation Graph',
          'Deadlock Prevention',
          'Deadlock Avoidance (Banker\'s Algorithm)',
          'Deadlock Detection',
          'Deadlock Recovery'
        ]
      },
      {
        id: 'os-5',
        title: 'Memory Management',
        level: 'intermediate',
        subtopics: [
          'Memory Hierarchy',
          'Logical vs Physical Address',
          'Contiguous Memory Allocation',
          'Fragmentation',
          'Paging',
          'Page Tables',
          'Segmentation',
          'Virtual Memory',
          'Demand Paging',
          'Page Replacement Algorithms (FIFO, LRU, Optimal)',
          'Thrashing'
        ]
      },
      {
        id: 'os-6',
        title: 'File Systems',
        level: 'advanced',
        subtopics: [
          'File Concept and Attributes',
          'File Operations',
          'Directory Structure',
          'File Allocation Methods',
          'Free Space Management',
          'Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN)',
          'File System Implementation',
          'Journaling',
          'RAID Levels'
        ]
      },
      {
        id: 'os-7',
        title: 'Advanced Topics',
        level: 'advanced',
        subtopics: [
          'I/O Systems',
          'Device Drivers',
          'Buffering and Caching',
          'Protection and Security',
          'Access Control',
          'Distributed Systems',
          'Virtualization',
          'Containers',
          'Real-Time Operating Systems'
        ]
      }
    ]
  },
  {
    id: 'cn',
    title: 'Computer Networks',
    category: 'academic',
    description: 'Learn networking protocols, architecture, and communication systems',
    prerequisites: ['Basic Programming', 'Digital Logic'],
    tools: ['Wireshark', 'Cisco Packet Tracer', 'GNS3', 'Netcat'],
    books: ['Computer Networking by Kurose and Ross', 'TCP/IP Illustrated'],
    useCases: ['Network Administration', 'Cloud Computing', 'IoT', 'Cybersecurity'],
    topics: [
      {
        id: 'cn-1',
        title: 'Network Fundamentals',
        level: 'beginner',
        subtopics: [
          'What is a Computer Network?',
          'Network Types (LAN, WAN, MAN, PAN)',
          'Network Topologies',
          'Network Devices (Hub, Switch, Router)',
          'OSI Model (7 Layers)',
          'TCP/IP Model',
          'Protocol Layering',
          'Encapsulation and Decapsulation'
        ]
      },
      {
        id: 'cn-2',
        title: 'Physical Layer',
        level: 'beginner',
        subtopics: [
          'Transmission Media (Guided and Unguided)',
          'Analog vs Digital Signals',
          'Bandwidth and Throughput',
          'Multiplexing (FDM, TDM, WDM)',
          'Switching Techniques',
          'Modulation Techniques',
          'Line Coding'
        ]
      },
      {
        id: 'cn-3',
        title: 'Data Link Layer',
        level: 'intermediate',
        subtopics: [
          'Framing',
          'Error Detection (Parity, CRC)',
          'Error Correction (Hamming Code)',
          'Flow Control',
          'Stop-and-Wait Protocol',
          'Sliding Window Protocols',
          'MAC Protocols',
          'Ethernet',
          'ARP Protocol',
          'Switches and VLANs'
        ]
      },
      {
        id: 'cn-4',
        title: 'Network Layer',
        level: 'intermediate',
        subtopics: [
          'IP Addressing (IPv4, IPv6)',
          'Subnetting and CIDR',
          'Routing Algorithms',
          'Distance Vector Routing',
          'Link State Routing',
          'Routing Protocols (RIP, OSPF, BGP)',
          'ICMP Protocol',
          'NAT and PAT',
          'IP Fragmentation'
        ]
      },
      {
        id: 'cn-5',
        title: 'Transport Layer',
        level: 'intermediate',
        subtopics: [
          'Transport Layer Services',
          'Port Numbers',
          'UDP Protocol',
          'TCP Protocol',
          'Three-Way Handshake',
          'Flow Control (Sliding Window)',
          'Congestion Control',
          'TCP Variants',
          'Socket Programming'
        ]
      },
      {
        id: 'cn-6',
        title: 'Application Layer',
        level: 'advanced',
        subtopics: [
          'DNS (Domain Name System)',
          'HTTP and HTTPS',
          'FTP and SFTP',
          'SMTP, POP3, IMAP',
          'DHCP',
          'Telnet and SSH',
          'Web Sockets',
          'REST APIs'
        ]
      },
      {
        id: 'cn-7',
        title: 'Network Security',
        level: 'advanced',
        subtopics: [
          'Cryptography Basics',
          'Symmetric and Asymmetric Encryption',
          'Digital Signatures',
          'SSL/TLS',
          'Firewalls',
          'VPN',
          'Network Attacks (DoS, DDoS, MITM)',
          'Intrusion Detection Systems',
          'Security Protocols (IPSec, WPA)'
        ]
      },
      {
        id: 'cn-8',
        title: 'Advanced Topics',
        level: 'advanced',
        subtopics: [
          'Wireless Networks (WiFi, Bluetooth)',
          'Mobile Networks (3G, 4G, 5G)',
          'Software Defined Networking (SDN)',
          'Network Function Virtualization',
          'Quality of Service (QoS)',
          'Multimedia Networking',
          'IoT Protocols (MQTT, CoAP)',
          'Cloud Networking'
        ]
      }
    ]
  },
  {
    id: 'dbe',
    title: 'Database Engineering',
    category: 'academic',
    description: 'Learn how databases work, how to design them, and how to optimize queries and transactions',
    prerequisites: ['Basic Programming', 'Discrete Mathematics'],
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Oracle DB'],
    books: [
      'Database System Concepts by Silberschatz, Korth & Sudarshan',
      'Fundamentals of Database Systems by Elmasri & Navathe'
    ],
    useCases: ['Backend Development', 'Data Engineering', 'Analytics', 'Enterprise Applications'],

    topics: [
      {
        id: 'dbe-1',
        title: 'Introduction to Databases & Data Models',
        level: 'beginner',
        subtopics: [
          'What is a Database?',
          'DBMS vs File System',
          'Database System Architecture',
          'Data Abstraction',
          'Data Independence',
          'Database Schema and Instances',
          'Three-Schema Architecture',
          'Data Models Overview',
          'Entity–Relationship (ER) Model',
          'Relational Model'
        ]
      },

      {
        id: 'dbe-2',
        title: 'Relational Query Languages',
        level: 'beginner',
        subtopics: [
          'Relational Algebra',
          'Relational Calculus',
          'Introduction to SQL',
          'DDL (Data Definition Language)',
          'DQL (Data Query Language)',
          'DML (Data Manipulation Language)',
          'DCL (Data Control Language)',
          'Integrity Constraints'
        ]
      },

      {
        id: 'dbe-3',
        title: 'Relational Database Design',
        level: 'intermediate',
        subtopics: [
          'Functional Dependencies',
          'Armstrong’s Axioms',
          'Dependency Preservation',
          'Lossless Decomposition',
          'Introduction to Normalization',
          '1NF – First Normal Form',
          '2NF – Second Normal Form',
          '3NF – Third Normal Form',
          'BCNF – Boyce Codd Normal Form',
          '4NF – Fourth Normal Form',
          '5NF – Fifth Normal Form'
        ]
      },

      {
        id: 'dbe-4',
        title: 'Query Processing & Optimization',
        level: 'advanced',
        subtopics: [
          'Steps in Processing an SQL Query',
          'Catalog Information for Cost Estimation',
          'Measures of Query Cost',
          'Selection Operations',
          'Join Operations',
          'Equivalence Rules',
          'Query Optimization Techniques'
        ]
      },

      {
        id: 'dbe-5',
        title: 'Transaction Processing',
        level: 'advanced',
        subtopics: [
          'Transaction Concepts',
          'ACID Properties',
          'Schedules',
          'Serializability of Schedules'
        ]
      },

      {
        id: 'dbe-6',
        title: 'Concurrency Control & Recovery',
        level: 'advanced',
        subtopics: [
          'Concurrency Control',
          'Lock-Based Protocols',
          'Timestamping Methods',
          'Deadlocks in Databases',
          'Database Recovery Techniques'
        ]
      }
    ]
  },
    {
    id: 'coa',
    title: 'Computer Organization and Architecture',
    category: 'academic',
    description: 'Learn how computer hardware components work, from basic organization to CPU, memory, and I/O operations',
    prerequisites: ['Digital Logic', 'Basic Mathematics'],
    tools: ['Logisim', 'MARS Simulator', 'Ripes Simulator', 'Proteus'],
    books: [
      'Computer Organization and Design by Patterson & Hennessy',
      'Computer System Architecture by M. Morris Mano'
    ],
    useCases: ['Computer Architecture', 'Embedded Systems', 'Compiler Development', 'Hardware Design'],

    topics: [
      {
        id: 'coa-1',
        title: 'Introduction to Computer Organization',
        level: 'beginner',
        subtopics: [
          'Basic Organization of a Computer',
          'Basic Operational Concepts',
          'Registers',
          'Data Bus, Address Bus, Control Bus',
          'Types of Bus',
          'Harvard vs Von-Neumann Architecture',
          'IAS Computer Architecture'
        ]
      },

      {
        id: 'coa-2',
        title: 'Computer Arithmetic',
        level: 'beginner',
        subtopics: [
          'Binary Arithmetic Operations',
          'Decimal Arithmetic Operations',
          'Floating Point Representation',
          'Floating Point Arithmetic',
          'General Multiplication Algorithm',
          'Booth’s Multiplication Algorithm',
          'Division Algorithms',
          'Array Multipliers'
        ]
      },

      {
        id: 'coa-3',
        title: 'Instruction Set Architecture',
        level: 'intermediate',
        subtopics: [
          'General Instruction Format',
          'Three Address Instructions',
          'Two Address Instructions',
          'One Address Instructions',
          'Zero Address Instructions',
          'Addressing Modes',
          'Types of Instructions',
          'Instruction Cycle'
        ]
      },

      {
        id: 'coa-4',
        title: 'CPU Organization',
        level: 'intermediate',
        subtopics: [
          'Data Path Overview',
          'Single-Bus Data Path',
          'Register Transfers',
          'Fetching and Storing a Word in Memory',
          'Control Sequences for Instructions',
          'Multi-Bus Data Path',
          'Simple ALU Design',
          'Control Unit Operation',
          'Hardwired Control Unit',
          'Microprogrammed Control Unit',
          'Control Word',
          'Stack Organization',
          'Reverse Polish Notation (RPN)',
          'Evaluating Arithmetic Expressions using RPN',
          'Subroutines and Nested Subroutines'
        ]
      },

      {
        id: 'coa-5',
        title: 'Memory Organization',
        level: 'advanced',
        subtopics: [
          'Overview of Computer Memory System',
          'Characteristics of Memory System',
          'Memory Hierarchy',
          'Memory Classification',
          'Semiconductor Memory Organization',
          'Memory Cell Operation',

          // Cache Memory
          'Cache Memory Principles',
          'Cache Levels (L1, L2, L3)',
          'Cache Hit and Miss',
          'Cache Write Policies',
          'Cache Mapping Functions',
          'Cache Page Replacement Algorithms',

          // Virtual Memory
          'Virtual Memory Concepts',
          'Virtual Memory Page Replacement Algorithms',

          // Additional Memory Concepts
          'Associative Memory',
          'Memory Interleaving'
        ]
      },

      {
        id: 'coa-6',
        title: 'Input/Output Organization and Communication',
        level: 'advanced',
        subtopics: [
          'Peripheral Devices',
          'Accessing I/O Devices',
          'I/O Interface',
          'Interrupts',

          // Types of Data Transfer
          'Parallel Data Transfer',
          'Serial Data Transfer',
          'Synchronous Data Transfer',
          'Asynchronous Data Transfer',
          'Strobe Control',
          'Handshaking',
          'Asynchronous Serial Transfer',

          // Modes of Transfer
          'Programmed I/O',
          'Interrupt-Initiated I/O',
          'Direct Memory Access (DMA)',
          'DMA Controller',
          'I/O Channel and Processor'
        ]
      },

      {
        id: 'coa-7',
        title: 'Parallel Processing & Advanced Architectures',
        level: 'advanced',
        subtopics: [
          'Introduction to Pipelining',
          'Instruction Pipeline',
          'Arithmetic Pipeline',
          'Speedup',
          'Efficiency',
          'Throughput',
          'Pipeline Hazards',
          'RISC Architecture',
          'CISC Architecture'
        ]
      }
    ]
  },
  {
    id: 'daa',
    title: 'Design and Analysis of Algorithms',
    category: 'academic',
    description: 'Learn how to design efficient algorithms, analyze their complexity, and solve computational problems optimally',
    prerequisites: ['Data Structures', 'Discrete Mathematics', 'Basic Programming'],
    tools: ['Python', 'C++', 'Java', 'Online Judges', 'Visualizer Tools'],
    books: [
      'Introduction to Algorithms by Cormen, Leiserson, Rivest & Stein (CLRS)',
      'Algorithm Design by Kleinberg & Tardos'
    ],
    useCases: ['Competitive Programming', 'Software Engineering', 'AI/ML Optimization', 'Research'],

    topics: [
      {
        id: 'daa-1',
        title: 'Algorithm Foundations',
        level: 'beginner',
        subtopics: [
          'Introduction to Design and Analysis of Algorithms',
          'Asymptotic Analysis',
          'Growth of Functions',
          'Asymptotic Notations (O, Ω, Θ)',
          'Recurrences',
          'Solution of Recurrences by Substitution Method',
          'Recursion Tree Method',
          'Master Method'
        ]
      },

      {
        id: 'daa-2',
        title: 'Basic Algorithmic Techniques',
        level: 'beginner',
        subtopics: [
          'Brute Force Algorithms',
          'Divide and Conquer Technique',
          'Quicksort Algorithm',
          'Merge Sort Algorithm',
          'Binary Search',
          'Strassen’s Matrix Multiplication',
          'Decrease and Conquer Strategy',
          'Heap Sort'
        ]
      },

      {
        id: 'daa-3',
        title: 'Dynamic Programming',
        level: 'intermediate',
        subtopics: [
          'Elements of Dynamic Programming',
          'Matrix Chain Multiplication',
          'Longest Common Subsequence (LCS)',
          '0/1 Knapsack Problem',
          'Travelling Salesman Problem (TSP)'
        ]
      },

      {
        id: 'daa-4',
        title: 'Greedy Algorithms',
        level: 'intermediate',
        subtopics: [
          'Elements of Greedy Strategy',
          'Activity Selection Problem',
          'Fractional Knapsack Problem',
          'Huffman Coding'
        ]
      },

      {
        id: 'daa-5',
        title: 'Graph Algorithms',
        level: 'intermediate',
        subtopics: [
          'Disjoint Set Data Structure',
          'Disjoint Set Operations (Union/Find)',
          'Minimum Spanning Trees',
          'Kruskal’s Algorithm',
          'Prim’s Algorithm',
          'Single Source Shortest Paths',
          'Bellman-Ford Algorithm',
          'Dijkstra’s Algorithm',
          'All Pairs Shortest Paths',
          'Floyd–Warshall Algorithm'
        ]
      },

      {
        id: 'daa-6',
        title: 'String Matching Algorithms',
        level: 'advanced',
        subtopics: [
          'Introduction to String Matching',
          'Naive String Matching Algorithm',
          'Rabin-Karp Algorithm',
          'Knuth–Morris–Pratt (KMP) Algorithm',
          'Boyer–Moore Algorithm'
        ]
      },

      {
        id: 'daa-7',
        title: 'Backtracking and Branch & Bound',
        level: 'advanced',
        subtopics: [
          'Introduction to Backtracking',
          'Eight Queens Problem',
          'Backtracking for Knapsack',
          'Introduction to Branch and Bound',
          'Branch and Bound for Knapsack'
        ]
      },

      {
        id: 'daa-8',
        title: 'Complexity Theory & NP-Completeness',
        level: 'advanced',
        subtopics: [
          'Introduction to NP-Completeness',
          'Class P and NP',
          'NP-Complete Problems',
          'NP-Hard Problems',
          'Polynomial-Time Reductions',
          'SAT Problem & Cook’s Theorem',
          'Travelling Salesman Problem (TSP)',
          'Hamiltonian Cycle Problem',
          'Clique Problem',
          'Approximation Algorithms'
        ]
      }
    ]
  },
  {
    id: 'python',
    title: 'Programming in Python',
    category: 'academic',
    description: 'Learn Python programming fundamentals, data structures, OOP, file handling, modules, and more',
    prerequisites: ['Basic Computer Skills', 'Logical Thinking'],
    tools: ['Python Interpreter', 'PyCharm', 'VS Code', 'Jupyter Notebook'],
    books: [
      'Python Programming by Reema Thareja',
      'Learning Python by Mark Lutz'
    ],
    useCases: ['Software Development', 'Data Science', 'Automation', 'Web Development', 'Scripting'],

    topics: [
      {
        id: 'py-1',
        title: 'Python Basics',
        level: 'beginner',
        subtopics: [
          'Introduction to Python',
          'Features of Python',
          'Applications of Python',
          'Data Types',
          'Keywords and Identifiers',
          'Literals and Constants',
          'Python Indentation',
          'Operators and Expressions',
          'Naming Conventions with Examples',
          'Managing Input and Output',
          'Conditional Statements',
          'Looping Statements',
          'Break and Continue',
          'Pass and Return Statements',
          'Nesting of Loops'
        ]
      },

      {
        id: 'py-2',
        title: 'Modules and Packages',
        level: 'beginner',
        subtopics: [
          'Built-in Modules',
          'Import Statement',
          'Creating and Using Packages',
          'Date and Time Modules'
        ]
      },

      {
        id: 'py-3',
        title: 'Data Structures in Python',
        level: 'intermediate',
        subtopics: [
          'Arrays and Their Operations',
          'Handling Strings and Characters',

          // Lists
          'List Slicing and Indexing',
          'List Bounds and Cloning',
          'Nested Lists',
          'List Methods (append, extend, count, index, insert)',
          'Mutability in Lists',
          'Sorting and Reversing Lists',
          'Removing Elements (remove, clear, pop)',
          'Map and Filter Functions',

          // Tuple
          'Tuples and Tuple Methods',

          // Sets
          'Sets and Set Methods',

          // Dictionary
          'Dictionaries: Basic Operations',
          'Dictionary Iterators',
          'Dictionary Methods'
        ]
      },

      {
        id: 'py-4',
        title: 'Functions',
        level: 'intermediate',
        subtopics: [
          'Introduction to Functions',
          'Passing Arguments',
          'Anonymous Functions (Lambda Functions)',
          'Recursive Functions'
        ]
      },

      {
        id: 'py-5',
        title: 'Object-Oriented Programming',
        level: 'advanced',
        subtopics: [
          'Classes and Objects',
          'Class Methods',
          'Encapsulation',
          'Data Abstraction',
          'Constructors and Destructors',
          'Inheritance'
        ]
      },

      {
        id: 'py-6',
        title: 'Exception Handling',
        level: 'advanced',
        subtopics: [
          'Error Types',
          'try-except Block',
          'try-finally Block'
        ]
      },

      {
        id: 'py-7',
        title: 'Strings and Regular Expressions',
        level: 'advanced',
        subtopics: [
          'String Object Methods',
          'Escape Sequences',
          'Iterating Through Strings',
          'String Module',
          'String Formatting',
          'Regular Expressions',
          're Module Usage'
        ]
      },

      {
        id: 'py-8',
        title: 'File Handling',
        level: 'advanced',
        subtopics: [
          'Introduction to File Handling',
          'File Operations (open, read, write, close)',
          'Handling Directories'
        ]
      }
    ]
  },
  {
    id: 'toc',
    title: 'Theory of Computation',
    category: 'academic',
    description: 'Study formal languages, automata theory, computability, and complexity to understand the limits of computation',
    prerequisites: ['Discrete Mathematics', 'Basic Programming'],
    tools: ['JFLAP', 'FA Simulator', 'Automata Visualizers'],
    books: [
      'Introduction to Automata Theory, Languages, and Computation by Hopcroft, Motwani, Ullman',
      'Automata and Computability by Kozen'
    ],
    useCases: ['Compiler Design', 'Language Processing', 'Formal Verification', 'Algorithmic Theory'],

    topics: [

      {
        id: 'toc-1',
        title: 'Finite Automata',
        level: 'beginner',
        subtopics: [
          'Introduction to Finite Automata (FA)',
          'Deterministic Finite Automata (DFA): Formal Definition',
          'State Transition Diagrams',
          'Transition Tables',
          'Language of a DFA',
          'Nondeterministic Finite Automata (NFA): Definition and Language',
          'Equivalence of DFA and NFA',
          'Applications of Finite Automata',
          'Finite Automata with Epsilon Transitions (ε-NFA)',
          'Eliminating Epsilon Transitions',
          'Minimization of DFA',
          'Finite Automata with Output',
          'Moore Machines',
          'Mealy Machines',
          'Interconversion between Moore and Mealy'
        ]
      },

      {
        id: 'toc-2',
        title: 'Regular Expressions and Regular Languages',
        level: 'beginner',
        subtopics: [
          'Introduction to Regular Expressions',
          'Identities of Regular Expressions',
          'Converting DFA to Regular Expression',
          'Converting Regular Expression to Automata',
          'Applications of Regular Expressions',
          'Regular Grammars: Definition and Types',
          'FA for Regular Grammar',
          'Regular Grammar from FA',
          'Pumping Lemma for Regular Languages',
          'Applications of Pumping Lemma',
          'Closure Properties of Regular Languages'
        ]
      },

      {
        id: 'toc-3',
        title: 'Context-Free Grammars and CFLs',
        level: 'intermediate',
        subtopics: [
          'Context-Free Grammar (CFG): Definitions',
          'Derivation Trees',
          'Sentential Forms',
          'Rightmost and Leftmost Derivations',
          'Ambiguity in CFGs',
          'Minimizing CFGs',
          'Chomsky Normal Form (CNF)',
          'Greibach Normal Form (GNF)',
          'Pumping Lemma for CFLs',
          'Properties of Context-Free Languages'
        ]
      },

      {
        id: 'toc-4',
        title: 'Pushdown Automata & Turing Machines',
        level: 'advanced',
        subtopics: [
          'Pushdown Automata (PDA): Definition and Model',
          'Acceptance by Final State',
          'Acceptance by Empty Stack',
          'Equivalence of Final State and Empty Stack Acceptance',
          'Equivalence of CFG and PDA',
          
          'Turing Machines (TM): Formal Definition',
          'Behaviour and Transitions',
          'Languages of a TM',
          'TM as Accepters',
          'TM as Computers of Integer Functions',
          'Types of Turing Machines (Single Tape, Multi-Tape, Non-deterministic)'
        ]
      },

      {
        id: 'toc-5',
        title: 'Decidability and Computational Hierarchy',
        level: 'advanced',
        subtopics: [
          'Recursive Languages',
          'Recursively Enumerable Languages (REL)',
          'Properties of Recursive and RE Languages',
          'Universal Turing Machine',
          'The Halting Problem',
          'Undecidable Problems about TMs',
          'Context-Sensitive Languages and Linear Bounded Automata (LBA)',
          'Chomsky Hierarchy',
          'Decidability Concepts',
          'Post’s Correspondence Problem (PCP)',
          'Undecidability of PCP'
        ]
      }
    ]
  }





);

// Adding more non-academic roadmaps
roadmaps.nonAcademic.push(
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'non-academic',
    description: 'Master ethical hacking, penetration testing, and security operations',
    prerequisites: ['Networking Basics', 'Linux', 'Programming (Python/Bash)'],
    tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'John the Ripper'],
    frameworks: ['OWASP', 'NIST', 'ISO 27001', 'MITRE ATT&CK'],
    projects: [
      'Vulnerability Scanner',
      'Password Cracker',
      'Network Sniffer',
      'Web Application Firewall',
      'SIEM Dashboard',
      'Malware Analysis Lab'
    ],
    resources: resources['cybersecurity'],
    topics: [
      {
        id: 'cyber-1',
        title: 'Security Fundamentals',
        level: 'beginner',
        subtopics: [
          'CIA Triad (Confidentiality, Integrity, Availability)',
          'Security Principles',
          'Threat, Vulnerability, Risk',
          'Attack Vectors',
          'Security Policies',
          'Compliance and Regulations',
          'Security Frameworks'
        ]
      },
      {
        id: 'cyber-2',
        title: 'Linux and Command Line',
        level: 'beginner',
        subtopics: [
          'Linux Basics',
          'File System Navigation',
          'User and Permission Management',
          'Process Management',
          'Networking Commands',
          'Bash Scripting',
          'Package Management',
          'System Logs'
        ]
      },
      {
        id: 'cyber-3',
        title: 'Networking for Security',
        level: 'beginner',
        subtopics: [
          'TCP/IP Protocol Suite',
          'Network Scanning',
          'Port Scanning with Nmap',
          'Packet Analysis with Wireshark',
          'Network Protocols',
          'Firewalls and IDS/IPS',
          'VPN and Proxy',
          'Network Segmentation'
        ]
      },
      {
        id: 'cyber-4',
        title: 'Web Application Security',
        level: 'intermediate',
        subtopics: [
          'OWASP Top 10',
          'SQL Injection',
          'Cross-Site Scripting (XSS)',
          'Cross-Site Request Forgery (CSRF)',
          'Authentication Bypass',
          'Session Hijacking',
          'File Upload Vulnerabilities',
          'Burp Suite Usage',
          'Web Application Firewalls'
        ]
      },
      {
        id: 'cyber-5',
        title: 'Penetration Testing',
        level: 'intermediate',
        subtopics: [
          'Penetration Testing Methodology',
          'Reconnaissance and Information Gathering',
          'Vulnerability Assessment',
          'Exploitation with Metasploit',
          'Post-Exploitation',
          'Privilege Escalation',
          'Lateral Movement',
          'Report Writing',
          'Remediation Recommendations'
        ]
      },
      {
        id: 'cyber-6',
        title: 'Cryptography',
        level: 'intermediate',
        subtopics: [
          'Encryption Basics',
          'Symmetric Encryption (AES, DES)',
          'Asymmetric Encryption (RSA, ECC)',
          'Hashing (MD5, SHA)',
          'Digital Signatures',
          'PKI (Public Key Infrastructure)',
          'SSL/TLS',
          'Cryptographic Attacks',
          'Password Cracking'
        ]
      },
      {
        id: 'cyber-7',
        title: 'Malware Analysis',
        level: 'advanced',
        subtopics: [
          'Types of Malware',
          'Static Analysis',
          'Dynamic Analysis',
          'Reverse Engineering Basics',
          'Debugging Tools',
          'Behavioral Analysis',
          'Indicators of Compromise (IoC)',
          'Malware Sandboxing',
          'Threat Intelligence'
        ]
      },
      {
        id: 'cyber-8',
        title: 'Advanced Security',
        level: 'advanced',
        subtopics: [
          'Red Team vs Blue Team',
          'Security Operations Center (SOC)',
          'SIEM Tools',
          'Incident Response',
          'Digital Forensics',
          'Cloud Security (AWS, Azure)',
          'Container Security',
          'Zero Trust Architecture',
          'Threat Hunting',
          'Security Automation',
          'Bug Bounty Programs'
        ]
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    category: 'non-academic',
    description: 'Master cloud platforms, DevOps, and cloud-native architectures',
    prerequisites: ['Linux', 'Networking', 'Programming', 'Databases'],
    tools: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    frameworks: ['Serverless', 'Microservices', 'Infrastructure as Code'],
    projects: [
      'Deploy Web App on AWS',
      'Kubernetes Cluster Setup',
      'CI/CD Pipeline',
      'Serverless API',
      'Multi-Cloud Architecture',
      'Auto-Scaling Application'
    ],
    resources: resources['cloud'],
    topics: [
      {
        id: 'cloud-1',
        title: 'Cloud Fundamentals',
        level: 'beginner',
        subtopics: [
          'What is Cloud Computing?',
          'Cloud Service Models (IaaS, PaaS, SaaS)',
          'Cloud Deployment Models',
          'Benefits and Challenges',
          'Cloud Providers Overview',
          'Shared Responsibility Model',
          'Cloud Economics'
        ]
      },
      {
        id: 'cloud-2',
        title: 'AWS Basics',
        level: 'beginner',
        subtopics: [
          'AWS Account Setup',
          'IAM (Identity and Access Management)',
          'EC2 (Elastic Compute Cloud)',
          'S3 (Simple Storage Service)',
          'VPC (Virtual Private Cloud)',
          'Security Groups',
          'AWS CLI',
          'AWS Console Navigation'
        ]
      },
      {
        id: 'cloud-3',
        title: 'Compute Services',
        level: 'intermediate',
        subtopics: [
          'EC2 Instance Types',
          'Auto Scaling',
          'Load Balancers (ALB, NLB)',
          'Lambda (Serverless)',
          'ECS and EKS',
          'Elastic Beanstalk',
          'Lightsail',
          'Batch Processing'
        ]
      },
      {
        id: 'cloud-4',
        title: 'Storage and Databases',
        level: 'intermediate',
        subtopics: [
          'S3 Storage Classes',
          'EBS (Elastic Block Store)',
          'EFS (Elastic File System)',
          'RDS (Relational Database Service)',
          'DynamoDB (NoSQL)',
          'Aurora',
          'ElastiCache',
          'Database Migration'
        ]
      },
      {
        id: 'cloud-5',
        title: 'Networking and Content Delivery',
        level: 'intermediate',
        subtopics: [
          'VPC Design',
          'Subnets and Route Tables',
          'Internet Gateway and NAT',
          'VPN and Direct Connect',
          'CloudFront (CDN)',
          'Route 53 (DNS)',
          'API Gateway',
          'Network Security'
        ]
      },
      {
        id: 'cloud-6',
        title: 'DevOps and CI/CD',
        level: 'advanced',
        subtopics: [
          'Infrastructure as Code',
          'Terraform Basics',
          'CloudFormation',
          'Docker Containerization',
          'Kubernetes Orchestration',
          'CI/CD Pipelines',
          'Jenkins, GitLab CI, GitHub Actions',
          'CodePipeline and CodeDeploy',
          'Configuration Management (Ansible, Chef)'
        ]
      },
      {
        id: 'cloud-7',
        title: 'Monitoring and Security',
        level: 'advanced',
        subtopics: [
          'CloudWatch Monitoring',
          'CloudTrail Logging',
          'AWS Config',
          'Security Best Practices',
          'Encryption (KMS)',
          'Secrets Manager',
          'WAF (Web Application Firewall)',
          'Shield (DDoS Protection)',
          'Compliance and Auditing'
        ]
      },
      {
        id: 'cloud-8',
        title: 'Advanced Architecture',
        level: 'advanced',
        subtopics: [
          'Microservices Architecture',
          'Serverless Patterns',
          'Event-Driven Architecture',
          'Multi-Region Deployment',
          'Disaster Recovery',
          'High Availability Design',
          'Cost Optimization',
          'Well-Architected Framework',
          'Multi-Cloud Strategy',
          'Cloud Migration Strategies'
        ]
      }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'non-academic',
    description: 'Master user interface design, user experience, and design thinking',
    prerequisites: ['Basic Design Sense', 'Creativity', 'Empathy'],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Photoshop', 'Illustrator'],
    frameworks: ['Material Design', 'Human Interface Guidelines', 'Atomic Design'],
    projects: [
      'Mobile App Redesign',
      'E-commerce Website',
      'Dashboard Design',
      'Design System Creation',
      'User Research Study',
      'Prototype and User Testing'
    ],
    resources: resources['uiux'],
    topics: [
      {
        id: 'uiux-1',
        title: 'Design Fundamentals',
        level: 'beginner',
        subtopics: [
          'UI vs UX',
          'Design Thinking Process',
          'Color Theory',
          'Typography Basics',
          'Layout and Composition',
          'Visual Hierarchy',
          'White Space',
          'Gestalt Principles'
        ]
      },
      {
        id: 'uiux-2',
        title: 'User Research',
        level: 'beginner',
        subtopics: [
          'User Research Methods',
          'User Interviews',
          'Surveys and Questionnaires',
          'User Personas',
          'User Journey Mapping',
          'Empathy Mapping',
          'Competitive Analysis',
          'Analytics and Metrics'
        ]
      },
      {
        id: 'uiux-3',
        title: 'Information Architecture',
        level: 'intermediate',
        subtopics: [
          'Content Strategy',
          'Site Mapping',
          'User Flows',
          'Navigation Design',
          'Card Sorting',
          'Taxonomy and Ontology',
          'Search and Findability',
          'Content Hierarchy'
        ]
      },
      {
        id: 'uiux-4',
        title: 'Wireframing and Prototyping',
        level: 'intermediate',
        subtopics: [
          'Low-Fidelity Wireframes',
          'High-Fidelity Mockups',
          'Interactive Prototypes',
          'Figma Basics',
          'Component Libraries',
          'Design Handoff',
          'Responsive Design',
          'Mobile-First Approach'
        ]
      },
      {
        id: 'uiux-5',
        title: 'Visual Design',
        level: 'intermediate',
        subtopics: [
          'Color Palettes',
          'Typography Pairing',
          'Iconography',
          'Imagery and Photography',
          'Illustrations',
          'Branding and Identity',
          'Design Systems',
          'Style Guides',
          'Accessibility (WCAG)'
        ]
      },
      {
        id: 'uiux-6',
        title: 'Interaction Design',
        level: 'advanced',
        subtopics: [
          'Micro-interactions',
          'Animation Principles',
          'Transitions and Easing',
          'Feedback and Affordances',
          'Touch Gestures',
          'Voice UI',
          'Motion Design',
          'Prototyping Tools'
        ]
      },
      {
        id: 'uiux-7',
        title: 'Usability Testing',
        level: 'advanced',
        subtopics: [
          'Usability Testing Methods',
          'A/B Testing',
          'Heuristic Evaluation',
          'Cognitive Walkthrough',
          'Remote Testing',
          'Eye Tracking',
          'Heat Maps',
          'Analyzing Results',
          'Iterative Design'
        ]
      },
      {
        id: 'uiux-8',
        title: 'Advanced Topics',
        level: 'advanced',
        subtopics: [
          'Design Systems at Scale',
          'Design Tokens',
          'Inclusive Design',
          'Internationalization',
          'Dark Mode Design',
          'AR/VR Design',
          'Conversational UI',
          'Design Leadership',
          'Portfolio Building',
          'Client Communication'
        ]
      }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    category: 'non-academic',
    description: 'Master game design, programming, and development from 2D to 3D games',
    prerequisites: ['Programming Basics (C#/C++/JavaScript)', 'Mathematics', 'Problem Solving'],
    tools: ['Unity', 'Unreal Engine', 'Godot', 'Blender', 'Visual Studio', 'Git'],
    frameworks: ['Unity', 'Unreal Engine', 'Godot', 'Phaser', 'Three.js', 'Pygame'],
    projects: [
      '2D Platformer Game',
      '3D First-Person Shooter',
      'Mobile Puzzle Game',
      'Multiplayer Battle Arena',
      'RPG with Inventory System',
      'VR Experience'
    ],
    resources: resources['game-dev'],
    topics: [
      {
        id: 'gamedev-1',
        title: 'Game Development Fundamentals',
        level: 'beginner',
        subtopics: [
          'Introduction to Game Development',
          'Game Engines Overview',
          'Game Design Principles',
          'Game Loop Concept',
          'Sprites and Assets',
          'Coordinate Systems',
          'Frame Rate and Delta Time',
          'Input Handling (Keyboard, Mouse, Touch)',
          'Basic Game Math (Vectors, Angles)',
          'Version Control with Git'
        ]
      },
      {
        id: 'gamedev-2',
        title: '2D Game Development',
        level: 'beginner',
        subtopics: [
          '2D Graphics Basics',
          'Sprite Rendering',
          'Sprite Sheets and Animation',
          'Tilemaps and Level Design',
          '2D Physics (Rigidbody, Colliders)',
          'Collision Detection',
          'Player Movement and Controls',
          'Camera Follow System',
          'Parallax Scrolling',
          'Particle Systems',
          'UI Elements (Health Bars, Score)',
          'Sound Effects and Music Integration'
        ]
      },
      {
        id: 'gamedev-3',
        title: 'Unity Basics',
        level: 'beginner',
        subtopics: [
          'Unity Interface and Navigation',
          'GameObjects and Components',
          'Transforms (Position, Rotation, Scale)',
          'Prefabs and Instantiation',
          'C# Scripting Basics',
          'MonoBehaviour Lifecycle',
          'Input System',
          'Physics Components',
          'Audio Source and Listener',
          'Scene Management',
          'Building and Exporting Games'
        ]
      },
      {
        id: 'gamedev-4',
        title: '3D Game Development',
        level: 'intermediate',
        subtopics: [
          '3D Graphics Fundamentals',
          '3D Models and Meshes',
          'Materials and Textures',
          'Lighting (Directional, Point, Spot)',
          'Shadows and Baking',
          '3D Physics and Rigidbodies',
          'Character Controllers',
          'Third-Person and First-Person Cameras',
          'Raycasting',
          'Terrain Creation',
          'Skybox and Environment',
          'Level of Detail (LOD)'
        ]
      },
      {
        id: 'gamedev-5',
        title: 'Game Programming Patterns',
        level: 'intermediate',
        subtopics: [
          'Singleton Pattern',
          'Object Pooling',
          'State Machine',
          'Observer Pattern',
          'Command Pattern',
          'Factory Pattern',
          'Component Pattern',
          'Event System',
          'Service Locator',
          'Dependency Injection',
          'MVC Architecture in Games'
        ]
      },
      {
        id: 'gamedev-6',
        title: 'Advanced Game Mechanics',
        level: 'intermediate',
        subtopics: [
          'AI and Pathfinding (A*, NavMesh)',
          'Finite State Machines for AI',
          'Behavior Trees',
          'Inventory Systems',
          'Quest and Dialog Systems',
          'Save and Load System',
          'Procedural Generation',
          'Combat Systems',
          'Skill Trees and Progression',
          'Achievement System',
          'Analytics Integration'
        ]
      },
      {
        id: 'gamedev-7',
        title: 'Multiplayer and Networking',
        level: 'advanced',
        subtopics: [
          'Client-Server Architecture',
          'Peer-to-Peer Networking',
          'Network Protocols (TCP/UDP)',
          'Latency and Lag Compensation',
          'Client-Side Prediction',
          'Server Authoritative Design',
          'Matchmaking Systems',
          'Lobby and Room Management',
          'Real-time Synchronization',
          'Photon Unity Networking (PUN)',
          'Mirror Networking',
          'Dedicated Server Setup'
        ]
      },
      {
        id: 'gamedev-8',
        title: 'Graphics and Shaders',
        level: 'advanced',
        subtopics: [
          'Shader Basics (Vertex, Fragment)',
          'HLSL/GLSL Shader Languages',
          'Shader Graph in Unity',
          'Material Properties',
          'Post-Processing Effects',
          'Bloom, Color Grading, Vignette',
          'Custom Lighting Models',
          'Toon Shading',
          'Water and Reflections',
          'Particle Effects',
          'Visual Effects Graph (VFX)',
          'Performance Optimization'
        ]
      },
      {
        id: 'gamedev-9',
        title: 'Animation and Character Systems',
        level: 'advanced',
        subtopics: [
          'Animation Basics',
          'Animator Controller',
          'Animation States and Transitions',
          'Blend Trees',
          'Inverse Kinematics (IK)',
          'Root Motion',
          'Animation Events',
          'Ragdoll Physics',
          'Facial Animation',
          'Motion Capture Integration',
          'Timeline and Cutscenes'
        ]
      },
      {
        id: 'gamedev-10',
        title: 'Mobile Game Development',
        level: 'intermediate',
        subtopics: [
          'Mobile Platform Considerations',
          'Touch Input and Gestures',
          'Mobile UI/UX Design',
          'Performance Optimization for Mobile',
          'Battery and Memory Management',
          'Monetization (Ads, IAP)',
          'Google Play and App Store Publishing',
          'Push Notifications',
          'Analytics and Tracking',
          'Cross-Platform Development'
        ]
      },
      {
        id: 'gamedev-11',
        title: 'VR/AR Game Development',
        level: 'advanced',
        subtopics: [
          'VR Fundamentals',
          'VR Hardware (Oculus, HTC Vive, PSVR)',
          'VR Interaction Design',
          'Locomotion in VR',
          'Hand Tracking and Controllers',
          'Spatial Audio',
          'Motion Sickness Prevention',
          'AR Fundamentals (ARCore, ARKit)',
          'Marker-based vs Markerless AR',
          'Plane Detection and Anchors',
          'Mixed Reality Experiences'
        ]
      },
      {
        id: 'gamedev-12',
        title: 'Game Optimization and Performance',
        level: 'advanced',
        subtopics: [
          'Profiling Tools',
          'CPU Optimization',
          'GPU Optimization',
          'Memory Management',
          'Draw Call Batching',
          'Occlusion Culling',
          'Texture Compression',
          'Asset Bundle Management',
          'Code Optimization Techniques',
          'Physics Optimization',
          'Loading Screens and Async Loading',
          'Build Size Optimization'
        ]
      },
      {
        id: 'gamedev-13',
        title: 'Game Audio and Sound Design',
        level: 'intermediate',
        subtopics: [
          'Audio Basics in Game Engines',
          'Sound Effects Creation',
          'Music Integration',
          'Audio Mixing',
          '3D Spatial Audio',
          'Audio Occlusion and Reverb',
          'Dynamic Music Systems',
          'Audio Middleware (FMOD, Wwise)',
          'Voice Acting Integration',
          'Audio Optimization'
        ]
      },
      {
        id: 'gamedev-14',
        title: 'Game Publishing and Marketing',
        level: 'advanced',
        subtopics: [
          'Game Publishing Platforms (Steam, Epic, Itch.io)',
          'Console Publishing (PlayStation, Xbox, Nintendo)',
          'App Store Optimization (ASO)',
          'Marketing Strategies',
          'Community Building',
          'Social Media Marketing',
          'Press Kit and Trailers',
          'Beta Testing and Feedback',
          'Launch Strategy',
          'Post-Launch Support',
          'Live Operations',
          'Monetization Models'
        ]
      },
      {
        id: 'gamedev-15',
        title: 'Advanced Topics',
        level: 'advanced',
        subtopics: [
          'Unreal Engine Basics',
          'Blueprint Visual Scripting',
          'C++ in Unreal Engine',
          'Godot Engine Basics',
          'GDScript Programming',
          'Custom Engine Development',
          'Game Physics Engines',
          'Machine Learning in Games',
          'Esports and Competitive Gaming',
          'Game Accessibility',
          'Cross-Platform Play',
          'Cloud Gaming',
          'Blockchain and NFT Games',
          'Game Preservation'
        ]
      }
    ]
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    category: 'non-academic',
    description: 'Master problem-solving, algorithms, and data structures to excel in coding competitions and technical interviews',
    prerequisites: ['Basic Programming Knowledge', 'Mathematics Fundamentals', 'Logical Reasoning'],
    tools: ['C++', 'Python', 'Java', 'VS Code', 'GeeksforGeeks', 'Codeforces', 'LeetCode', 'AtCoder', 'CSES'],
    frameworks: ['STL (C++)', 'CP templates', 'Math libraries'],
    projects: [
      'Implement Your CP Template',
      'Solve 200 Problems in CSES',
      'Participate in Codeforces Div3 Contest',
      'Build a Personal Problem-Solving Notebook',
      'Create a CP Cheatsheet Website',
      'Solve 500 LeetCode Problems'
    ],
    topics: [
      {
        id: 'cp-1',
        title: 'Programming & CP Fundamentals',
        level: 'beginner',
        subtopics: [
          'Input/Output Optimization',
          'Understanding Time Complexity',
          'Big-O Notation Basics',
          'Math for CP (Mod, GCD, LCM)',
          'Using Fast I/O',
          'Understanding Problem Constraints',
          'Greedy Thinking Basics'
        ]
      },
      {
        id: 'cp-2',
        title: 'Essential Data Structures',
        level: 'beginner',
        subtopics: [
          'Arrays and Strings',
          'Vectors & Pairs',
          'Stacks and Queues',
          'Linked Lists',
          'Hash Maps / Unordered Maps',
          'Sets, Multisets',
          'Prefix Sum / Difference Array'
        ]
      },
      {
        id: 'cp-3',
        title: 'Sorting & Searching',
        level: 'beginner',
        subtopics: [
          'Sorting Algorithms',
          'Binary Search',
          'Two Pointers Technique',
          'Sorting with Custom Comparator',
          'Coordinate Compression',
          'Binary Search on Answer',
          'STL Sorting & Searching Tools'
        ]
      },
      {
        id: 'cp-4',
        title: 'Core Data Structures for CP',
        level: 'intermediate',
        subtopics: [
          'Heaps / Priority Queue',
          'Deques',
          'Sliding Window Technique',
          'Trie',
          'Disjoint Set Union (DSU)',
          'Fenwick Tree (BIT)',
          'Segment Tree',
          'Sparse Table'
        ]
      },
      {
        id: 'cp-5',
        title: 'Dynamic Programming',
        level: 'intermediate',
        subtopics: [
          'DP Fundamentals',
          '1D DP Problems',
          '2D DP Grid Problems',
          'Knapsack Variants',
          'DP on Trees',
          'DP on Bitmask',
          'Digit DP',
          'DP Optimization (Space, Transitions)',
          'Memoization vs Tabulation'
        ]
      },
      {
        id: 'cp-6',
        title: 'Graph Theory',
        level: 'intermediate',
        subtopics: [
          'Graph Representation',
          'DFS & BFS',
          'Cycle Detection',
          'Connected Components',
          'Shortest Path (Dijkstra, Bellman-Ford)',
          'Topological Sort',
          'Minimum Spanning Tree (Kruskal & Prim)',
          'Flood Fill',
          '0-1 BFS',
          'Graph Coloring'
        ]
      },
      {
        id: 'cp-7',
        title: 'Advanced Graph Algorithms',
        level: 'advanced',
        subtopics: [
          'Strongly Connected Components (SCC)',
          'Kosaraju / Tarjan',
          'Lowest Common Ancestor (LCA)',
          'Binary Lifting',
          'Articulation Points & Bridges',
          'Euler Tour Technique',
          'Heavy-Light Decomposition',
          'Maximum Flow (Ford-Fulkerson, Dinic)',
          'Matching Algorithms'
        ]
      },
      {
        id: 'cp-8',
        title: 'Mathematics for CP',
        level: 'advanced',
        subtopics: [
          'Modular Arithmetic',
          'Modular Inverse',
          'Fast Exponentiation',
          'Prime Factorization',
          'Sieve of Eratosthenes',
          'Number Theory',
          'Combinatorics',
          'Probability & Counting',
          'Inclusion-Exclusion Principle',
          'Matrix Exponentiation'
        ]
      },
      {
        id: 'cp-9',
        title: 'String Algorithms',
        level: 'advanced',
        subtopics: [
          'String Hashing (Rolling Hash, Rabin-Karp)',
          'KMP Algorithm',
          'Z Algorithm',
          'Suffix Array',
          'Suffix Tree Basics',
          'LCP Array',
          'Trie with Strings',
          'Manacher’s Algorithm'
        ]
      },
      {
        id: 'cp-10',
        title: 'Contest Strategies & Optimization',
        level: 'expert',
        subtopics: [
          'How to Read Problems Efficiently',
          'How to Reduce Wrong Submissions',
          'Debugging Fast in Contests',
          'Greedy vs DP Decision Making',
          'Penalty Management in ICPC Style',
          'Handling Stress During Contests',
          'Speed Optimization Techniques',
          'Writing Clean CP Templates'
        ]
      },
      {
        id: 'cp-11',
        title: 'Expert Competitive Programming',
        level: 'expert',
        subtopics: [
          'Meet in the Middle',
          'Convex Hull Trick',
          'Mo’s Algorithm',
          'Persistent Segment Trees',
          'Game Theory (Grundy Numbers)',
          'Advanced Graph Theory (Flow, Matching)',
          'Advanced Number Theory',
          'Bitmask Optimization',
          'Advanced DP (State Compression)',
          'Optimization and Heuristics'
        ]
      },
      {
        id: 'cp-12',
        title: 'Interview & Placement-Oriented Problems',
        level: 'expert',
        subtopics: [
          'Top 200 DSA Interview Problems',
          'System Design Basics',
          'LeetCode Patterns',
          'Top DP Patterns',
          'Sliding Window Patterns',
          'Graph Patterns',
          'Company-Specific Problem Sets',
          'Mock Interviews'
        ]
      }
    ]
  },
  {
    id: 'web3',
    title: 'Web3 & Blockchain Development',
    category: 'non-academic',
    description: 'Learn blockchain fundamentals, smart contracts, decentralized apps (DApps), and Web3 infrastructure from scratch to advanced',
    prerequisites: ['JavaScript/TypeScript', 'Basic Cryptography Understanding', 'HTTP & APIs', 'Frontend/Backend Knowledge'],
    tools: [
      'Solidity',
      'Web3.js',
      'Ethers.js',
      'Hardhat',
      'Truffle',
      'Ganache',
      'MetaMask',
      'Remix IDE',
      'Foundry',
      'IPFS',
      'The Graph'
    ],
    frameworks: [
      'Ethereum',
      'Polygon',
      'Solana',
      'Near Protocol',
      'Hyperledger',
      'Smart Contract Frameworks'
    ],
    projects: [
      'Write Your First Smart Contract',
      'ERC-20 Token Creation',
      'NFT Minting DApp',
      'Decentralized Voting System',
      'Full Stack DApp with React + Solidity',
      'DAO Governance System',
      'Web3 Login/App Authentication',
      'Build Your Own DeFi Swap (Mini Uniswap)'
    ],
    topics: [
      {
        id: 'web3-1',
        title: 'Blockchain Fundamentals',
        level: 'beginner',
        subtopics: [
          'What is Blockchain?',
          'How Decentralization Works',
          'Blocks, Transactions, and Nodes',
          'Consensus Mechanisms (PoW, PoS, DPoS)',
          'Public vs Private Blockchains',
          'Crypto Wallets & Addresses',
          'Gas, Fees, and Transactions',
          'Reading Whitepapers (BTC, ETH)'
        ]
      },
      {
        id: 'web3-2',
        title: 'Ethereum & Smart Contracts Basics',
        level: 'beginner',
        subtopics: [
          'Ethereum Virtual Machine (EVM)',
          'What is Solidity?',
          'MetaMask Setup',
          'Test Networks (Goerli, Sepolia)',
          'Transfer ETH & Tokens',
          'Remix IDE Deployment',
          'Events & Logging in Smart Contracts',
          'Basic Contract Security'
        ]
      },
      {
        id: 'web3-3',
        title: 'Solidity Programming',
        level: 'intermediate',
        subtopics: [
          'Variables, Structs, Arrays, Mappings',
          'Modifiers & Error Handling',
          'Inheritance & Interfaces',
          'Payable Functions',
          'ABI & Bytecode',
          'Contract Deployment',
          'Token Standards (ERC-20, ERC-721, ERC-1155)',
          'Gas Optimization Techniques',
          'Smart Contract Best Practices'
        ]
      },
      {
        id: 'web3-4',
        title: 'Smart Contract Development Frameworks',
        level: 'intermediate',
        subtopics: [
          'Hardhat Setup',
          'Truffle Suite Setup',
          'Ganache Local Blockchain',
          'Writing Tests (Mocha/Chai)',
          'Contract Verification',
          'Script Automation',
          'Foundry Basics',
          'Debugging Contracts'
        ]
      },
      {
        id: 'web3-5',
        title: 'DApp (Decentralized App) Development',
        level: 'intermediate',
        subtopics: [
          'Web3.js vs Ethers.js',
          'Connecting Frontend to Blockchain',
          'Wallet Authentication (Web3Auth, RainbowKit)',
          'Reading & Writing Smart Contract Data',
          'React + Solidity Integration',
          'Event Listening',
          'Gas Estimation & Error Handling',
          'State Management for DApps'
        ]
      },
      {
        id: 'web3-6',
        title: 'Storage & Infrastructure',
        level: 'advanced',
        subtopics: [
          'IPFS Integration',
          'Filecoin Basics',
          'Arweave',
          'Decentralized Domain Names (ENS)',
          'The Graph (Subgraphs)',
          'Chainlink Oracles',
          'Off-Chain Data Indexing',
          'Building Subgraphs'
        ]
      },
      {
        id: 'web3-7',
        title: 'DeFi (Decentralized Finance)',
        level: 'advanced',
        subtopics: [
          'Liquidity Pools',
          'AMMs (Automated Market Makers)',
          'Uniswap v2/v3 Concepts',
          'Borrow/Lending Protocols',
          'Staking & Yield Farming',
          'Flash Loans',
          'Price Oracles',
          'Tokenomics Design',
          'DEX vs CEX'
        ]
      },
      {
        id: 'web3-8',
        title: 'NFTs & Metaverse',
        level: 'advanced',
        subtopics: [
          'NFT Standards & Metadata',
          'Minting & Marketplace Creation',
          'Royalties & IPFS Storage',
          'On-chain vs Off-chain NFTs',
          'NFT Staking',
          'Soulbound Tokens',
          'Metaverse Frameworks',
          'Gaming Smart Contracts'
        ]
      },
      {
        id: 'web3-9',
        title: 'Web3 Security',
        level: 'advanced',
        subtopics: [
          'Common Vulnerabilities (Reentrancy, Overflows)',
          'Smart Contract Auditing Basics',
          'Access Control & Authorization',
          'Front-Running Attacks',
          'Flash Loan Exploits',
          'Secure Upgradeable Contracts',
          'Slither, MythX Tools',
          'Test & Fuzzing'
        ]
      },
      {
        id: 'web3-10',
        title: 'Cross-Chain & Layer 2',
        level: 'expert',
        subtopics: [
          'Layer 2 Scaling (Optimism, Arbitrum, zkSync)',
          'Rollups (Optimistic & ZK)',
          'Bridges & Interoperability',
          'Cross-Chain Messaging',
          'Polkadot Parachains',
          'Cosmos IBC',
          'Multi-Chain Deployments',
          'Cross-chain Swaps'
        ]
      },
      {
        id: 'web3-11',
        title: 'Advanced Web3 Architecture',
        level: 'expert',
        subtopics: [
          'Smart Contract Architecture',
          'Gas Efficient Contract Patterns',
          'Upgradeable Contracts (Proxy Pattern)',
          'Event-Driven DApps',
          'Web3 Backend (Node + Web3)',
          'Full-Stack DApp Architecture',
          'Building Your Own Blockchain',
          'Consensus Algorithm Implementation'
        ]
      },
      {
        id: 'web3-12',
        title: 'DAO & Governance',
        level: 'expert',
        subtopics: [
          'What is a DAO?',
          'Governance Tokens',
          'Voting Mechanisms',
          'On-chain vs Off-chain Governance',
          'Snapshot Voting',
          'Treasury Management',
          'Building DAO Smart Contracts',
          'Deploying a DAO Infrastructure'
        ]
      }
    ]
  }


);

module.exports = roadmaps;
