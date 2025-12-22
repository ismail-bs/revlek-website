'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Greg Lyon",
      role: "CEO, Amplyon.",
      content: "This was my first project with Revlek and they did a great job - always recommending solutions they thought were best in the long-term.",
      rating: 5,
      country: "Germany",
      flag: "🇩🇪",
      service: "Custom Software"
    },
    {
      name: "Dee",
      role: "Investor | Entrepreneur | Educator, Road Smart Solutions",
      content: "I’m absolutely thrilled with the exceptional work delivered! The backend tasks were completed flawlessly and right on schedule. The quality of the work was outstanding, and the final result exceeded all my expectations. Communication was seamless from start to finish, with prompt responses and a proactive approach to every detail. If you’re looking for top-tier service, professionalism, and someone who consistently delivers on time, look no further. Highly recommended!",
      rating: 5,
      country: "Togo",
      flag: "🇹🇬",
      service: "Custom Software"
    },
    {
      name: "Shukhrat Shawn",
      role: "Founder, Darstop",
      content: "They created the back end of my web application and deployed it into server. Good work!",
      rating: 4.8,
      country: "USA",
      flag: "🇺🇸",
      service: "Backend Development"
    },
    {
      name: "MNassary",
      role: "Founder, ESIM Management, ",
      content: "I had the pleasure of working with Revlek on a full-stack project, and I can confidently say they exceeded all expectations. They handled the entire backend development with great skill and also delivered a clean, testable frontend along with an impressive admin panel. What truly stood out was their mindset— they worked like a true cofounder.",
      rating: 4.9,
      country: "United Kingdom",
      flag: "🇬🇧",
      service: "Custom Software"
    },
    {
      name: "Idris",
      role: "Financial Advisor, My Discount",
      content: "Revlek is a very talented and intelligent software company. Everything was done on time and executed perfectly. Thanks again",
      rating: 5,
      country: "Qatar",
      flag: "🇶🇦",
      service: "Backend Development"
    },
    {
      name: "Samiah kh",
      role: "Product Manager, Eventique",
      content: "Greatly helped with no hesitation. From the beginning till the end, they has provided advice and guidance! Much thanks.",
      rating: 5,
      country: "Saudi Arabia",
      flag: "🇸🇦",
      service: "E-commerce Platform"
    },
    {
      name: "Ruby Kapoor",
      role: "Intraday Platform Manager, American Express",
      content: "Revlek was amazing, and very helpful. went above and beyond!",
      rating: 5,
      country: "United States",
      flag: "🇺🇸",
      service: "Custom Software"
    },
    {
      name: "Omar jamiai",
      role: "Project Contributor",
      content: "Revelek is a highly skilled and experienced software engineer who delivers quality work professionally and on time. I would definitely recommend them for future projects.",
      rating: 5,
      country: "Morocco",
      flag: "🇲🇦",
      service: "Custom Software"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Trusted by industry leaders worldwide. Discover how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Display */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="mb-6 md:mb-8">
                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-slate-400 opacity-60 mx-auto" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6 md:mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-blue-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-8 md:mb-12 leading-relaxed font-light italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 md:mr-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 border border-slate-600 text-white font-bold text-lg md:text-xl shadow-inner select-none"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getInitials(testimonials[currentIndex].name)}
                  </motion.div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-400 text-sm md:text-base">{testimonials[currentIndex].role}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold flex items-center gap-1">
                        <span className="text-lg">{testimonials[currentIndex].flag}</span>
                        {testimonials[currentIndex].country}
                      </span>
                      <span className="hidden sm:inline-block w-1 h-1 bg-slate-600 rounded-full"></span>
                      <span className="text-blue-400 text-xs font-medium bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                        {testimonials[currentIndex].service}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-105 border border-slate-700/50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-105 border border-slate-700/50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 w-6' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "100+", label: "Happy Clients" },
            { number: "80%", label: "Client Retention" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
