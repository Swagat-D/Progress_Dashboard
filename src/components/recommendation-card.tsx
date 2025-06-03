"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, BookOpen, Code, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function RecommendationCard() {
  return (
    <motion.div
      whileHover={{ 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:border-purple-200 transition-all duration-300 group">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 group-hover:text-purple-600 transition-colors duration-200">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Lightbulb className="h-5 w-5 text-purple-500" />
            </motion.div>
            Student Recommendations
          </CardTitle>
          <CardDescription>Personalized recommendations based on performance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="low" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger 
                value="low" 
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                Below 150
              </TabsTrigger>
              <TabsTrigger 
                value="medium"
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                Coding = 0
              </TabsTrigger>
              <TabsTrigger 
                value="high"
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                Aptitude &#60;150
              </TabsTrigger>
            </TabsList>

            <TabsContent value="low" className="space-y-4 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Alert className="hover:border-red-200 transition-colors duration-200">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AlertCircle className="h-4 w-4" />
                  </motion.div>
                  <AlertTitle>Students Scoring Below 150</AlertTitle>
                  <AlertDescription>
                    These students require focused attention to build strong academic and problem-solving foundations.
                  </AlertDescription>
                </Alert>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BookOpen className="h-4 w-4" />
                    </motion.div>
                    <h3>Aptitude Improvement</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Schedule weekly practice sessions with focused problem sets</li>
                    <li>• Join the fundamental concepts study group</li>
                    <li>• Attend foundation building sessions weekly.</li>
                    <li>• Join peer study groups for collaborative learning</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.2,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Code className="h-4 w-4" />
                    </motion.div>
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
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Alert className="hover:border-orange-200 transition-colors duration-200">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AlertCircle className="h-4 w-4" />
                  </motion.div>
                  <AlertTitle>Students with Coding Score = 0</AlertTitle>
                  <AlertDescription>
                    These students have not yet started their coding journey and need beginner-level.
                  </AlertDescription>
                </Alert>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BookOpen className="h-4 w-4" />
                    </motion.div>
                    <h3>Getting Started With Coding</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Start with very simple problems in a user-friendly IDE.</li>
                    <li>• Explain real-life analogies for basic coding concepts</li>
                    <li>• Encourage completing short guided coding challenges</li>
                    <li>• Introduce block-based and drag-and-drop platforms</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.2,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Code className="h-4 w-4" />
                    </motion.div>
                    <h3>Confidence Building</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Schedule weekly coding mentorship sessions</li>
                    <li>• Reward small wins to boost confidence and motivation</li>
                    <li>• Watch step-by-step tutorial videos with guided practice</li>
                    <li>• Assign creative tasks like building a calculator or quiz app</li>
                  </ul>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="high" className="space-y-4 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Alert className="hover:border-blue-200 transition-colors duration-200">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AlertCircle className="h-4 w-4" />
                  </motion.div>
                  <AlertTitle>Students with Aptitude Score &#60; 150</AlertTitle>
                  <AlertDescription>
                    These students need to strengthen logical reasoning and quantitative thinking.
                  </AlertDescription>
                </Alert>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BookOpen className="h-4 w-4" />
                    </motion.div>
                    <h3>Quantitative Skills Development</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Focus on daily practice sets for numbers, percentages, and ratios</li>
                    <li>• Provide access to aptitude mobile apps and timed mock tests</li>
                    <li>• Emphasize time management during practice</li>
                    <li>• Revisit school-level concepts for clarity</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.2,
                    hover: { duration: 0.2 }
                  }}
                  className="rounded-lg border bg-card p-4 shadow-sm hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Code className="h-4 w-4" />
                    </motion.div>
                    <h3>Reasoning & Analysis</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Solve brain teasers and pattern-based puzzles</li>
                    <li>• Use gamified learning to make reasoning engaging</li>
                    <li>• Analyze performance in past tests to identify specific weak areas</li>
                    <li>• Conduct regular doubt-clearing sessions</li>
                  </ul>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}