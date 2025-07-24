import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const AIAdoption: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI strategy workshops",
      description: "Identify AI opportunities aligned with business goals"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "LLM integrations",
      description: "Seamlessly integrate large language models into workflows"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive & generative models",
      description: "Custom AI models tailored to your specific data and use cases"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom AI solutions",
      description: "End-to-end AI development for unique business challenges"
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40-60%",
    "Reduce manual processing time",
    "Improve decision-making with data insights",
    "Automate repetitive tasks",
    "Enhance customer experience",
    "Drive innovation and competitive advantage"
  ];

  const useCases = [
    {
      category: "Customer Service",
      applications: ["Intelligent chatbots", "Automated ticket routing", "Sentiment analysis", "Response generation"]
    },
    {
      category: "Sales & Marketing",
      applications: ["Lead scoring", "Content generation", "Campaign optimization", "Customer segmentation"]
    },
    {
      category: "Operations",
      applications: ["Process automation", "Quality control", "Predictive maintenance", "Resource optimization"]
    },
    {
      category: "Finance",
      applications: ["Fraud detection", "Risk assessment", "Automated reporting", "Document processing"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Adoption
              </span><br />
              for Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Future-proof your business with AI integration. Strategic implementation of AI technologies 
              into your existing workflows and processes for maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
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
                Transform Your Business with AI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AI isn't just a buzzword – it's a transformative force that can revolutionize how your 
                business operates. We help enterprises identify the right AI opportunities and implement 
                solutions that deliver measurable results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From automating routine tasks to providing predictive insights, our AI adoption services 
                help you stay competitive in an increasingly digital world.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ROI Focused</h3>
                  <p className="text-gray-600">Average 3x ROI within 12 months</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Adoption Benefits</h3>
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
              Our AI Adoption Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI implementation services designed for enterprise needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-indigo-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Use Cases Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world applications where AI drives business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.applications.map((app, idx) => (
                    <div key={idx} className="bg-white rounded p-3 text-sm text-gray-700">
                      {app}
                    </div>
                  ))}
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
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to successful AI adoption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate current processes and identify AI opportunities</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Develop comprehensive AI roadmap and implementation plan</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Build and deploy AI solutions with minimal disruption</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Monitor performance and continuously improve AI systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our AI adoption implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-gray-600 mb-2">Reduction in Processing Time</div>
              <div className="text-sm text-gray-500">Financial Services Client</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600 mb-2">Increase in Lead Conversion</div>
              <div className="text-sm text-gray-500">SaaS Platform Client</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
              <div className="text-gray-600 mb-2">Accuracy in Fraud Detection</div>
              <div className="text-sm text-gray-500">E-commerce Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Don't let your competition get ahead. Start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule AI Assessment
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

export default AIAdoption;