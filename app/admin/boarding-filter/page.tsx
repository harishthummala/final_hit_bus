"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const adminSidebarItems = [
  { title: "Students", href: "/admin/students" },
  { title: "Fee Payments", href: "/admin/fee-details" },
  { title: "Student Management", href: "/admin/section-filter" },
  { title: "Student Status", href: "/admin/student-status" },
  { title: "Boarding", href: "/admin/boarding-filter" },
]

const students = [
  { id: "S001", name: "John Doe", email: "john@example.com", phone: "1234567890", boardingPoint: "Maulimichampatti" },
  { id: "S002", name: "Jane Smith", email: "jane@example.com", phone: "2345678901", boardingPoint: "Pollachi" },
  { id: "S003", name: "Alice Johnson", email: "alice@example.com", phone: "3456789012", boardingPoint: "Palakad" },
  { id: "S004", name: "Bob Williams", email: "bob@example.com", phone: "4567890123", boardingPoint: "Maulimichampatti" },
  { id: "S005", name: "Charlie Brown", email: "charlie@example.com", phone: "5678901234", boardingPoint: "Pollachi" },
  { id: "S006", name: "Diana Clark", email: "diana@example.com", phone: "6789012345", boardingPoint: "Palakad" },
  { id: "S007", name: "Ethan Davis", email: "ethan@example.com", phone: "7890123456", boardingPoint: "Maulimichampatti" },
  { id: "S008", name: "Fiona Evans", email: "fiona@example.com", phone: "8901234567", boardingPoint: "Pollachi" },
  { id: "S009", name: "George Fisher", email: "george@example.com", phone: "9012345678", boardingPoint: "Palakad" },
  { id: "S010", name: "Hannah Green", email: "hannah@example.com", phone: "0123456789", boardingPoint: "Maulimichampatti" },
  { id: "S011", name: "Ian Harris", email: "ian@example.com", phone: "1234567890", boardingPoint: "Pollachi" },
  { id: "S012", name: "Julia Jackson", email: "julia@example.com", phone: "2345678901", boardingPoint: "Palakad" },
  { id: "S013", name: "Kevin King", email: "kevin@example.com", phone: "3456789012", boardingPoint: "Maulimichampatti" },
  { id: "S014", name: "Laura Lee", email: "laura@example.com", phone: "4567890123", boardingPoint: "Pollachi" },
  { id: "S015", name: "Michael Moore", email: "michael@example.com", phone: "5678901234", boardingPoint: "Palakad" },
  { id: "S016", name: "Nancy Nelson", email: "nancy@example.com", phone: "6789012345", boardingPoint: "Maulimichampatti" },
  { id: "S017", name: "Oscar Owen", email: "oscar@example.com", phone: "7890123456", boardingPoint: "Pollachi" },
  { id: "S018", name: "Patricia Parker", email: "patricia@example.com", phone: "8901234567", boardingPoint: "Palakad" },
  { id: "S019", name: "Quentin Quinn", email: "quentin@example.com", phone: "9012345678", boardingPoint: "Maulimichampatti" },
  { id: "S020", name: "Rachel Ross", email: "rachel@example.com", phone: "0123456789", boardingPoint: "Pollachi" },
]

export default function BoardingFilter() {
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<string | undefined>()

  const filteredStudents = selectedBoardingPoint
    ? students.filter((student) => student.boardingPoint === selectedBoardingPoint)
    : students

  return (
    <DashboardLayout sidebarItems={adminSidebarItems}>
      <h2 className="mb-4 text-2xl font-bold">Boarding Details</h2>
      <div className="rounded-lg bg-white p-6 shadow">
        <Select onValueChange={setSelectedBoardingPoint}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select boarding point" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Maulimichampatti">Maulimichampatti</SelectItem>
            <SelectItem value="Pollachi">Pollachi</SelectItem>
            <SelectItem value="Palakad">Palakad</SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Boarding Point</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.boardingPoint}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  )
}

