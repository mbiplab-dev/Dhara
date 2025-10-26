import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Info, Lightbulb } from "lucide-react"

export default function AdvisoriesPage() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Advisories</h1>
          <p className="text-muted-foreground">AI-powered recommendations for your crops</p>
        </div>

        <div className="space-y-4">
          {[
            {
              type: "warning",
              icon: AlertCircle,
              title: "Fungal Disease Risk - South Plot",
              description: "High humidity detected. Fungal disease risk is elevated. Consider fungicide application.",
              field: "South Plot (Canola)",
              priority: "High",
              action: "View Treatment Plan",
              details: `Current Conditions:
• Humidity: 85% (High)
• Temperature: 22°C
• Rainfall: 15mm in last 48 hours
• Soil Moisture: 65%

Risk Assessment:
Powdery mildew and Alternaria leaf spot are likely to develop in the next 3-5 days.

Recommended Actions:
1. Apply sulfur dust or Karathane fungicide immediately
2. Improve air circulation by pruning lower leaves
3. Avoid overhead irrigation
4. Monitor daily for disease symptoms
5. Repeat spray after 10-12 days if conditions persist

Expected Outcome:
With timely intervention, disease incidence can be reduced by 70-80%.`,
            },
            {
              type: "success",
              icon: CheckCircle,
              title: "Optimal Growth Conditions - North Plot",
              description: "Temperature and moisture levels are perfect for soybean growth.",
              field: "North Plot (Soybean)",
              priority: "Info",
              action: "View Details",
              details: `Current Conditions:
• Temperature: 28°C (Optimal)
• Soil Moisture: 60% (Ideal)
• Humidity: 65% (Good)
• Sunlight: 8 hours/day

Growth Status:
Your soybean crop is in excellent condition. Current growth rate is 15% above average for this stage.

Recommendations:
1. Continue current irrigation schedule
2. Apply second dose of nitrogen fertilizer
3. Monitor for pest activity
4. Maintain weed-free field
5. Prepare for flowering stage in 2 weeks

Expected Yield:
Based on current conditions, expect 25-28 quintals/hectare.`,
            },
            {
              type: "info",
              icon: Info,
              title: "Irrigation Recommended - East Plot",
              description: "Soil moisture is below optimal level. Irrigation recommended within 2 days.",
              field: "East Plot (Sunflower)",
              priority: "Medium",
              action: "Schedule Irrigation",
              details: `Current Conditions:
• Soil Moisture: 35% (Below optimal)
• Soil Type: Loamy
• Crop Stage: Vegetative growth
• Days Since Last Irrigation: 18 days

Irrigation Schedule:
For sunflower in loamy soil, irrigate when soil moisture drops below 40%.

Recommended Action:
• Schedule irrigation within 2 days
• Apply 50-60 mm of water
• Irrigate in early morning or late evening
• Avoid irrigation during peak heat

Water Management Tips:
1. Use drip irrigation if available (saves 30% water)
2. Mulch around plants to retain moisture
3. Monitor soil moisture regularly
4. Adjust schedule based on rainfall

Next Irrigation: 20-22 days after this irrigation`,
            },
            {
              type: "tip",
              icon: Lightbulb,
              title: "Harvest Timing - West Plot",
              description: "Based on current growth rate, harvest window will open in approximately 3 weeks.",
              field: "West Plot (Mustard)",
              priority: "Info",
              action: "View Timeline",
              details: `Current Status:
• Crop Age: 95 days
• Growth Stage: Flowering to pod formation
• Expected Maturity: 120-125 days

Harvest Timeline:
• Optimal Harvest Window: 18-22 days from now
• Harvest Indicators:
  - Pods turn brown/golden
  - Seeds rattle inside pods
  - Leaves start yellowing
  - Moisture content: 10-12%

Pre-Harvest Preparation:
1. Arrange harvesting equipment
2. Prepare storage facilities
3. Plan labor requirements
4. Check weather forecast
5. Arrange transportation

Harvesting Tips:
1. Harvest in early morning when dew is present
2. Use combine harvester for efficiency
3. Avoid shattering losses
4. Dry seeds to 8-10% moisture before storage
5. Clean and grade seeds for better market price

Expected Yield: 18-22 quintals/hectare`,
            },
          ].map((advisory, idx) => {
            const Icon = advisory.icon
            const bgColor =
              advisory.type === "warning"
                ? "bg-destructive/10"
                : advisory.type === "success"
                  ? "bg-green-500/10"
                  : "bg-primary/10"
            const borderColor =
              advisory.type === "warning"
                ? "border-destructive/30"
                : advisory.type === "success"
                  ? "border-green-500/30"
                  : "border-primary/30"
            const iconColor =
              advisory.type === "warning"
                ? "text-destructive"
                : advisory.type === "success"
                  ? "text-green-500"
                  : "text-primary"

            return (
              <Card key={idx} className={`p-6 border ${borderColor} ${bgColor}`}>
                <div className="flex gap-4">
                  <Icon className={`${iconColor} flex-shrink-0 mt-1`} size={24} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground text-lg">{advisory.title}</h3>
                      <Badge variant={advisory.priority === "High" ? "destructive" : "secondary"}>
                        {advisory.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{advisory.description}</p>

                    <details className="mb-3 cursor-pointer">
                      <summary className="text-sm font-semibold text-primary hover:underline">
                        View Detailed Recommendations
                      </summary>
                      <div className="mt-3 p-3 bg-background/50 rounded-lg border border-border/50">
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{advisory.details}</p>
                      </div>
                    </details>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{advisory.field}</span>
                      <button className="text-sm font-semibold text-primary hover:underline">{advisory.action}</button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </LayoutWrapper>
  )
}
