"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, BookOpen, Code, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function RecommendationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-purple-500" />
          Student Recommendations
        </CardTitle>
        <CardDescription>Personalized recommendations based on performance analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="low" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="low">Below 150</TabsTrigger>
            <TabsTrigger value="medium">150-200</TabsTrigger>
            <TabsTrigger value="high">Above 200</TabsTrigger>
          </TabsList>

          <TabsContent value="low" className="space-y-4 pt-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Focus Areas for Students Scoring Below 150</AlertTitle>
                <AlertDescription>
                  These students need fundamental skill development and additional support.
                </AlertDescription>
              </Alert>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <BookOpen className="h-4 w-4" />
                  <h3>Aptitude Improvement</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Schedule weekly practice sessions with focused problem sets</li>
                  <li>• Join the fundamental concepts study group</li>
                  <li>• Complete the remedial exercises in the learning portal</li>
                  <li>• Attend the special weekend workshops</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <Code className="h-4 w-4" />
                  <h3>Coding Skills Development</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Start with the beginner coding challenges</li>
                  <li>• Focus on syntax and basic algorithms</li>
                  <li>• Pair with a mentor for weekly code reviews</li>
                  <li>• Complete the &quot;Coding Fundamentals&quot; online course</li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="medium" className="space-y-4 pt-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Focus Areas for Students Scoring 150-200</AlertTitle>
                <AlertDescription>
                  These students have a good foundation but need to refine their skills.
                </AlertDescription>
              </Alert>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <BookOpen className="h-4 w-4" />
                  <h3>Aptitude Enhancement</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Focus on advanced problem-solving techniques</li>
                  <li>• Join the intermediate study groups</li>
                  <li>• Practice with timed mock tests</li>
                  <li>• Review and analyze previous mistakes</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <Code className="h-4 w-4" />
                  <h3>Coding Optimization</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Work on code optimization and efficiency</li>
                  <li>• Participate in weekly coding challenges</li>
                  <li>• Learn advanced data structures</li>
                  <li>• Start contributing to group projects</li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="high" className="space-y-4 pt-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Focus Areas for Students Scoring Above 200</AlertTitle>
                <AlertDescription>
                  These high-performing students should focus on mastery and leadership.
                </AlertDescription>
              </Alert>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <BookOpen className="h-4 w-4" />
                  <h3>Advanced Specialization</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Choose a specialization area for deep focus</li>
                  <li>• Participate in research opportunities</li>
                  <li>• Mentor other students in study groups</li>
                  <li>• Prepare for advanced certifications</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-purple-600">
                  <Code className="h-4 w-4" />
                  <h3>Project Leadership</h3>
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Lead team projects and coding initiatives</li>
                  <li>• Participate in hackathons and competitions</li>
                  <li>• Explore internship opportunities</li>
                  <li>• Develop a portfolio of advanced projects</li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
