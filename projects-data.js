// ============================================================
// PROJECTS & EXPERIENCE — content only, no rendering logic here.
// Edit this file freely to add/reorder/update projects — script.js
// just reads whatever is in the `projects` array below and renders it.
// ------------------------------------------------------------
// Field guide for each project object:
//   imgSrc:         path to a screenshot/logo/GIF. Currently pointing
//                   to placehold.co placeholders — swap for
//                   "images/yourfile.png" once you add real images.
//   title:          card heading
//   text:           main description
//   note:           OPTIONAL small italic line under the text
//                   (used here for "Submitted to IUI 2024")
//   badges:         array of tag strings — add matching colors in
//                   badgeColors below, or they'll fall back to grey
//   buttonText:     label on the card's button
//   buttonDisabled: true  -> greyed-out, non-clickable button
//                   false -> working button that opens buttonLink
//   buttonLink:     GitHub repo / live demo / Drive link
//   categories:     must match a name in the `categories` array below
// ============================================================

const categories = ["All", "Experience", "LLM & GenAI", "Applied ML", "Interactive Media Arts"];

const badgeColors = {
  "Python": "#6EA4BF",
  "SQL": "#C78283",
  "XGBoost": "#465775",
  "MLflow": "#F3D9DC",
  "AWS": "#B49286",
  "Docker": "#93A8AC",
  "Airflow": "#38405F",
  "Ray": "#59546C",
  "Regression": "#21601c",
  "vLLM": "#F2545B",
  "Qwen": "#083A42",
  "LLaMA": "rgb(36, 37, 93)",
  "Gemini": "#087EA4",
  "Firestore": "#C98A3D",
  "LLM": "#7C6B9E",
  "LLM Agent": "#7C6B9E",
  "FastAPI": "#3E7A5C",
  "SwiftUI": "#D97B5C",
  "On-Device ML (Vision)": "#5C6BC0",
  "Rule-Based Recall": "#8E7CC3",
  "Tiered Cost Architecture": "#4A6670",
  "Privacy-by-Design": "#3E7A5C",
  "Personalized Recommendation": "#6B8CAE",
  "Prompt Engineering": "#8E7CC3",
  "Statistical Analysis": "#A0785A",
  "LLM Evaluation": "#6B8CAE",
  "ARMA": "#7D8471",
  "dHMM": "#857C6B",
  "LSTM": "#5B7B9A",
  "Time Series": "#4A6670",
  "Scikit-learn": "#C97A52",
  "Classification": "#6B8E7D",
  "YOLOv8": "#C4574A",
  "PyTorch": "#C0524F",
  "Edge AI": "#4E7A6B",
  "Computer Vision": "#5A6E8C",
  "MusicGen": "#9B6B9E",
  "RayNeo AR": "#4A6670",
  "GPT-4o": "#5A6E8C",
  "Unity": "#3E7A5C",
  "C#": "#5C6BC0",
  "p5.js": "#C97A52",
  "Arduino": "#00898A",
  "Speech Recognition": "#8E7CC3",
  "Stepper Motor": "#7D8471",
  "JavaScript": "#C9A227",
  "Flask": "#2F6F4F",
  "MySQL": "#3D6E8C",
  "Sklearn": "#C97A52",
  "WebXR": "#5C6BC0",
  "OOP": "#6B6E8C",
};

