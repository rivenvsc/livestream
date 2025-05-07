import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SITE_NAME, FOOTER_INFO_LINKS, FOOTER_LEGAL_LINKS, SOCIAL_LINKS } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, Description, Get Pass Button */}
          <div className="space-y-4">
            <Logo iconOnly={false} />
            <p className="text-sm text-muted-foreground">
              Experience the thrill of live sports and entertainment with {SITE_NAME}. Your ultimate destination for streaming.
            </p>
            <Button variant="outline">Get Access Pass</Button>
          </div>

          {/* Column 2: Information */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Information</h4>
            <ul className="space-y-2">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Contact & Legal</h4>
            <p className="text-sm text-muted-foreground">Email: vuasanco@gmail.com</p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                    <link.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
            <ul className="space-y-2 pt-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscription Form */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Register to watch football and get the latest news.</p>
            <form className="space-y-3">
              <div>
                <Label htmlFor="footer-email" className="sr-only">Email</Label>
                <Input type="email" id="footer-email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="footer-phone" className="sr-only">Phone Number</Label>
                <Input type="tel" id="footer-phone" placeholder="Enter your phone number" />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Register Now</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
