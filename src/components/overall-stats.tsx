"use client"

import { Card, CardContent } from "@/components/ui/card"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"
import { Award, BookOpen, Code, Users } from "lucide-react"

export function OverallStats() {
  // Calculate statistics
  const totalStudents = studentData.length

  const avgAptitude = Math.round(studentData.reduce((sum, student) => sum + student.aptitude, 0) / totalStudents)

  const avgCoding = Math.round(studentData.reduce((sum, student) => sum + student.coding, 0) / totalStudents)

  const highScorers = studentData.filter((student) => student.aptitude + student.coding > 200).length

  const highScorerPercentage = Math.round((highScorers / totalStudents) * 100)

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: Users,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      hoverColor: "hover:bg-purple-200 dark:hover:bg-purple-800/40",
    },
    {
      title: "Avg. Aptitude Score",
      value: avgAptitude,
      suffix: "/300",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      hoverColor: "hover:bg-blue-200 dark:hover:bg-blue-800/40",
    },
    {
      title: "Avg. Coding Score",
      value: avgCoding,
      suffix: "/50",
      icon: Code,
      color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      hoverColor: "hover:bg-green-200 dark:hover:bg-green-800/40",
    },
    {
      title: "High Performers",
      value: highScorerPercentage,
      suffix: "%",
      icon: Award,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
      hoverColor: "hover:bg-amber-200 dark:hover:bg-amber-800/40",
    },
  ]

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.1,
            hover: { duration: 0.2 }
          }}
        >
          <Card className="hover:border-purple-200 transition-all duration-300 cursor-pointer group">
            <CardContent className="flex flex-row items-center justify-between p-4 sm:p-6">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate group-hover:text-gray-700 transition-colors duration-200">
                  {stat.title}
                </p>
                <div className="flex items-baseline">
                  <motion.h2 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-purple-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-sm sm:text-base lg:text-lg">{stat.suffix}</span>
                    )}
                  </motion.h2>
                </div>
              </div>
              <motion.div 
                className={`rounded-full p-1.5 sm:p-2 ${stat.color} ${stat.hoverColor} transition-all duration-300`}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 10
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}