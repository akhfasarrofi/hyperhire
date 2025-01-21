import { NextResponse } from 'next/server';

// Static sample data
const talents = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글작성']
  },
  {
    id: 2,
    name: 'Luffy Citra',
    role: '개발',
    experience: '3y+',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
    skills: ['프론트엔드', '리액트', '타입스크립트', '노드JS']
  },
  {
    id: 3,
    name: 'Evander Kristalino',
    role: '디자인',
    experience: '4y+',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
    skills: ['UI/UX', 'Figma', '프로토타입', '웹디자인']
  }
];

export async function GET() {
  return NextResponse.json(talents);
}