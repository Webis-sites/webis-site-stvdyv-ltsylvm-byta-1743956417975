'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<{ message: string; error: boolean } | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus({ message: 'נא להזין כתובת אימייל תקינה', error: true });
      return;
    }
    
    // Here you would typically call an API to handle the subscription
    // For demo purposes, we'll just simulate a successful subscription
    setSubscribeStatus({ message: 'תודה שנרשמת לניוזלטר שלנו!', error: false });
    setEmail('');
    
    // Reset status message after 3 seconds
    setTimeout(() => {
      setSubscribeStatus(null);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="mb-4 relative h-16 w-40">
              <Image 
                src="/images/logo.png" 
                alt="סטודיו לצילום ביתא" 
                layout="fill" 
                objectFit="contain"
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              סטודיו לצילום ביתא - מקצועיות, יצירתיות וחדשנות בכל פריים
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  תיק עבודות
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  מחירון
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  בלוג
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="ml-2 text-secondary" />
                <a href="tel:+972501234567" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  050-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2 text-secondary" />
                <a href="mailto:info@beta-studio.co.il" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  info@beta-studio.co.il
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2 text-secondary" />
                <span className="text-gray-300">
                  רחוב האומנים 12, תל אביב
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-gray-200">שעות פעילות</h4>
              <p className="text-gray-300">א'-ה': 09:00-18:00</p>
              <p className="text-gray-300">ו': 09:00-14:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">הניוזלטר שלנו</h3>
            <p className="text-gray-300 mb-4">
              הירשמו לניוזלטר שלנו וקבלו עדכונים, טיפים מקצועיים ומבצעים מיוחדים
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="האימייל שלך"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                  dir="rtl"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                הרשמה
              </button>
              {subscribeStatus && (
                <p className={`text-sm ${subscribeStatus.error ? 'text-red-400' : 'text-green-400'}`}>
                  {subscribeStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} סטודיו לצילום ביתא. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-4 space-x-reverse text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-300">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors duration-300">
              תנאי שימוש
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-primary transition-colors duration-300">
              מפת האתר
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;