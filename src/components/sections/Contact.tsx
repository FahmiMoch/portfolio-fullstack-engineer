import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPaperPlane,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simulate API delay biar berasa real app
    setTimeout(() => {
      toast.success('Message sent successfully 🚀');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const socialLinks = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'developer@example.com',
      href: 'mailto:developer@example.com',
    },
    {
      icon: faGithub,
      label: 'GitHub',
      value: '@yourusername',
      href: 'https://github.com',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'Your Name',
      href: 'https://linkedin.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0057E7] relative overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-[#FFF8E1] rotate-45" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-[#FFF8E1] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFF4DB]">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#FFF4DB] mx-auto rounded-full" />
          <p className="text-[#FFF8E1] mt-4 max-w-2xl mx-auto">
            Let's discuss your project or opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="border-2 border-[#FFF8E1] p-8 rounded-lg bg-[#0045B8]/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#FFF4DB] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#0057E7] border-2 border-[#FFF8E1] rounded-lg text-[#FFF4DB] placeholder-[#FFF8E1] focus:outline-none focus:border-white transition"
                />

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-[#0057E7] border-2 border-[#FFF8E1] rounded-lg text-[#FFF4DB] placeholder-[#FFF8E1] focus:outline-none focus:border-white transition"
                />

                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-[#0057E7] border-2 border-[#FFF8E1] rounded-lg text-[#FFF4DB] placeholder-[#FFF8E1] focus:outline-none focus:border-white resize-none transition"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-[#FFF4DB] text-[#0057E7] rounded-lg font-bold flex items-center justify-center gap-3 hover:shadow-xl"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </motion.button>

              </form>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Contact Card */}
            <div className="border-2 border-[#FFF8E1] p-8 rounded-lg bg-[#0045B8]/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#FFF4DB] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  { icon: faLocationDot, label: 'Location', value: 'Indonesia' },
                  { icon: faPhone, label: 'Phone', value: '+62 XXX XXXX XXXX' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FFF4DB] rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="text-[#0057E7]" />
                    </div>

                    <div>
                      <p className="text-[#FFF8E1] text-sm">{item.label}</p>
                      <p className="text-[#FFF4DB] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 border-2 border-[#FFF8E1] p-6 rounded-lg hover:bg-[#FFF4DB] group bg-[#0045B8]/50 transition"
              >
                <div className="w-14 h-14 bg-[#FFF4DB] rounded-lg flex items-center justify-center group-hover:bg-[#0057E7] transition">
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-[#0057E7] group-hover:text-[#FFF4DB]"
                  />
                </div>

                <div>
                  <p className="text-[#FFF8E1] text-sm group-hover:text-[#0057E7]">
                    {social.label}
                  </p>
                  <p className="text-[#FFF4DB] font-medium group-hover:text-[#0057E7]">
                    {social.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-[#FFF8E1]/30">
          <p className="text-center text-[#FFF8E1]">
            © 2026 DevPortfolio — Built with React + Motion.
          </p>
        </div>

      </div>
    </section>
  );
}
