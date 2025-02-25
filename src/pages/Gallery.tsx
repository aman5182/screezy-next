
import { motion } from "framer-motion"

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-gray-600 dark:text-gray-400">Glimpses of our school life</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="aspect-video rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
