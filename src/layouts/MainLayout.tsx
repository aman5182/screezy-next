
import { Outlet } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ScrollToTop from "@/components/ScrollToTop"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <a href="#" className="text-xl font-bold">SchoolSystem</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden sm:flex space-x-4"
            >
              <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#offerings" className="hover:text-primary transition-colors">What We Offer</a>
              <a href="#future-plans" className="hover:text-primary transition-colors">Future Plans</a>
              <a href="#admission" className="hover:text-primary transition-colors">Admission</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modern school management system with RFID attendance and bus tracking
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Features</Link></li>
                <li><Link to="/admission" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Admission</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Email: info@school.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 School St, City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Facebook</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Twitter</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 School Management System. All rights reserved.
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

export default MainLayout
