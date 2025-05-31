"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"

export function DistributionPieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Calculate score ranges
  const calculateDistribution = () => {
    const ranges = [
      { name: "Below 150", value: 0, color: "#f87171" },
      { name: "150-200", value: 0, color: "#fbbf24" },
      { name: "Above 200", value: 0, color: "#34d399" },
    ]

    studentData.forEach((student) => {
      const totalScore = student.aptitude + student.coding
      if (totalScore < 150) {
        ranges[0].value++
      } else if (totalScore <= 200) {
        ranges[1].value++
      } else {
        ranges[2].value++
      }
    })

    return ranges
  }

  const data = calculateDistribution()

  const onPieEnter = (_: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            animationBegin={200}
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={activeIndex === index ? "#6366f1" : "transparent"}
                strokeWidth={activeIndex === index ? 2 : 0}
                className="transition-all duration-200"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value} students`, "Count"]}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend verticalAlign="bottom" height={36} formatter={(value) => <span className="text-sm">{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
