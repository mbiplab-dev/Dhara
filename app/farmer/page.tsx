import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Cloud, Droplets, Thermometer, Plus } from "lucide-react"

export default function FarmerDashboard() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Welcome back, Rajesh</h1>
          <p className="text-muted-foreground">Here's your farm overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Fields", value: "3", icon: MapPin, color: "bg-primary/10" },
            { label: "Healthy Plots", value: "2", icon: TrendingUp, color: "bg-green-500/10" },
            { label: "Alerts", value: "1", icon: AlertCircle, color: "bg-destructive/10" },
            { label: "Avg Yield", value: "4.2t", icon: Leaf, color: "bg-accent/10" },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-4 border-border">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </Card>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Fields */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">My Fields</h2>
              <Button size="sm" className="gap-2">
                <Plus size={16} />
                Add Field
              </Button>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "North Plot",
                  crop: "Soybean",
                  area: "2.5 acres",
                  health: "Excellent",
                  healthColor: "bg-green-500",
                },
                {
                  name: "South Plot",
                  crop: "Canola",
                  area: "1.8 acres",
                  health: "Good",
                  healthColor: "bg-yellow-500",
                },
                {
                  name: "East Plot",
                  crop: "Sunflower",
                  area: "3.2 acres",
                  health: "Fair",
                  healthColor: "bg-orange-500",
                },
              ].map((field) => (
                <Card
                  key={field.name}
                  className="p-4 border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{field.name}</h3>
                      <p className="text-sm text-muted-foreground">{field.crop}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>Area: {field.area}</span>
                        <span>Health: {field.health}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${field.healthColor}`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Weather & Conditions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Weather Today</h2>

            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center justify-between mb-4">
                <Cloud size={32} className="text-primary" />
                <span className="text-3xl font-bold text-foreground">28°C</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Partly Cloudy</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Humidity</span>
                  <span className="font-semibold text-foreground">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wind Speed</span>
                  <span className="font-semibold text-foreground">12 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rainfall</span>
                  <span className="font-semibold text-foreground">2.5 mm</span>
                </div>
              </div>
            </Card>

            <h2 className="text-xl font-bold text-foreground pt-4">Soil Conditions</h2>
            <div className="space-y-3">
              {[
                { label: "Moisture", value: "45%", icon: Droplets },
                { label: "Temperature", value: "22°C", icon: Thermometer },
                { label: "pH Level", value: "6.8", icon: TrendingUp },
              ].map((condition) => {
                const Icon = condition.icon
                return (
                  <Card key={condition.label} className="p-3 border-border flex items-center gap-3">
                    <Icon size={20} className="text-primary" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">{condition.label}</p>
                      <p className="font-semibold text-foreground">{condition.value}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

import { MapPin, AlertCircle, Leaf } from "lucide-react"
