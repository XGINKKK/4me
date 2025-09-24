import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      <div class="pointer-events-none fixed inset-0 z-[-1] opacity-[0.05]">
        <img alt="" loading="lazy" decoding="async" class="object-cover invert" 
             style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" 
             src="/images/image_7.png">
      </div>
      <div class="flex flex-col min-h-screen">
        ${Header()}
        <main class="flex-1">
          ${Hero()}
          <div style="opacity:1;transform:translateY(0px)">
            ${About()}
          </div>
          <div style="opacity:1;transform:translateY(0px)">
            ${Services()}
          </div>
          <div style="opacity:1;transform:translateY(0px)">
            ${Contact()}
          </div>
        </main>
        ${Footer()}
      </div>
    `;
  }

  bindEvents() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Contact form handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', this.handleContactForm.bind(this));
    }
  }

  handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Contact form submitted:', data);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});