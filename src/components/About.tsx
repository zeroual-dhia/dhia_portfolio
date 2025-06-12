
import { Brain, Code, Cpu, Database } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Brain, name: "Artificial Intelligence", level: 25 },
    { icon: Code, name: "Software Engineering", level: 50 },
    { icon: Database, name: "Database Management", level: 50 },
    { icon: Cpu, name: "Algorithm Design", level: 55 }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Second-year AI student passionate about building intelligent systems powered by artificial intelligence.          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently in my second year at the National Higher School of AI, I'm deeply fascinated by the intersection 
              of artificial intelligence and software engineering. My passion lies in creating intelligent systems that 
              solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From web applications to mobile apps and AI algorithms, I enjoy building solutions that push the 
              boundaries of what's possible with technology. Each project teaches me something new about the 
              endless possibilities in the world of AI and software development.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
