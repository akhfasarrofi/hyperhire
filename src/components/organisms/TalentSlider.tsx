"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TalentCard } from '../molecules/TalentCard';

interface Talent {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  skills: string[];
}

interface TalentSliderProps {
  talents: Talent[];
}

export const TalentSlider = ({ talents }: TalentSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % talents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [talents.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + talents.length) % talents.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % talents.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="overflow-hidden mx-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {[...talents, ...talents].slice(currentIndex, currentIndex + 3).map((talent) => (
                <TalentCard key={`${talent.id}-${currentIndex}`} {...talent} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};