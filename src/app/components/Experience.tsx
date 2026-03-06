import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
const experiences = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    period: "2023 - Present",
    description:
      "Currently pursuing BCA with focus on Java programming, Data Structures, and Web Development."
  },
  {
    type: "work",
    title: "Java Development Training",
    company: "Nandi Training Institute",
    period: "2024",
    description:
      "Completed Java training covering OOP concepts, core Java programming, and basic application development."
  },
  {
    type: "work",
    title: "Software Development Intern",
    company: "Asorg Technologies",
    period: "2025",
    description:
      "Worked on web development projects, improving frontend skills and learning real-world development practices."
  },
  {
    type: "work",
    title: "Krishnavani AI Chatbot Project",
    company: "Academic / Personal Project",
    period: "2026",
    description:
      "Developed an AI-powered chatbot that provides Krishna-inspired guidance using PHP, MySQL and Machine Learning."
  },
  {
    type: "education",
    title: "Web Development Learning",
    company: "Self Learning",
    period: "2024 - Present",
    description:
      "Learning modern technologies including HTML, CSS, JavaScript, React and Tailwind CSS."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <span className="text-blue-400 uppercase tracking-wider text-sm">Journey</span>
<h2 className="text-4xl mt-4">My Learning & Development Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.type === 'work' ? Briefcase : GraduationCap;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 flex items-center justify-center z-10">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-20' : 'md:pl-12 pl-20'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-750 transition-all shadow-lg"
                  >
                    <span className="text-blue-400 text-sm">{exp.period}</span>
                    <h3 className="text-xl mt-2 mb-1">{exp.title}</h3>
                    <p className="text-slate-400 mb-3">{exp.company}</p>
                    <p className="text-slate-300">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
