"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"

export function ScoreDistributionChart() {
  // Process data for the chart
  const processData = () => {
    // Create score ranges
    const ranges = [
      { min: 0, max: 50 },
      { min: 51, max: 100 },
      { min: 101, max: 150 },
      { min: 151, max: 200 },
      { min: 201, max: 250 },
      { min: 251, max: 300 },
      { min: 301, max: 350 },
    ]

    const distribution = ranges.map((range) => {
      const aptitudeCount = studentData.filter(
        (student) => student.aptitude >= range.min && student.aptitude <= range.max,
      ).length

      const codingCount = studentData.filter(
        (student) => student.coding >= Math.floor(range.min / 6) && student.coding <= Math.floor(range.max / 6),
      ).length

      const totalCount = studentData.filter(
        (student) => student.aptitude + student.coding >= range.min && student.aptitude + student.coding <= range.max,
      ).length

      return {
        name: `${range.min}-${range.max}`,
        aptitude: aptitudeCount,
        coding: codingCount,
        total: totalCount,
      }
    })

    return distribution
  }

  const data = processData()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
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
          <Area
            type="monotone"
            dataKey="total"
            name="Total Score"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
            activeDot={{ r: 8 }}
            animationDuration={1500}
          />
          <Area
            type="monotone"
            dataKey="aptitude"
            name="Aptitude"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
            animationDuration={1500}
          />
          <Area
            type="monotone"
            dataKey="coding"
            name="Coding"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.3}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
