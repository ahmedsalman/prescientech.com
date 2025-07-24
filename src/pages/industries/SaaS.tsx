import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Users, TrendingUp, Zap, CheckCircle, Code } from 'lucide-react';

const SaaS: React.FC = () => {
  const challenges = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Customer Acquisition & Retention",
      description: "Build features that drive user engagement and reduce churn"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Feature Development",
      description: "Stay competitive with fast iteration and continuous deployment"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Handle growing user bases and varying load patterns"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Tenant Architecture",
      description: "Efficiently serve multiple customers with shared resources"
    }
  ];

  const solutions = [
    {
      title: "SaaS Platform Development",
      description: "End-to-end development of scalable, multi-tenant SaaS applications",
      features: ["Multi-tenancy", "Subscription billing", "API-first design", "Admin dashboards"]
    },
    {
      title: "Customer Success Tools",
      description: "Analytics and engagement tools to improve user retention",
      features: ["User analytics", "Feature adoption tracking", "In-app messaging", "Onboarding flows"]
    },
    {
      title: "Integration Platforms",
      description: "Connect your SaaS with third-party tools and services",
      features: ["API integrations", "Webhook management", "Data sync", "App marketplace"]
    },
    {
      title: "Performance Optimization",
      description: "Ensure your SaaS performs well under any load condition",
      features: ["Database optimization", "Caching strategies", "CDN implementation", "Load balancing"]
    }
  ];

  const benefits = [
    "Reduce time-to-market for new features by 60%",
    "Improve customer retention rates",
    "Scale infrastructure automatically with demand",
    "Enhance user experience and engagement",
    "Streamline subscription and billing management",
    "Enable seamless third-party integrations"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SaaS Platform
              </span><br />
              Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build scalable, feature-rich SaaS platforms that delight users and drive growth. 
              From MVP to enterprise-scale solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Build Your SaaS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all"
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
              SaaS Industry Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The SaaS industry moves fast. Success requires balancing rapid innovation with reliability and scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
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
              Our SaaS Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive development services for modern SaaS platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-purple-50 text-purple-700 rounded p-2 text-sm">
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
                Why Choose PrescienTech for SaaS?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique challenges of building SaaS platforms - from multi-tenant 
                architecture to subscription billing, from user onboarding to feature adoption analytics. 
                Our expertise helps you build platforms that scale and succeed.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">SaaS Expertise</h3>
                  <p className="text-gray-600">50+ SaaS platforms built and scaled</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
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

      {/* SaaS Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential SaaS Features We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All the features your SaaS platform needs to compete and succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Management</h3>
              <p className="text-gray-600">Multi-tenant user authentication, roles, and permissions</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscription Billing</h3>
              <p className="text-gray-600">Flexible pricing models, payment processing, and invoicing</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Management</h3>
              <p className="text-gray-600">RESTful APIs, rate limiting, and developer documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SaaS Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our SaaS platform implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600 mb-2">User Growth</div>
              <div className="text-sm text-gray-500">Within 6 months of launch</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 mb-2">Platform Uptime</div>
              <div className="text-sm text-gray-500">Enterprise-grade reliability</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-gray-600 mb-2">Faster Feature Delivery</div>
              <div className="text-sm text-gray-500">With optimized development process</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your SaaS Platform?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your idea into a scalable SaaS platform that users love and investors notice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your SaaS Project
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

export default SaaS;