import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Zap, Smartphone, Cog, CheckCircle, Gauge } from 'lucide-react';

const Automotive: React.FC = () => {
  const challenges = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Connected Vehicles",
      description: "Integrate IoT and connectivity features for modern vehicle experiences"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Modernize traditional automotive processes with digital solutions"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Manufacturing Efficiency",
      description: "Optimize production lines and supply chain management"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Autonomous Systems",
      description: "Develop software for autonomous and semi-autonomous vehicle features"
    }
  ];

  const solutions = [
    {
      title: "Connected Car Platforms",
      description: "IoT-enabled vehicle connectivity and telematics solutions",
      features: ["Vehicle diagnostics", "Remote monitoring", "OTA updates", "Fleet management"]
    },
    {
      title: "Manufacturing Systems",
      description: "Smart manufacturing and Industry 4.0 solutions for automotive production",
      features: ["Production optimization", "Quality control", "Supply chain", "Predictive maintenance"]
    },
    {
      title: "Dealer Management Systems",
      description: "Comprehensive platforms for automotive dealership operations",
      features: ["Inventory management", "Sales tracking", "Service scheduling", "Customer CRM"]
    },
    {
      title: "Mobility Solutions",
      description: "Next-generation mobility and transportation platforms",
      features: ["Ride sharing", "Fleet optimization", "Route planning", "Payment integration"]
    }
  ];

  const benefits = [
    "Improve vehicle connectivity and user experience",
    "Optimize manufacturing processes and efficiency",
    "Enhance dealer and customer relationships",
    "Enable predictive maintenance and diagnostics",
    "Accelerate time-to-market for new features",
    "Reduce operational costs and waste"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-2xl">
                <Car className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Automotive
              </span><br />
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Drive innovation in the automotive industry with connected vehicle solutions, 
              smart manufacturing systems, and next-generation mobility platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Drive Innovation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all"
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
              Automotive Industry Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The automotive industry is undergoing rapid transformation with new technologies and changing consumer expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-orange-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
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
              Our Automotive Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions for the modern automotive ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-orange-50 text-orange-700 rounded p-2 text-sm">
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
                Why Choose PrescienTech for Automotive?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the complex requirements of the automotive industry, from safety-critical 
                systems to high-volume manufacturing and evolving mobility trends.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Gauge className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Automotive Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of automotive standards</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
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

      {/* Automotive Segments */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automotive Segments We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different areas of the automotive industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">OEMs & Manufacturers</h3>
              <p className="text-gray-600">Vehicle manufacturers and original equipment suppliers</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Cog className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tier 1 Suppliers</h3>
              <p className="text-gray-600">Component and system suppliers to automotive manufacturers</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobility Services</h3>
              <p className="text-gray-600">Ride-sharing, fleet management, and transportation services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automotive Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real impact from our automotive technology implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-600 mb-2">Production Efficiency</div>
              <div className="text-sm text-gray-500">Improvement with smart manufacturing</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
              <div className="text-gray-600 mb-2">Vehicle Uptime</div>
              <div className="text-sm text-gray-500">With predictive maintenance system</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-gray-600 mb-2">Faster Development</div>
              <div className="text-sm text-gray-500">Connected vehicle feature deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Drive Automotive Innovation?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Transform your automotive business with cutting-edge technology solutions that enhance efficiency and customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Automotive Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automotive;