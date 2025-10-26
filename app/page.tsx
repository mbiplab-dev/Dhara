import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
            <Leaf className="text-primary-foreground" size={32} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">OilSeed Advisory Platform</h1>
          <p className="text-lg text-muted-foreground">
            AI-powered agricultural guidance for smallholder farmers. Get real-time advisories, disease detection, and
            yield forecasting.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/farmer">
            <Button size="lg" className="w-full sm:w-auto">
              Farmer Portal
            </Button>
          </Link>
          <Link href="/admin">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Admin Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          {[
            {
              title: "Field Management",
              desc: "Track your plots and monitor crop health",
            },
            {
              title: "Smart Advisories",
              desc: "AI-powered recommendations for your crops",
            },
            {
              title: "Disease Detection",
              desc: "Identify crop diseases with image analysis",
            },
          ].map((feature) => (
            <div key={feature.title} className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
