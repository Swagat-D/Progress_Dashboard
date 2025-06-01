"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"

export function ScoreHistogram() {
  // Process data for the histogram - this shows how many students fall into each score range
  const processData = () => {
    // Define clear score ranges for better understanding
    const scoreRanges = [
      { range: "0-50", min: 0, max: 50, count: 0, color: "#ef4444" },
      { range: "51-100", min: 51, max: 100, count: 0, color: "#f97316" },
      { range: "101-150", min: 101, max: 150, count: 0, color: "#eab308" },
      { range: "151-200", min: 151, max: 200, count: 0, color: "#22c55e" },
      { range: "201-250", min: 201, max: 250, count: 0, color: "#3b82f6" },
      { range: "251-300", min: 251, max: 300, count: 0, color: "#8b5cf6" },
      { range: "301-350", min: 301, max: 350, count: 0, color: "#06b6d4" },
    ]

    // Count students in each range
    studentData.forEach((student) => {
      const totalScore = student.aptitude + student.coding

      scoreRanges.forEach((range) => {
        if (totalScore >= range.min && totalScore <= range.max) {
          range.count++
        }
      })
    })

    return scoreRanges
  }

  const data = processData()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="h-[280px] w-full"
    >
      <div className="mb-4 text-center">
        <h3 className="text-base font-semibold text-foreground">Student Distribution by Total Score</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Number of students in each score range (Aptitude + Coding combined)
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            dataKey="range"
            tick={{ fontSize: 11, fill: "hsl(var(--foreground))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(var(--foreground))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
          />
          <Tooltip
            formatter={(value: number) => [`${value} students`, "Count"]}
            labelFormatter={(label) => `Score Range: ${label}`}
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderRadius: "0.5rem",
              border: "1px solid hsl(var(--border))",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              color: "hsl(var(--foreground))",
            }}
          />
          <Bar dataKey="count" name="Students" radius={[4, 4, 0, 0]} animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
