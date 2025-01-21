"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TalentCardProps {
  name: string;
  role: string;
  experience: string;
  image: string;
  skills: string[];
}

export const TalentCard = ({
  name,
  role,
  experience,
  image,
  skills
}: TalentCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-lg w-[320px] flex flex-col gap-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-[72px] h-[72px] rounded-full bg-gray-50 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-xl text-gray-900">{name}</h3>
          <p className="text-blue-600">{role} · {experience}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};