
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-versapro-beige">
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
    </div>
  );
};

export default Index;
