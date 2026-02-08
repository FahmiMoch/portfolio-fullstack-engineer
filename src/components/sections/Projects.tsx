import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLink,
  faMusic,
  faCoffee,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiStripe,
  SiSocketdotio,
} from 'react-icons/si';

const projects = [
  {
    title: 'Music Event Platform',
    description:
      'A dynamic full-stack SPA for discovering, booking, and managing music events with real-time updates.',
    image:
      'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200',
    icon: faMusic,
    tech: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Socket.io', icon: SiSocketdotio },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Coffee Shop Management',
    description:
      'Complete POS system with analytics dashboard, inventory tracking, and sales reporting.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    icon: faCoffee,
    tech: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Modern full-stack e-commerce solution with secure payments, product management, and responsive UI.',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200',
    icon: faCartShopping,
    tech: [
      { name: 'React', icon: SiReact },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Stripe', icon: SiStripe },
    ],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-[#0057E7] relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full -top-32 -right-32" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-[#FFF4DB] mb-4">
            Featured Projects
          </h2>

          <p className="text-[#FFF8E1] max-w-2xl mx-auto">
            A selection of production-ready applications built with modern
            technologies and best practices.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  rounded-2xl
                  overflow-hidden
                  bg-[#0045B8]
                  border border-white/20
                  hover:shadow-2xl
                  hover:shadow-blue-900/40
                  transition
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon
                      icon={ProjectIcon}
                      className="text-[#FFF4DB] text-lg"
                    />

                    <h3 className="font-semibold text-lg text-[#FFF4DB]">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[#FFF8E1] text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => {
                      const TechIcon = tech.icon;

                      return (
                        <div
                          key={tech.name}
                          className="
                            flex items-center gap-2
                            px-3 py-1
                            rounded-lg
                            bg-white/10
                            border border-white/20
                          "
                        >
                          <TechIcon className="text-sm text-[#FFF4DB]" />

                          <span className="text-xs font-medium text-[#FFF4DB]">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium text-[#FFF4DB] hover:opacity-70 transition"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium text-[#FFF4DB] hover:opacity-70 transition"
                    >
                      <FontAwesomeIcon icon={faExternalLink} />
                      Live Demo
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
