
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on exciting AI and software engineering projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary text-center">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or share insights about AI and software development. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:dhiaeddinezeroual55@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    dhiaeddinezeroual55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-card border border-border rounded-lg p-6 hover:border-secondary/30 transition-colors">
                <div className="p-3 rounded-full bg-secondary/10 border border-secondary/30">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+213556099676" className="text-muted-foreground hover:text-secondary transition-colors">
                    +213 556099676
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
                <div className="p-3 rounded-full bg-accent/10 border border-accent/30">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">National Higher School of AI</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <a href="https://instagram.com/dhiaa_zeroual" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    @zeroual_dhia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
