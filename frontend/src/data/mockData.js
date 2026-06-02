export const mockUserStats = {
  industryScore: 42,
  examReadiness: 50,
  projectReadiness: 40,
  placementReadiness: 35,
  currentStreak: 12,
  totalSubmissions: 28,
  goalsMet: 3,
  name: "Alex",
  domain: "tech"
};

export const mockRecentActivity = [
  { id: 1, task: "Understand the basic structure of an HTML document", date: "Today", track: "Web Development" },
  { id: 2, task: "Learn semantic HTML tags (header, main, footer)", date: "Yesterday", track: "Web Development" },
  { id: 3, task: "Variables and Data Types in Python", date: "3 days ago", track: "Data Science" },
];

export const mockEnrolledTracks = [
  {
    id: 'web-development',
    goal: 'Web Development',
    mentor: {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Engineer",
      company: "Google"
    },
    enrolledAt: new Date().toISOString()
  },
  {
    id: 'data-science',
    goal: 'Data Science',
    mentor: {
      id: 2,
      name: "Michael Rodriguez",
      role: "Data Scientist",
      company: "Netflix"
    },
    enrolledAt: new Date().toISOString()
  }
];

export const mockExamsData = {
  branches: ['Tech (CS/IT)', 'Mechanical Engineering', 'Civil Engineering', 'Electronics'],
  semesters: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
  subjects: {
    'Tech (CS/IT)': [
      { id: 1, name: 'Operating Systems', code: 'CS301' },
      { id: 2, name: 'Data Structures & Algorithms', code: 'CS302' },
      { id: 3, name: 'Database Management', code: 'CS303' }
    ],
    'Mechanical Engineering': [
      { id: 4, name: 'Thermodynamics', code: 'ME301' },
      { id: 5, name: 'Fluid Mechanics', code: 'ME302' },
      { id: 6, name: 'Kinematics of Machinery', code: 'ME303' }
    ]
  }
};

export const mockProjectsData = [
  { id: 'p1', title: 'React Dashboard', domain: 'Tech', difficulty: 'Intermediate', time: '2 Weeks', desc: 'Build a fully responsive admin dashboard using React and Tailwind CSS.' },
  { id: 'p2', title: 'RESTful API with Node.js', domain: 'Tech', difficulty: 'Beginner', time: '1 Week', desc: 'Create a robust backend API for a theoretical e-commerce store.' },
  { id: 'p3', title: 'EV Battery Management System', domain: 'Core', difficulty: 'Advanced', time: '4 Weeks', desc: 'Design the thermal management and logic flow for an EV battery pack.' },
  { id: 'p4', title: 'HVAC Design for Office', domain: 'Core', difficulty: 'Intermediate', time: '3 Weeks', desc: 'Calculate loads and design an HVAC system for a 10,000 sq ft office.' },
  { id: 'p5', title: 'Market Entry Strategy', domain: 'Non-Tech', difficulty: 'Advanced', time: '3 Weeks', desc: 'Develop a go-to-market strategy for a SaaS startup entering Europe.' },
  { id: 'p6', title: 'Financial Modeling', domain: 'Non-Tech', difficulty: 'Intermediate', time: '2 Weeks', desc: 'Build a 3-statement financial model for a Series A company.' },
];
