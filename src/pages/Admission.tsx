
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Admission = () => {
  const steps = [
    {
      title: "Online Application",
      description: "Fill out the online admission form with student details",
      duration: "15 minutes"
    },
    {
      title: "Document Submission",
      description: "Upload required documents and certificates",
      duration: "1-2 days"
    },
    {
      title: "Application Review",
      description: "Our team reviews your application and documents",
      duration: "3-5 days"
    },
    {
      title: "Interview",
      description: "Schedule and attend a personal interview",
      duration: "1 day"
    },
    {
      title: "Final Decision",
      description: "Receive admission decision and further instructions",
      duration: "2-3 days"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Admission Process</h1>
        <p className="text-gray-600 dark:text-gray-400">Simple steps to join our school</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Step {index + 1}: {step.title}</span>
                  <span className="text-sm text-primary">{step.duration}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-8"
      >
        <Button size="lg">Start Application</Button>
      </motion.div>
    </div>
  )
}

export default Admission
