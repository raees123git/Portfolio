import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, MessageSquare, Eye, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot with RAG",
      description: "Intelligent conversational AI system using Retrieval-Augmented Generation with LangChain and vector embeddings for context-aware responses.",
      tech: ["Python", "LangChain", "OpenAI", "Vector DB", "Streamlit"],
      icon: MessageSquare,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Computer Vision Pipeline",
      description: "End-to-end deep learning pipeline for object detection and classification using custom CNN architecture and transfer learning.",
      tech: ["PyTorch", "OpenCV", "YOLO", "Docker", "FastAPI"],
      icon: Eye,
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Advanced sentiment analysis tool processing social media data with transformer models and real-time prediction capabilities.",
      tech: ["Transformers", "BERT", "Flask", "MongoDB", "React"],
      icon: Brain,
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "ML Model Deployment",
      description: "Scalable machine learning model serving platform with automated retraining pipeline and performance monitoring.",
      tech: ["MLOps", "Kubernetes", "TensorFlow", "AWS", "Prometheus"],
      icon: TrendingUp,
      gradient: "from-primary/80 to-secondary/80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative AI solutions and cutting-edge implementations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glow-card rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}>
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 px-8 py-3 text-lg font-medium"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;