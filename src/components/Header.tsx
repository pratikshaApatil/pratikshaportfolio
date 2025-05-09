import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.target}
              to={link.target}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`nav-link ${activeSection === link.target ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 h-screen w-3/4 bg-background-light shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col justify-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          className="absolute top-5 right-5 text-text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          <FiX size={24} />
        </button>
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.target}
              to={link.target}
              spy={true}
              smooth={true}
              offset={-100}
              // duration={500}
              className={`text-xl ${activeSection === link.target ? 'text-accent' : 'text-text-secondary'
                } hover:text-accent`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;