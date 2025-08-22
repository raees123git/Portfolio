import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-neural-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen neural-bg relative flex items-center justify-center px-4">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            AI Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/90">
            Building the Future with Artificial Intelligence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Final year AI student passionate about Machine Learning, Deep Learning,
            and Generative AI. Crafting intelligent solutions with cutting-edge technology.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow-primary hover:shadow-glow-primary transition-all duration-300"
          >
            <a
              href="https://github.com/raees123git"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Work
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 px-8 py-3 text-lg font-medium transition-all duration-300"
            asChild
          >
            <a href="/Raees Zakir (AI-ML).pdf" download="RaeesZakir_CV.pdf">
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/raees123git"
            target="_blank"
            className="p-3 rounded-full border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/raeeszakir/"
            target="_blank"
            className="p-3 rounded-full border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:raeeszakir34@gmail.com"
            target="_blank"
            className="p-3 rounded-full border border-border hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;