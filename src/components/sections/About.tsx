import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGlobe, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const highlights = [
    { icon: faCode, label: 'React & Next.js' },
    { icon: faLayerGroup, label: 'Node.js & Express' },
    { icon: faDatabase, label: 'MongoDB & PostgreSQL' },
    { icon: faGlobe, label: 'SPA & Dashboard' },
  ];

  return (
    <section id="about" className="py-20 bg-[#0057E7] relative">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFF8E1] to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFF4DB]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#FFF4DB] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border-2 border-[#FFF8E1] p-8 rounded-lg bg-[#0057E7]/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#FFF4DB] mb-4">
                My Journey
              </h3>

              <p className="text-[#FFF8E1] leading-relaxed mb-4">
                With a degree in <span className="font-semibold text-[#FFF4DB]">S1 Sistem Informasi</span>, 
                I spent 3 years working in logistics before discovering my true passion:
                <span className="font-semibold text-[#FFF4DB]"> software development</span>.
              </p>

              <p className="text-[#FFF8E1] leading-relaxed mb-4">
                I made the bold decision to switch careers and dove deep into modern web technologies. 
                Today, I build full-stack applications that solve real-world problems.
              </p>

              <p className="text-[#FFF8E1] leading-relaxed">
                I specialize in creating <span className="font-semibold text-[#FFF4DB]">Single Page Applications</span>, 
                dashboards, and e-commerce platforms using the latest technologies in the JavaScript ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#0057E7] border-2 border-[#FFF8E1] p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FFF8E1]/20"
              >
                <div className="w-12 h-12 bg-[#FFF4DB] rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-[#0057E7] text-xl"
                  />
                </div>

                <p className="text-[#FFF4DB] font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFF8E1] to-transparent opacity-30" />
    </section>
  );
}
