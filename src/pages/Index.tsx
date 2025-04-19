
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, PenLine, Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-versapro-beige">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-versapro-charcoal leading-tight">
              Expert Research Paper Writing at Your Fingertips
            </h1>
            <p className="text-xl md:text-2xl text-versapro-charcoal/80">
              High-quality, original, and tailored academic writing for students and researchers.
            </p>
            <Button 
              className="bg-versapro-red hover:bg-versapro-red/90 text-white text-lg px-8 py-6 rounded-full"
            >
              Get Started
            </Button>
          </div>
          <div className="order-first lg:order-last">
            <img 
              src="/lovable-uploads/305a8272-c4c2-4ea2-b74f-e7009d418f90.png"
              alt="Research Paper Writing Service Illustration"
              className="w-full h-auto max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-versapro-charcoal mb-4">How It Works</h2>
            <p className="text-xl text-versapro-charcoal/70 max-w-2xl mx-auto">
              Our streamlined process makes getting your research paper simple and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-versapro-beige p-4 rounded-full">
                    <Send className="h-8 w-8 text-versapro-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-versapro-charcoal">Submit Your Topic</h3>
                  <p className="text-versapro-charcoal/70">
                    Share your requirements, deadline, and academic level with our team
                  </p>
                  <div className="h-1 w-16 bg-versapro-red rounded-full mt-4"></div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-versapro-beige p-4 rounded-full">
                    <FileText className="h-8 w-8 text-versapro-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-versapro-charcoal">Research & Drafting</h3>
                  <p className="text-versapro-charcoal/70">
                    Our expert writers conduct in-depth research and create your first draft
                  </p>
                  <div className="h-1 w-16 bg-versapro-red rounded-full mt-4"></div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-versapro-beige p-4 rounded-full">
                    <PenLine className="h-8 w-8 text-versapro-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-versapro-charcoal">Revisions</h3>
                  <p className="text-versapro-charcoal/70">
                    Review the draft and request any changes or improvements you'd like
                  </p>
                  <div className="h-1 w-16 bg-versapro-red rounded-full mt-4"></div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-versapro-beige p-4 rounded-full">
                    <CheckCircle className="h-8 w-8 text-versapro-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-versapro-charcoal">Final Delivery</h3>
                  <p className="text-versapro-charcoal/70">
                    Receive your polished, plagiarism-free paper ready for submission
                  </p>
                  <div className="h-1 w-16 bg-versapro-red rounded-full mt-4"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
