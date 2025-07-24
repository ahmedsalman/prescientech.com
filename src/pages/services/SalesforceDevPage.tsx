import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Database, Settings, CheckCircle, Target } from 'lucide-react';

const SalesforceDevPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Apex & Lightning Development",
      description: "Custom development using Salesforce's native programming languages"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AppExchange App Builds",
      description: "Complete applications ready for Salesforce's marketplace"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Integrations with 3rd party systems",
      description: "Seamless connectivity with your existing technology stack"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration & Management",
      description: "Safe and efficient data transfer and ongoing management"
    }
  ];

  const benefits = [
    "Increased sales productivity by 40%",
    "Streamlined business processes",
    "Improved customer relationship management",
    "Enhanced data visibility and reporting",
    "Automated workflow optimization",
    "Seamless integration capabilities"
  ];

  const industries = [
    { name: "Financial Services", description: "CRM solutions for banking and insurance" },
    { name: "Healthcare", description: "Patient management and care coordination" },
    { name: "Manufacturing", description: "Supply chain and customer management" },
    { name: "Retail", description: "Customer engagement and sales automation" },
    { name: "Real Estate", description: "Property and client relationship management" },
    { name: "Education", description: "Student and institutional management systems" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Salesforce
              </span><br />
              Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Custom Salesforce solutions built to scale your business operations and drive growth 
              through intelligent automation and integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Salesforce Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
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
                Unlock Salesforce's Full Potential
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Salesforce is powerful, but its true potential is realized through custom development 
                that aligns with your unique business processes. Our expert developers create solutions 
                that transform how you engage with customers and manage your operations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From custom Apex applications to Lightning components and AppExchange apps, 
                we build Salesforce solutions that grow with your business and deliver measurable ROI.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Certified Experts</h3>
                  <p className="text-gray-600">Salesforce certified developers and architects</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Custom Salesforce Development?</h3>
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
              Our Salesforce Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Salesforce development and support services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Salesforce Solutions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Development</h3>
                  <p className="text-gray-600">
                    Build custom objects, workflows, and applications using Apex, Lightning, and Visualforce 
                    to meet your specific business requirements.
                  </p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">System Integration</h3>
                  <p className="text-gray-600">
                    Connect Salesforce with your existing systems through APIs, middleware, and custom 
                    integration solutions for seamless data flow.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Management</h3>
                  <p className="text-gray-600">
                    Ensure data quality, implement governance policies, and manage complex data 
                    migrations with our proven methodologies.
                  </p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Comprehensive support including system administration, user training, 
                    and continuous optimization of your Salesforce environment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Development Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discovery & Analysis</h4>
                    <p className="text-sm text-gray-600">Understanding your business processes and requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 rounded-full p-2">
                    <span className="text-cyan-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Architecture Design</h4>
                    <p className="text-sm text-gray-600">Creating scalable and maintainable solution architecture</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Development & Testing</h4>
                    <p className="text-sm text-gray-600">Agile development with continuous testing and validation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 rounded-full p-2">
                    <span className="text-cyan-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deployment & Training</h4>
                    <p className="text-sm text-gray-600">Smooth deployment with comprehensive user training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-sm text-gray-600">Continuous optimization and support services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored Salesforce implementations that address unique industry challenges and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Salesforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how custom Salesforce development can drive your business growth and improve efficiency.
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

export default SalesforceDevPage;