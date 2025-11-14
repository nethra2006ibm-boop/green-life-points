import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

export const PointsDisplay = () => {
  const [points, setPoints] = useState(2450);
  const [level, setLevel] = useState(8);
  const nextLevelPoints = 3000;
  const progress = ((points % 1000) / 1000) * 100;

  return (
    <Card className="p-6 bg-gradient-to-br from-earth to-earth/80 text-earth-foreground hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-lg">Eco Points</h3>
        </div>
        <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">Level {level}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-4xl font-bold">{points.toLocaleString()}</span>
          <span className="text-sm opacity-90">{nextLevelPoints - points} to next level</span>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};
