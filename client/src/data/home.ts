import {
  Brush,
  Cpu,
  Zap,
  RefreshCw,
  Clock,
  FileText,
  CreditCard,
  AtSign,
  Headphones,
  PlayCircle,
  Sparkles,
  LogIn,
  MessageSquare,
  Image as ImageIcon,
  Rocket,
  Layers3,
  Crown,
} from "lucide-react";
import type {
  NavItem,
  FaqItemData,
  FooterColumn,
  WorkflowStepData,
  PerformanceFeatureData,
  PricingPlanData,
} from "../types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Generate", href: "/generate"},
  { label: "My generations", href: "/my-generations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export const WORKFLOW_STEPS: WorkflowStepData[] = [
  {
    id: "01",
    title: "The Prompt",
    description:
      "Describe your thumbnail idea in plain English and keep the creative direction simple.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "The Engine",
    description:
      "Choose tuned style systems that match your channel, niche, and brand energy.",
    icon: Cpu,
  },
  {
    id: "03",
    title: "The Render",
    description:
      "Generate clean thumbnail variations quickly without leaving the workflow.",
    icon: ImageIcon,
  },
  {
    id: "04",
    title: "The Launch",
    description:
      "Export crisp assets for your next upload, campaign, or creator gallery.",
    icon: Rocket,
  },
];

export const PERFORMANCE_FEATURES: PerformanceFeatureData[] = [
  {
    id: "models",
    title: "Tuned AI Models",
    description:
      "Our proprietary AI understands composition, eye tracking, color contrast, and the sharp visual language.",
    icon: Brush,
    visual: "model",
    size: "wide",
  },
  {
    id: "generation",
    title: "Sub-Second Generation",
    description:
      "Iterate at the speed of thought with quick previews and instant variation loops.",
    icon: Zap,
    visual: "",
  },
  {
    id: "face-blending",
    title: "Face Blending",
    description:
      "Upload a quick selfie and blend your face into cinematic, high-quality environments.",
    icon: Layers3,
    visual: "",
  },
  {
    id: "upscaling",
    title: "Ultra HD Upscaling",
    description:
      "Every generation is automatically sharpened for crisp results across phones, tablets, laptops, and 4K displays.",
    icon: Crown,
    visual: "ultra",
    size: "wide",
    highlighted: false,
  },
];

export const PRICING_PLANS: PricingPlanData[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceSuffix: "forever",
    cta: "Start Free",
    features: [
      "5 generations per month",
      "Standard quality",
      "16:9 and 1:1 aspect ratios",
      "Community gallery access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For creators who need more",
    monthlyPrice: 9,
    yearlyPrice: 7,
    priceSuffix: "/month",
    cta: "Get Pro",
    featured: true,
    features: [
      "100 generations per month",
      "HD and Ultra quality",
      "All aspect ratios",
      "Image upload and blending",
      "Priority render queue",
    ],
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "For power creators and agencies",
    monthlyPrice: 29,
    yearlyPrice: 23,
    priceSuffix: "/month",
    cta: "Get Ultra",
    features: [
      "500 generations per month",
      "Ultra quality always",
      "All style presets",
      "API access",
      "Priority support",
    ],
  },
];

export const FAQS: FaqItemData[] = [
  {
    id: "trial",
    icon: Zap,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
  },
  {
    id: "plan",
    icon: RefreshCw,
    question: "Can I change my plan later?",
    answer:
      "Of course. Our pricing scales with your needs — upgrade or downgrade at any time and we'll prorate the difference automatically.",
  },
  {
    id: "cancel",
    icon: Clock,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel anytime from your account settings. Your plan stays active until the end of the current billing period.",
  },
  {
    id: "invoice",
    icon: FileText,
    question: "Can other info be added to an invoice?",
    answer:
      "Absolutely. Add VAT numbers, billing addresses, PO numbers or any custom notes directly from the billing dashboard.",
  },
  {
    id: "billing",
    icon: CreditCard,
    question: "How does billing work?",
    answer:
      "We bill on a per-workspace basis. You can pay monthly or annually, and annual plans include a generous discount.",
  },
  {
    id: "email",
    icon: AtSign,
    question: "How do I change my account email?",
    answer:
      "Head to Settings → Account, update your email and confirm via the verification link we send you.",
  },
  {
    id: "support",
    icon: Headphones,
    question: "How does support work?",
    answer:
      "Our support team is available 24/7 via chat and email, with priority response times on paid plans.",
  },
  {
    id: "tutorials",
    icon: PlayCircle,
    question: "Do you provide tutorials?",
    answer:
      "Yes — we maintain a full library of video tutorials and written guides inside the Help Centre.",
  },
  {
    id: "lifetime",
    icon: Sparkles,
    question: 'What does "lifetime access" mean?',
    answer:
      "Lifetime access grants you permanent use of the plan's features for a one-time payment, including future updates.",
  },
  {
    id: "signin",
    icon: LogIn,
    question: "How do I sign into my account?",
    answer:
      "Use the Sign in button at the top of the page with your email and password, or continue with your SSO provider.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Generate", href: "/generate" },
      { label: "My Generations", href: "/my-generations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];