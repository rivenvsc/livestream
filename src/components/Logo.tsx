import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-primary hover:text-accent transition-colors ${className}`}>
      <Image
        src="/assets/images/logo.png"
        alt="vua-san-co"
        width={105}
        height={85}
        className={`w-100 ${iconOnly ? 'rounded-full' : ''}`}
        data-ai-hint="logo"
      />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      {!iconOnly && <span className="text-2xl font-bold">StreamVerse</span>} */}
    </Link>
  );
}
