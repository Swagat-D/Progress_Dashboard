"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function DistributionPieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const { theme, resolvedTheme } = useTheme()
const isDark = theme === 'dark' || resolvedTheme === 'dark'

const textColor = isDark ? '#e2e8f0' : '#1e293b'
const borderColor = isDark ? '#374151' : '#d1d5db'

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

  const onPieEnter = (_: unknown, index: number) => {
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
      className="h-[250px] sm:h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
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
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              borderRadius: "0.5rem",
              border: `1px solid ${borderColor}`,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              color: textColor,
              fontSize: "12px",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => <span className="text-xs sm:text-sm" style={{color: textColor}}>{value}</span>}
            wrapperStyle={{ fontSize: "12px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
