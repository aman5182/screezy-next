
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const BusTracking = () => {
  const busData = [
    { id: "BUS001", route: "Route A", driver: "David Miller", students: 28, status: "On Route" },
    { id: "BUS002", route: "Route B", driver: "Robert Clark", students: 32, status: "At School" },
    { id: "BUS003", route: "Route C", driver: "Patricia Lewis", students: 25, status: "On Route" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bus Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {busData.map((bus) => (
          <Card key={bus.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{bus.id}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  bus.status === "On Route" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {bus.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-semibold">Route:</span> {bus.route}</p>
                <p><span className="font-semibold">Driver:</span> {bus.driver}</p>
                <p><span className="font-semibold">Students:</span> {bus.students}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BusTracking
