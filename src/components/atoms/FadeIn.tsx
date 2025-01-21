"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'none';
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 500,
  direction = 'none'
}: FadeInProps) => {
  const variants = {
    hidden: { 
      opacity: 0,
      y: direction === 'up' ? 20 : 0 
    },
    visible: { 
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ 
        duration: duration / 1000,
        delay: delay / 1000,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};