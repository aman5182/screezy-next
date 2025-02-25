
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Attendance = () => {
  const attendanceData = [
    { id: 1, name: "John Smith", grade: "10A", status: "Present", time: "8:15 AM" },
    { id: 2, name: "Emma Wilson", grade: "10A", status: "Absent", time: "-" },
    { id: 3, name: "Michael Brown", grade: "10A", status: "Present", time: "8:05 AM" },
    { id: 4, name: "Sarah Davis", grade: "10A", status: "Late", time: "8:45 AM" },
    { id: 5, name: "James Johnson", grade: "10A", status: "Present", time: "8:10 AM" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Attendance</h1>
      <Card>
        <CardHeader>
          <CardTitle>Class 10A Attendance - Today</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        student.status === "Present"
                          ? "bg-green-100 text-green-800"
                          : student.status === "Absent"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>{student.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Attendance
