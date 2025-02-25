import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FuturePlans = () => {
  const plans = [
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms to predict attendance patterns and optimize bus routes",
      timeline: "Q3 2024"
    },
    {
      title: "Mobile Application",
      description: "Native mobile apps for parents with real-time notifications and tracking",
      timeline: "Q4 2024"
    },
    {
      title: "Biometric Integration",
      description: "Additional security layer with facial recognition and fingerprint scanning",
      timeline: "Q1 2025"
    },
    {
      title: "Smart Campus",
      description: "IoT integration for comprehensive campus management and security",
      timeline: "Q2 2025"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Future Plans</h1>
        <p className="text-gray-600 dark:text-gray-400">Upcoming features and improvements</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{plan.title}</span>
                  <span className="text-sm text-primary">{plan.timeline}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FuturePlans
