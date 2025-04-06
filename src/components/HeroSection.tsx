'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="צילום אוכל מקצועי"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[0.7]"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-1"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heebo">
            סטודיו לצילום מוביל בישראל
          </h1>
          
          <p className="text-xl sm:text-2xl text-secondary font-light mb-10">
            חווית לקוח מושלמת בכל ביקור
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
          >
            קבע תור עכשיו
          </motion.button>
        </motion.div>
      </div>
      
      {/* Studio Name Watermark */}
      <div className="absolute bottom-8 left-8 z-10">
        <h2 className="text-white/80 text-xl font-bold">סטודיו לצילום ביתא</h2>
      </div>
    </section>
  );
};

export default HeroSection;