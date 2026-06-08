import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

export interface FaqItemData {
  id: string;
  icon: LucideIcon;
  question: string;
  answer: string;
}

export interface WorkflowStepData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PerformanceFeatureData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  visual: "model" | "speed" | "blend" | "ultra" | "";
  size?: "wide" | "standard";
  highlighted?: boolean;
}

export interface PricingPlanData {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  priceSuffix: string;
  cta: string;
  featured?: boolean;
  features: string[];
}

export interface BrandLogo {
  name: string;
  icon: LucideIcon;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

