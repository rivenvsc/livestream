import type { NavItem, SocialLink } from '@/types';
import { Home, Clapperboard, CalendarDays, Info, Facebook, Send, MessageSquare, Smartphone, Apple } from 'lucide-react';

export const SITE_NAME = 'StreamVerse';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Live Streams', href: '/live-streams', icon: Clapperboard },
  { label: 'Schedule', href: '/schedule', icon: CalendarDays },
  { label: 'Information', href: '/information', icon: Info },
];

export const APP_DOWNLOAD_LINKS = [
  { label: 'iOS App', href: '#', icon: Apple, 'aria-label': 'Download iOS App' },
  { label: 'Android App', href: '#', icon: Smartphone, 'aria-label': 'Download Android App' },
];

export const FOOTER_INFO_LINKS: NavItem[] = [
  { label: 'Schedule', href: '/schedule' },
  { label: 'Results', href: '/results' }, // Placeholder, create page if needed
  { label: 'Standings', href: '/standings' }, // Placeholder, create page if needed
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: 'Policies', href: '/policies' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact Us', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, 'aria-label': 'Facebook page' },
  { name: 'Telegram', href: 'https://telegram.org', icon: Send, 'aria-label': 'Telegram channel' },
  { name: 'Zalo', href: 'https://zalo.me', icon: MessageSquare, 'aria-label': 'Zalo contact' },
];
