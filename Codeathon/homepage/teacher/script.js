const learners = [
  // Python
  { name: "Aanya Roy", skill: "Python", level: "Beginner", bio: "New to Python, enthusiastic about learning data handling and automation.", image: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Raghav Mehta", skill: "Python", level: "Intermediate", bio: "Focused on APIs with Flask and Django; working on personal projects.", image: "https://randomuser.me/api/portraits/men/23.jpg" },
  { name: "Meera Shah", skill: "Python", level: "Advanced", bio: "Experienced in data science and machine learning. Keen on NLP tasks.", image: "https://randomuser.me/api/portraits/women/29.jpg" },
  { name: "Shivam Sinha", skill: "Python", level: "Intermediate", bio: "Building backend scripts and web crawlers.", image: "https://randomuser.me/api/portraits/men/55.jpg" },

  // JavaScript
  { name: "Kunal Patel", skill: "JavaScript", level: "Beginner", bio: "Learning DOM manipulation and events. Wants to build interactive apps.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Diya Verma", skill: "JavaScript", level: "Intermediate", bio: "Familiar with ES6 and closures. Building basic games.", image: "https://randomuser.me/api/portraits/women/42.jpg" },
  { name: "Nikhil Bansal", skill: "JavaScript", level: "Advanced", bio: "Specializes in web optimization, canvas, and PWA.", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Aarav Kapoor", skill: "JavaScript", level: "Beginner", bio: "Wants to build portfolio site using JavaScript.", image: "https://randomuser.me/api/portraits/men/64.jpg" },

  // React
  { name: "Tanya Gupta", skill: "React", level: "Beginner", bio: "Getting started with React components and state.", image: "https://randomuser.me/api/portraits/women/61.jpg" },
  { name: "Pranav Singh", skill: "React", level: "Intermediate", bio: "Built 2 React apps. Learning Redux.", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { name: "Aarushi Jain", skill: "React", level: "Advanced", bio: "Building large dashboards with React + TypeScript.", image: "https://randomuser.me/api/portraits/women/66.jpg" },
  { name: "Neeraj Kaul", skill: "React", level: "Beginner", bio: "Excited about building components and reusable UI.", image: "https://randomuser.me/api/portraits/men/47.jpg" },

  // Node.js
  { name: "Dev Khatri", skill: "Node.js", level: "Intermediate", bio: "Building REST APIs with Express and MongoDB.", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Sakshi Rana", skill: "Node.js", level: "Advanced", bio: "Created microservices. Strong grasp on event loops and streams.", image: "https://randomuser.me/api/portraits/women/15.jpg" },
  { name: "Ritu Sharma", skill: "Node.js", level: "Beginner", bio: "Started using Node.js for basic scripting.", image: "https://randomuser.me/api/portraits/women/20.jpg" },

  // HTML
  { name: "Anjali R", skill: "HTML", level: "Beginner", bio: "Learning structure and semantic tags.", image: "https://randomuser.me/api/portraits/women/77.jpg" },
  { name: "Gaurav Sen", skill: "HTML", level: "Intermediate", bio: "Comfortable with layouting using HTML5.", image: "https://randomuser.me/api/portraits/men/40.jpg" },
  { name: "Priya Das", skill: "HTML", level: "Beginner", bio: "Wants to build resume websites and landing pages.", image: "https://randomuser.me/api/portraits/women/34.jpg" },

  // CSS
  { name: "Rahul Dev", skill: "CSS", level: "Intermediate", bio: "Exploring advanced layout with Grid and Flexbox.", image: "https://randomuser.me/api/portraits/men/80.jpg" },
  { name: "Sana Mehta", skill: "CSS", level: "Advanced", bio: "Building complex UI designs and animations.", image: "https://randomuser.me/api/portraits/women/92.jpg" },
  { name: "Nisha Kapoor", skill: "CSS", level: "Beginner", bio: "Learning styling basics and selectors.", image: "https://randomuser.me/api/portraits/women/97.jpg" },

  // Java
  { name: "Sana Malik", skill: "Java", level: "Advanced", bio: "Spring Boot & Hibernate expert. Building fintech apps.", image: "https://randomuser.me/api/portraits/women/85.jpg" },
  { name: "Ravi Joshi", skill: "Java", level: "Intermediate", bio: "Learning OOP, multi-threading and backend apps.", image: "https://randomuser.me/api/portraits/men/87.jpg" },
  { name: "Mitali Chawla", skill: "Java", level: "Beginner", bio: "Practicing syntax and control flow.", image: "https://randomuser.me/api/portraits/women/70.jpg" },

  // C++
  { name: "Neha Bansal", skill: "C++", level: "Beginner", bio: "Learning DSA and solving LeetCode challenges.", image: "https://randomuser.me/api/portraits/women/88.jpg" },
  { name: "Jatin Garg", skill: "C++", level: "Intermediate", bio: "Strong in STL and recursion. Prepping for interviews.", image: "https://randomuser.me/api/portraits/men/90.jpg" },

  // SQL
  { name: "Zaid Akhtar", skill: "SQL", level: "Intermediate", bio: "Writing joins, group by, and nested queries.", image: "https://randomuser.me/api/portraits/men/91.jpg" },
  { name: "Sneha Iyer", skill: "SQL", level: "Beginner", bio: "New to databases, learning basic SELECT and WHERE.", image: "https://randomuser.me/api/portraits/women/84.jpg" },
  { name: "Taranjeet Singh", skill: "SQL", level: "Advanced", bio: "Designed reporting dashboards using SQL views.", image: "https://randomuser.me/api/portraits/men/82.jpg" },

  // Data Science
  { name: "Rehan Syed", skill: "Data Science", level: "Advanced", bio: "Worked on classification and time series projects.", image: "https://randomuser.me/api/portraits/men/94.jpg" },
  { name: "Isha Arora", skill: "Data Science", level: "Intermediate", bio: "Focusing on preprocessing and model evaluation.", image: "https://randomuser.me/api/portraits/women/95.jpg" },
  { name: "Ankit Chauhan", skill: "Data Science", level: "Beginner", bio: "Learning data wrangling using pandas.", image: "https://randomuser.me/api/portraits/men/96.jpg" },

  // AI/ML
  { name: "Pooja Tyagi", skill: "AI/ML", level: "Advanced", bio: "Working on image classification and large datasets.", image: "https://randomuser.me/api/portraits/women/99.jpg" },
  { name: "Ajay Deshmukh", skill: "AI/ML", level: "Intermediate", bio: "Practicing with scikit-learn and kaggle notebooks.", image: "https://randomuser.me/api/portraits/men/98.jpg" },
  { name: "Shrishti Bhatt", skill: "AI/ML", level: "Beginner", bio: "Just started ML journey; building regression models.", image: "https://randomuser.me/api/portraits/women/76.jpg" },
];


const skills = [...new Set(learners.map(l => l.skill))];
const skillSelect = document.getElementById('skillSelect');
const levelSelect = document.getElementById('levelSelect');
const searchBar = document.getElementById('searchBar');
const container = document.getElementById('learnersContainer');

// Populate skills dropdown
skills.forEach(skill => {
  const option = document.createElement('option');
  option.value = skill;
  option.textContent = skill;
  skillSelect.appendChild(option);
});

// Filter & display learners
function renderLearners() {
  const selectedSkill = skillSelect.value;
  const selectedLevel = levelSelect.value;
  const searchTerm = searchBar.value.toLowerCase();

  container.innerHTML = '';

  learners
    .filter(l => {
      return (!selectedSkill || l.skill === selectedSkill)
        && (!selectedLevel || l.level === selectedLevel)
        && l.skill.toLowerCase().includes(searchTerm);
    })
    .forEach(l => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${l.image}" alt="${l.name}" />
        <div class="card-content">
          <h3>${l.name}</h3>
          <span>${l.skill} - ${l.level}</span>
          <p>${l.bio}</p>
        </div>
      `;
      container.appendChild(card);
    });
}

skillSelect.addEventListener('change', renderLearners);
levelSelect.addEventListener('change', renderLearners);
searchBar.addEventListener('input', renderLearners);

renderLearners();
