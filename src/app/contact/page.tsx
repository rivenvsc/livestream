import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center justify-center">
            <Construction className="w-8 h-8 mr-3 text-accent" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Information on how to contact our support team will be available here. This page is currently under construction. For now, you can reach us at vuasanco@gmail.com.
          </p>
          <div className="mt-8">
            <Construction className="w-24 h-24 text-muted-foreground/50 mx-auto animate-pulse" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
