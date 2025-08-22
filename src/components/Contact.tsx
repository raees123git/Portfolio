import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI projects or discuss opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, innovative projects, 
                and meaningful collaborations in the AI space. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">raeeszakir34@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+92 333 9226696 </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Rawalpindi-Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glow-card rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-primary/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-primary/60"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john.doe@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary/60"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Let's discuss an AI project"
                  className="bg-background/50 border-border/50 focus:border-primary/60"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary/60 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium py-3 shadow-glow-primary hover:shadow-glow-primary transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;