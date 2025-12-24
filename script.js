// Smooth scroll için aktif link güncelleme
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar scroll efekti
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 5%';
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Skill bar animasyonu
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Intersection Observer ile skill animasyonu tetikleme
const skillsSection = document.querySelector('.skills');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Form gönderimi (demo)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mesajınız gönderildi! (Demo amaçlı)');
        contactForm.reset();
    });
}

// Typing efekti (isteğe bağlı)
const typingText = document.querySelector('.tagline');
const originalText = typingText?.textContent || '';

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    }
}

// Sayfa yüklendiğinde typing efekti başlat
window.addEventListener('load', () => {
    if (typingText) {
        typingText.textContent = '';
        setTimeout(() => typeWriter(typingText, originalText), 1000);
    }
});

// Proje kartları hover efekti geliştirme
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#00d9ff';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

console.log('Portfolio sitesi başarıyla yüklendi! 🚀');
