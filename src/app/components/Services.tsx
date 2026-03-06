import { motion } from 'motion/react';
import { 
  Palette, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Building modern web applications using JavaScript, React, Node.js and backend technologies.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Rocket,
    title: 'Backend Development',
    description: 'Developing scalable backend systems using Java, APIs, and database technologies.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Creating responsive websites that work smoothly on mobile, tablet, and desktop devices.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: ShoppingCart,
    title: 'Web Applications',
    description: 'Building dynamic web applications with modern frameworks and interactive user interfaces.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Search,
    title: 'Problem Solving',
    description: 'Solving complex programming challenges and building efficient software solutions.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Palette,
    title: 'UI Integration',
    description: 'Integrating modern UI designs into functional applications with clean and maintainable code.',
    color: 'from-violet-500 to-purple-500'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <span className="text-blue-600 uppercase tracking-wider text-sm">Skills</span>
         <h2 className="text-4xl mt-4 text-slate-900">My Expertise</h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
           Technologies and skills I use to build modern software applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
