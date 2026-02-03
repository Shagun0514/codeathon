document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
  
    const skillMap = {
      technology: {
        startup: ["Full Stack Web Development", "App Development", "AI & Machine Learning"],
        career: ["Cloud Computing", "Cybersecurity", "DevOps"],
        freelance: ["Web Design", "WordPress Development", "UI/UX"],
        innovate: ["Data Science", "Robotics", "Quantum Computing"],
        teach: ["Python Programming", "Computer Science Fundamentals"],
        change: ["Tech for Social Good", "Digital Literacy Training"]
      },
      arts: {
        startup: ["Graphic Design Business", "YouTube Content Creation"],
        career: ["Animation", "Art Direction"],
        freelance: ["Illustration", "Photography", "Video Editing"],
        innovate: ["Interactive Media", "AR/VR Art"],
        teach: ["Art Therapy", "Design Mentorship"],
        change: ["Art for Social Justice"]
      },
      business: {
        startup: ["Entrepreneurship", "Digital Marketing", "Product Management"],
        career: ["Finance", "Business Analytics", "Operations"],
        freelance: ["Consulting", "Copywriting", "SEO"],
        innovate: ["FinTech", "Growth Hacking"],
        teach: ["Business Coaching", "Public Speaking"],
        change: ["NGO Strategy", "Microfinance"]
      },
      science: {
        startup: ["BioTech Innovations", "Environmental Startups"],
        career: ["Data Analysis", "Pharmaceutical R&D", "Research Writing"],
        freelance: ["Scientific Writing", "Science Communication"],
        innovate: ["Renewable Energy", "Space Tech"],
        teach: ["STEM Education"],
        change: ["Climate Policy", "Epidemiology"]
      },
      health: {
        startup: ["Health App Design", "Telemedicine"],
        career: ["Medical Tech", "Nursing", "Physical Therapy"],
        freelance: ["Health Coaching", "Nutrition Advice"],
        innovate: ["Wearable Health Devices", "Medical AI"],
        teach: ["Mental Health Advocacy", "Wellness Education"],
        change: ["Community Health Work", "Healthcare Equity"]
      },
      education: {
        startup: ["EdTech", "Online Course Creation"],
        career: ["Instructional Design", "Academic Counseling"],
        freelance: ["Tutoring", "Curriculum Development"],
        innovate: ["Gamified Learning", "AI in Education"],
        teach: ["Any subject expertise"],
        change: ["Adult Literacy", "Inclusive Education"]
      },
      sports: {
        startup: ["Fitness App Development", "Athlete Branding"],
        career: ["Sports Management", "Athletic Training"],
        freelance: ["Personal Training", "Yoga Instructor"],
        innovate: ["Sports Biomechanics", "eSports Development"],
        teach: ["Coaching"],
        change: ["Youth Sports Programs"]
      },
      social: {
        startup: ["Impact Startup", "NGO Founding"],
        career: ["Public Policy", "Human Rights Advocacy"],
        freelance: ["Grant Writing", "Community Organizing"],
        innovate: ["Civic Tech", "Urban Development"],
        teach: ["Peer Mentorship"],
        change: ["Social Innovation", "Political Literacy"]
      }
    };
  
    function getSelectedValues(select) {
      return Array.from(select.selectedOptions).map(option => option.value);
    }
  
    function generateRecommendations(interests, goals) {
      const recommendations = new Set();
  
      interests.forEach(interest => {
        const goalSet = skillMap[interest];
        if (goalSet) {
          goals.forEach(goal => {
            const skills = goalSet[goal];
            if (skills) {
              skills.forEach(skill => recommendations.add(skill));
            }
          });
        }
      });
  
      return Array.from(recommendations);
    }
  
    function addExtraWeighting(recommendations, environment, motivation, learning) {
      // Example logic to prioritize or boost suggestions
      if (environment === "remote") {
        recommendations.push("Remote Team Collaboration", "Digital Tools Proficiency");
      }
  
      if (motivation === "innovation") {
        recommendations.push("Creative Problem Solving", "Design Thinking");
      }
  
      if (learning === "hands-on") {
        recommendations.push("Project-Based Learning", "Hackathons", "Prototyping");
      }
  
      return Array.from(new Set(recommendations));
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const interests = getSelectedValues(form.elements["interests"]);
      const goals = getSelectedValues(form.elements["goals"]);
      const environment = form.elements["environment"].value;
      const motivation = form.elements["motivation"].value;
      const learning = form.elements["learning"].value;
  
      if (interests.length === 0 || goals.length === 0) {
        resultDiv.innerHTML = "<p class='error'>Please select at least one interest and one goal.</p>";
        return;
      }
  
      let recommendations = generateRecommendations(interests, goals);
      recommendations = addExtraWeighting(recommendations, environment, motivation, learning);
  
      resultDiv.innerHTML = `
        <h2>Recommended Skills for You:</h2>
        <ul>
          ${recommendations.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
      `;
    });
  });
  