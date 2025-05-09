import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  return (
    <footer className="bg-background-light py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-accent hover:bg-accent-light text-background rounded-full p-3 mb-6 transition-all hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </button>

          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/pratiksha" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pratiksha-patil-718b2a159" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:pratiksha14.6.99@gmail.com" className="text-text-secondary hover:text-accent transition-colors" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-text-secondary mb-2">
              Designed & Built by Pratiksha Patil
            </p>
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;