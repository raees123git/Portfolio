import { Code, Brain, Bot, Database, Zap, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
      icon: Bot,
      title: "AI & Deep Learning",
      skills: ["Neural Networks", "CNN", "RNN","LSTM", "Transformers"]
    },
    {
      icon: Network,
      title: "NLP & Language",
      skills: ["Natural Language Processing", "NLTK", "spaCy", "Hugging Face", "BERT"]
    },
    {
      icon: Zap,
      title: "Generative AI",
      skills: ["GPT Models", "LangChain", "LangGraph", "Prompt Engineering", "RAG"]
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: ["Git", "Github",  "Jupyter", "VS Code"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and solving complex problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glow-card rounded-xl p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;