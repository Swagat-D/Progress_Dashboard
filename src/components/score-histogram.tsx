"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { studentData } from "@/lib/data"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function ScoreHistogram() {
  const { theme, resolvedTheme } = useTheme()
  const isDark = theme === 'dark' || resolvedTheme === 'dark'

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

  // Dynamic colors based on theme
  const textColor = isDark ? '#e2e8f0' : '#1e293b'
  const borderColor = isDark ? '#374151' : '#d1d5db'
  const gridColor = isDark ? '#374151' : '#e5e7eb'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="h-[300px] w-full"
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
            top: 20,
            right: 20,
            left: 20,
            bottom: 40,
          }}
          barCategoryGap="20%"
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={gridColor} 
            opacity={0.5}
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="range"
            tick={{ 
              fontSize: 12, 
              fill: textColor,
              fontWeight: 500
            }}
            axisLine={{ 
              stroke: borderColor,
              strokeWidth: 1
            }}
            tickLine={{ 
              stroke: borderColor,
              strokeWidth: 1
            }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ 
              fontSize: 12, 
              fill: textColor,
              fontWeight: 500
            }}
            axisLine={{ 
              stroke: borderColor,
              strokeWidth: 1
            }}
            tickLine={{ 
              stroke: borderColor,
              strokeWidth: 1
            }}
            label={{ 
              value: 'Number of Students', 
              angle: -90, 
              position: 'insideLeft',
              style: { 
                textAnchor: 'middle',
                fill: textColor,
                fontSize: '12px',
                fontWeight: 500
              }
            }}
          />
          <Tooltip
            formatter={(value: number) => [`${value} students`, "Count"]}
            labelFormatter={(label) => `Score Range: ${label}`}
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              borderRadius: '0.5rem',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: textColor,
              fontSize: '12px'
            }}
            cursor={{ fill: isDark ? 'rgba(55, 65, 81, 0.1)' : 'rgba(0, 0, 0, 0.05)' }}
          />
          <Bar 
            dataKey="count" 
            name="Students" 
            radius={[4, 4, 0, 0]} 
            animationDuration={1500}
            maxBarSize={60}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                stroke={isDark ? '#1f2937' : '#ffffff'}
                strokeWidth={1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}