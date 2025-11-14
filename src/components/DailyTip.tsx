import { Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const dailyTips = [
  "Use reusable water bottles instead of single-use plastic bottles.",
  "Turn off lights when leaving a room to save energy.",
  "Start composting your food waste to reduce landfill contributions.",
  "Choose products with minimal packaging when shopping.",
  "Walk or bike for short trips instead of driving.",
  "Bring reusable bags when shopping to avoid plastic bags.",
  "Reduce meat consumption - try Meatless Mondays!",
  "Unplug electronics when not in use to save energy.",
];

export const DailyTip = () => {
  const today = new Date().getDate();
  const tipIndex = today % dailyTips.length;
  const tip = dailyTips[tipIndex];

  return (
    <Card className="p-6 bg-gradient-to-br from-success to-primary text-white shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Daily Eco-Tip</h3>
          <p className="text-white/95 leading-relaxed">{tip}</p>
        </div>
      </div>
    </Card>
  );
};
