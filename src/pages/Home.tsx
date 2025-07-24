import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Users, 
  Globe, 
  Target,
  Brain,
  Cloud,
  Code,
  Database,
  Shield,
  TrendingUp
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agentic AI Development",
      description: "Intelligent, autonomous systems that adapt and deliver results",
      link: "/services/agentic-ai"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Salesforce Development",
      description: "Custom Salesforce solutions built to scale your business",
      link: "/services/salesforce-development"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Zero to MVP",
      description: "Go from idea to market-ready product in weeks",
      link: "/services/zero-to-mvp"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Legacy Modernization",
      description: "Transform outdated systems into modern, efficient solutions",
      link: "/services/legacy-modernization"
    }
  ];

  const industries = [
    { name: "Fintech", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Healthcare", icon: <Shield className="w-6 h-6" /> },
    { name: "Insurance", icon: <Shield className="w-6 h-6" /> },
    { name: "Automotive", icon: <Target className="w-6 h-6" /> },
    { name: "SaaS", icon: <Cloud className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Target className="w-6 h-6" /> },
    { name: "Energy", icon: <Zap className="w-6 h-6" /> },
    { name: "Banking", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning-fast onboarding",
      description: "Get your team running in days, not weeks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pre-vetted, high-performing engineers",
      description: "Top 2% talent with proven track records"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Flexible engagement models",
      description: "Choose what works best for your business"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Transparent communication",
      description: "Clear reporting and milestone tracking"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Global Experts.
              </span>
              <br />
              Local Impact.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build your next big thing with top-tier remote software engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scale Faster, Build Smarter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help companies scale faster and smarter with elite software engineers and AI talent. 
              Whether you're launching a new product or augmenting your existing team, we bring speed, 
              skill, and flexibility to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Agentic AI to Salesforce development and legacy system modernization, 
              we offer end-to-end services designed to drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose what works best for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Product Teams</h3>
              <p className="text-gray-700 mb-6">
                Full-cycle, managed teams for long-term success. Get PMs, designers, engineers, 
                and QA in one complete package.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">End-to-end product development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Agile delivery & sprint planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Fixed cost or milestone-based</span>
                </li>
              </ul>
              <Link
                to="/engagement-models"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Augmentation</h3>
              <p className="text-gray-700 mb-6">
                Plug in expert engineers to scale fast. Get vetted talent across all tech stacks 
                with full control and no overhead.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Onboard in days, not weeks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Top 2% engineers worldwide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Flexible scaling options</span>
                </li>
              </ul>
              <Link
                to="/engagement-models"
                className="text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring proven success across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow group">
                <div className="text-blue-600 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8">
            "We partnered with PrescienTech for a rapid MVP build. Their team delivered ahead of schedule and exceeded every expectation."
          </blockquote>
          <div className="text-blue-100">
            <p className="font-semibold">Head of Product</p>
            <p>Leading Fintech Startup</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got a project in mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's talk about how we can help you build something amazing.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;