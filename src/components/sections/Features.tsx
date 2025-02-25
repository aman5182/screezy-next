
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const benefitVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Key Features</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover what makes our system unique</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{feature.description}</p>
                <motion.ul 
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {feature.benefits.map((benefit) => (
                    <motion.li 
                      key={benefit} 
                      variants={benefitVariants}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Features
