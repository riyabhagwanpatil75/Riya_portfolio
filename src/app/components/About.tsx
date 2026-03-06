import { motion } from 'motion/react';
import { Code, Cpu, Rocket, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Code, value: '10+', label: 'Projects Built' },
  { icon: Cpu, value: 'Java', label: 'Backend Development' },
  { icon: Rocket, value: 'Modern', label: 'Web Technologies' },
  { icon: Lightbulb, value: 'Creative', label: 'Problem Solver' }
];
export function About() {
  return (
    <section id="about" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="src/app/components/riya_2.jpeg"
                alt="Riya"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-blue-600 uppercase tracking-wider text-sm">About Me</span>
            <h2 className="text-4xl my-4 text-slate-900">
            Passionate Software Developer
            </h2>
            <p className="text-lg text-slate-600 mb-6">
I am a passionate Software Developer with a strong interest in building modern web applications and intelligent systems. I enjoy transforming ideas into real-world digital solutions using clean, efficient code and modern technologies.
            </p>
            <p className="text-lg text-slate-600 mb-8">
             My focus is on full-stack development using Java, JavaScript, and modern web technologies. I enjoy solving complex problems and continuously improving my skills to build scalable and efficient software solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-3xl text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
