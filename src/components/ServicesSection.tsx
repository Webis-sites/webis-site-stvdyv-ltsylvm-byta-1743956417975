import React from 'react';
import { FaCamera, FaUtensils, FaBoxOpen, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, icon }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 rtl">
        <div className="flex items-center mb-4">
          <div className="text-primary text-2xl mr-3">{icon}</div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "צילום תפריטים",
      description: "צילומי תפריט מקצועיים המדגישים את הטעם והמרקם של המנות שלך, מושלמים למסעדות ובתי קפה.",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaUtensils />
    },
    {
      title: "צילומי פרסום",
      description: "צילומים שמושכים את העין עבור קמפיינים פרסומיים, מודעות ושלטי חוצות שיגרמו ללקוחות לרצות את המוצרים שלך.",
      imageUrl: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaCamera />
    },
    {
      title: "צילום אריזות",
      description: "צילומים מקצועיים של מוצרי מזון ארוזים המדגישים את האריזה והמוצר, מושלמים למדפי חנויות ומכירות אונליין.",
      imageUrl: "https://images.unsplash.com/photo-1606914907831-6b0aa9c5a540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaBoxOpen />
    },
    {
      title: "תוכן לרשתות חברתיות",
      description: "צילומי מזון מרהיבים המותאמים במיוחד לפלטפורמות כמו אינסטגרם ופייסבוק, שיגדילו את הנוכחות הדיגיטלית שלך.",
      imageUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaInstagram />
    }
  ];

  return (
    <section className="py-16 bg-secondary/20 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            סטודיו לצילום ביתא מציע מגוון שירותי צילום מזון מקצועיים שיעזרו לעסק שלך לבלוט
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}