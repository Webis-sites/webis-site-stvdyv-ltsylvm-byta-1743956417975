'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            צור קשר
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו זמינים לכל שאלה, הצעה או שיתוף פעולה. נשמח לשמוע ממך ולהפוך את החזון שלך למציאות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">השאר פרטים</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="השם המלא שלך"
                  {...register('name', { required: 'שדה חובה' })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="מספר הטלפון שלך"
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[0-9]{9,10}$/,
                      message: 'מספר טלפון לא תקין'
                    }
                  })}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="כתובת האימייל שלך"
                  {...register('email', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="תוכן ההודעה שלך"
                  {...register('message', { required: 'שדה חובה' })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>
                
                {submitSuccess && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-center text-green-600 font-medium"
                  >
                    ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-secondary bg-opacity-20 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">טלפון</p>
                    <p className="font-medium">03-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">אימייל</p>
                    <p className="font-medium">info@beta-studio.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">כתובת</p>
                    <p className="font-medium">רחוב הצילום 123, תל אביב</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-700 mb-3">עקבו אחרינו</p>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74493563227!2d34.72057951640625!3d32.08799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1655000000000!5m2!1sen!2sil" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="סטודיו לצילום ביתא"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;