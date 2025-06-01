"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { studentData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function StudentTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"reg" | "aptitude" | "coding" | "total">("total")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10

  // Filter and sort data
  const filteredData = studentData
    .filter(
      (student) =>
        student.reg.toString().includes(searchTerm) ||
        (student.aptitude + student.coding).toString().includes(searchTerm),
    )
    .sort((a, b) => {
      let valueA, valueB

      switch (sortBy) {
        case "reg":
          // Convert registration numbers to numbers for proper sorting, handling ECE prefixes
          valueA =
            typeof a.reg === "string" && a.reg.includes("ECE")
              ? Number.parseInt(a.reg.replace("ECE ", ""))
              : typeof a.reg === "string"
                ? Number.parseInt(a.reg)
                : a.reg
          valueB =
            typeof b.reg === "string" && b.reg.includes("ECE")
              ? Number.parseInt(b.reg.replace("ECE ", ""))
              : typeof b.reg === "string"
                ? Number.parseInt(b.reg)
                : b.reg
          break
        case "aptitude":
          valueA = a.aptitude
          valueB = b.aptitude
          break
        case "coding":
          valueA = a.coding
          valueB = b.coding
          break
        case "total":
        default:
          valueA = a.aptitude + a.coding
          valueB = b.aptitude + b.coding
      }

      // For registration number, default to ascending order
      if (sortBy === "reg") {
        return sortOrder === "desc" ? valueB - valueA : valueA - valueB
      }

      return sortOrder === "asc" ? valueA - valueB : valueB - valueA
    })

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  // Get performance category
  const getPerformanceCategory = (total: number) => {
    if (total >= 200) return { label: "Excellent", color: "bg-green-500" }
    if (total >= 150) return { label: "Good", color: "bg-blue-500" }
    if (total >= 100) return { label: "Average", color: "bg-yellow-500" }
    return { label: "Needs Improvement", color: "bg-red-500" }
  }

  const handleSortChange = (newSortBy: typeof sortBy) => {
    if (newSortBy === "reg") {
      setSortBy(newSortBy)
      setSortOrder("asc") // Default to ascending for registration numbers
    } else {
      setSortBy(newSortBy)
    }
    setCurrentPage(0) // Reset to first page when sorting changes
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by registration number or score..."
            className="pl-8 text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(0) // Reset to first page when searching
            }}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                Sort by
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleSortChange("reg")}>Registration Number</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortChange("aptitude")}>Aptitude Score</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortChange("coding")}>Coding Score</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortChange("total")}>Total Score</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            {sortOrder === "asc" ? "↑" : "↓"}
          </Button>
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs sm:text-sm">Reg. Number</TableHead>
              <TableHead className="text-right text-xs sm:text-sm">Aptitude (300)</TableHead>
              <TableHead className="text-right text-xs sm:text-sm">Coding (50)</TableHead>
              <TableHead className="text-right text-xs sm:text-sm">Total (350)</TableHead>
              <TableHead className="text-xs sm:text-sm">Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((student) => {
              const total = student.aptitude + student.coding
              const performance = getPerformanceCategory(total)

              return (
                <TableRow key={student.reg}>
                  <TableCell className="font-medium text-xs sm:text-sm">{student.reg}</TableCell>
                  <TableCell className="text-right text-xs sm:text-sm">{student.aptitude}</TableCell>
                  <TableCell className="text-right text-xs sm:text-sm">{student.coding}</TableCell>
                  <TableCell className="text-right font-semibold text-xs sm:text-sm">{total}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${performance.color} text-white text-xs`}>
                      {performance.label}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      {paginatedData.length === 0 && (
        <div className="py-8 sm:py-12 text-center text-muted-foreground text-sm">
          No results found. Try a different search term.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            Showing {currentPage * itemsPerPage + 1} to{" "}
            {Math.min((currentPage + 1) * itemsPerPage, filteredData.length)} of {filteredData.length} students
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="text-xs sm:text-sm"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Previous
            </Button>
            <span className="text-xs sm:text-sm text-muted-foreground px-2">
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="text-xs sm:text-sm"
            >
              Next
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
