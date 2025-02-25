
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
    hidden: { opacity: 0, x: -20 },
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
        <h1 className="text-4xl font-bold mb-4">Future Plans</h1>
        <p className="text-gray-600 dark:text-gray-400">Upcoming features and improvements</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{plan.title}</span>
                  <motion.span 
                    className="text-sm text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    {plan.timeline}
                  </motion.span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FuturePlans
