import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, TrendingDown } from "lucide-react";

export const CarbonTracker = () => {
  const [carbonSaved, setCarbonSaved] = useState(156); // kg CO2 saved this month
  const monthlyGoal = 300;
  const progress = (carbonSaved / monthlyGoal) * 100;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 rounded-full">
            <Cloud className="w-5 h-5 text-accent" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Carbon Footprint</h3>
        </div>
        <div className="flex items-center gap-1 text-success text-sm font-medium">
          <TrendingDown className="w-4 h-4" />
          <span>12% less</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-3xl font-bold text-foreground">{carbonSaved} kg</span>
          <span className="text-sm text-muted-foreground">of {monthlyGoal} kg goal</span>
        </div>
        
        <Progress value={progress} className="h-3" />
        
        <p className="text-sm text-muted-foreground mt-2">
          You've saved the equivalent of planting {Math.round(carbonSaved / 20)} trees this month!
        </p>
      </div>
    </Card>
  );
};
