import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Recycle, Zap, Bike, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface Action {
  id: string;
  title: string;
  points: number;
  icon: React.ReactNode;
  completed: boolean;
}

const initialActions: Action[] = [
  { id: "1", title: "Use reusable shopping bags", points: 10, icon: <ShoppingBag className="w-5 h-5" />, completed: false },
  { id: "2", title: "Bike to work or school", points: 25, icon: <Bike className="w-5 h-5" />, completed: false },
  { id: "3", title: "Recycle paper and plastic", points: 15, icon: <Recycle className="w-5 h-5" />, completed: false },
  { id: "4", title: "Turn off unused electronics", points: 20, icon: <Zap className="w-5 h-5" />, completed: false },
];

export const ActionsList = () => {
  const [actions, setActions] = useState<Action[]>(initialActions);

  const toggleAction = (id: string) => {
    setActions(prev => prev.map(action => {
      if (action.id === id) {
        const newCompleted = !action.completed;
        if (newCompleted) {
          toast.success(`+${action.points} points earned!`, {
            description: action.title,
          });
        }
        return { ...action, completed: newCompleted };
      }
      return action;
    }));
  };

  const completedToday = actions.filter(a => a.completed).length;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg text-foreground">Today's Actions</h3>
          <p className="text-sm text-muted-foreground">
            {completedToday} of {actions.length} completed
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Action
        </Button>
      </div>

      <div className="space-y-3">
        {actions.map((action) => (
          <div
            key={action.id}
            className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-secondary/50 transition-colors"
          >
            <Checkbox
              checked={action.completed}
              onCheckedChange={() => toggleAction(action.id)}
              className="data-[state=checked]:bg-success data-[state=checked]:border-success"
            />
            
            <div className="flex items-center gap-3 flex-1">
              <div className={`p-2 rounded-full ${action.completed ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>
                {action.icon}
              </div>
              <span className={`font-medium ${action.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {action.title}
              </span>
            </div>

            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${action.completed ? 'bg-success/10 text-success' : 'bg-earth/10 text-earth'}`}>
              +{action.points}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
