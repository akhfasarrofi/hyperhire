"use client";

import { FadeIn } from '../atoms/FadeIn';
import { Button } from '../atoms/Button';
import { TalentSlider } from '../organisms/TalentSlider';
import { ServiceFeatures } from '../organisms/ServiceFeatures';

export interface LandingPageProps {
  talents: {
    id: number;
    name: string;
    role: string;
    experience: string;
    image: string;
    skills: string[];
  }[]
}

export const LandingPage = ({ talents }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-white text-2xl font-bold">hyperhire</div>
          <div className="flex gap-4">
            <Button variant="secondary">채용</Button>
            <Button>해외 개발자 활용 서비스</Button>
          </div>
        </nav>

        <div className="text-white mb-16">
          <FadeIn delay={0}>
            <h2 className="text-lg mb-2">풀타임, 파트타임</h2>
          </FadeIn>
          
          <FadeIn delay={300} direction="up">
            <h1 className="text-4xl font-bold mb-4">
              최고의 실력을 가진<br />
              외국인 인재를 찾고 계신가요?
            </h1>
          </FadeIn>

          <FadeIn delay={500} direction="up">
            <p className="text-xl opacity-90 mb-8">
              법률 및 인사관리 부담없이<br />
              1주일 이내에 원격으로 채용해보세요.
            </p>
          </FadeIn>

          <TalentSlider talents={talents} />
        </div>

        <ServiceFeatures />
      </div>
    </div>
  );
};