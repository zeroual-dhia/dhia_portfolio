
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full animate-float opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${6 + i}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">AI Engineer</span>
            <br />
            <span className="text-foreground">& Developer</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           On a mission to explore and create <span className="text-secondary">  intelligent systems</span>  that shape the future of <span className="text-primary"> artificial intelligence</span>
             .
            
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/zeroual-dhia" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhiaa-eddine-zeroual" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:dhiaeddinezeroual55@gmail.com" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
