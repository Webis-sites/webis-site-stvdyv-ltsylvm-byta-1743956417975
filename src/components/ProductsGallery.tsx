'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUtensils, FaCocktail, FaCookie, FaHamburger, FaWineGlassAlt, FaFilter } from 'react-icons/fa';

type GalleryItem = {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
  photographer: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975',
    category: 'desserts',
    title: 'עוגת שוקולד מפנקת',
    description: 'עוגת שוקולד עשירה עם פירות יער טריים',
    photographer: 'אלון כהן',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    category: 'main',
    title: 'פיצה איטלקית',
    description: 'פיצה מסורתית עם מוצרלה ועגבניות טריות',
    photographer: 'יעל לוי',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2',
    category: 'beverages',
    title: 'קוקטייל קיצי',
    description: 'קוקטייל מרענן עם פירות טרופיים',
    photographer: 'דני אבידן',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
    category: 'desserts',
    title: 'מאפה קרואסון',
    description: 'קרואסון חמאה אפוי בסגנון צרפתי',
    photographer: 'מיכל דוד',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'main',
    title: 'סלט ירקות',
    description: 'סלט ירקות טריים עם רוטב ביתי',
    photographer: 'רותם כהן',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    category: 'beverages',
    title: 'יין אדום',
    description: 'יין אדום משובח בכוס קריסטל',
    photographer: 'שירה לוי',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246',
    category: 'main',
    title: 'המבורגר גורמה',
    description: 'המבורגר עסיסי עם תוספות מיוחדות',
    photographer: 'יוסי אברהם',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
    category: 'desserts',
    title: 'גלידה איטלקית',
    description: 'גלידה איטלקית בטעמים מפתיעים',
    photographer: 'נועה שמיר',
  },
];

const categories = [
  { id: 'all', name: 'הכל', icon: <FaFilter /> },
  { id: 'main', name: 'מנות עיקריות', icon: <FaHamburger /> },
  { id: 'desserts', name: 'קינוחים', icon: <FaCookie /> },
  { id: 'beverages', name: 'משקאות', icon: <FaCocktail /> },
];

export default function ProductsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      setFilteredItems(GALLERY_ITEMS.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 px-4 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">גלריית עבודות</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            סטודיו לצילום ביתא מתמחה בצילום אוכל מקצועי שמדגיש טקסטורות, צבעים וקומפוזיציה. 
            הצילומים שלנו מעוררים תיאבון ומשקפים את האיכות והיצירתיות של כל מנה.
          </p>
        </div>

        {/* Filter Categories - Mobile */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200"
          >
            <span className="flex items-center gap-2">
              {categories.find(cat => cat.id === selectedCategory)?.icon}
              <span>{categories.find(cat => cat.id === selectedCategory)?.name}</span>
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-right flex items-center gap-2 p-3 hover:bg-gray-100 transition-colors ${
                    selectedCategory === category.id ? 'bg-secondary/20 text-primary' : ''
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Categories - Desktop */}
        <div className="hidden md:flex justify-center mb-8 space-x-4 space-x-reverse">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm mt-1">{item.description}</p>
                  <p className="text-xs mt-2 text-gray-300">צלם: {item.photographer}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500">צלם: {item.photographer}</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary/20 text-primary">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">לא נמצאו פריטים בקטגוריה זו</p>
          </div>
        )}
      </div>
    </section>
  );
}