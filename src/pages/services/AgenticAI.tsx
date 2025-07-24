import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Database, Zap, CheckCircle, Target } from 'lucide-react';

const AgenticAI: React.FC = () => {
  const capabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Page orchestration",
      description: "Intelligent workflow coordination across multiple systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-step workflows",
      description: "Complex task automation with decision-making capabilities"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Autonomous agent design",
      description: "Self-governing AI systems that adapt to changing conditions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Vector databases",
      description: "Advanced data storage and retrieval for AI applications"
    }
  ];

  const useCases = [
    {
      title: "Content generation pipelines",
      description: "Automated content creation, review, and publishing workflows",
      industries: ["Marketing", "Publishing", "E-commerce"]
    },
    {
      title: "AI chat agents",
      description: "Intelligent customer service and support automation",
      industries: ["Customer Service", "Sales", "Support"]
    },
    {
      title: "Autonomous task execution",
      description: "Self-managing systems that handle complex business processes",
      industries: ["Operations", "Finance", "HR"]
    }
  ];

  const techStack = [
    "OpenAI GPT-4 & GPT-3.5",
    "Langchain",
    "Pinecone",
    "Weaviate",
    "Python",
    "TypeScript",
    "React",
    "Node.js"
  ];

  const approach = [
    {
      step: "01",
      title: "Strategy",
      description: "Define AI objectives and identify automation opportunities"
    },
    {
      step: "02",
      title: "Rapid prototyping",
      description: "Build and test AI agent concepts quickly"
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamlessly integrate AI agents with existing systems"
    },
    {
      step: "04",
      title: "Feedback cycles",
      description: "Continuous improvement through monitoring and optimization"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Agentic AI
              </span><br />
              Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help companies build intelligent, autonomous systems with cutting-edge AI agents 
              that adapt, learn, and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your AI Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Future of Intelligent Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Agentic AI represents the next evolution in artificial intelligence – systems that don't just 
                follow instructions, but think, adapt, and make decisions autonomously. Our expertise in 
                building these intelligent agents helps companies unlock unprecedented efficiency and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From content generation pipelines to autonomous customer service agents, we create AI systems 
                that work independently while staying aligned with your business goals.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">95% reduction in manual processes</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Agentic AI?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Autonomous decision-making capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Continuous learning and adaptation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Complex workflow orchestration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Scalable across multiple domains</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI agent development across the entire spectrum of intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world applications where agentic AI delivers transformative results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.industries.map((industry, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for building and deploying intelligent AI agents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to build robust, scalable agents
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your AI Agent?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how agentic AI can transform your business operations and create new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticAI;