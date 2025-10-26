"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: string
  title: string
  duration: string
  description: string
  content: string
  completed: boolean
}

const courseContent: Record<string, { title: string; lessons: Lesson[] }> = {
  "1": {
    title: "Oilseed Crop Fundamentals",
    lessons: [
      {
        id: "1-1",
        title: "Introduction to Oilseed Crops",
        duration: "12 min read",
        description: "Learn about different types of oilseed crops and their importance in agriculture.",
        content: `Oilseed crops are plants cultivated primarily for their oil content. The main oilseed crops include:

• Canola (Rapeseed): High in oil content, used for cooking oil and biodiesel
• Soybean: Versatile crop with high protein and oil content
• Sunflower: Produces high-quality oil and seeds
• Mustard: Traditional oilseed with multiple uses
• Groundnut (Peanut): Legume crop with high oil content

These crops are essential for global food security and provide valuable oils for cooking, industrial uses, and biofuel production. Understanding the characteristics of each crop is crucial for successful cultivation.`,
        completed: true,
      },
      {
        id: "1-2",
        title: "Soil Preparation & Selection",
        duration: "15 min read",
        description: "Master the fundamentals of soil preparation for optimal oilseed cultivation.",
        content: `Proper soil preparation is the foundation of successful oilseed farming:

SOIL REQUIREMENTS:
• pH Level: Most oilseeds prefer slightly acidic to neutral soil (pH 6.0-7.5)
• Texture: Well-draining loamy soil is ideal
• Organic Matter: Incorporate 2-3 tons of compost per hectare
• Drainage: Ensure proper drainage to prevent waterlogging

PREPARATION STEPS:
1. Deep plowing (25-30 cm) to break hardpan
2. Remove weeds and crop residues
3. Add organic matter and mix thoroughly
4. Create raised beds for better drainage
5. Level the field for uniform water distribution

SOIL TESTING:
Get your soil tested for:
- Nitrogen, Phosphorus, Potassium (NPK) levels
- Micronutrients (Zinc, Boron, Sulfur)
- Organic carbon content
- pH and electrical conductivity`,
        completed: true,
      },
      {
        id: "1-3",
        title: "Seed Selection & Sowing",
        duration: "18 min read",
        description: "Choose quality seeds and learn proper sowing techniques.",
        content: `SEED SELECTION:
• Use certified seeds from authorized dealers
• Check germination rate (should be >85%)
• Verify seed purity and health certificates
• Store seeds in cool, dry conditions (15-20°C, 40-50% humidity)

SOWING GUIDELINES:
Canola:
- Seed rate: 4-5 kg/hectare
- Spacing: 22.5 cm between rows
- Depth: 1.5-2 cm
- Season: October-November

Soybean:
- Seed rate: 75-100 kg/hectare
- Spacing: 30-45 cm between rows
- Depth: 3-4 cm
- Season: June-July

Sunflower:
- Seed rate: 8-10 kg/hectare
- Spacing: 60 cm between rows, 30 cm between plants
- Depth: 2-3 cm
- Season: February-March

SOWING METHODS:
1. Line sowing: Most common, ensures uniform spacing
2. Broadcast sowing: For small areas
3. Dibbling: For large seeds like groundnut`,
        completed: false,
      },
      {
        id: "1-4",
        title: "Crop Management Basics",
        duration: "20 min read",
        description: "Essential practices for healthy crop growth and development.",
        content: `WEED MANAGEMENT:
• Pre-emergence herbicides: Apply before sowing
• Post-emergence herbicides: Apply 30-45 days after sowing
• Manual weeding: 2-3 times during growing season
• Mulching: Helps suppress weeds and retain moisture

THINNING & SPACING:
• Thin seedlings 3-4 weeks after germination
• Maintain recommended plant population
• Remove weak and diseased plants
• Ensure proper air circulation

NUTRIENT MANAGEMENT:
Nitrogen: 60-80 kg/hectare (split into 2-3 doses)
Phosphorus: 40-60 kg/hectare (basal application)
Potassium: 40-50 kg/hectare (basal application)
Micronutrients: Zinc (5 kg/ha), Boron (1-2 kg/ha)

IRRIGATION SCHEDULE:
• First irrigation: 30-40 days after sowing
• Subsequent irrigations: Every 20-25 days
• Total water requirement: 400-600 mm
• Avoid waterlogging during flowering`,
        completed: false,
      },
    ],
  },
  "2": {
    title: "Pest & Disease Management",
    lessons: [
      {
        id: "2-1",
        title: "Common Pests in Oilseed Crops",
        duration: "16 min read",
        description: "Identify and manage major pests affecting oilseed production.",
        content: `MAJOR PESTS:

APHIDS:
- Appearance: Small, soft-bodied insects (2-3 mm)
- Damage: Suck plant sap, transmit viruses
- Affected crops: Canola, mustard
- Management: Spray neem oil or insecticides at 10-15 day intervals

STEM BORERS:
- Appearance: Caterpillars that bore into stems
- Damage: Wilting, lodging, reduced yield
- Affected crops: Sunflower, soybean
- Management: Remove affected plants, use pheromone traps

LEAF BEETLES:
- Appearance: Metallic colored beetles (5-8 mm)
- Damage: Skeletonize leaves, reduce photosynthesis
- Affected crops: Canola, mustard
- Management: Early sowing, insecticide spray

WHITEFLIES:
- Appearance: Tiny white insects on leaf undersides
- Damage: Sap sucking, virus transmission
- Affected crops: Soybean, groundnut
- Management: Yellow sticky traps, neem spray

INTEGRATED PEST MANAGEMENT (IPM):
1. Monitor fields regularly (weekly scouting)
2. Use resistant varieties
3. Maintain field hygiene
4. Encourage natural predators
5. Use pesticides only when threshold is reached`,
        completed: false,
      },
      {
        id: "2-2",
        title: "Disease Identification & Control",
        duration: "18 min read",
        description: "Recognize and treat common oilseed crop diseases.",
        content: `FUNGAL DISEASES:

POWDERY MILDEW:
- Symptoms: White powder on leaves
- Conditions: Warm, dry weather with high humidity
- Control: Sulfur dust, fungicide spray (Karathane)
- Prevention: Improve air circulation, avoid overhead irrigation

ALTERNARIA LEAF SPOT:
- Symptoms: Brown spots with concentric rings
- Conditions: High humidity, warm temperatures
- Control: Mancozeb or Chlorothalonil spray
- Prevention: Remove infected leaves, crop rotation

SCLEROTINIA (White Rot):
- Symptoms: White mycelium on stems, black sclerotia
- Conditions: Cool, wet weather
- Control: Carbendazim spray, remove infected plants
- Prevention: Improve drainage, avoid dense planting

BACTERIAL DISEASES:

BACTERIAL LEAF SPOT:
- Symptoms: Water-soaked lesions with yellow halo
- Control: Copper fungicides, remove infected plants
- Prevention: Use disease-free seeds, crop rotation

VIRAL DISEASES:

MOSAIC VIRUS:
- Symptoms: Mottled leaves, stunted growth
- Control: Remove infected plants, control aphids
- Prevention: Use resistant varieties, control vectors

DISEASE MANAGEMENT STRATEGY:
1. Use certified disease-free seeds
2. Practice crop rotation (3-year cycle)
3. Remove crop residues
4. Scout fields regularly
5. Apply fungicides preventively during high-risk periods
6. Maintain proper spacing for air circulation`,
        completed: false,
      },
    ],
  },
  "3": {
    title: "Soil Health & Nutrition",
    lessons: [
      {
        id: "3-1",
        title: "Understanding Soil Composition",
        duration: "14 min read",
        description: "Learn about soil structure and its importance for crop growth.",
        content: `SOIL COMPOSITION:

MINERAL PARTICLES:
• Sand (0.05-2 mm): Provides drainage
• Silt (0.002-0.05 mm): Holds water and nutrients
• Clay (<0.002 mm): Provides structure and nutrient retention

IDEAL SOIL TEXTURE:
- Loam: 40% sand, 40% silt, 20% clay
- Provides good drainage and water retention
- Excellent for most oilseed crops

ORGANIC MATTER:
• Comprises 2-10% of soil
• Improves water retention
• Enhances nutrient availability
• Promotes beneficial microorganisms
• Target: 3-5% organic matter

SOIL STRUCTURE:
• Aggregation of soil particles
• Affects water infiltration and root penetration
• Improved by organic matter and proper management

SOIL pH:
• Affects nutrient availability
• Most oilseeds prefer pH 6.0-7.5
• Acidic soils: Add lime
• Alkaline soils: Add sulfur

SOIL TESTING:
Get soil tested every 2-3 years for:
- NPK levels
- Micronutrients
- Organic carbon
- pH and EC
- Texture analysis`,
        completed: false,
      },
      {
        id: "3-2",
        title: "Nutrient Management & Fertilization",
        duration: "20 min read",
        description: "Optimize nutrient application for maximum yields.",
        content: `MACRONUTRIENTS:

NITROGEN (N):
- Role: Promotes vegetative growth, leaf development
- Deficiency: Yellowing of older leaves, stunted growth
- Application: 60-80 kg/ha (split into 2-3 doses)
- Timing: 1/3 at sowing, 1/3 at 30 days, 1/3 at 60 days

PHOSPHORUS (P):
- Role: Root development, energy transfer, flowering
- Deficiency: Purple discoloration, poor root growth
- Application: 40-60 kg/ha (basal application)
- Timing: Apply before sowing

POTASSIUM (K):
- Role: Disease resistance, water regulation, yield quality
- Deficiency: Marginal leaf burn, weak stems
- Application: 40-50 kg/ha (basal application)
- Timing: Apply before sowing

MICRONUTRIENTS:

ZINC (Zn):
- Deficiency: Interveinal chlorosis, stunted growth
- Application: 5 kg/ha or 0.5% foliar spray
- Timing: 30-45 days after sowing

BORON (B):
- Deficiency: Flower abortion, poor pod set
- Application: 1-2 kg/ha
- Timing: At flowering stage

SULFUR (S):
- Deficiency: Uniform chlorosis, poor growth
- Application: 20-30 kg/ha
- Timing: Basal application

FERTILIZER APPLICATION METHODS:
1. Basal application: Before sowing
2. Top dressing: During growing season
3. Foliar spray: For micronutrients
4. Fertigation: Through irrigation system

ORGANIC FARMING:
- Use compost: 5-10 tons/hectare
- Vermicompost: 2-3 tons/hectare
- Biofertilizers: Azospirillum, Phosphobacteria
- Green manuring: Legume crops`,
        completed: false,
      },
    ],
  },
}

