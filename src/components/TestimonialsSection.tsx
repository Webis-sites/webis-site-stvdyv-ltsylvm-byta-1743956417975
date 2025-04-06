'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל לוי',
      position: 'שף ראשי',
      company: 'מסעדת אוליב',
      quote: 'סטודיו לצילום ביתא הפך את המנות שלנו ליצירות אמנות אמיתיות. התמונות שלהם עזרו לנו להגדיל את הנוכחות המקוונת שלנו ולמשוך לקוחות חדשים. ממליץ בחום!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'מיכל כהן',
      position: 'מנהלת שיווק',
      company: 'מאפיית לחם הארץ',
      quote: 'העבודה עם סטודיו לצילום ביתא שינתה את הדרך שבה אנחנו מציגים את המוצרים שלנו. הצילומים מקצועיים, יצירתיים ומושכים את העין. התוצאות דיברו בעד עצמן עם עלייה של 40% במכירות המקוונות.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      position: 'בעלים',
      company: 'קונדיטוריית מתוק',
      quote: 'הצוות המקצועי של סטודיו ביתא הבין בדיוק את החזון שלנו והצליח להעביר את האהבה שלנו לקינוחים דרך התמונות. שירות מעולה ותוצאות מדהימות.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'רונית שרון',
      position: 'מנכ"לית',
      company: 'מותג האוכל ״טעם הטבע״',
      quote: 'הצילומים של סטודיו ביתא עזרו לנו להשיק את קו המוצרים החדש שלנו בהצלחה גדולה. האיכות והיצירתיות של הצילומים עלתה על כל ציפיותינו.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 5,
      name: 'אלון ברק',
      position: 'שף ובעלים',
      company: 'ביסטרו הגפן',
      quote: 'סטודיו לצילום ביתא הם השותפים המושלמים לכל עסק בתחום המזון. הם מבינים את חשיבות הפרזנטציה וידעו לצלם את המנות שלנו בדרך שגורמת ללקוחות לרצות להזמין מיד.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const itemsToShow = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <AiFillStar 
        key={i} 
        className={`inline-block ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        size={20} 
      />
    ));
  };

  const startIndex = currentIndex * itemsToShow;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl-direction">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">לקוחות מספרים</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מה הלקוחות שלנו אומרים על שירותי הצילום של סטודיו לצילום ביתא
          </p>
        </div>

        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-wrap justify-center">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border-2 border-secondary hover:border-primary transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      <div className="mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-4 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark focus:outline-none transition-colors duration-300 z-10"
            aria-label="Previous testimonials"
          >
            <IoIosArrowForward size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-4 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark focus:outline-none transition-colors duration-300 z-10"
            aria-label="Next testimonials"
          >
            <IoIosArrowBack size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array(totalSlides).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                currentIndex === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;