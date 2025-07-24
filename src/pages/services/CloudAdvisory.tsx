import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, DollarSign, TrendingUp, CheckCircle, Target } from 'lucide-react';

const CloudAdvisory: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Migration strategies",
      description: "Comprehensive plans for moving to cloud infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Platform evaluation",
      description: "Expert assessment of AWS, Azure, and GCP for your needs"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost optimization",
      description: "Strategies to reduce cloud spending without sacrificing performance"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Architecture audits",
      description: "Comprehensive review of existing cloud implementations"
    }
  ];

  const benefits = [
    "Reduce cloud costs by 30-50%",
    "Improve system performance and reliability",
    "Enhance security and compliance posture",
    "Accelerate time-to-market for new features",
    "Increase operational efficiency",
    "Enable better scalability and flexibility"
  ];

  const platforms = [
    {
      name: "Amazon Web Services (AWS)",
      strengths: ["Mature ecosystem", "Extensive service catalog", "Global infrastructure", "Enterprise features"],
      bestFor: "Large enterprises, complex workloads, mature DevOps teams"
    },
    {
      name: "Microsoft Azure",
      strengths: ["Enterprise integration", "Hybrid cloud solutions", "Microsoft ecosystem", "AI/ML services"],
      bestFor: "Microsoft-centric organizations, hybrid environments, enterprise applications"
    },
    {
      name: "Google Cloud Platform (GCP)",
      strengths: ["Data analytics", "Machine learning", "Developer tools", "Cost-effective pricing"],
      bestFor: "Data-driven companies, AI/ML projects, containerized applications"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-green-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 p-4 rounded-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Cloud Advisory
              </span><br />
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Make informed cloud decisions with expert guidance on migration strategies, platform 
              selection, and cost optimization that drives business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-green-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Cloud Strategy</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all"
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
                Navigate the Cloud with Confidence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The cloud offers tremendous opportunities, but choosing the right strategy can be complex. 
                Our cloud advisory services help you make informed decisions about migration, platform 
                selection, and optimization that align with your business goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From initial assessment to ongoing optimization, we provide the expertise you need to 
                maximize your cloud investment and avoid common pitfalls.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">Average 40% cost reduction for clients</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cloud Advisory Benefits</h3>
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
              Our Cloud Advisory Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guidance for every stage of your cloud journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-teal-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platform Evaluation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert assessment of major cloud platforms to find the best fit for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{platform.name}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Strengths:</h4>
                  <ul className="space-y-1">
                    {platform.strengths.map((strength, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-teal-600 rounded-full"></div>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-1">Best For:</h4>
                  <p className="text-sm text-gray-600">{platform.bestFor}</p>
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
              Our Advisory Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to cloud strategy and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate current infrastructure and business requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Develop comprehensive cloud strategy and roadmap</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Create detailed migration and implementation plans</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Ongoing monitoring and optimization recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Cost Optimization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategies to reduce cloud spending while maintaining or improving performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Right-Sizing</h3>
              <p className="text-gray-600">Optimize resource allocation based on actual usage patterns</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reserved Instances</h3>
              <p className="text-gray-600">Strategic use of reserved capacity for predictable workloads</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Governance</h3>
              <p className="text-gray-600">Implement policies and controls to prevent cost overruns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Strategy?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let our cloud experts help you make the right decisions for your business and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Cloud Assessment
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudAdvisory;