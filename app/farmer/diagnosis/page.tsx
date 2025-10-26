import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Camera, AlertCircle, CheckCircle } from "lucide-react"

export default function DiagnosisPage() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Disease Detection</h1>
          <p className="text-muted-foreground">Upload crop images for AI-powered disease diagnosis</p>
        </div>

        {/* Upload Section */}
        <Card className="p-8 border-2 border-dashed border-primary/30 bg-primary/5">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Upload Crop Image</h3>
              <p className="text-muted-foreground mb-4">Drag and drop or click to select an image</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="gap-2">
                <Upload size={18} />
                Choose File
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Camera size={18} />
                Take Photo
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG (Max 10MB)</p>
          </div>
        </Card>

        {/* Recent Diagnoses */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Recent Diagnoses</h2>

          {[
            {
              id: 1,
              date: "Today at 2:30 PM",
              field: "South Plot (Canola)",
              image: "/canola-leaf.jpg",
              diagnosis: "Fungal Leaf Spot",
              confidence: 92,
              severity: "High",
              status: "critical",
              recommendation: "Apply fungicide immediately. Isolate affected plants.",
            },
            {
              id: 2,
              date: "Yesterday at 10:15 AM",
              field: "North Plot (Soybean)",
              image: "/soybean-leaf.jpg",
              diagnosis: "Healthy Leaf",
              confidence: 98,
              severity: "None",
              status: "healthy",
              recommendation: "Plant is healthy. Continue regular monitoring.",
            },
            {
              id: 3,
              date: "2 days ago at 4:45 PM",
              field: "East Plot (Sunflower)",
              image: "/sunflower-leaf.jpg",
              diagnosis: "Powdery Mildew",
              confidence: 85,
              severity: "Medium",
              status: "warning",
              recommendation: "Apply sulfur-based fungicide. Improve air circulation.",
            },
          ].map((diagnosis) => {
            const statusConfig = {
              critical: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
              warning: { icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-500/10" },
              healthy: { icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10" },
            }
            const config = statusConfig[diagnosis.status as keyof typeof statusConfig]
            const Icon = config.icon

            return (
              <Card key={diagnosis.id} className="p-6 border-border overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={diagnosis.image || "/placeholder.svg"}
                      alt="Crop sample"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-foreground">{diagnosis.diagnosis}</h3>
                          <Icon className={`${config.color}`} size={20} />
                        </div>
                        <p className="text-sm text-muted-foreground">{diagnosis.field}</p>
                        <p className="text-xs text-muted-foreground mt-1">{diagnosis.date}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${config.bg} ${config.color}`}>
                        {diagnosis.confidence}% Confidence
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-foreground font-semibold mb-2">Recommendation:</p>
                      <p className="text-sm text-muted-foreground">{diagnosis.recommendation}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Treatment Plan
                      </Button>
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
