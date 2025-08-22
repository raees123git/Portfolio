import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Final semester student pursuing Artificial Intelligence from comsats university Islamaabad."
    },
    {
      icon: Target,
      title: "Focus Areas",
      content: "Specializing in Machine Learning, Deep Learning, NLP, and Generative AI technologies with practical implementation experience."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      content: "Passionate about solving real-world problems through intelligent automation and data-driven insights."
    },
    {
      icon: Rocket,
      title: "Goals",
      content: "Aspiring to contribute to the advancement of AI technology and create impactful solutions for complex challenges."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My name is Raees Zakir. I'm a passionate AI student in my final semester, dedicated to pushing the boundaries 
              of artificial intelligence and machine learning. My journey in AI has been driven by 
              curiosity and a desire to create intelligent solutions that make a real difference.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With hands-on experience in cutting-edge technologies like LangChain, LangGraph, 
              and various ML/DL frameworks, I enjoy tackling complex problems and turning innovative 
              ideas into practical applications.
            </p>
            
            
          </div>
          
          {/* Right Side - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="glow-card rounded-xl p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
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