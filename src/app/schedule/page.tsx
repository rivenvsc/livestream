import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Tv, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';

// Mock data - replace with actual data fetching
const scheduleEvents = [
  { id: 1, title: 'Champions League: Group Stage Matchday 1', date: '2024-09-17', time: '19:00 GMT', category: 'Football', channel: 'SportsMax', image: 'https://picsum.photos/seed/clmatch1/400/200', dataAiHint: 'soccer field night' },
  { id: 2, title: 'NBA Season Opener: Lakers vs Celtics', date: '2024-10-22', time: '00:30 GMT', category: 'Basketball', channel: 'HoopsTV', image: 'https://picsum.photos/seed/nbaopener/400/200', dataAiHint: 'basketball court' },
  { id: 3, title: 'Live Concert: The Weeknd After Hours Tour', date: '2024-11-05', time: '20:00 GMT', category: 'Music', channel: 'MusicNow', image: 'https://picsum.photos/seed/weekndconcert/400/200', dataAiHint: 'concert stage lights' },
  { id: 4, title: 'World Chess Championship: Game 5', date: '2024-09-20', time: '14:00 GMT', category: 'Chess', channel: 'ChessTV', image: 'https://picsum.photos/seed/chessgame/400/200', dataAiHint: 'chess board pieces' },
  { id: 5, title: 'UFC Fight Night: Main Event', date: '2024-09-28', time: '02:00 GMT', category: 'MMA', channel: 'FightPass', image: 'https://picsum.photos/seed/ufcfight/400/200', dataAiHint: 'mma octagon cage' },
  { id: 6, title: 'Tech Conference Keynote: Future of AI', date: '2024-10-10', time: '17:00 GMT', category: 'Tech', channel: 'TechStream', image: 'https://picsum.photos/seed/techconf/400/200', dataAiHint: 'conference stage presentation' },
];

// Helper to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Group events by date
const groupEventsByDate = (events: typeof scheduleEvents) => {
  return events.reduce((acc, event) => {
    const date = formatDate(event.date);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {} as Record<string, typeof scheduleEvents>);
};


export default function SchedulePage() {
  const groupedEvents = groupEventsByDate(scheduleEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Event Schedule</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
          <span className="font-medium text-lg">September 2024</span>
          <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="football">Football</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="chess">Chess</SelectItem>
              <SelectItem value="mma">MMA</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {Object.entries(groupedEvents).map(([date, events]) => (
        <section key={date}>
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <CalendarDays className="mr-3 h-6 w-6 text-accent" />
            {date}
          </h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {event.image && (
                  <div className="relative h-40 w-full">
                     <Image
                          src={event.image} 
                          alt={event.title} 
                          layout="fill" 
                          objectFit="cover" 
                          data-ai-hint={event.dataAiHint} 
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{event.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm flex-grow">
                  <p className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" /> {event.time}
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <Tv className="mr-2 h-4 w-4" /> Channel: {event.channel}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" className="w-full">
                    Set Reminder
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {scheduleEvents.length === 0 && (
         <div className="text-center py-12">
            <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-semibold">No Events Scheduled</h2>
            <p className="text-muted-foreground mt-2">Please check back later for upcoming events.</p>
          </div>
      )}
    </div>
  );
}
