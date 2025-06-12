
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Investify",
      description: "Full-stack investment platform built with React, Vite, Tailwind, Flask, and SQLite. Features user authentication, portfolio tracking, and investment analytics.",
      technologies: ["React", "Vite", "Tailwind", "Flask", "SQLite"],
      category: "Web Application",
      gradient: "from-primary to-secondary"
    },
    {
      title: "GymMatch",
      description: "Comprehensive gym management system with member tracking, workout scheduling, and progress monitoring. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web Application",
      gradient: "from-secondary to-accent",
      github:"https://github.com/zeroual-dhia/GymMatch"
    },
    {
      title: "AI Portfolio Optimizer",
      description: "Intelligent portfolio allocation system using AI search algorithms and CSP to suggest optimal investment strategies based on user preferences and risk tolerance.",
      technologies: ["Python", "AI Search", "CSP", ],
      category: "AI Project",
      gradient: "from-accent to-primary"
    },
    {
      title: "Flutter Mobile Apps",
      description: "Collection of mobile applications including a todo list app, coffee shop interface, and weather application built with Flutter for cross-platform deployment.",
      technologies: ["Flutter", "Dart", "Mobile Development"],
      category: "Mobile Development",
      gradient: "from-primary/80 to-secondary/80" ,
      github: "https://github.com/zeroual-dhia/flutter-projects"
    },
    {
      title: "Interactive Calculator",
      description: "Dynamic calculator application with advanced mathematical operations and a sleek user interface built with  JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      gradient: "from-secondary/70 to-primary/70",
      github:"https://github.com/zeroual-dhia/calculator"
    },
    {
      title: "Dynamic Image Gallery",
      description: "Responsive image gallery with smooth animations, filtering capabilities, and optimized loading built with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      gradient: "from-accent/80 to-secondary/80",
      github: "https://github.com/zeroual-dhia/image_gallery"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, mobile apps, and AI projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                   style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                  <a href={project.github}>
                  <button className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    </button>
                      </a>
                   
                    <button className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
