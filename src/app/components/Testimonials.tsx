import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Nandi Training Institute",
    role: "Java Training Program",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    text: "Riya demonstrated strong interest in Java programming and quickly understood core concepts such as OOP and problem solving during the training program.",
    rating: 5
  },
  {
    name: "Asorg Technologies",
    role: "Internship Experience",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    text: "During the internship, Riya showed enthusiasm for learning web development and actively contributed to building responsive user interfaces.",
    rating: 5
  },
  {
    name: "Academic Project Review",
    role: "Krishnavani AI Chatbot",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    text: "The Krishnavani chatbot project demonstrates creativity and the ability to integrate machine learning with web technologies.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 uppercase tracking-wider text-sm">Feedback</span>

<h2 className="text-4xl mt-4 text-slate-900">
  Training & Project Feedback
</h2>

<p className="text-xl text-slate-600 mt-4">
  Insights from training programs, internship experience and academic projects.
</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
