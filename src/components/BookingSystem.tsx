'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, TimePicker, ConfigProvider } from 'antd';
import { ClockCircleOutlined, CalendarOutlined, CameraOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/he';
import locale from 'antd/lib/locale/he_IL';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: dayjs.Dayjs | null;
  time: dayjs.Dayjs | null;
  serviceType: string;
}

const BookingSystem: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset 
  } = useForm<BookingFormData>();

  const serviceTypes = [
    { id: 'food', label: 'צילום מזון' },
    { id: 'product', label: 'צילום מוצרים' },
    { id: 'commercial', label: 'צילום מסחרי' },
    { id: 'event', label: 'צילום אירועים' }
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ConfigProvider locale={locale} direction="rtl">
      <div className="booking-system bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto my-12 border-t-4 border-primary">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">הזמנת תור לצילום</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">
            הזמינו תור לסטודיו לצילום ביתא ונצלם את המנות והמוצרים שלכם בצורה המקצועית ביותר
          </p>
        </div>

        <div className="booking-process mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <CameraOutlined className="ml-2" /> תהליך ההזמנה
          </h3>
          <ol className="list-decimal pr-5 text-gray-700 space-y-2">
            <li>מלאו את הטופס עם הפרטים האישיים שלכם</li>
            <li>בחרו את סוג השירות המבוקש</li>
            <li>בחרו תאריך ושעה מתאימים</li>
            <li>לחצו על כפתור ״קבע תור עכשיו״</li>
            <li>לאחר ההזמנה תקבלו אישור במייל ואנו ניצור איתכם קשר לתיאום סופי</li>
          </ol>
        </div>

        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 text-center">
            הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם לאישור התור.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* שם */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                שם מלא <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'שדה חובה' })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="הכנס את שמך המלא"
                dir="rtl"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* טלפון */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                טלפון <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { 
                  required: 'שדה חובה',
                  pattern: {
                    value: /^0[2-9]\d{7,8}$/,
                    message: 'מספר טלפון לא תקין'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="הכנס את מספר הטלפון שלך"
                dir="ltr"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* אימייל */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                אימייל <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'שדה חובה',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'כתובת אימייל לא תקינה'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="הכנס את כתובת האימייל שלך"
                dir="ltr"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* סוג שירות */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                סוג שירות <span className="text-red-500">*</span>
              </label>
              <select
                {...register('serviceType', { required: 'שדה חובה' })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                  errors.serviceType ? 'border-red-500' : 'border-gray-300'
                }`}
                dir="rtl"
              >
                <option value="">בחר סוג שירות</option>
                {serviceTypes.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            {/* תאריך */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                תאריך <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="date"
                rules={{ required: 'שדה חובה' }}
                render={({ field }) => (
                  <DatePicker
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    format="DD/MM/YYYY"
                    placeholder="בחר תאריך"
                    suffixIcon={<CalendarOutlined />}
                    disabledDate={(current) => {
                      // Can't select days before today
                      return current && current < dayjs().startOf('day');
                    }}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            {/* שעה */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                שעה <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="time"
                rules={{ required: 'שדה חובה' }}
                render={({ field }) => (
                  <TimePicker
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                      errors.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                    format="HH:mm"
                    placeholder="בחר שעה"
                    suffixIcon={<ClockCircleOutlined />}
                    minuteStep={15}
                    hideDisabledOptions
                    disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* הודעה */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              הודעה
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder="הוסף פרטים נוספים או בקשות מיוחדות"
              dir="rtl"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  מעבד...
                </span>
              ) : (
                'קבע תור עכשיו'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>לאחר הזמנת התור, צוות הסטודיו יצור איתך קשר לאישור הפרטים הסופיים.</p>
          <p>לשאלות נוספות ניתן ליצור קשר בטלפון: <span dir="ltr">03-1234567</span></p>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default BookingSystem;