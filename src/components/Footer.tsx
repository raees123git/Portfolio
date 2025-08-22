import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold gradient-text">AI.Dev</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Building the future with artificial intelligence, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/raees123git"
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/raeeszakir/"
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:raeeszakir34@gmail.com"
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="mailto:raeeszakir34@gmail.com"
                target="_blank"
                className="p-2 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
              >raeeszakir34@gmail.com</a>
              <p>+92 333 9226696</p>
              <p>Rawalpindi-Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 AI Developer Portfolio. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;