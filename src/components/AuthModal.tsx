"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Chrome, Facebook } from 'lucide-react'; // Chrome for Google icon as 'Google' icon is not in lucide

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Sign In / Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative hidden h-full min-h-[400px] md:flex items-center justify-center bg-primary/10 p-8 rounded-l-lg overflow-hidden">
            <Image 
              src="https://picsum.photos/400/600?grayscale" 
              alt="Promotional image for StreamVerse" 
              width={400} 
              height={600} 
              className="object-cover rounded-md shadow-lg"
              data-ai-hint="abstract stream"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground z-10">
                <h2 className="text-3xl font-bold">Welcome to StreamVerse</h2>
                <p className="mt-2 text-sm text-primary-foreground/80">Your universe of live entertainment. Sign in to unlock exclusive content and features.</p>
            </div>
          </div>
          <div className="p-8">
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <DialogHeader className="mb-4">
                  <DialogTitle>Sign In</DialogTitle>
                  <DialogDescription>
                    Access your StreamVerse account.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="signin-email">Email or Phone</Label>
                    <Input id="signin-email" type="text" placeholder="your@email.com or phone" />
                  </div>
                  <div>
                    <Label htmlFor="signin-password">Password</Label>
                    <Input id="signin-password" type="password" placeholder="••••••••" />
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
                <Separator className="my-6" />
                <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Facebook className="mr-2 h-4 w-4" /> Sign in with Facebook
                    </Button>
                </div>
              </TabsContent>
              <TabsContent value="signup">
                <DialogHeader className="mb-4">
                  <DialogTitle>Sign Up</DialogTitle>
                  <DialogDescription>
                    Create a new StreamVerse account.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="signup-email">Email or Phone</Label>
                    <Input id="signup-email" type="text" placeholder="your@email.com or phone" />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input id="signup-confirm-password" type="password" placeholder="••••••••" />
                  </div>
                  <Button type="submit" className="w-full">Sign Up</Button>
                </form>
                <Separator className="my-6" />
                 <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" /> Sign up with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Facebook className="mr-2 h-4 w-4" /> Sign up with Facebook
                    </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
