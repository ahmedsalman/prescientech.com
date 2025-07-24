import React from 'react';
import { Globe, Target, Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Trust through transparency",
      description: "We believe in open communication and honest reporting at every step of the journey."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Flexibility in collaboration",
      description: "We adapt to your working style and business needs, not the other way around."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results that matter",
      description: "Every line of code, every decision, every recommendation is focused on your success."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Technical Assessment",
      description: "Multi-step coding challenges and system design evaluations"
    },
    {
      step: "02",
      title: "Live Coding Sessions",
      description: "Real-time problem-solving with senior engineers"
    },
    {
      step: "03",
      title: "Soft Skills Interview",
      description: "Communication, collaboration, and cultural fit assessment"
    },
    {
      step: "04",
      title: "Client Matching",
      description: "Perfect alignment between engineer expertise and project needs"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">PrescienTech</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering businesses globally by delivering remote engineering excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We exist to bridge the gap between ambitious companies and world-class engineering talent. 
                In an increasingly connected world, geography should never limit your access to the best minds in technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is simple: empower businesses globally by delivering remote engineering excellence. 
                We believe that with the right talent, any company can build transformative products that shape the future.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Impact</h3>
                  <p className="text-gray-600">Connecting talent worldwide</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-blue-100">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">2%</div>
                    <div className="text-blue-100">Top Talent Selected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we select talent to how we deliver results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Talent Network */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Talent Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">North America</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Europe</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Asia Pacific</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Latin America</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Global Talent Network
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We've built relationships with the top 2% of engineers worldwide. Our network spans 
                every time zone, ensuring we can find the perfect match for your project requirements 
                and working preferences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Senior Level</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">5+ years average experience</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold text-gray-900">Proven Track Record</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Successful project delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every engineer in our network goes through a rigorous vetting process to ensure 
              they meet our high standards for technical excellence and professional collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work with the best?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies that trust PrescienTech for their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;