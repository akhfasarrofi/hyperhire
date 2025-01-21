"use client";

import { motion } from 'framer-motion';
import { Building2, Users, Clock, Shield, HeadsetIcon } from 'lucide-react';
import { FadeIn } from '../atoms/FadeIn';

const features = [
  {
    icon: Building2,
    title: '해외 마케팅',
    description: '글로벌 시장 진출을 위한 전략'
  },
  {
    icon: Users,
    title: '퍼블리셔',
    description: '웹사이트 구축 및 최적화'
  },
  {
    icon: Clock,
    title: '캐드원(제도사)',
    description: '전문적인 설계 및 도면 작성'
  },
  {
    icon: Shield,
    title: '해외 세일즈',
    description: '글로벌 영업 전략 수립'
  },
  {
    icon: HeadsetIcon,
    title: '해외 CS',
    description: '24/7 고객 지원 서비스'
  }
];

export const ServiceFeatures = () => {
  return (
    <div className="flex justify-between gap-4 mt-16">
      {features.map((feature, index) => (
        <FadeIn key={feature.title} delay={index * 100 + 500}>
          <motion.div
            className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-lg text-white"
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon size={24} />
            <h3 className="font-medium">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
};