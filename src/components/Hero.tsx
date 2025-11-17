
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 overflow-hidden px-6 py-20">
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

      <div className="relative z-10 max-w-2xl text-center lg:text-left">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">AI Engineer</span>
            <br />
            <span className="text-foreground">& Developer</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
           On a mission to explore and create <span className="text-secondary">intelligent systems</span> that shape the future of <span className="text-primary">artificial intelligence</span>.
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center lg:justify-start space-x-6 mb-12">
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
      </div>
       
      <div className="relative z-30 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]">
        {/* Animated effects behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-primary/10 to-transparent blur-2xl"></div>
        
        {/* Rotating border effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
        
        <img className="relative w-full h-auto object-cover drop-shadow-2xl" src="assets/dhia.png" alt="Dhia Eddine Zeroual" />
      </div>
        
    </section>
  );
};

export default Hero;