const projects = [

  // ---------- EXPERIENCE ----------
  {
    imgSrc: "images/planetart.png",
    title: "PlanetArt - Data Scientist Intern",
    text: "Forecasted sales trends across 20 e-commerce product categories by developing and deploying XGBoost models to production, cutting overstock exposure. Backed by a comprehensive MLOps pipeline (MLflow, Docker, Airflow) for automated retraining at scale.",
    badges: ["Python", "SQL","Airflow"], //optional: "AWS"
    buttonText: "Not Publicly Accessible",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Experience", "Applied ML"]
  },
  {
    imgSrc: "images/gardenstar.png",
    title: "GardenStar Group - Data Scientist Intern",
    text: "Ran statistical and root-cause analysis on macroeconomic drivers of real estate investment returns. Translated the findings into scenario-based forecasts and stakeholder-ready reports that shaped investment decisions.",
    badges: ["Python","SQL", "Regression"],
    buttonText: "Not Publicly Accessible",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Experience"]
  },
  {
    imgSrc: "images/vii.mp4",
    title: "VII Technologies - AI Pipeline Engineer",
    text: "Reverse-engineered a fighting game's AI NPC data pipeline across two Firestore databases, then developed three configurable strategies for turning each NPC's backstory and conflicts into fighter bios and behaviors.",
    badges: ["Python", "Firestore", "LLM"],
    buttonText: "Not Publicly Accessible",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Experience"]
  },
  {
    imgSrc: "images/medipath.png",
    title: "Medipath Intelligence - MLE Intern",
    text: "Developed a speech-to-text pipeline for medical education videos, segmenting content at natural pauses to improve transcription accuracy and preserve semantic context. The pipeline generates structured, high-quality text for downstream RAG applications.",
    badges: ["Python", "Firestore", "LLM"],
    buttonText: "Not Publicly Accessible",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Experience"]
  },

  // ---------- LLM / AI RESEARCH ----------
  {
    imgSrc: "images/llm_judge.png",
    title: "LLM-as-Judge Evaluation",
    text: "Built a zero-shot LLM evaluation pipeline using Qwen and LLaMA (0.5B to 3B) to automatically verify math problem answers, comparing one-step vs. two-step inference architectures to find cost-efficient alternatives to large closed-source models.",
    badges: ["Python","vLLM"],
    buttonText: "Project",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["LLM & GenAI"]
  },
  // {
  //   imgSrc: "https://placehold.co/600x400/e8eaed/4b5563?text=Add+Coffee+Chat+Agent+Screenshot",
  //   title: "Coffee Chat Agent",
  //   text: "",
  //    badges: ["Python","LLM Agent"],
  //   buttonText: "Project In Progress",
  //   buttonDisabled: true,
  //   buttonLink: "#",
  //   columnClass: "col-lg-4",
  //   categories: ["LLM & GenAI"]
  // },
  // {
  //   imgSrc: "https://placehold.co/600x400/e8eaed/4b5563?text=Add+Photo+Recommendation+Screenshot",
  //   title: "Photo Recommendation",
  //   text: "embeddings similarity for personalized photo recommendations",
  //    badges: ["Python","Recommendation System"],
  //   buttonText: "Project In Progress",
  //   buttonDisabled: true,
  //   buttonLink: "#",
  //   columnClass: "col-lg-4",
  //   categories: ["Applied ML"]
  // },
  {
    imgSrc: "images/emomusic.png",
    title: "Emomusic",
    text: "An emoji-based music search and generation web player. A weakly supervised model maps songs to emojis for search, while a prompt-engineering pipeline drives Meta's MusicGen to generate matching clips.",
    note: "Submitted to IUI 2024.",
    badges: ["Python", "MySQL", "Flask"],
    buttonText: "Project", 
    buttonDisabled: false,
    buttonLink: "https://github.com/qiyahuang72/Emomusic",
    columnClass: "col-lg-4",
    categories: ["LLM & GenAI", "Applied ML"]
  },
  {
    imgSrc: "images/investigationHelper.png",
    title: "Investigation Helper",
    text: "Reduce confirmation bias during live interviews: Collaborated with psychology researchers to label investigative interview questions by type, then engineered prompts for an LLM that suggests high-quality questions to police in real time.",
    badges: ["Python", "LLM"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://github.com/qiyahuang72/LLM-Forensic-Interview-Assistant",
    columnClass: "col-lg-4",
    categories: ["LLM & GenAI"]
  },
  {
    imgSrc: "images/ai_tutoring.png",
    title: "AI Tutoring Conversation Analytics",
    text: "Evaluate 500+ student-AI tutoring conversations by question type, sentiment, and response quality, surfacing behavior shifts that informed product decisions for a live edtech platform.",
    badges: ["Python", "LLM Evaluation"],
    buttonText: "Not Publicly Accessible",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["LLM & GenAI"]
  },

  // ---------- APPLIED ML ----------
  {
    imgSrc: "images/anomaly.png",
    title: "Anomaly Detection",
    text: "Monitored and improved online advertising performance by detecting anomalies in CPC and CPM metrics, benchmarking statistical models (ARMA, discrete Hidden Markov Models) against machine learning approaches (LSTM) for time-series anomaly detection.",
    badges: ["Python", "Time Series"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://github.com/qiyahuang72/Anomaly_Detection",
    columnClass: "col-lg-4",
    categories: ["Applied ML"]
  },
  {
    imgSrc: "images/spotify.png",
    title: "Spotify Music Genre Classification",
    text: "Built a multi-class classification pipeline to predict a song's genre from audio features across 50,000 Spotify tracks. Covered data cleaning, feature engineering, dimensionality reduction, model training, and evaluation.",
    badges: ["Python", "Sklearn"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://github.com/qiyahuang72/Spotify-Music-Genre-Classification",
    columnClass: "col-lg-4",
    categories: ["Applied ML"]
  },
  {
    imgSrc: "images/ipotato.png",
    title: "AI Fall Detection for Elderly Care",
    text: "Built a privacy-first fall-detection system for elderly care using YOLOv8-Pose on an NVIDIA GB10 edge GPU. Watching over someone in real time without ever recording or storing what it sees, protecting both their safety and their dignity.",
    badges: ["Python","YOLOv8", "PyTorch"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://github.com/qiyahuang72/caregiver_ai",
    columnClass: "col-lg-4",
    categories: ["Applied ML"]
  },

  // ---------- PRODUCTS ----------
  // {
  //   imgSrc: "https://placehold.co/600x400/e8eaed/4b5563?text=Add+Rubies+Screenshot",
  //   title: "Rubies - Co-Founder",
  //   text: "An AI-powered photo app that surfaces forgotten memories and generates personalized daily suggestions from users' camera rolls.",
  //   badges: ["FastAPI", "SwiftUI", "Personalized Recommendation"],
  //   buttonText: "Not Publicly Accessible",
  //   buttonDisabled: true,
  //   buttonLink: "#",
  //   columnClass: "col-lg-4",
  //   categories: ["Products"]
  // },

  // ---------- INTERACTIVE MEDIA ARTS ----------
  {
    imgSrc: "images/farmhand.mp4",
    title: "FarmHand",
    text: "An AR farming assistant built at MIT Reality Hack 2026, where it won the Silver Prize and a sustainability honorable mention. Giving farmers real-time, voice-guided insight into soil health and crop outlook, hands-free, right in the field.",
    badges: ["Python","C#", "LLM"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://devpost.com/software/farmer-hand",
    columnClass: "col-lg-4",
    categories: ["Interactive Media Arts"]
  },
  {
    imgSrc: "images/oneMatch.mp4",
    title: "One Match",
    text: "A two-act WebXR narrative game experience.", 
    badges: ["JavaScript", "WebXR"],
    buttonText: "Project",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Interactive Media Arts"]
  },
  {
    imgSrc: "images/worry_blower.mp4",
    title: "Worry Blower",
    text: "An interactive installation that turns spoken worries into a physical release. Facial and speech recognition mirror the user's expression on screen, and voicing a worry triggers a bubble machine to blow it away in real life.",
    badges: ["p5.js", "Arduino"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://wp.nyu.edu/cassie/2024/05/11/final-project-worry-blower/",
    columnClass: "col-lg-4",
    categories: ["Interactive Media Arts"]
  },
  {
    imgSrc: "images/fisherman.mp4",
    title: "The Fisherman",
    text: "A physical arcade fishing game built around ocean sustainability. Motorized fish movement, sensor-based catch detection, and light and sound feedback turn a simple cast-and-catch into a playful game about marine conservation. ",
    badges: ["Arduino", "Physical Computing"],
    buttonText: "Project",
    buttonDisabled: false,
    buttonLink: "https://wp.nyu.edu/cassie/2024/03/16/midterm-project-the-fisherman/",
    columnClass: "col-lg-4",
    categories: ["Interactive Media Arts"]
  },
  {
    imgSrc: "images/fireboy_watergirl.mp4",
    title: "Fireboy and Watergirl",
    text: "A two-player, tilemap-based platformer built with p5.js where players control Fireboy and Watergirl to collect colored diamonds, avoid hazards, and reach matching doors to win.", 
    badges: ["JavaScript", "OOP"],
    buttonText: "Project",
    buttonDisabled: true,
    buttonLink: "#",
    columnClass: "col-lg-4",
    categories: ["Interactive Media Arts"]
  },

];
