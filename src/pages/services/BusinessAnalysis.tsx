import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, FileText, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';

const BusinessAnalysis: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Requirement gathering",
      description: "Comprehensive analysis of business needs and stakeholder requirements"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Functional specifications",
      description: "Detailed documentation of system functionality and behavior"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Process improvement",
      description: "Optimization of existing business processes for better efficiency"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Strategic planning",
      description: "Long-term technology roadmaps aligned with business goals"
    }
  ];

  const benefits = [
    "Reduce project risks and scope creep",
    "Ensure alignment between business and technical teams",
    "Improve project delivery success rates",
    "Optimize business processes and workflows",
    "Enable better decision-making with clear documentation",
    "Bridge communication gaps between stakeholders"
  ];

  const deliverables = [
    {
      title: "Requirements Documentation",
      description: "Comprehensive business and functional requirements",
      includes: ["User stories", "Use cases", "Acceptance criteria", "Business rules"]
    },
    {
      title: "Process Maps",
      description: "Visual representation of current and future state processes",
      includes: ["Current state analysis", "Future state design", "Gap analysis", "Process flows"]
    },
    {
      title: "Technical Specifications",
      description: "Bridge between business needs and technical implementation",
      includes: ["System architecture", "Data models", "Integration requirements", "Non-functional requirements"]
    },
    {
      title: "Change Management Plan",
      description: "Strategy for implementing process and system changes",
      includes: ["Impact assessment", "Training plan", "Communication strategy", "Risk mitigation"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Business Analysis
              </span><br />
              Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bridge the gap between business needs and technical implementation with expert analysis 
              and strategic planning that ensures project success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Expert Analysis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all"
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
                Strategic Business Analysis
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Successful technology projects start with clear understanding of business needs. Our 
                expert business analysts work with stakeholders to define requirements, document 
                processes, and create roadmaps that align technology with business objectives.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We bridge the communication gap between business stakeholders and technical teams, 
                ensuring everyone is aligned on goals, requirements, and success criteria.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Success</h3>
                  <p className="text-gray-600">95% project success rate with our analysis</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
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
              Our Business Analysis Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis services to ensure your projects succeed from day one
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-pink-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables that guide your project from concept to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{deliverable.title}</h3>
                <p className="text-gray-600 mb-4">{deliverable.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Includes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {deliverable.includes.map((item, idx) => (
                      <div key={idx} className="bg-white rounded p-2 text-sm text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
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
              Our Analysis Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to understanding and documenting your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakeholder Interviews</h3>
              <p className="text-gray-600 text-sm">Gather insights from all key stakeholders</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current State Analysis</h3>
              <p className="text-gray-600 text-sm">Document existing processes and systems</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements Definition</h3>
              <p className="text-gray-600 text-sm">Define detailed functional and non-functional requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Future State Design</h3>
              <p className="text-gray-600 text-sm">Create optimized process and system designs</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Planning</h3>
              <p className="text-gray-600 text-sm">Develop detailed implementation roadmap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep understanding of business processes across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-gray-600">Compliance, risk management, and customer onboarding processes</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600">Patient care workflows, regulatory compliance, and data privacy</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Supply chain optimization, quality control, and production planning</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600">Order management, inventory control, and customer experience</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SaaS</h3>
              <p className="text-gray-600">User onboarding, feature adoption, and subscription management</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance</h3>
              <p className="text-gray-600">Claims processing, underwriting, and policy management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Bridge the Gap?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let our expert business analysts help you define requirements and create a clear path to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Analysis
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAnalysis;