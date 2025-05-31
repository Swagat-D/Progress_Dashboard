"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"

export function PerformanceChart() {
  // Process data for the chart
  const processData = () => {
    // Group students by registration number ranges
    const groupedData = []
    const groupSize = 5 // Group every 5 students

    for (let i = 0; i < studentData.length; i += groupSize) {
      const group = studentData.slice(i, i + groupSize)
      const avgAptitude = group.reduce((sum, student) => sum + student.aptitude, 0) / group.length
      const avgCoding = group.reduce((sum, student) => sum + student.coding, 0) / group.length
      const avgTotal = avgAptitude + avgCoding

      groupedData.push({
        name: `Group ${Math.floor(i / groupSize) + 1}`,
        aptitude: Math.round(avgAptitude),
        coding: Math.round(avgCoding),
        total: Math.round(avgTotal),
      })
    }

    return groupedData
  }

  const data = processData()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-[300px] w-full"
    >
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend />
          <Bar dataKey="aptitude" name="Aptitude (avg)" fill="#8884d8" radius={[4, 4, 0, 0]} animationDuration={1500} />
          <Bar dataKey="coding" name="Coding (avg)" fill="#82ca9d" radius={[4, 4, 0, 0]} animationDuration={1500} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