export default function CourseLessonPage({ params }: { params: { courseId: string } }) {
  const course = courseContent[params.courseId]
  const firstLesson = course?.lessons[0]

  if (!course) {
    return (
      <LayoutWrapper userRole="farmer">
        <div className="p-4 md:p-8">
          <p className="text-muted-foreground">Course not found</p>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/farmer/learning">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
            <p className="text-muted-foreground">{course.lessons.length} lessons</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-start gap-4">
                <BookOpen size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{firstLesson?.title}</h2>
                  <p className="text-muted-foreground mt-2">{firstLesson?.description}</p>
                </div>
              </div>
            </Card>

            {/* Lesson Info */}
            <Card className="p-6 border-border space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {firstLesson?.duration}
                  </div>
                </div>
                {firstLesson?.completed && (
                  <Badge className="bg-green-500">
                    <CheckCircle size={14} className="mr-1" />
                    Completed
                  </Badge>
                )}
              </div>
            </Card>

            <Card className="p-6 border-border space-y-4">
              <h3 className="text-xl font-bold text-foreground">Lesson Content</h3>
              <div className="space-y-4">
                {firstLesson?.content.split("\n").map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1">
                <CheckCircle size={16} className="mr-2" />
                Mark as Complete
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Next Lesson
              </Button>
            </div>
          </div>

          {/* Sidebar - Lessons List */}
          <div className="space-y-4">
            <Card className="p-4 border-border">
              <h3 className="font-bold text-foreground mb-4">Course Lessons</h3>
              <div className="space-y-2">
                {course.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      {lesson.completed ? (
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <BookOpen size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground line-clamp-2">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{lesson.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Progress */}
            <Card className="p-4 border-border space-y-3">
              <h3 className="font-bold text-foreground">Course Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-semibold text-foreground">1 of {course.lessons.length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(1 / course.lessons.length) * 100}%` }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
