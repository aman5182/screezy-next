
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const Features = () => {
  const features = [
    {
      title: "RFID Attendance",
      description: "Automated attendance tracking using RFID cards for students and staff",
      benefits: ["Real-time tracking", "Automated notifications", "Accurate records"]
    },
    {
      title: "Bus Tracking",
      description: "Real-time GPS tracking of school buses with route optimization",
      benefits: ["Live location updates", "Route history", "Parent notifications"]
    },
    {
      title: "Smart Reports",
      description: "Comprehensive reporting system with analytics and insights",
      benefits: ["Custom reports", "Data visualization", "Export options"]
    },
    {
      title: "Parent Portal",
      description: "Dedicated portal for parents to track their children's activities",
      benefits: ["Attendance history", "Bus location", "Academic progress"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Key Features</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover what makes our system unique</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features
