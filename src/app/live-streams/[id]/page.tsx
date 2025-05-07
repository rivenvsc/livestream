import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import { PlayCircle, Users, MessageSquare, Share2, ThumbsUp, Settings } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

// Mock data for a single stream - replace with actual data fetching based on params.id
const getStreamDetails = async (id: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  const streams = [
    { id: '1', title: 'Premier League: City vs United', category: 'Football', viewers: '2.5M', image: 'https://picsum.photos/seed/plstream/1200/675', dataAiHint: 'soccer action', description: 'The Manchester derby is always a fiery affair. Watch live as City take on United in this crucial Premier League clash.', channelName: 'SportsCentral', channelAvatar: 'https://picsum.photos/seed/sportscentral/40/40' },
    { id: '2', title: 'Formula 1: Monaco Grand Prix', category: 'Motorsport', viewers: '1.8M', image: 'https://picsum.photos/seed/f1stream/1200/675', dataAiHint: 'race track', description: 'The iconic Monaco Grand Prix, a test of skill and bravery. Who will conquer the streets of Monte Carlo?', channelName: 'F1 TV', channelAvatar: 'https://picsum.photos/seed/f1tv/40/40' },
  ];
  return streams.find(s => s.id === id) || streams[0]; // Fallback to first stream if not found
};


export default async function LiveStreamPage({ params }: { params: { id: string } }) {
  const stream = await getStreamDetails(params?.id);

  if (!stream) {
    return <div className="text-center py-12">Stream not found.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Video Player Section */}
      <div className="lg:col-span-2 space-y-4">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
          {/* Placeholder for video player */}
          <Image src={stream.image} alt={`Video player for ${stream.title}`} layout="fill" objectFit="cover" data-ai-hint={stream.dataAiHint} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <PlayCircle className="h-24 w-24 text-white/70 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">{stream.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
              <span>{stream.category}</span>
              <span className="flex items-center"><Users className="h-4 w-4 mr-1" /> {stream.viewers} viewers</span>
              <span>Stream Quality: <Button variant="link" size="sm" className="p-0 h-auto"><Settings className="h-4 w-4 mr-1" /> Auto (1080p)</Button></span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={stream.channelAvatar} alt={stream.channelName} data-ai-hint="logo avatar" />
                        <AvatarFallback>{stream.channelName.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{stream.channelName}</p>
                        <Button variant="link" size="sm" className="p-0 h-auto text-accent">Subscribe</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline"><ThumbsUp className="h-4 w-4 mr-2" /> Like</Button>
                    <Button variant="outline"><Share2 className="h-4 w-4 mr-2" /> Share</Button>
                </div>
            </div>
            <CardDescription>{stream.description}</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Chat Section */}
      <div className="lg:col-span-1">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center"><MessageSquare className="h-6 w-6 mr-2 text-accent" /> Live Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-3 bg-secondary/30 min-h-[300px] max-h-[calc(100vh-300px)]">
            {/* Mock chat messages */}
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-2 rounded-lg max-w-[80%] ${i % 2 === 0 ? 'bg-background shadow-sm' : 'bg-primary text-primary-foreground shadow-sm'}`}>
                  <p className="text-xs font-semibold mb-0.5">{i % 2 === 0 ? 'UserFan123' : 'StreamLoverX'}</p>
                  <p className="text-sm">This is an awesome stream! {i % 3 === 0 ? 'Great goal! ⚽️' : 'Keep it up! 👍'}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <Separator />
          <CardFooter className="p-4">
            <form className="w-full flex items-center gap-2">
              <Input type="text" placeholder="Say something..." className="flex-grow" />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

// Optional: Generate static paths if you have a known set of stream IDs
// export async function generateStaticParams() {
//   // Fetch all stream IDs
//   // const streams = await fetchAllStreamIds(); 
//   // return streams.map((stream) => ({ id: stream.id.toString() }));
//   return [{ id: '1' }, { id: '2' }]; // Example
// }

export const dynamic = 'force-dynamic'; // Or 'auto' if using generateStaticParams
