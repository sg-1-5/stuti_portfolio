// ============================================================
//  All portfolio content lives here. Edit this file to update
//  the site. Replace every "#" link with your real URLs.
// ============================================================

export const profile = {
  name: "Stuti Garg",
  roles: [
    "Full-Stack Developer",
    "AI / ML Engineer",
    "Competitive Programmer",
    "Problem Solver",
  ],
  tagline:
    "ECE undergrad at BIT Mesra building AI-powered products end-to-end — from deep learning pipelines to production-ready full-stack apps.",
  location: "Orai, Uttar Pradesh, India",
  phone: "+91 8303302350",
  email: "gargstuti159@gmail.com",
  links: {
    linkedin: "#", // TODO: e.g. https://www.linkedin.com/in/your-handle
    github: "#", // TODO: e.g. https://github.com/your-username
    leetcode: "#", // TODO: your LeetCode profile
    resume: "https://drive.google.com/file/d/14JinGTHVNsPsaofj4z-obyaC7OOjSnzV/view?usp=sharing",
  },
};

export const stats = [
  { value: "8.61", label: "CGPA @ BIT Mesra" },
  { value: "#8", label: "Nationally, OKCredit FFI (750+ teams)" },
  { value: "500+", label: "DSA problems solved" },
  { value: "1340", label: "Global rank, LeetCode Biweekly" },
];

export const about = [
  "I'm a B.Tech Electronics & Communication Engineering student at Birla Institute of Technology, Mesra, who loves turning ideas into shipped products.",
  "My work sits at the intersection of full-stack engineering and applied AI — I've built an AI mock-interview platform with Gemini, an e-commerce analytics copilot with ML-based forecasting, and a U-Net computer-vision pipeline for biomedical wound analysis.",
  "Beyond building, I sharpen my fundamentals through competitive programming and open source, and I enjoy leading teams and organising events.",
];

export const experience = [
  {
    title: "AI Seller Copilot",
    org: "Future Founders Internship @ OKCredit 2026",
    period: "2026 – Present",
    badge: "Ranked 8th nationally / 750+ teams",
    links: { github: "#", live: "#" },
    tech: ["FastAPI", "React", "Tailwind CSS", "Recharts", "Pandas", "SQLite", "Scikit-learn", "Docker", "Render"],
    points: [
      "Developed and deployed a full-stack AI-powered e-commerce analytics platform processing **5,000+ order records** for inventory tracking and seller insights.",
      "Architected scalable **RESTful APIs** with **FastAPI**, paired with **Pandas** + **SQLite** data pipelines tracking **200+ SKU-level metrics**.",
      "Implemented ML-based demand forecasting and RTO risk prediction using **Scikit-learn Random Forest** models, achieving nearly **85% prediction accuracy**.",
      "Designed responsive dashboards with **React, Tailwind CSS & Recharts**; containerized with **Docker** and deployed on **Render**.",
    ],
  },
];

export const projects = [
  {
    title: "Mentora AI",
    subtitle: "AI-Powered Mock Interview Platform",
    accent: "from-violet-500 to-fuchsia-500",
    icon: "🎙️",
    links: { github: "#", live: "#" },
    tech: ["React.js", "FastAPI", "MongoDB", "Gemini API", "Firebase", "JWT", "Razorpay", "Render"],
    highlights: ["Gemini-powered", "Full-stack", "Payments"],
    points: [
      "AI mock-interview platform for practicing **technical & HR interviews** through personalised simulations.",
      "Full-stack architecture on **React.js, FastAPI & MongoDB** with **Firebase Google Auth** and **JWT** session management.",
      "Integrated **Gemini API** for dynamic question generation, resume analysis, AI feedback and performance evaluation.",
      "Interview history tracking, analytics dashboards, **Razorpay** subscriptions, and scalable deployment on **Render**.",
    ],
  },
  {
    title: "Biomedical Mouse Wound Detection",
    subtitle: "Deep Learning Segmentation Pipeline",
    accent: "from-cyan-500 to-emerald-500",
    icon: "🧬",
    links: { github: "#" },
    tech: ["Python", "PyTorch", "U-Net", "OpenCV", "Albumentations", "Roboflow"],
    highlights: ["0.88 Dice", "40% faster", "<3% error"],
    points: [
      "Computer-vision pipeline segmenting dorsal wounds, accelerating healing analysis by **40%** vs. manual tracing.",
      "Curated **1,000+ high-res images**; used Albumentations to expand the training pool **4x** and eliminate overfitting.",
      "Trained a **U-Net CNN** with tuned hyper-parameters achieving a **0.88 Dice coefficient** under variable lighting.",
      "Custom **OpenCV** post-processing computes wound area in **mm²**, cutting measurement error to **under 3%** via automated reference scaling.",
    ],
  },
];

export const skills = [
  { group: "Programming Languages", icon: "⌨️", items: ["C", "C++", "Java", "Python", "SQL"] },
  {
    group: "Web Development & Cloud",
    icon: "🌐",
    items: ["React.js", "FastAPI", "Vite", "Tailwind CSS", "REST APIs", "AWS", "Apache", "Firebase", "MongoDB", "Render"],
  },
  {
    group: "AI / ML & Analytics",
    icon: "🧠",
    items: ["Machine Learning", "NLP", "LLMs", "Prompt Engineering", "Analytics", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "PyTorch"],
  },
  {
    group: "Computer Fundamentals",
    icon: "🧩",
    items: ["Data Structures & Algorithms", "Computer Architecture", "Access Control", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    group: "Tools & Automation",
    icon: "🛠️",
    items: ["Git", "GitHub", "Docker", "Automation", "Jupyter Notebook", "Roboflow"],
  },
  {
    group: "Soft Skills & Business",
    icon: "🤝",
    items: ["Problem Solving", "Business", "Leadership", "Teamwork", "Event Management"],
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "8th Nationally",
    desc: "Ranked 8th among 750+ teams in the Future Founders Internship @ OKCredit 2026.",
    link: "#",
  },
  {
    icon: "⚡",
    title: "Global Rank 1340",
    desc: "LeetCode Biweekly Contest among 34,000+ participants.",
    link: "#",
  },
  {
    icon: "💻",
    title: "500+ DSA Problems",
    desc: "Solved across LeetCode, Codeforces and other competitive programming platforms.",
    link: "#",
  },
  {
    icon: "🌸",
    title: "GSSoC 2026 Contributor",
    desc: "Selected as a Contributor for GirlScript Summer of Code 2026.",
    link: "#",
  },
];

export const education = [
  {
    school: "Birla Institute of Technology, Mesra",
    degree: "B.Tech — Electronics & Communication Engineering",
    period: "Aug 2024 – Present",
    location: "Ranchi, Jharkhand",
    score: "CGPA: 8.61",
  },
  {
    school: "Gurukulam Public School",
    degree: "Class X & Class XII",
    period: "2019 – 2023",
    location: "Orai, Uttar Pradesh",
    score: "10th: 95.0%  ·  12th: 95.0%",
  },
];
