
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: "Monthly Attendance Report",
      description: "Detailed attendance statistics for March 2024",
      date: "2024-03-01",
    },
    {
      id: 2,
      title: "Bus Route Analysis",
      description: "Route efficiency and timing analysis for Q1 2024",
      date: "2024-03-15",
    },
    {
      id: 3,
      title: "Student RFID Usage Report",
      description: "RFID card usage patterns and anomalies",
      date: "2024-03-20",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{report.description}</p>
              <p className="text-sm text-muted-foreground">Generated: {report.date}</p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Reports
