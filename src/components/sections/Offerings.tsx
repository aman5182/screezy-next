import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Offerings = () => {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      period: "per month",
      features: [
        "Up to 500 students",
        "Basic RFID attendance",
        "Simple reports",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      features: [
        "Up to 1000 students",
        "Advanced RFID system",
        "Bus tracking",
        "Custom reports",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited students",
        "Full feature access",
        "Custom integration",
        "24/7 support",
        "Dedicated manager"
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Offerings</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose the plan that fits your school</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative h-full">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400"> {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Offerings
