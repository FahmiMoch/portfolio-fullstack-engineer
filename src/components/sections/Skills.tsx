import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiGithub,
  SiFigma,
  SiGraphql,
} from 'react-icons/si';

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  percentage: number;
  items: SkillItem[];
};

export default function Skills() {
  const skills: SkillCategory[] = [
    {
      title: 'Frontend',
      percentage: 90,
      items: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Backend',
      percentage: 85,
      items: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'REST APIs', icon: SiExpress },
      ],
    },
    {
      title: 'Database',
      percentage: 82,
      items: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'Redis', icon: SiRedis },
      ],
    },
    {
      title: 'Tools',
      percentage: 88,
      items: [
        { name: 'Docker', icon: SiDocker },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Figma', icon: SiFigma },
        { name: 'CI/CD', icon: SiDocker },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0057E7] relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full -top-32 -left-32" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#FFF4DB] mb-4">
            Technical Skills
          </h2>

          <p className="text-[#FFF8E1] max-w-2xl mx-auto">
            Production-ready technologies I use to build scalable,
            high-performance applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-[#0045B8]
                border border-white/20
                p-7
                rounded-2xl
                hover:shadow-2xl
                hover:shadow-blue-900/40
                transition-all
                duration-300
              "
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#FFF4DB]">
                  {skill.title}
                </h3>

                <span className="text-[#FFF4DB] font-bold">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress */}
              <div className="h-2 bg-blue-900/40 rounded-full mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-[#FFF4DB]"
                />
              </div>

              {/* Items */}
              <div className="grid grid-cols-2 gap-4">
                {skill.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="
                        flex items-center gap-3
                        bg-white/5
                        border border-white/10
                        px-4 py-3
                        rounded-xl
                        group-hover:border-white/20
                        transition
                      "
                    >
                      <Icon className="text-xl text-[#FFF4DB]" />

                      <span className="text-[#FFF8E1] font-medium text-sm">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
