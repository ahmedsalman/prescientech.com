import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Target,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Settings
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agentic AI Development",
      description: "Build intelligent, autonomous systems with cutting-edge AI agents that adapt, learn, and deliver results. From content generation to autonomous task execution.",
      features: ["Page orchestration", "Multi-step workflows", "Vector databases", "Autonomous agents"],
      link: "/services/agentic-ai",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Salesforce Development",
      description: "Custom Salesforce solutions built to scale your business operations and drive growth through intelligent automation and integration.",
      features: ["Apex & Lightning Development", "AppExchange Apps", "Third-party integrations", "Data migration"],
      link: "/services/salesforce-development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Application Architecture Design",
      description: "Build strong foundations with scalable, fault-tolerant designs that grow with your business needs and handle increasing complexity.",
      features: ["Microservices architecture", "Serverless design", "Architecture audits", "Implementation roadmaps"],
      link: "/services/application-architecture",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero to MVP",
      description: "Go from idea to market-ready product in weeks, not months. Rapid prototyping and agile development to validate your concept quickly.",
      features: ["Rapid prototyping", "Agile development", "Market validation", "Iteration support"],
      link: "/services/zero-to-mvp",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Adoption for Enterprises",
      description: "Future-proof your business with AI integration. Strategic implementation of AI technologies into your existing workflows and processes.",
      features: ["AI strategy workshops", "LLM integrations", "Predictive models", "Custom AI solutions"],
      link: "/services/ai-adoption",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Analytics Services",
      description: "Transform data into your competitive edge with comprehensive analytics, BI dashboards, and predictive insights that drive decisions.",
      features: ["BI dashboards", "Data engineering", "ML model support", "Predictive analytics"],
      link: "/services/data-analytics",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Analysis Consulting",
      description: "Bridge the gap between business needs and technical implementation with expert analysis and strategic planning.",
      features: ["Requirement gathering", "Functional specifications", "Process improvement", "Strategic planning"],
      link: "/services/business-analysis",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Advisory",
      description: "Make informed cloud decisions with expert guidance on migration strategies, platform selection, and cost optimization.",
      features: ["Migration strategies", "Platform evaluation", "Cost optimization", "Architecture audits"],
      link: "/services/cloud-advisory",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Cloud DevOps Engineering",
      description: "Build, ship, and scale with confidence using modern DevOps practices, automation, and monitoring solutions.",
      features: ["CI/CD automation", "Kubernetes & Docker", "Infrastructure as Code", "24/7 monitoring"],
      link: "/services/cloud-devops",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Software Migration",
      description: "Minimize risk and maximize performance with comprehensive migration planning and execution strategies.",
      features: ["Migration planning", "Legacy system transition", "Minimal downtime", "Risk mitigation"],
      link: "/services/software-migration",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legacy Software Modernization",
      description: "Bring outdated systems back to life with modern technologies, improved performance, and enhanced security.",
      features: ["System audits", "Modular rewrites", "Cloud migration", "Performance optimization"],
      link: "/services/legacy-modernization",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Our software development services are engineered for results. Whether you're building a product 
              from the ground up or scaling your existing operations, we deliver the tech talent and domain 
              expertise to help you win.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore each service to learn how we can power your next innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="text-gray-700 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Capabilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrescienTech Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Approach</h3>
              <p className="text-gray-600">
                We don't just build what you ask for – we help you discover what you actually need 
                to achieve your business goals.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Delivery</h3>
              <p className="text-gray-600">
                Our agile methodologies and experienced teams ensure faster time-to-market without 
                compromising on quality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Teams</h3>
              <p className="text-gray-600">
                Work with senior-level engineers and specialists who have proven track records 
                in your industry and technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;