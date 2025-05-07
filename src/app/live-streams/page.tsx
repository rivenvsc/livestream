import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Filter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - replace with actual data fetching
const liveStreams = [
  { id: 1, title: 'Premier League: City vs United', category: 'Football', viewers: '2.5M', image: 'https://picsum.photos/seed/plmatch/600/400', dataAiHint: 'soccer stadium' },
  { id: 2, title: 'Formula 1: Monaco Grand Prix', category: 'Motorsport', viewers: '1.8M', image: 'https://picsum.photos/seed/f1monaco/600/400', dataAiHint: 'race car' },
  { id: 3, title: 'Tomorrowland Main Stage', category: 'Music Festival', viewers: '950K', image: 'https://picsum.photos/seed/tomorrowland/600/400', dataAiHint: 'dj concert' },
  { id: 4, title: 'CS:GO Major Finals', category: 'E-Sports', viewers: '600K', image: 'https://picsum.photos/seed/csgomajor/600/400', dataAiHint: 'gaming setup' },
  { id: 5, title: 'Live Cooking Show with Chef Ramsay', category: 'Entertainment', viewers: '300K', image: 'https://picsum.photos/seed/cheframsay/600/400', dataAiHint: 'kitchen food' },
  { id: 6, title: 'National Geographic: Wild Africa', category: 'Documentary', viewers: '220K', image: 'https://picsum.photos/seed/wildafrica/600/400', dataAiHint: 'lion savanna' },
];

export default function LiveStreamsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Live Streams</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter by Category
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Football</DropdownMenuItem>
            <DropdownMenuItem>Motorsport</DropdownMenuItem>
            <DropdownMenuItem>Music Festival</DropdownMenuItem>
            <DropdownMenuItem>E-Sports</DropdownMenuItem>
            <DropdownMenuItem>Entertainment</DropdownMenuItem>
            <DropdownMenuItem>Documentary</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>All Categories</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {liveStreams.map((stream) => (
          <Card key={stream.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image src={stream.image} alt={stream.title} layout="fill" objectFit="cover" data-ai-hint={stream.dataAiHint} />
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded">LIVE</div>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg mb-1">{stream.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{stream.category} • {stream.viewers} viewers</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/live-streams/${stream.id}`}>
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {liveStreams.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold">No Live Streams Available</h2>
          <p className="text-muted-foreground mt-2">Check back later for more live content!</p>
        </div>
      )}
    </div>
  );
}
