import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, X, Clock, MapPin } from "lucide-react"

export default function AlertsPage() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
            <p className="text-muted-foreground">Stay updated with real-time farm alerts</p>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Bell size={18} />
            Manage Preferences
          </Button>
        </div>

        {/* Alert Filters */}
        <div className="flex flex-wrap gap-2">
          {["All", "Critical", "Warning", "Info", "Resolved"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              size="sm"
              className={filter === "All" ? "" : "bg-transparent"}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Active Alerts */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Active Alerts</h2>

          {[
            {
              id: 1,
              severity: "critical",
              title: "Pest Infestation Detected",
              description: "Armyworm detected in South Plot. Immediate action recommended.",
              field: "South Plot (Canola)",
              time: "2 hours ago",
              actions: ["View Treatment", "Dismiss"],
            },
            {
              id: 2,
              severity: "warning",
              title: "High Temperature Alert",
              description: "Temperature exceeding optimal range for East Plot crop.",
              field: "East Plot (Sunflower)",
              time: "4 hours ago",
              actions: ["View Details", "Dismiss"],
            },
            {
              id: 3,
              severity: "warning",
              title: "Irrigation Needed",
              description: "Soil moisture below 40%. Irrigation recommended within 24 hours.",
              field: "West Plot (Mustard)",
              time: "6 hours ago",
              actions: ["Schedule", "Dismiss"],
            },
          ].map((alert) => {
            const severityConfig = {
              critical: { bg: "bg-destructive/10", border: "border-destructive/30", badge: "destructive" },
              warning: { bg: "bg-orange-500/10", border: "border-orange-500/30", badge: "secondary" },
              info: { bg: "bg-primary/10", border: "border-primary/30", badge: "secondary" },
            }
            const config = severityConfig[alert.severity as keyof typeof severityConfig]

            return (
              <Card key={alert.id} className={`p-6 border ${config.border} ${config.bg}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-3 h-3 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground">{alert.title}</h3>
                        <Badge variant={config.badge as any}>{alert.severity.toUpperCase()}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{alert.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {alert.field}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {alert.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                    <X size={18} />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {alert.actions.map((action) => (
                    <Button
                      key={action}
                      size="sm"
                      variant={action === "Dismiss" ? "outline" : "default"}
                      className={action === "Dismiss" ? "bg-transparent" : ""}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Resolved Alerts */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Resolved Alerts</h2>

          {[
            {
              id: 4,
              title: "Fungal Disease Risk - Resolved",
              description: "Fungicide application completed. Disease risk reduced to normal levels.",
              field: "North Plot (Soybean)",
              resolvedTime: "Yesterday at 3:45 PM",
            },
            {
              id: 5,
              title: "Low Nitrogen Levels - Resolved",
              description: "Fertilizer applied. Nitrogen levels now optimal.",
              field: "West Plot (Mustard)",
              resolvedTime: "2 days ago",
            },
          ].map((alert) => (
            <Card key={alert.id} className="p-6 border-border bg-muted/30 opacity-75">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{alert.title}</h3>
                    <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/30">
                      RESOLVED
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {alert.field}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {alert.resolvedTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
