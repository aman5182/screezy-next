
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
        <h1 className="text-4xl font-bold mb-4">Admission Process</h1>
        <p className="text-gray-600 dark:text-gray-400">Simple steps to join our school</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Step {index + 1}: {step.title}</span>
                  <motion.span 
                    className="text-sm text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.duration}
                  </motion.span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-8"
      >
        <Button 
          size="lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Application
        </Button>
      </motion.div>
    </div>
  )
}

export default Admission
