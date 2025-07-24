import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle, DollarSign } from 'lucide-react';

const Fintech: React.FC = () => {
  const challenges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Navigate complex financial regulations and maintain compliance across jurisdictions"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Security & Fraud Prevention",
      description: "Implement robust security measures to protect sensitive financial data"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Handle high-volume transactions with low latency and high reliability"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Build systems that can scale rapidly with business growth"
    }
  ];

  const solutions = [
    {
      title: "Payment Processing Platforms",
      description: "Secure, scalable payment systems with real-time transaction processing",
      features: ["PCI DSS compliance", "Multi-currency support", "Fraud detection", "API integrations"]
    },
    {
      title: "Digital Banking Solutions",
      description: "Modern banking platforms with mobile-first user experiences",
      features: ["Account management", "Mobile banking", "KYC/AML compliance", "Open banking APIs"]
    },
    {
      title: "Investment & Trading Platforms",
      description: "High-performance trading systems with real-time market data",
      features: ["Real-time trading", "Portfolio management", "Risk analytics", "Regulatory reporting"]
    },
    {
      title: "Lending & Credit Solutions",
      description: "Automated lending platforms with AI-powered risk assessment",
      features: ["Credit scoring", "Automated underwriting", "Loan management", "Compliance tracking"]
    }
  ];

  const benefits = [
    "Reduce time-to-market for new financial products",
    "Ensure compliance with financial regulations",
    "Improve security and fraud prevention",
    "Scale systems to handle growing transaction volumes",
    "Enhance customer experience and engagement",
    "Optimize operational efficiency and costs"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Fintech
              </span><br />
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build secure, scalable financial technology solutions that drive innovation in payments, 
              banking, lending, and investment management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Build Your Fintech Solution</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all"
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
              Fintech Industry Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The financial technology sector faces unique challenges that require specialized expertise and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
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
              Our Fintech Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for the financial services industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-green-50 text-green-700 rounded p-2 text-sm">
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
                Why Choose PrescienTech for Fintech?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique challenges of the financial technology sector and have the expertise 
                to build solutions that meet regulatory requirements while delivering exceptional user experiences.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Compliance Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of financial regulations</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
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

      {/* Compliance & Security */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Security Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We ensure your fintech solutions meet the highest standards for security and regulatory compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PCI DSS Compliance</h3>
              <p className="text-gray-600">Payment card industry data security standards implementation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">KYC/AML Integration</h3>
              <p className="text-gray-600">Know Your Customer and Anti-Money Laundering compliance</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Compliance</h3>
              <p className="text-gray-600">Service Organization Control 2 security framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fintech Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our fintech implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-gray-600 mb-2">Transaction Volume</div>
              <div className="text-sm text-gray-500">Processed monthly by our payment platform</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
              <div className="text-gray-600 mb-2">System Uptime</div>
              <div className="text-sm text-gray-500">For critical trading platform</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600 mb-2">Faster Loan Processing</div>
              <div className="text-sm text-gray-500">With automated underwriting system</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Fintech Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with us to create secure, compliant, and scalable financial technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Fintech Project
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

export default Fintech;