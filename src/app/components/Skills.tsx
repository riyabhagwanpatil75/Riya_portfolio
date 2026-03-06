import { Code2, Palette, Smartphone, Zap, Globe, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    icon: Code2,
    title: "Java Development",
    description: "Strong knowledge of Java programming, OOP concepts, and building application logic"
  },
  {
    icon: Layers,
    title: "Data Structures & Algorithms",
    description: "Understanding of arrays, stacks, queues, linked lists and problem solving techniques"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive websites using HTML, CSS, JavaScript and modern frontend practices"
  },
  {
    icon: Smartphone,
    title: "React Development",
    description: "Creating dynamic user interfaces using React, TypeScript and component-based architecture"
  },
  {
    icon: Zap,
    title: "Machine Learning",
    description: "Developing AI-based solutions like chatbot systems using Python and ML models"
  },
  {
    icon: Palette,
    title: "Application Development",
    description: "Building real-world applications such as management systems and web applications"
  }
];



export function Skills() {
  return (
    <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <span className="text-blue-600 uppercase tracking-wider text-sm">Technical Skills</span>

<h2 className="text-4xl mt-4 text-slate-900">
  Strong Technical Expertise
</h2>

<p className="text-xl text-slate-600 mt-4">
  My technical toolkit includes programming, web development, and modern software technologies.
</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl mb-2 text-slate-900">{skill.title}</h3>
                <p className="text-slate-600">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}