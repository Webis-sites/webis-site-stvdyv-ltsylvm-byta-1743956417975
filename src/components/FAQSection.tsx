'use client';

import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-right focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${isOpen ? 'text-primary' : ''} text-lg font-medium`}>
          {question}
        </span>
        <span className="text-primary">
          {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600 text-right overflow-hidden"
          >
            <p className="py-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "כמה עולה צילום מזון מקצועי?",
      answer: "המחירים משתנים בהתאם לסוג הפרויקט, כמות התמונות הנדרשת, ומורכבות הצילום. אנו מציעים חבילות החל מ-1,500 ש״ח לסשן בסיסי. נשמח לתת הצעת מחיר מותאמת אישית לפרויקט שלך."
    },
    {
      question: "כמה זמן אורך סשן צילום?",
      answer: "סשן צילום מזון סטנדרטי אורך בין 3-5 שעות, תלוי במספר המנות שיש לצלם ובמורכבות הסגנון. אנו ממליצים להקדיש כ-30-45 דקות לכל מנה כדי להשיג את התוצאות הטובות ביותר."
    },
    {
      question: "תוך כמה זמן אקבל את התמונות המוכנות?",
      answer: "זמן האספקה הרגיל הוא 5-7 ימי עבודה לאחר הצילומים. אם יש לך דדליין דחוף, אנחנו יכולים להציע שירות אקספרס בתוספת תשלום שיאפשר קבלת תמונות נבחרות תוך 24-48 שעות."
    },
    {
      question: "האם אתם מספקים סטייליסט מזון?",
      answer: "כן, יש לנו צוות של סטייליסטים מקצועיים לצילומי מזון. שירות זה כרוך בתוספת תשלום ומומלץ מאוד לקבלת תוצאות מקצועיות. לחלופין, אתם יכולים להביא סטייליסט משלכם או להכין את המנות בעצמכם בהנחייתנו."
    },
    {
      question: "מה עלי להכין לקראת יום הצילום?",
      answer: "מומלץ להכין רשימה של המנות שברצונכם לצלם, כולל הערות מיוחדות לגבי הסגנון הרצוי. הביאו דוגמאות של תמונות שאתם אוהבים לצורך השראה. אם אתם מביאים את המנות, ודאו שיש לכם כמות מספקת למקרה שנצטרך לצלם מספר גרסאות."
    },
    {
      question: "האם אתם מצלמים במיקום שלנו או בסטודיו?",
      answer: "אנחנו מציעים את שתי האפשרויות. צילום בסטודיו שלנו מאפשר שליטה מלאה בתאורה ובסביבה, ויש לנו מגוון רקעים ואביזרים. צילום במיקום שלכם (כמו במסעדה) מאפשר לתפוס את האווירה האותנטית. קיימת תוספת תשלום עבור צילומים מחוץ לסטודיו."
    },
    {
      question: "האם אתם מספקים עריכת תמונות?",
      answer: "כן, כל חבילות הצילום שלנו כוללות עריכה בסיסית (כיוון צבע, חשיפה, קונטרסט). עריכה מתקדמת כמו ריטוש מורכב או הסרת אלמנטים זמינה בתוספת תשלום."
    },
    {
      question: "האם אפשר לקבל את כל קבצי הגלם מהצילומים?",
      answer: "חבילות הצילום הסטנדרטיות שלנו כוללות את התמונות הערוכות הסופיות בלבד. ניתן לרכוש את קבצי הגלם בתוספת תשלום, אך חשוב לציין שאנו ממליצים על התמונות הערוכות שנבחרו בקפידה כדי להציג את המזון בצורה הטובה ביותר."
    }
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">שאלות נפוצות</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אלו השאלות הנפוצות ביותר שאנחנו מקבלים מלקוחותינו. אם יש לך שאלה שלא מופיעה כאן, אל תהסס ליצור איתנו קשר ישירות.
          </p>
        </div>
        
        <div className="bg-secondary bg-opacity-10 rounded-lg p-6 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;