import { 
  Layout, 
  Repeat, 
  Globe, 
  Database, 
  Search, 
  PenTool,
} from 'lucide-react';
import { NavItem, PricingTier, FaqItem, ProcessStep, SectionId, Service, WorkItem, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Process', href: `#${SectionId.PROCESS}` },
  { label: 'Work', href: `#${SectionId.WORK}` },
  { label: 'Services', href: `#${SectionId.SERVICES}` },
  { label: 'Pricing', href: `#${SectionId.PRICING}` },
  { label: 'FAQ', href: `#${SectionId.FAQ}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Design & Build',
    description: 'Bespoke React/Next.js interfaces. No templates, just pure engineered performance.',
    icon: Layout,
  },
  {
    id: 's2',
    title: 'System Architecture',
    description: 'Scalable backend solutions and headless CMS integrations (Sanity, Contentful).',
    icon: Database,
  },
  {
    id: 's3',
    title: 'Conversion Design',
    description: 'Landing pages engineered for ROI. Motion that guides, not distracts.',
    icon: Globe,
  },
  {
    id: 's4',
    title: 'Migrations',
    description: 'Moving legacy systems to modern stacks without losing SEO equity.',
    icon: Repeat,
  },
  {
    id: 's5',
    title: 'Technical SEO',
    description: 'Core Web Vitals optimization. We target 95+ Lighthouse scores globally.',
    icon: Search,
  },
  {
    id: 's6',
    title: 'Product Iteration',
    description: 'Retainer-based feature drops and design system maintenance.',
    icon: PenTool,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        phase: "01",
        title: "Blueprint",
        timeline: "Week 0-1",
        description: "We dismantle your requirements and reconstruct them into a technical roadmap.",
        deliverables: ["Architecture Map", "UX Wireframes", "Stack Selection"]
    },
    {
        phase: "02",
        title: "Construction",
        timeline: "Week 2-3",
        description: "High-fidelity UI design runs parallel with component engineering.",
        deliverables: ["Interactive Prototype", "Component Library", "Frontend Alpha"]
    },
    {
        phase: "03",
        title: "Integration",
        timeline: "Week 4",
        description: "Connecting the CMS, databases, and third-party APIs. Rigorous testing.",
        deliverables: ["Backend API", "CMS Setup", "Integration Tests"]
    },
    {
        phase: "04",
        title: "Launch",
        timeline: "Week 5",
        description: "Performance tuning, SEO tag verification, and final deployment.",
        deliverables: ["Production Build", "Analytics Handoff", "Source Code"]
    }
];

export const PRICING_TIERS: PricingTier[] = [
    {
        name: "Sprint",
        price: "$8k",
        description: "Single landing page or micro-site.",
        features: [
            "1-2 Weeks Timeline",
            "Next.js + Tailwind",
            "Advanced Animations",
            "SEO Foundation",
            "30 Days Support"
        ]
    },
    {
        name: "Product",
        price: "$15k",
        description: "Full marketing site or simple web app.",
        features: [
            "3-4 Weeks Timeline",
            "CMS Integration",
            "Auth & Database (Basic)",
            "Design System",
            "Analytics Dashboard"
        ],
        isPremium: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Complex platforms and migrations.",
        features: [
            "Flexible Timeline",
            "Full-Stack Architecture",
            "Legacy Migration",
            "SLA Support",
            "Team Training"
        ]
    }
];

export const FAQS: FaqItem[] = [
    {
        question: "Do you use templates?",
        answer: "Never. Every line of code and pixel is crafted for your specific needs to ensure maximum performance and brand uniqueness."
    },
    {
        question: "What is your tech stack?",
        answer: "We strictly use modern standards: React (Next.js), TypeScript, and Tailwind CSS. This ensures your site is fast, secure, and maintainable."
    },
    {
        question: "Who owns the IP?",
        answer: "You do. Upon final payment, we transfer full ownership of the codebase and design assets to your organization."
    },
    {
        question: "How do we communicate?",
        answer: "We use a shared Slack channel for daily updates and Notion for project tracking. No email threads that go nowhere."
    }
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'w1',
    title: 'Fintech Dashboard',
    category: 'Web App',
    metric: '< 50ms Latency',
    tags: ['Next.js', 'Real-time', 'D3.js']
  },
  {
    id: 'w2',
    title: 'Luxury Retail',
    category: 'E-Commerce',
    metric: '+40% Conversion',
    tags: ['Shopify Headless', 'WebGL', 'Framer']
  },
  {
    id: 'w3',
    title: 'SaaS Marketing',
    category: 'Website',
    metric: '100 Lighthouse',
    tags: ['Sanity CMS', 'SEO', 'Motion']
  },
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        id: 'p1',
        title: 'Neon Bank',
        category: 'Fintech',
        description: 'Next-gen banking interface with WebGL data visualization.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'p2',
        title: 'Aero Systems',
        category: 'Aerospace',
        description: 'Flight telemetry dashboard processing 1M+ points/sec.',
        imageUrl: 'https://images.unsplash.com/photo-1559067096-49ebca56b251?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'p3',
        title: 'Nexus Health',
        category: 'MedTech',
        description: 'HIPAA-compliant telemedicine platform with AI diagnostics.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
    }
];