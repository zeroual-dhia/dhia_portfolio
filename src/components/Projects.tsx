
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Investify (Ensia)",
      description:"Full-stack portfolio suggestion platform with visulalized analytics  built with React, Vite, Tailwind, Flask, and SQLite. Integrates an AI engine to generate personalized investment portfolios based on user preferences, risk level, and budget.",
            technologies: ["React", "Vite", "Tailwind", "Flask",],

      category: "Web Application",
      gradient: "from-primary to-secondary",
      github: "https://github.com/k-a-r-s/stock-market-project",
      image: "/assets/projects/investify.png"
    },
    {
      title: "GymMatch (Ensia)",
      description: "Comprehensive gym website that connects members with gyms and trainers in one unified platform. Built using HTML, CSS, JavaScript, PHP, and MySQL.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Bootstrap 5"],
      category: "Web Application",
      gradient: "from-secondary to-accent",
      github: "https://github.com/zeroual-dhia/GymMatch",
      image: "/assets/projects/gymmatch.png"
    },
    {
      title: "AI Portfolio Optimizer (Ensia)",
      description: "Intelligent portfolio allocation system using AI search algorithms and CSP to suggest optimal investment strategies based on user preferences and risk tolerance.",
      technologies: ["Python", "AI Search", "CSP"],
      category: "AI Project",
      gradient: "from-accent to-primary",
      github:"https://github.com/zeroual-dhia/ai_portfolio",
      image: "/assets/projects/ai_project.jpeg"
    },
    {
      title: "Pizza App",
      description: "Full-featured pizza ordering mobile application with Firebase authentication, MySQL database, and Express.js backend. Users can browse menu, customize orders, and track deliveries.",
      technologies: ["Flutter", "Firebase Auth", "MySQL", "Express.js"],
      category: "Mobile Development",
      gradient: "from-primary to-accent",
      github:"https://github.com/zeroual-dhia/pizza",
      image: "/assets/projects/pizza-app.jpg"
    },
    {
      title: "Coffee App",
      description: "Modern coffee shop mobile application featuring Firebase authentication and Firestore database. Browse coffee varieties, customize drinks, and manage orders seamlessly.",
      technologies: ["Flutter", "Firebase Auth", "Firestore"],
      category: "Mobile Development",
      gradient: "from-secondary to-primary",
      github:"https://github.com/zeroual-dhia/coffe_shop",

      image: "/assets/projects/coffee-app.png"
    },
    {
      title: "AirPods Presentation",
      description: "Stunning animated presentation app showcasing AirPods with smooth transitions and animations, and elegant UI design built with Flutter.",
      technologies: ["Flutter", "Animations", "UI/UX"],
      category: "Mobile Development",
      gradient: "from-accent to-secondary",
      github:"https://github.com/zeroual-dhia/airpods",

      image: "/assets/projects/airpods.png"
    },
    {
      title: "Interactive Calculator",
      description: "Dynamic calculator application with simple mathematical operations and a sleek user interface built with JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      gradient: "from-secondary/70 to-primary/70",
      github: "https://github.com/zeroual-dhia/calculator",
      image: "/assets/projects/calculator.png"
    },
    {
      title: "Dynamic Image Gallery",
      description: "Responsive image gallery , filtering capabilities (favourites ), and optimized loading built with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      gradient: "from-accent/80 to-secondary/80",
      github: "https://github.com/zeroual-dhia/image_gallery",
      image: "/assets/projects/image-gallery.png"
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
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                   style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }}></div>
              
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative w-full h-64 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23141b2d"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2300d4ff" font-family="sans-serif" font-size="24"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <button className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                            <Github className="w-4 h-4" />
                          </button>
                        </a>
                      )}
                      
                    </div>
                  </div>
                  
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
