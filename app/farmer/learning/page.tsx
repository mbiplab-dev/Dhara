"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Star, Play, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

interface CourseModule {
  id: string
  title: string
  description: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  lessons: number
  enrolled: number
  rating: number
  completed: boolean
  locked: boolean
  progress: number
  image: string
}

const courses: CourseModule[] = [
  {
    id: "1",
    title: "Oilseed Crop Fundamentals",
    description:
      "Learn the basics of oilseed cultivation including soil preparation, planting techniques, and crop selection.",
    duration: "4 weeks",
    level: "Beginner",
    lessons: 12,
    enrolled: 1240,
    rating: 4.8,
    completed: true,
    locked: false,
    progress: 100,
    image: "/oilseed-crops-field.jpg",
  },
  {
    id: "2",
    title: "Pest & Disease Management",
    description: "Master identification and management of common pests and diseases affecting oilseed crops.",
    duration: "3 weeks",
    level: "Intermediate",
    lessons: 10,
    enrolled: 856,
    rating: 4.6,
    completed: false,
    locked: false,
    progress: 65,
    image: "/pest-disease-management.jpg",
  },
  {
    id: "3",
    title: "Soil Health & Nutrition",
    description: "Understand soil composition, nutrient management, and fertilization strategies for optimal yields.",
    duration: "3 weeks",
    level: "Intermediate",
    lessons: 9,
    enrolled: 723,
    rating: 4.7,
    completed: false,
    locked: false,
    progress: 40,
    image: "/soil-health-nutrition.jpg",
  },
  {
    id: "4",
    title: "Irrigation & Water Management",
    description: "Learn efficient irrigation techniques and water conservation methods for sustainable farming.",
    duration: "2 weeks",
    level: "Beginner",
    lessons: 8,
    enrolled: 945,
    rating: 4.5,
    completed: false,
    locked: false,
    progress: 0,
    image: "/irrigation-water-management.jpg",
  },
  {
    id: "5",
    title: "Harvest & Post-Harvest Techniques",
    description: "Master harvesting methods, storage, and quality preservation for maximum market value.",
    duration: "2 weeks",
    level: "Intermediate",
    lessons: 7,
    enrolled: 612,
    rating: 4.9,
    completed: false,
    locked: false,
    progress: 0,
    image: "/harvest-post-harvest.jpg",
  },
  {
    id: "6",
    title: "Advanced Yield Optimization",
    description: "Explore cutting-edge techniques and data-driven approaches to maximize crop yields.",
    duration: "4 weeks",
    level: "Advanced",
    lessons: 14,
    enrolled: 234,
    rating: 4.9,
    completed: false,
    locked: true,
    progress: 0,
    image: "/advanced-yield-optimization.jpg",
  },
]

export default function LearningPage() {
  return (
    <LayoutWrapper userRole="farmer">
      <div className="p-4 md:p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Learning Center</h1>
              <p className="text-muted-foreground">Expand your farming knowledge with expert-led courses</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Courses Available", value: "6", icon: BookOpen },
            { label: "Total Lessons", value: "60", icon: Play },
            { label: "Completed", value: "1", icon: CheckCircle },
            { label: "In Progress", value: "3", icon: Clock },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-4 border-border">
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All Courses", "Beginner", "Intermediate", "Advanced", "In Progress"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All Courses" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/farmer/learning/${course.id}`}>
              <Card className="border-border overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer h-full">
                {/* Course Image */}
                <div className="relative h-40 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {course.locked && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Lock size={32} className="text-white" />
                    </div>
                  )}
                  {course.completed && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle size={14} />
                      Completed
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-4 space-y-3">
                  {/* Title & Level */}
                  <div>
                    <h3 className="font-bold text-foreground line-clamp-2">{course.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          course.level === "Beginner"
                            ? "bg-green-500/10 text-green-700 dark:text-green-400"
                            : course.level === "Intermediate"
                              ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                              : "bg-red-500/10 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>

                  {/* Course Meta */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play size={14} />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{course.enrolled.toLocaleString()} enrolled</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-accent text-accent" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {course.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-foreground">{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button
                    className="w-full mt-4"
                    variant={course.locked ? "outline" : course.completed ? "outline" : "default"}
                    disabled={course.locked}
                  >
                    {course.locked ? (
                      <>
                        <Lock size={16} />
                        Locked
                      </>
                    ) : course.completed ? (
                      <>
                        <CheckCircle size={16} />
                        Review Course
                      </>
                    ) : course.progress > 0 ? (
                      <>
                        <Play size={16} />
                        Continue Learning
                      </>
                    ) : (
                      <>
                        <Play size={16} />
                        Start Course
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
