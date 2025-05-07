import { Button } from '@/components/ui/button';
import { APP_DOWNLOAD_LINKS } from '@/config/site';
import Link from 'next/link';

export function AppDownloadButtons() {
  return (
    <div className="flex items-center gap-2">
      {APP_DOWNLOAD_LINKS.map((link) => (
        <Button key={link.label} variant="outline" size="sm" asChild>
          <Link href={link.href} aria-label={link['aria-label']}>
            <link.icon className="mr-2 h-4 w-4" />
            {link.label.replace(' App','')}
          </Link>
        </Button>
      ))}
    </div>
  );
}
