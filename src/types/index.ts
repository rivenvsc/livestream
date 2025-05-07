import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  'aria-label'?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  'aria-label'?: string;
}
