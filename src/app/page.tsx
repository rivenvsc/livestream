import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, CalendarCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredStreams = [
    { id: 1, title: 'Champions League Final', category: 'Football', viewers: '1.2M', image: 'https://picsum.photos/seed/clfinal/600/400', dataAiHint: 'football match' },
    { id: 2, title: 'NBA Playoffs Game 7', category: 'Basketball', viewers: '800K', image: 'https://picsum.photos/seed/nbaplayoffs/600/400', dataAiHint: 'basketball game' },
    { id: 3, title: 'Indie Music Fest Live', category: 'Music', viewers: '150K', image: 'https://picsum.photos/seed/musicfest/600/400', dataAiHint: 'music concert' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'World Cup Qualifier', date: 'Tomorrow - 8:00 PM', sport: 'Football' },
    { id: 2, title: 'Grand Slam Tennis Semi-Final', date: 'Next Friday - 2:00 PM', sport: 'Tennis' },
    { id: 3, title: 'E-Sports Championship Finals', date: 'In 2 Weeks - 6:00 PM', sport: 'E-Sports' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl">
        <Image 
          src="https://picsum.photos/seed/hero/1200/800" 
          alt="Hero background showing a stadium" 
          layout="fill" 
          objectFit="cover" 
          className="brightness-50"
          data-ai-hint="stadium lights"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            Your Universe of Live Entertainment
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
            Catch thrilling sports, captivating concerts, and much more. All live, all in one place.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/live-streams">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Live Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Live Streams */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Featured Live Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStreams.map((stream) => (
            <Card key={stream.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={stream.image} alt={stream.title} layout="fill" objectFit="cover" data-ai-hint={stream.dataAiHint} />
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded">LIVE</div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl">{stream.title}</CardTitle>
                <CardDescription className="mt-1 text-muted-foreground">{stream.category} • {stream.viewers} viewers</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/live-streams/${stream.id}`}>
                    <PlayCircle className="mr-2 h-4 w-4" /> Watch Stream
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
             <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <CalendarCheck className="h-6 w-6 text-accent" /> 
                        {event.title}
                    </CardTitle>
                    <CardDescription>{event.sport}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" asChild>
                        <Link href="/schedule">View Schedule</Link>
                    </Button>
                </CardFooter>
             </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-secondary rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Why StreamVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
              <PlayCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vast Content Library</h3>
              <p className="text-muted-foreground">Access a wide range of live sports, music, and events from around the globe.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
              <CalendarCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
              <p className="text-muted-foreground">Enjoy high-quality streaming on any device, anytime, anywhere.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md">
              <ShieldCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community & Interaction</h3>
              <p className="text-muted-foreground">Engage with fellow fans, share your thoughts, and be part of the action.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
