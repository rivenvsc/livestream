import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: `Welcome to ${SITE_NAME} - Your universe of live entertainment.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#1A202C', // Dark Blue
    theme_color: '#4DC0B5', // Teal
    icons: [
      {
        src: '/icon-192x192.png', // Placeholder - ensure this exists in /public
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png', // Placeholder - ensure this exists in /public
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
