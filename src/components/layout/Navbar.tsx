import { NAV_ITEMS } from "@/config/site";
import Link from "next/link";

export default function Navbar() {
    return ( 
    <div className="hidden md:flex container h-100 items-center mx-auto py-2 px-4 md:px-8 lg:px-12">
        <nav className="flex items-center gap-4 ml-auto text-sm font-medium">
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
    </div>);
}
