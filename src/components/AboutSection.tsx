'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              סטודיו לצילום ביתא
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-6 text-lg leading-relaxed"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              אנחנו סטודיו לצילום מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  10+
                </div>
                <div className="mr-4">
                  <h3 className="font-bold text-lg">שנות ניסיון</h3>
                  <p className="text-gray-600">בתחום צילום המזון</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  100+
                </div>
                <div className="mr-4">
                  <h3 className="font-bold text-lg">לקוחות מרוצים</h3>
                  <p className="text-gray-600">מסעדות, שפים ועסקי מזון</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mr-4">
                  <h3 className="font-bold text-lg">ציוד מקצועי</h3>
                  <p className="text-gray-600">טכנולוגיה מתקדמת לתוצאות מושלמות</p>
                </div>
              </div>
            </motion.div>
            
            <motion.button 
              className="mt-8 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              צור קשר
            </motion.button>
          </div>
          
          <motion.div 
            className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1574722772581-f7db9a6a857f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="סטודיו לצילום מזון"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg">
              <p className="font-bold text-primary">סטודיו לצילום ביתא</p>
              <p className="text-sm text-gray-700">מומחים בצילום מזון</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;