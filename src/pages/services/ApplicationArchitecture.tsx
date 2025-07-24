import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cloud, Shield, CheckCircle, Target } from 'lucide-react';

const ApplicationArchitecture: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Microservices architecture",
      description: "Scalable, maintainable service-oriented designs"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Serverless design",
      description: "Cost-effective, auto-scaling cloud-native solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Architecture audits",
      description: "Comprehensive analysis of existing system design"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Implementation roadmaps",
      description: "Step-by-step migration and development plans"
    }
  ];

  const benefits = [
    "Improved system scalability and performance",
    "Reduced technical debt and maintenance costs",
    "Enhanced security and compliance",
    "Better fault tolerance and resilience",
    "Faster development and deployment cycles",
    "Optimized resource utilization"
  ];

  const architecturePatterns = [
    {
      name: "Microservices",
      description: "Break down monolithic applications into smaller, independent services",
      benefits: ["Independent scaling", "Technology diversity", "Fault isolation"]
    },
    {
      name: "Event-Driven Architecture",
      description: "Design systems that respond to events and messages asynchronously",
      benefits: ["Loose coupling", "Real-time processing", "Scalable integration"]
    },
    {
      name: "Domain-Driven Design",
      description: "Align software design with business domains and requirements",
      benefits: ["Clear boundaries", "Business alignment", "Maintainable code"]
    },
    {
      name: "API-First Design",
      description: "Design APIs before implementing the underlying systems",
      benefits: ["Consistent interfaces", "Parallel development", "Integration ready"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-2xl">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Application Architecture
              </span><br />
              Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build strong foundations with scalable, fault-tolerant designs that grow with your business 
              needs and handle increasing complexity with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Design Your Architecture</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all"
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
                Foundation for Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Great software starts with great architecture. Our expert architects design systems that 
                not only meet your current needs but anticipate future growth and evolution. We create 
                blueprints that guide development teams toward success.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From microservices to event-driven architectures, we help you choose the right patterns 
                and technologies that align with your business goals and technical constraints.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Methodologies</h3>
                  <p className="text-gray-600">20+ years of combined architecture experience</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Architecture Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive architecture design and consulting services for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Architecture Patterns We Implement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern architecture patterns that deliver scalability, maintainability, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pattern.name}</h3>
                <p className="text-gray-600 mb-4">{pattern.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pattern.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Architecture Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to designing robust, scalable application architectures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand business requirements, constraints, and goals</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">Evaluate current systems and identify improvement opportunities</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Create comprehensive architecture blueprints and documentation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Guide development teams through architecture implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build on Solid Foundations?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's design an architecture that scales with your business and stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Architecture Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationArchitecture;