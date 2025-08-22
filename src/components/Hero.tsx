import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-neural-bg.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { displayText: mainText, isComplete: mainComplete } = useTypewriter({ 
    text: "AI Engineer", 
    speed: 100,
    delay: 500
  });
  
  const { displayText: subText, isComplete: subComplete } = useTypewriter({ 
    text: "Building the Future with Artificial Intelligence", 
    speed: 50,
    delay: 2000
  });

  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ delay: 500 });

  return (
    <section className="min-h-screen neural-bg relative flex items-center justify-center px-4">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text relative">
            {mainText}
            <span className={`inline-block w-0.5 h-16 bg-primary ml-1 ${mainComplete ? 'opacity-0' : 'animate-blink'}`}>|</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-light mb-4 text-foreground/90 transition-all duration-500 ${subComplete ? 'opacity-100' : 'opacity-0'}`}>
            {subText}
            <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${subComplete ? 'opacity-0' : 'animate-blink'}`}>|</span>
          </h2>
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-1000 ${subComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Final year AI student passionate about Machine Learning, Deep Learning,
            and Generative AI. Crafting intelligent solutions with cutting-edge technology.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-1500 ${subComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        <div className={`flex justify-center gap-6 mb-12 transition-all duration-700 delay-2000 ${subComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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