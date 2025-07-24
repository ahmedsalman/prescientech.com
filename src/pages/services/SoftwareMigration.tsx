import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Shield, Clock, Target, CheckCircle, TrendingUp } from 'lucide-react';

const SoftwareMigration: React.FC = () => {
  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Migration planning",
      description: "Comprehensive assessment and strategic migration roadmaps"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Legacy system transition",
      description: "Seamless transition from legacy to modern technology stacks"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Minimal downtime execution",
      description: "Strategic migration with minimal business disruption"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk mitigation",
      description: "Comprehensive risk assessment and mitigation strategies"
    }
  ];

  const benefits = [
    "Minimize business disruption during migration",
    "Preserve data integrity and system functionality",
    "Reduce migration risks and unexpected costs",
    "Accelerate time-to-value with new systems",
    "Ensure compliance and security standards",
    "Enable future scalability and growth"
  ];

  const migrationTypes = [
    {
      title: "Cloud Migration",
      description: "Move applications and data from on-premises to cloud platforms",
      examples: ["AWS migration", "Azure migration", "Multi-cloud strategy", "Hybrid cloud setup"]
    },
    {
      title: "Platform Migration",
      description: "Transition between different technology platforms and frameworks",
      examples: [".NET to Java", "Monolith to microservices", "Database migration", "Framework upgrades"]
    },
    {
      title: "Data Migration",
      description: "Secure transfer of data between systems and databases",
      examples: ["Database consolidation", "Data warehouse migration", "ETL modernization", "Real-time sync"]
    },
    {
      title: "Application Migration",
      description: "Move entire applications to new environments or architectures",
      examples: ["Legacy app modernization", "Container migration", "API migration", "Mobile app migration"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl">
                <Database className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Software Migration
              </span><br />
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Minimize risk and maximize performance with comprehensive migration planning and execution 
              strategies that ensure smooth transitions to modern systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Plan Your Migration</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-all"
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
                Seamless System Transitions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Software migration is complex and risky, but it's often necessary for business growth 
                and modernization. Our migration experts have successfully moved hundreds of systems 
                with minimal downtime and maximum data integrity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We use proven methodologies, comprehensive testing, and phased rollout strategies to 
                ensure your migration succeeds while keeping your business running smoothly.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Success</h3>
                  <p className="text-gray-600">99.5% successful migration rate</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Migration Benefits</h3>
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
              Our Migration Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end migration services designed to minimize risk and maximize success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-yellow-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Migration We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive migration services across all technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="bg-white rounded p-2 text-sm text-gray-700">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful migrations with minimal risk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive analysis of current systems and requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed migration strategy and timeline development</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Environment setup and data preparation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing in staging environments</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Phased migration with continuous monitoring</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                6
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Validation</h3>
              <p className="text-gray-600 text-sm">Post-migration validation and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Risk Mitigation Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive approaches to minimize migration risks and ensure success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-600">Multiple backup strategies and data validation checkpoints</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rollback Plans</h3>
              <p className="text-gray-600">Comprehensive rollback procedures for quick recovery</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phased Approach</h3>
              <p className="text-gray-600">Gradual migration to minimize impact and validate each step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Migration Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our migration projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">2 hours</div>
              <div className="text-gray-600 mb-2">Total Downtime</div>
              <div className="text-sm text-gray-500">Enterprise ERP Migration</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 mb-2">Data Integrity</div>
              <div className="text-sm text-gray-500">Database Migration Project</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">60%</div>
              <div className="text-gray-600 mb-2">Performance Improvement</div>
              <div className="text-sm text-gray-500">Cloud Migration Result</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Migrate with Confidence?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let our migration experts help you transition to modern systems safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Migration
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareMigration;