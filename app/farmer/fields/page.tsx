import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Calendar, Leaf } from "lucide-react"

export default function FieldsPage() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Fields</h1>
            <p className="text-muted-foreground">Manage and monitor all your plots</p>
          </div>
          <Button className="gap-2">
            <Plus size={18} />
            New Field
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "North Plot",
              crop: "Soybean",
              area: "2.5 acres",
              plantedDate: "Mar 15, 2024",
              expectedHarvest: "Sep 20, 2024",
              health: "Excellent",
              healthScore: 92,
            },
            {
              id: 2,
              name: "South Plot",
              crop: "Canola",
              area: "1.8 acres",
              plantedDate: "Apr 2, 2024",
              expectedHarvest: "Oct 5, 2024",
              health: "Good",
              healthScore: 78,
            },
            {
              id: 3,
              name: "East Plot",
              crop: "Sunflower",
              area: "3.2 acres",
              plantedDate: "Mar 28, 2024",
              expectedHarvest: "Sep 15, 2024",
              health: "Fair",
              healthScore: 65,
            },
            {
              id: 4,
              name: "West Plot",
              crop: "Mustard",
              area: "2.1 acres",
              plantedDate: "May 1, 2024",
              expectedHarvest: "Oct 20, 2024",
              health: "Excellent",
              healthScore: 88,
            },
          ].map((field) => (
            <Card key={field.id} className="p-6 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{field.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Leaf size={14} />
                    {field.crop}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit2 size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Area</span>
                  <span className="font-semibold text-foreground">{field.area}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} />
                    Planted
                  </span>
                  <span className="font-semibold text-foreground">{field.plantedDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expected Harvest</span>
                  <span className="font-semibold text-foreground">{field.expectedHarvest}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">Health Score</span>
                  <span className="text-sm font-bold text-primary">{field.healthScore}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${field.healthScore}%` }}
                  />
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
