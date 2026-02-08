import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0057E7]"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-64 h-64 border-2 border-[#FFF8E1] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-48 h-48 border-2 border-[#FFF8E1] rotate-45"
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-[#FFF8E1]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 border-2 border-[#FFF4DB] rounded-full"
            >
              <span className="text-[#FFF4DB] text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFF4DB] leading-tight">
              Full-Stack
              <br />
              Developer
            </h1>

            <p className="text-xl text-[#FFF4DB] font-medium">
              Building Real-World Web Apps
            </p>

            <p className="text-base text-[#FFF8E1] max-w-lg">
              Transforming ideas into elegant, scalable solutions using React,
              Node.js, and modern technologies.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              
              {/* Primary */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-[#FFF4DB] text-[#0057E7] rounded-lg font-bold flex items-center gap-3 shadow-lg transition-all hover:bg-[#0057E7] hover:text-[#FFF4DB] hover:border-2 hover:border-[#FFF4DB]"
              >
                See My Work
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>

              {/* Secondary */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-[#FFF4DB] text-[#FFF4DB] rounded-lg font-bold flex items-center gap-3 transition-all hover:bg-[#FFF4DB] hover:text-[#0057E7]"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT (PHOTO) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 border-4 border-[#FFF8E1] rounded-lg opacity-50" />

              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Professional developer"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg border-4 border-[#FFF4DB]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#FFF4DB] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#FFF4DB] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
