
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import RoadMap from "../components/sections/RoadMap"
import Features from "../components/sections/Features"
import Offerings from "../components/sections/Offerings"
import FuturePlans from "../components/sections/FuturePlans"
import Admission from "../components/sections/Admission"
import Gallery from "../components/sections/Gallery"
import Contact from "../components/sections/Contact"

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7")' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl font-bold">Modern School Management System</h1>
            <p className="text-xl max-w-2xl">
              Transform your school's operations with our cutting-edge RFID attendance
              and bus tracking system.
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <a href="#contact">Get Started <ArrowRight className="ml-2" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features">
        <Features />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadMap />
      </section>

      {/* What We Offer Section */}
      <section id="offerings">
        <Offerings />
      </section>

      {/* Future Plans Section */}
      <section id="future-plans">
        <FuturePlans />
      </section>

      {/* Admission Section */}
      <section id="admission">
        <Admission />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home
