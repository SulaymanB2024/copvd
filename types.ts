import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  tags: string[];
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
}

export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPremium?: boolean;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ProcessStep {
    phase: string;
    title: string;
    timeline: string;
    description: string;
    deliverables: string[];
}

export interface EstimateResponse {
    codename: string;
    timelineWeeks: string;
    summary: string;
    techStack: string[];
    features: string[];
}

export enum SectionId {
  HOME = 'home',
  PROCESS = 'process',
  WORK = 'work',
  SERVICES = 'services',
  PRICING = 'pricing',
  FAQ = 'faq',
  CONTACT = 'contact',
  AI_CONSULTANT = 'ai_consultant',
}