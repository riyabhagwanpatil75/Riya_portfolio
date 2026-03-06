import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProjectCard } from './components/ProjectCard';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Krishnavani AI Chatbot",
    description:
      "An AI-powered spiritual chatbot that provides Krishna-inspired guidance and emotion-based shlokas using PHP, MySQL and Machine Learning.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["PHP", "MySQL", "Python", "Machine Learning"],
    link: "#",
    github: "#"
  },
  {
    title: "Weather Forecast App",
    description:
      "Java application that fetches real-time weather data using REST API and displays temperature, humidity and weather conditions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    tags: ["Java", "REST API", "JSON"],
    link: "#",
    github: "#"
  },
  {
    title: "Developer Portfolio",
    description:
      "Modern responsive developer portfolio built using React, TypeScript and Tailwind CSS with smooth animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["React", "Tailwind", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Login Authentication System",
    description:
      "Simple login system with username and password validation using HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Manager App",
    description:
      "A simple task management application that allows users to add, update and delete daily tasks.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    tags: ["JavaScript", "Frontend"],
    link: "#",
    github: "#"
  },
  {
    title: "Student Management System",
    description:
      "Application to manage student records including adding, updating and viewing student information.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    tags: ["Java", "Database"],
    link: "#",
    github: "#"
  }
];
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      <section id="projects" className="py-20 bg-slate-50 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
           <span className="text-blue-600 uppercase tracking-wider text-sm">My Work</span>

<h2 className="text-4xl mt-4 mb-4 text-slate-900">
  Featured Projects
</h2>

<p className="text-xl text-slate-600">
  Here are some of the projects I have built while learning web development, Java, and software engineering.
</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
