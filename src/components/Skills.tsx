import { Code, Database, Globe, Smartphone, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML/CSS/JS", logo: "/assets/icons8-html-5.svg" },
        { name: "React", logo: "/assets/react-2.svg" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
        { name: "Tailwind CSS", logo: "/assets/icons8-tailwind-css.svg" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", logo: "/assets/icons8-flutter.svg" },
        { name: "Dart", logo: "/assets/icons8-dart.svg" }
      ]
    },
    {
      title: "Backend Development ",
      icon: Server,
      skills: [
        { name: "PHP", logo: "/assets/icons8-php-logo-40.svg" },
        { name: "Flask", logo: "/assets/icons8-flask (1).svg" }
      ]
    },
    {
      title: "Database & AI",
      icon: Database,
      skills: [
        { name: "MySQL", logo: "/assets/mysql-icon.svg" },
        { name: "SQLite", logo: "/assets/sqlite-icon.svg" },
        { name: "Search Algorithms", logo: Code },
        { name: "CSP", logo: Code }
      ]
    },
    {
      title: "Others",
      icon: Code,
      skills: [
        { name: "C++", logo: "/assets/icons8-c++.svg" },
        { name: "Python", logo: "/assets/icons8-python.svg" },
        { name: "Java", logo: "/assets/icons8-java.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:transform group-hover:scale-105"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      {
                        typeof skill.logo === "string" ? (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                        ) : (
                          <skill.logo className="w-5 h-5 text-primary" />
                        )
                      }
                      <Code className="w-4 h-4 text-primary hidden" />
                    </div>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles for visual effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary rounded-full animate-float opacity-40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${4 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
