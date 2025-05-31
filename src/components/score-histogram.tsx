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
      className="h-[300px] w-full"
    >
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Student Distribution by Total Score</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This chart shows how many students achieved scores in each range (Aptitude + Coding combined)
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            dataKey="range"
            tick={{ fontSize: 12 }}
            label={{ value: "Score Range", position: "insideBottom", offset: -5 }}
          />
          <YAxis tick={{ fontSize: 12 }} label={{ value: "Number of Students", angle: -90, position: "insideLeft" }} />
          <Tooltip
            formatter={(value: number) => [`${value} students`, "Count"]}
            labelFormatter={(label) => `Score Range: ${label}`}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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
