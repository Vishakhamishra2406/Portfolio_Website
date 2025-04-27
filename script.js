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
        title: "Portfolio Website",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/images/portfolio.png",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of your second project",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "assets/images/project2.png",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Description of your third project",
        technologies: ["Python", "Django", "PostgreSQL"],
        image: "assets/images/project3.png",
        link: "#"
    }
];

// Load projects dynamically
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" class="text-blue-400 hover:text-blue-300 transition duration-300">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Skills data
const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 70 }
];

// Load skills with animation
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'bg-gray-700 p-4 rounded-lg';
        skillElement.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-white">${skill.name}</span>
                <span class="text-gray-300">${skill.level}%</span>
            </div>
            <div class="w-full bg-gray-600 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('[data-level]');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
    });
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
        .then(function(response) {
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
        nav.classList.add('bg-gray-800');
        nav.classList.remove('bg-gray-800/90');
    } else {
        nav.classList.remove('bg-gray-800');
        nav.classList.add('bg-gray-800/90');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
}); 