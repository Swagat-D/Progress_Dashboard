"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download, Users, BookOpen, Code, Brain, ExternalLink } from "lucide-react"
import { DistributionPieChart } from "@/components/distribution-pie-chart"
import { StudentTable } from "@/components/student-table"
import { RecommendationCard } from "@/components/recommendation-card"
import { OverallStats } from "@/components/overall-stats"
import { motion } from "framer-motion"
import { ScoreHistogram } from "@/components/score-histogram"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-950 dark:to-purple-950">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
            <h1 className="text-lg sm:text-xl font-bold truncate">Student Progress Dashboard</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/your-spreadsheet-id", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open Spreadsheet
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="sm:hidden"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/your-spreadsheet-id", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container flex-1 py-4 sm:py-6 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:gap-6"
        >
          <OverallStats />

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                    Score Distribution
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Distribution of students across score ranges
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <DistributionPieChart />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                    Score Distribution Analysis
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Clear visualization of how students are distributed across different score ranges
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ScoreHistogram />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    GeeksforGeeks LMS Progress
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Track student progress on GeeksforGeeks learning platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    <p>Monitor student engagement and completion rates on:</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xs">
                      <li>Practice problems solved</li>
                      <li>Course completion percentage</li>
                      <li>Contest participation</li>
                      <li>Skill assessments</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Button
                      className="w-full text-xs sm:text-sm"
                      size="sm"
                      onClick={() =>
                        window.open("https://docs.google.com/spreadsheets/d/your-gfg-spreadsheet-id", "_blank")
                      }
                    >
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View GFG Progress Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                    Assessment Data
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Complete student assessment records and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    <p>Access comprehensive data including:</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xs">
                      <li>Individual student scores</li>
                      <li>Performance trends</li>
                      <li>Detailed analytics</li>
                      <li>Exportable reports</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full text-xs sm:text-sm"
                      size="sm"
                      onClick={() =>
                        window.open("https://docs.google.com/spreadsheets/d/your-assessment-spreadsheet-id", "_blank")
                      }
                    >
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Assessment Spreadsheet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full max-w-xs sm:max-w-md grid-cols-2 h-9 sm:h-10">
              <TabsTrigger value="table" className="text-xs sm:text-sm">
                Student Data
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="text-xs sm:text-sm">
                Recommendations
              </TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="mt-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg">Student Performance Data</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Detailed view of all student scores and performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <StudentTable />
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between pt-4">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Export Data
                  </Button>
                  <Button
                    size="sm"
                    className="w-full sm:w-auto text-xs sm:text-sm"
                    onClick={() => window.open("https://docs.google.com/spreadsheets/d/your-spreadsheet-id", "_blank")}
                  >
                    View Full Spreadsheet
                    <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-4">
              <RecommendationCard />
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <footer className="border-t py-3 sm:py-4">
        <div className="container flex flex-col items-center justify-between gap-2 sm:gap-4 md:flex-row px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Student Progress Dashboard. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  )
}
