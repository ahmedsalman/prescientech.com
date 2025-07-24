import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, TrendingUp, Users, CheckCircle, Calculator } from 'lucide-react';

const Insurance: React.FC = () => {
  const challenges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Accurate risk evaluation and pricing models for various insurance products"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Claims Processing",
      description: "Streamline claims handling and reduce processing time while preventing fraud"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Experience",
      description: "Improve policyholder engagement and self-service capabilities"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Navigate complex insurance regulations and maintain compliance"
    }
  ];

  const solutions = [
    {
      title: "Policy Management Systems",
      description: "Comprehensive policy lifecycle management from quote to renewal",
      features: ["Policy administration", "Underwriting workflows", "Renewal automation", "Document management"]
    },
    {
      title: "Claims Processing Platforms",
      description: "Automated claims handling with fraud detection and analytics",
      features: ["Claims automation", "Fraud detection", "Damage assessment", "Settlement processing"]
    },
    {
      title: "Customer Portals",
      description: "Self-service platforms for policyholders and agents",
      features: ["Policy management", "Claims tracking", "Payment processing", "Document access"]
    },
    {
      title: "Risk Analytics Solutions",
      description: "Advanced analytics for risk assessment and pricing optimization",
      features: ["Risk modeling", "Predictive analytics", "Pricing optimization", "Portfolio analysis"]
    }
  ];

  const benefits = [
    "Reduce claims processing time by 60%",
    "Improve underwriting accuracy and speed",
    "Enhance customer satisfaction and retention",
    "Minimize fraud losses through AI detection",
    "Streamline regulatory reporting and compliance",
    "Optimize pricing strategies with data analytics"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Insurance
              </span><br />
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Modernize insurance operations with intelligent technology solutions that streamline 
              processes, improve risk assessment, and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Modernize Insurance</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Industry Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The insurance industry faces evolving challenges that require innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-indigo-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for modern insurance operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-indigo-50 text-indigo-700 rounded p-2 text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PrescienTech for Insurance?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the complex regulatory environment and operational challenges of the 
                insurance industry, delivering solutions that drive efficiency and compliance.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Actuarial Expertise</h3>
                  <p className="text-gray-600">Deep understanding of insurance mathematics</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
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

      {/* Insurance Types */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different types of insurance operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property & Casualty</h3>
              <p className="text-gray-600">Auto, home, and commercial property insurance solutions</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Life & Health</h3>
              <p className="text-gray-600">Life insurance and health coverage management systems</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialty Insurance</h3>
              <p className="text-gray-600">Cyber, marine, aviation, and other specialty coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our insurance technology implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-gray-600 mb-2">Faster Claims Processing</div>
              <div className="text-sm text-gray-500">With automated workflows</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600 mb-2">Fraud Detection Rate</div>
              <div className="text-sm text-gray-500">Using AI-powered analytics</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
              <div className="text-gray-600 mb-2">Improved Customer Satisfaction</div>
              <div className="text-sm text-gray-500">With digital self-service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Insurance Operations?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Transform your insurance business with intelligent technology solutions that drive efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Insurance Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;