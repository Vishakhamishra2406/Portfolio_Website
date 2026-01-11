// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for hero section
const text = "Vishakha Mishra";
const typingText = document.querySelector('.typing-cursor');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Dynamic projects data
const projects = [
    {
        title: "ResiVox - Voice-Enabled Virtual Community Manager",
        description: "Worked in an AI and voice interaction layer integrated with Omni.io Voice AI for speech-based complaint handling. Designed conversational workflows enabling residents to raise and track service requests via voice. Built and styled the frontend for residents to raise and track service requests with a focus on usability and responsiveness. Collaborated with a 2-member team to align AI workflows with backend APIs and real-world use cases.",
        technologies: ["AI", "Voice AI", "Omni.io", "Frontend Development", "API Integration"],
        image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop",
        link: "https://github.com/Vishakhamishra2406/ResiVox",
        date: "Aug 2025"
    },
    {
        title: "AskMyPDF - Python, Streamlit, LangChain, Gemini API",
        description: "Built a Gemini API chatbot enabling natural language querying over uploaded PDF documents. Integrated LangChain with Google Gemini API for intelligent document question-answering. Implemented efficient PDF chunking using PyMuPDF with an interactive Streamlit UI.",
        technologies: ["Python", "Streamlit", "LangChain", "Gemini API", "PyMuPDF"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        link: "https://github.com/Vishakhamishra2406/AskMyPDF3",
        date: "Jul 2025"
    },
    {
        title: "Leet-Metric Website - React, LeetCode API",
        description: "Developed a responsive web dashboard to display real-time LeetCode user statistics. Visualized problem data by difficulty using the LeetCode API. Designed a clean, user-friendly interface with modern front-end practices.",
        technologies: ["React", "LeetCode API", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        link: "https://github.com/Vishakhamishra2406/Leet-Metrics",
        date: "May 2025"
    }
];

// Load projects dynamically
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image w-full h-48 object-cover">
            <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl font-bold gradient-text-accent">${project.title}</h3>
                    <span class="text-sm text-gray-400 font-medium">${project.date}</span>
                </div>
                <p class="text-gray-300 mb-6 text-sm leading-relaxed">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => `
                        <span class="glass px-3 py-1 rounded-full text-xs font-medium text-white">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="gradient-text-primary hover:gradient-text-accent transition duration-300 font-semibold">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Skills data
const skills = [
    { name: "Java", level: 85, category: "Programming Languages" },
    { name: "JavaScript", level: 80, category: "Programming Languages" },
    { name: "Python", level: 75, category: "Programming Languages" },
    { name: "HTML", level: 90, category: "Web Technologies" },
    { name: "CSS", level: 85, category: "Web Technologies" },
    { name: "React.js", level: 75, category: "Web Technologies" },
    { name: "CSS Flexbox", level: 80, category: "Web Technologies" },
    { name: "Responsive Design", level: 85, category: "Web Technologies" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Firebase", level: 65, category: "Database" },
    { name: "Data Structures & Algorithms", level: 78, category: "CS Fundamentals" },
    { name: "DBMS", level: 70, category: "CS Fundamentals" },
    { name: "OOPs", level: 80, category: "CS Fundamentals" },
    { name: "Operating Systems", level: 70, category: "CS Fundamentals" }
];

// Load skills with animation
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    // Create sections for each category
    Object.entries(skillsByCategory).forEach(([category, categorySkills]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'col-span-1 mb-8';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'text-2xl font-bold mb-6 gradient-text-accent';
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);
        
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
        
        categorySkills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-card p-6';
            skillElement.innerHTML = `
                <div class="flex justify-between mb-4">
                    <span class="text-white font-semibold">${skill.name}</span>
                    <span class="text-gray-300 font-medium">${skill.level}%</span>
                </div>
                <div class="w-full bg-gray-800 rounded-full h-4 border border-gray-600">
                    <div class="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-2000 ease-out shadow-lg" 
                         style="width: ${skill.level}%; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);"></div>
                </div>
            `;
            skillsGrid.appendChild(skillElement);
        });
        
        categorySection.appendChild(skillsGrid);
        skillsContainer.appendChild(categorySection);
    });

    // No need for complex animation - using inline styles with immediate effect
}

// Initialize EmailJS with your Public Key
emailjs.init("0YsU7Lisjq8Xx_SCT");

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    formStatus.textContent = 'Sending message...';
    formStatus.className = 'mt-4 text-center text-blue-400';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email
    emailjs.send("service_razwy9k", "template_69vtmw9", formData)
        .then(function() {
            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'mt-4 text-center text-green-400';
            
            // Reset form
            contactForm.reset();
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 3000);
        })
        .catch(function(error) {
            // Show error message
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'mt-4 text-center text-red-400';
            console.error('Error:', JSON.stringify(error));
        });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-slate-800');
        nav.classList.remove('navbar-glass');
    } else {
        nav.classList.remove('bg-slate-800');
        nav.classList.add('navbar-glass');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
}); 