import type { NavItem, SocialLink } from '@/types';
import { Home, Clapperboard, CalendarDays, Info, Facebook, Send, MessageSquare, Smartphone, Apple } from 'lucide-react';

export const SITE_NAME = 'StreamVerse';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/', icon: Home },
  { label: 'Trực tiếp', href: '/live-streams', icon: Clapperboard },
  { label: 'Lịch thi đấu', href: '/schedule', icon: CalendarDays },
  { label: 'Thông tin', href: '/information', icon: Info },
];

export const APP_DOWNLOAD_LINKS = [
  { label: 'IOS', href: '#', icon: Apple, 'aria-label': 'Download iOS App' },
  { label: 'Android', href: '#', icon: Smartphone, 'aria-label': 'Download Android App' },
];

export const FOOTER_INFO_LINKS: NavItem[] = [
  { label: 'Nhà cái uy tín 2025', href: '/#' },
  { label: 'Tỷ lệ kèo nhà cái', href: '/#' },
  { label: 'Lịch thi đấu bóng đá', href: '/#' },
  { label: 'Kết quả bóng đá mới', href: '/#' },
  { label: 'Bảng xếp hạng', href: '/#' },
  { label: 'Livescore: Tỷ số trực tiếp', href: '/#' },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: 'Chính sách', href: '/policies' },
  { label: 'Điều khoản', href: '/terms' },
  { label: 'Liên hệ', href: '/contact' },
  { label: 'Soi kèo', href: '/#' },
  { label: 'Vua sân cỏ', href: '/#' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, 'aria-label': 'Facebook page' },
  { name: 'Telegram', href: 'https://telegram.org', icon: Send, 'aria-label': 'Telegram channel' },
  { name: 'Zalo', href: 'https://zalo.me', icon: MessageSquare, 'aria-label': 'Zalo contact' },
];
