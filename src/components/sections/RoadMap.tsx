
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const RoadMap = () => {
  const milestones = [
    { year: "2024", title: "System Launch", description: "Initial release with core features" },
    { year: "2024 Q2", title: "Mobile App", description: "Launch of parent mobile application" },
    { year: "2024 Q3", title: "AI Integration", description: "Smart attendance predictions" },
    { year: "2024 Q4", title: "Advanced Analytics", description: "Comprehensive reporting system" },
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
        <h1 className="text-4xl font-bold mb-4">Development Roadmap</h1>
        <p className="text-gray-600 dark:text-gray-400">Our planned feature releases and improvements</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {milestones.map((milestone) => (
          <motion.div
            key={milestone.year}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">{milestone.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default RoadMap
