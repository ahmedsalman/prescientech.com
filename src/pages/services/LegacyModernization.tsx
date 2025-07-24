import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Cloud, Zap, CheckCircle, Target } from 'lucide-react';

const LegacyModernization: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "System audits",
      description: "Comprehensive assessment of legacy systems and modernization opportunities"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modular rewrites",
      description: "Strategic refactoring and incremental modernization approaches"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud migration & modernization",
      description: "Move legacy systems to modern cloud-native architectures"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance optimization",
      description: "Enhance speed, reliability, and scalability of existing systems"
    }
  ];

  const benefits = [
    "Reduce maintenance costs by 50-70%",
    "Improve system performance and reliability",
    "Enhance security and compliance posture",
    "Enable integration with modern systems",
    "Increase development velocity",
    "Future-proof your technology stack"
  ];

  const approaches = [
    {
      title: "Replatforming",
      description: "Move applications to modern platforms with minimal code changes",
      bestFor: "Applications with solid business logic but outdated infrastructure",
      timeline: "3-6 months"
    },
    {
      title: "Refactoring",
      description: "Restructure and optimize code while maintaining functionality",
      bestFor: "Systems with good architecture but technical debt",
      timeline: "6-12 months"
    },
    {
      title: "Rebuilding",
      description: "Complete rewrite using modern technologies and architectures",
      bestFor: "Critical systems that need fundamental changes",
      timeline: "12-18 months"
    },
    {
      title: "Replacing",
      description: "Replace legacy systems with modern commercial or custom solutions",
      bestFor: "Non-differentiating systems with available alternatives",
      timeline: "6-9 months"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-pink-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Legacy Software
              </span><br />
              Modernization
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bring outdated systems back to life with modern technologies, improved performance, 
              and enhanced security that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Modernize Your Systems</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all"
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
                Breathe New Life Into Legacy Systems
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Legacy systems often contain valuable business logic and data, but they can become 
                bottlenecks that limit growth and innovation. Our modernization approach preserves 
                what works while transforming what doesn't.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We help you modernize legacy systems strategically, reducing technical debt while 
                maintaining business continuity and unlocking new capabilities for future growth.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">300+ legacy systems modernized</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modernization Benefits</h3>
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
              Our Modernization Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive modernization services tailored to your legacy system challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernization Approaches
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic approaches tailored to your specific legacy system needs and constraints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Best For:</span>
                    <span className="text-sm text-gray-600">{approach.timeline}</span>
                  </div>
                  <p className="text-sm text-gray-600">{approach.bestFor}</p>
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
              Our Modernization Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to legacy system modernization that minimizes risk and maximizes value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive analysis of legacy systems and business requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Define modernization approach and create detailed roadmap</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed project planning with risk mitigation strategies</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Phased modernization with continuous testing and validation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Performance tuning and ongoing optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We modernize legacy systems using cutting-edge technologies and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 text-sm">AWS / Azure / GCP</div>
                <div className="bg-white rounded p-2 text-sm">Kubernetes</div>
                <div className="bg-white rounded p-2 text-sm">Docker</div>
                <div className="bg-white rounded p-2 text-sm">Serverless</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Frameworks</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 text-sm">React / Angular / Vue</div>
                <div className="bg-white rounded p-2 text-sm">Node.js / .NET Core</div>
                <div className="bg-white rounded p-2 text-sm">Spring Boot</div>
                <div className="bg-white rounded p-2 text-sm">Microservices</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & APIs</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 text-sm">REST / GraphQL APIs</div>
                <div className="bg-white rounded p-2 text-sm">Modern Databases</div>
                <div className="bg-white rounded p-2 text-sm">Event Streaming</div>
                <div className="bg-white rounded p-2 text-sm">Data Lakes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernization Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real outcomes from our legacy modernization projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">70%</div>
              <div className="text-gray-600 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">In maintenance costs</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">5x</div>
              <div className="text-gray-600 mb-2">Performance Boost</div>
              <div className="text-sm text-gray-500">Average improvement</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">80%</div>
              <div className="text-gray-600 mb-2">Faster Development</div>
              <div className="text-sm text-gray-500">New feature delivery</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">99.9%</div>
              <div className="text-gray-600 mb-2">System Uptime</div>
              <div className="text-sm text-gray-500">Post-modernization</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Legacy Systems?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Transform your outdated systems into modern, efficient solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Modernization
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyModernization;