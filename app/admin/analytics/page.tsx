import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Filter } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <LayoutWrapper userRole="admin">
      <div className="p-4 md:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Detailed platform metrics and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter size={16} />
              Filter
            </Button>
            <Button size="sm" className="gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crop Performance */}
          <Card className="p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Crop Performance</h2>
            <div className="space-y-4">
              {[
                { crop: "Soybean", fields: 1240, avgHealth: 85, trend: "+5%" },
                { crop: "Canola", fields: 980, avgHealth: 78, trend: "+2%" },
                { crop: "Sunflower", fields: 1120, avgHealth: 82, trend: "+8%" },
                { crop: "Mustard", fields: 890, avgHealth: 88, trend: "+3%" },
              ].map((crop) => (
                <div key={crop.crop} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">{crop.crop}</p>
                    <p className="text-xs text-muted-foreground">{crop.fields} fields</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{crop.avgHealth}%</p>
                    <p className="text-xs text-green-600">{crop.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Regional Distribution */}
          <Card className="p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Regional Distribution</h2>
            <div className="space-y-4">
              {[
                { region: "North Region", farmers: 620, fields: 1840, coverage: 92 },
                { region: "South Region", farmers: 580, fields: 1720, coverage: 88 },
                { region: "East Region", farmers: 710, fields: 2120, coverage: 95 },
                { region: "West Region", farmers: 540, fields: 1600, coverage: 85 },
              ].map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{region.region}</p>
                    <Badge variant="secondary">{region.coverage}%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${region.coverage}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {region.farmers} farmers • {region.fields} fields
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Advisory Effectiveness */}
          <Card className="p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Advisory Effectiveness</h2>
            <div className="space-y-4">
              {[
                { type: "Disease Prevention", implemented: 1240, successful: 1156, rate: 93 },
                { type: "Irrigation Optimization", implemented: 980, successful: 892, rate: 91 },
                { type: "Pest Management", implemented: 1120, successful: 1008, rate: 90 },
                { type: "Yield Improvement", implemented: 890, successful: 801, rate: 90 },
              ].map((advisory) => (
                <div key={advisory.type} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">{advisory.type}</p>
                    <span className="text-sm font-bold text-primary">{advisory.rate}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {advisory.successful} of {advisory.implemented} successful
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* User Engagement */}
          <Card className="p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">User Engagement</h2>
            <div className="space-y-4">
              {[
                { metric: "Daily Active Users", value: "1,240", change: "+8%" },
                { metric: "Avg Session Duration", value: "18 min", change: "+2 min" },
                { metric: "Feature Adoption", value: "76%", change: "+5%" },
                { metric: "User Retention", value: "84%", change: "+3%" },
              ].map((item) => (
                <div key={item.metric} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">{item.metric}</p>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-green-600">{item.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
