import { Leaf } from "lucide-react";
import { DailyTip } from "@/components/DailyTip";
import { CarbonTracker } from "@/components/CarbonTracker";
import { PointsDisplay } from "@/components/PointsDisplay";
import { ActionsList } from "@/components/ActionsList";
import heroImage from "@/assets/eco-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Eco-friendly nature" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40 flex flex-col items-center justify-center text-white">
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="w-8 h-8" />
            <h1 className="text-4xl font-bold">EcoLife</h1>
          </div>
          <p className="text-lg text-white/90">Live Sustainably, Track Your Impact</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <DailyTip />
          </div>
          <PointsDisplay />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CarbonTracker />
          </div>
          <div className="lg:col-span-2">
            <ActionsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
