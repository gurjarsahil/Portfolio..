// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animation class to elements
document.querySelectorAll('.skill-card, .timeline-item').forEach(element => {
    element.classList.add('fade-in');
});

// Dark Mode Toggle
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Listen for system theme changes
prefersDarkScheme.addListener((e) => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Fade-in animation for sections
const fadeSections = document.querySelectorAll('.fade-in-section');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.15 });

fadeSections.forEach(section => fadeObserver.observe(section));

// Typewriter effect for hero subtitle
const typewriterText = 'Full Stack Developer & AI Enthusiast';
const typewriterElem = document.getElementById('typewriter');
if (typewriterElem) {
    let i = 0;
    let isDeleting = false;
    function typeWriterLoop() {
        if (!isDeleting && i <= typewriterText.length) {
            typewriterElem.textContent = typewriterText.substring(0, i);
            i++;
            if (i > typewriterText.length) {
                setTimeout(() => { isDeleting = true; typeWriterLoop(); }, 1200);
            } else {
                setTimeout(typeWriterLoop, 70);
            }
        } else if (isDeleting && i >= 0) {
            typewriterElem.textContent = typewriterText.substring(0, i);
            i--;
            if (i < 0) {
                isDeleting = false;
                setTimeout(typeWriterLoop, 500);
            } else {
                setTimeout(typeWriterLoop, 35);
            }
        }
    }
    typeWriterLoop();
}

// Robust smooth scrolling for all nav links
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60, // adjust for navbar height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
} 