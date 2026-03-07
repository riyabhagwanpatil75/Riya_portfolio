import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 uppercase tracking-wider text-sm">Contact</span>

          <h2 className="text-4xl mt-4 mb-4">
            Let's Connect
          </h2>

          <p className="text-xl text-slate-300 mb-6">
            Feel free to reach out for collaboration, internship opportunities, or project discussions.
          </p>

          <p className="text-slate-400 mb-12">
            📍 Pune, Maharashtra, India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:riyabpatil755@gmail.com"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </motion.a>

         <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/Riya_portfolio/Riya_Resume.pdf"
  target="_blank"
  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
>
  Download Resume
</motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          {[
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/riya-patil-3b553928b/' },
            { Icon: Github, href: 'https://github.com/riyabhagwanpatil75' }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
            >
              <social.Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-800 text-slate-400"
        >
          <p>© 2026 Riya Patil. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}