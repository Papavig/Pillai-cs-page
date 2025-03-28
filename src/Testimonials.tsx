import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { studentTestimonials } from './data/data';

const TestimonialsComponent: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % studentTestimonials.length
      );
    }, 10000);

    return () => clearInterval(autoPlayInterval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % studentTestimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? studentTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="container flex flex-col md:flex-row justify-center items-center mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold tracking-wide mb-6 md:mb-0 md:mr-6">Student Testimonials:</h1>
      
      <div className="relative max-w-4xl mx-auto my-8 bg-white shadow-md rounded-lg p-6 md:p-8">
        <div className="mb-6">
          <p className="text-gray-700 italic">"{studentTestimonials[currentTestimonial].quote}"</p>
        </div>
        
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div>
            <h3 className="font-bold text-[#910000]">
              {studentTestimonials[currentTestimonial].name}
            </h3>
            {studentTestimonials[currentTestimonial].role && (
              <p className="text-gray-600 text-sm">{studentTestimonials[currentTestimonial].role}</p>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {studentTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentTestimonial 
                  ? 'bg-[#910000]' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
