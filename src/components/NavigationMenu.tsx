'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
  path: string;
}

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית', path: 'home' },
    { id: 'about', label: 'אודות', path: 'about' },
    { id: 'services', label: 'שירותים', path: 'services' },
    { id: 'portfolio', label: 'תיק עבודות', path: 'portfolio' },
    { id: 'testimonials', label: 'המלצות', path: 'testimonials' },
    { id: 'contact', label: 'צור קשר', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Change navbar style on scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative h-12 w-36 flex items-center">
          <Image
            src="/logo.png"
            alt="סטודיו לצילום ביתא"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-lg font-medium hover:text-primary transition-colors px-2 py-1 ${
                    activeSection === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-800'
                  }`}
                  activeClass="active"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-primary transition-colors focus:outline-none"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.path}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={`block text-lg font-medium hover:text-primary transition-colors py-2 ${
                        activeSection === item.id
                          ? 'text-primary'
                          : 'text-gray-800'
                      }`}
                      activeClass="active"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationMenu;