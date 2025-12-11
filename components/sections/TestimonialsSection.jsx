'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data.testimonials || []))
      .catch(err => console.error('Error loading testimonials:', err));
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section id="testimonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">What People Say</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Testimonials from students and colleagues
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card glass className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-lg text-foreground/80 mb-6 italic">
                  "{currentTestimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mr-4">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{currentTestimonial.name}</div>
                    <div className="text-sm text-foreground/60">{currentTestimonial.role}</div>
                    {currentTestimonial.course && (
                      <div className="text-xs text-foreground/50 mt-1">
                        {currentTestimonial.course} • {currentTestimonial.year}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-foreground/20'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
