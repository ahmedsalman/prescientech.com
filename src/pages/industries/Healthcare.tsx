import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Database, CheckCircle, Activity } from 'lucide-react';

const Healthcare: React.FC = () => {
  const challenges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliance",
      description: "Ensure patient data privacy and security across all systems and processes"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Interoperability",
      description: "Integrate disparate healthcare systems and enable seamless data exchange"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Experience",
      description: "Improve patient engagement and care coordination through technology"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "Streamline workflows and reduce administrative burden on healthcare providers"
    }
  ];

  const solutions = [
    {
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive EHR systems with integrated patient management",
      features: ["Patient records", "Clinical workflows", "HIPAA compliance", "Interoperability"]
    },
    {
      title: "Telemedicine Platforms",
      description: "Secure video consultation and remote patient monitoring solutions",
      features: ["Video consultations", "Remote monitoring", "Prescription management", "Patient portals"]
    },
    {
      title: "Healthcare Analytics",
      description: "Data analytics platforms for population health and clinical insights",
      features: ["Clinical analytics", "Population health", "Predictive modeling", "Quality metrics"]
    },
    {
      title: "Medical Device Integration",
      description: "IoT and device integration for real-time patient monitoring",
      features: ["Device connectivity", "Real-time monitoring", "Alert systems", "Data aggregation"]
    }
  ];

  const benefits = [
    "Improve patient outcomes and care quality",
    "Ensure HIPAA compliance and data security",
    "Reduce operational costs and inefficiencies",
    "Enable better clinical decision-making",
    "Enhance patient engagement and satisfaction",
    "Streamline administrative processes"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Healthcare
              </span><br />
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with secure, compliant technology solutions that improve 
              patient outcomes and streamline clinical workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Transform Healthcare</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
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
              Healthcare Industry Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The healthcare industry faces unique technological challenges that require specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
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
              Our Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for healthcare organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 rounded p-2 text-sm">
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
                Why Choose PrescienTech for Healthcare?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the critical nature of healthcare technology and the importance of patient 
                safety, data security, and regulatory compliance in every solution we build.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">HIPAA Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of healthcare compliance</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
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

      {/* Compliance & Standards */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Compliance & Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We ensure your healthcare solutions meet all regulatory requirements and industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliance</h3>
              <p className="text-gray-600">Complete Health Insurance Portability and Accountability Act compliance</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HL7 FHIR</h3>
              <p className="text-gray-600">Fast Healthcare Interoperability Resources standard implementation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FDA Validation</h3>
              <p className="text-gray-600">Medical device software validation and FDA compliance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real impact from our healthcare technology implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600 mb-2">Reduced Admin Time</div>
              <div className="text-sm text-gray-500">With automated EHR workflows</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
              <div className="text-gray-600 mb-2">Patient Satisfaction</div>
              <div className="text-sm text-gray-500">With telemedicine platform</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600 mb-2">Faster Diagnosis</div>
              <div className="text-sm text-gray-500">With AI-powered analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to build secure, compliant healthcare technology solutions that improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Healthcare Project
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

export default Healthcare;