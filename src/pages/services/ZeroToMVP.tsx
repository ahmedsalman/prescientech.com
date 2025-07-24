import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Clock, CheckCircle, Rocket } from 'lucide-react';

const ZeroToMVP: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid prototyping",
      description: "Quick proof-of-concept development to validate ideas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Agile development sprints",
      description: "Fast-paced development cycles with regular feedback"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Early market validation",
      description: "Get user feedback before full product development"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Iteration support",
      description: "Continuous improvement based on user feedback"
    }
  ];

  const process = [
    {
      week: "Week 1",
      title: "Ideation & Planning",
      tasks: ["Requirements gathering", "Feature prioritization", "Technical architecture", "Development planning"]
    },
    {
      week: "Week 2-3",
      title: "Core Development",
      tasks: ["Essential features", "Basic UI/UX", "Core functionality", "Initial testing"]
    },
    {
      week: "Week 4-5",
      title: "Refinement & Testing",
      tasks: ["Feature polish", "User testing", "Performance optimization", "Bug fixes"]
    },
    {
      week: "Week 6",
      title: "Launch & Validation",
      tasks: ["Deployment setup", "Launch preparation", "User onboarding", "Feedback collection"]
    }
  ];

  const benefits = [
    "Validate your idea before major investment",
    "Reduce time-to-market by 70%",
    "Minimize development risks",
    "Attract investors with working prototype",
    "Get real user feedback early",
    "Establish product-market fit quickly"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Zero to MVP
              </span><br />
              in 6 Weeks
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Go from idea to market-ready product in weeks, not months. Rapid prototyping and agile 
              development to validate your concept and attract early users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your MVP</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all"
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
                Fast Track to Market
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's competitive landscape, speed matters. Our Zero to MVP service helps startups 
                and established companies quickly validate ideas, test market demand, and build momentum 
                with investors and early adopters.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We use proven methodologies and pre-built components to accelerate development while 
                maintaining quality and scalability. Your MVP becomes the foundation for future growth.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Success</h3>
                  <p className="text-gray-600">200+ successful MVP launches</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our MVP Service?</h3>
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

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to get from idea to market-ready product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-orange-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Week Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Week Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to building your MVP from concept to launch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {phase.week}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete deliverables that set you up for success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Working MVP</h3>
              <p className="text-gray-600">Fully functional product ready for user testing and feedback</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Source Code</h3>
              <p className="text-gray-600">Complete codebase with documentation for future development</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment Setup</h3>
              <p className="text-gray-600">Production-ready hosting and deployment configuration</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Documentation</h3>
              <p className="text-gray-600">Architecture overview and development guidelines</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Feedback Plan</h3>
              <p className="text-gray-600">Strategy for collecting and analyzing user feedback</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Roadmap</h3>
              <p className="text-gray-600">Recommendations for scaling and future development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fixed-price engagement with no hidden costs
          </p>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 border-2 border-orange-200">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-orange-600 mb-2">$25,000</div>
              <div className="text-gray-600">Complete MVP Development</div>
            </div>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">6-week development cycle</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dedicated team of 3-4 developers</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Complete source code ownership</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Production deployment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">2 weeks post-launch support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of successful startups who validated their ideas with our MVP service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your MVP Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Learn About Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeroToMVP;