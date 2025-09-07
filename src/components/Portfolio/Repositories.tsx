import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Repositories = () => {
  const repositories = [
    {
      name: "ai-image-detector",
      description: "A deep learning project using ConvNeXt-B for detecting AI-generated images with high accuracy.",
      tech: ["PyTorch", "ConvNeXt-B", "OpenCV", "scikit-learn"],
      updated: "2025-07-15",
      featured: true
    },
    {
      name: "rag-chatbot",
      description: "An intelligent chatbot built using Retrieval-Augmented Generation (RAG) with LangChain and vector databases.",
      tech: ["LangChain", "OpenAI", "FAISS", "Python"],
      updated: "2025-06-28"
    },
    {
      name: "flutter-automute",
      description: "A Flutter app that automatically mutes/unmutes your device based on location you have scheduled.",
      tech: ["Flutter", "Dart", "Google Maps API"],
      updated: "2025-05-10"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            GitHub Repositories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing expertise in AI, automation, and mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 ${
                repo.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">{repo.name}</CardTitle>
                  </div>
                  {repo.featured && (
                    <Badge className="bg-gradient-primary text-background">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {formatDate(repo.updated)}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-6">
                  {repo.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                  >
                    <a
                      href={`https://github.com/sathiya-26/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/sathiya-26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Repositories;
