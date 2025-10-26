"use client"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Leaf, AlertTriangle, TrendingUp } from "lucide-react"

const chartData = [
  { month: "Jan", farmers: 120, fields: 340, alerts: 45 },
  { month: "Feb", farmers: 145, fields: 380, alerts: 52 },
  { month: "Mar", farmers: 180, fields: 420, alerts: 48 },
  { month: "Apr", farmers: 210, fields: 480, alerts: 61 },
  { month: "May", farmers: 250, fields: 540, alerts: 55 },
  { month: "Jun", farmers: 290, fields: 620, alerts: 67 },
]

const diseaseData = [
  { name: "Fungal", value: 35 },
  { name: "Bacterial", value: 25 },
  { name: "Viral", value: 20 },
  { name: "Pest", value: 15 },
  { name: "Other", value: 5 },
]

const COLORS = ["#72a84a", "#8b6f47", "#d4a574", "#e8c547", "#a8d5ba"]

export default function AdminDashboard() {
  return (
    <LayoutWrapper userRole="admin">
      <div className="p-4 md:p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and analytics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Farmers", value: "2,847", icon: Users, change: "+12%" },
            { label: "Active Fields", value: "8,392", icon: Leaf, change: "+8%" },
            { label: "Alerts Today", value: "156", icon: AlertTriangle, change: "+5%" },
            { label: "Avg Health", value: "82%", icon: TrendingUp, change: "+3%" },
          ].map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.label} className="p-4 border-border">
                <div className="flex items-start justify-between mb-3">
                  <Icon className="text-primary" size={24} />
                  <span className="text-xs font-semibold text-green-600">{metric.change}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              </Card>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Growth Chart */}
          <Card className="lg:col-span-2 p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Platform Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="farmers" stroke="var(--primary)" strokeWidth={2} />
                <Line type="monotone" dataKey="fields" stroke="var(--accent)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Disease Distribution */}
          <Card className="p-6 border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Disease Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={diseaseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {diseaseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Alerts Chart */}
        <Card className="p-6 border-border">
          <h2 className="text-lg font-bold text-foreground mb-4">Daily Alerts Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="alerts" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
