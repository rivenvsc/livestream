import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME } from '@/config/site';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AppDownloadButtons } from '@/components/AppDownloadButtons';
import { AuthModal } from '@/components/AuthModal';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-4 ml-auto text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-4">
          <AppDownloadButtons />
          <AuthModal />
          <ThemeToggle />
        </div>
        <div className="md:hidden ml-auto flex items-center">
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col gap-4 mt-8">
                        {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                        ))}
                    </nav>
                    <div className="mt-8 space-y-4">
                        <AppDownloadButtons />
                        <AuthModal />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
