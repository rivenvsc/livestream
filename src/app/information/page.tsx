import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Info, HelpCircle, ShieldQuestion, FileText, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    question: "What is StreamVerse?",
    answer: "StreamVerse is a premier live streaming platform offering a wide variety of content, including sports, music concerts, e-sports, and much more. Our goal is to bring you the best live entertainment from around the world.",
  },
  {
    question: "How can I watch streams on StreamVerse?",
    answer: "You can watch streams on our website using any modern web browser. We also have dedicated apps for iOS and Android devices for an optimal viewing experience on the go.",
  },
  {
    question: "Is StreamVerse free?",
    answer: "StreamVerse offers a mix of free and premium content. Some streams may require a subscription or a one-time pass. Details will be provided on each event page.",
  },
  {
    question: "What devices are supported?",
    answer: "StreamVerse is accessible on desktops, laptops, tablets, and smartphones (iOS and Android). We are continuously working to expand our device compatibility.",
  },
  {
    question: "How do I manage my subscription?",
    answer: "You can manage your subscription by logging into your account and navigating to the 'Subscription' or 'Billing' section in your profile settings.",
  },
];

export default function InformationPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <Info className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold">About StreamVerse</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your ultimate destination for live sports, music, and entertainment. Discover, watch, and engage with content that excites you.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            At StreamVerse, our mission is to connect audiences with high-quality live content from around the globe. We strive to provide a seamless and engaging streaming experience, fostering a community of passionate fans and creators.
          </p>
          <p className="text-muted-foreground">
            Whether it&apos;s the roar of the crowd at a championship game, the energy of a live concert, or the strategic brilliance of an e-sports final, StreamVerse brings the action directly to you.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="https://picsum.photos/seed/infopage/800/600" 
            alt="Diverse group of people watching a screen" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="people watching tv"
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Key Information & Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Terms of Service</CardTitle>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">Read our terms and conditions.</p>
                    <Link href="/terms" className="text-accent hover:underline text-sm font-medium">View Terms</Link>
                </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Privacy Policy</CardTitle>
                    <ShieldQuestion className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">How we handle your data.</p>
                    <Link href="/policies" className="text-accent hover:underline text-sm font-medium">View Policy</Link>
                </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Contact Us</CardTitle>
                    <Users className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">Get in touch with our support team.</p>
                    <Link href="/contact" className="text-accent hover:underline text-sm font-medium">Contact Support</Link>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          <HelpCircle className="inline-block h-8 w-8 mr-2 text-accent align-bottom" />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left hover:text-accent text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
