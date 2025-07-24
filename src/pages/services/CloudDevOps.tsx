import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cloud, Shield, Zap, CheckCircle, Target } from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "CI/CD automation",
      description: "Automated build, test, and deployment pipelines"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Kubernetes & Docker",
      description: "Container orchestration and microservices deployment"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Infrastructure as Code",
      description: "Terraform and CloudFormation implementations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 monitoring & alerts",
      description: "Proactive monitoring and incident response"
    }
  ];

  const benefits = [
    "Reduce deployment time by 90%",
    "Improve system reliability and uptime",
    "Accelerate feature delivery cycles",
    "Minimize manual errors and downtime",
    "Enable rapid scaling and recovery",
    "Enhance security and compliance"
  ];

  const tools = [
    {
      category: "CI/CD",
      items: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "CircleCI"]
    },
    {
      category: "Containerization",
      items: ["Docker", "Kubernetes", "OpenShift", "Amazon ECS", "Google Cloud Run"]
    },
    {
      category: "Infrastructure",
      items: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "AWS CDK"]
    },
    {
      category: "Monitoring",
      items: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-2xl">
                <Settings className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Cloud DevOps
              </span><br />
              Engineering
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build, ship, and scale with confidence using modern DevOps practices, automation, 
              and monitoring solutions that ensure reliability and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Automate Your Pipeline</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
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
                DevOps Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Modern software development requires seamless integration between development and operations. 
                Our DevOps engineers build automated pipelines, containerized applications, and monitoring 
                systems that enable rapid, reliable software delivery.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From CI/CD automation to Kubernetes orchestration, we implement DevOps practices that 
                reduce deployment risks, improve system reliability, and accelerate your development cycles.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Impact</h3>
                  <p className="text-gray-600">99.9% uptime for production systems</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DevOps Benefits</h3>
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
              Our DevOps Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive DevOps solutions for modern software development and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-gray-700 mb-4 flex justify-center group-hover:scale-110 transition-transform">
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
                Complete DevOps Solutions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CI/CD Automation</h3>
                  <p className="text-gray-600">
                    Automated build, test, and deployment pipelines that ensure code quality and 
                    enable rapid, reliable releases.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-700 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Container Orchestration</h3>
                  <p className="text-gray-600">
                    Kubernetes and Docker implementations for scalable, portable applications 
                    with automated scaling and health monitoring.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Management</h3>
                  <p className="text-gray-600">
                    Infrastructure as Code using Terraform and CloudFormation for consistent, 
                    repeatable deployments across environments.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-700 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Alerting</h3>
                  <p className="text-gray-600">
                    Comprehensive monitoring solutions with proactive alerting and incident response 
                    to ensure system reliability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DevOps Implementation Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-100 rounded-full p-2">
                    <span className="text-gray-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Assessment & Planning</h4>
                    <p className="text-sm text-gray-600">Evaluate current processes and create DevOps roadmap</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-200 rounded-full p-2">
                    <span className="text-gray-700 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pipeline Development</h4>
                    <p className="text-sm text-gray-600">Build automated CI/CD pipelines and testing frameworks</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-100 rounded-full p-2">
                    <span className="text-gray-700 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Infrastructure Setup</h4>
                    <p className="text-sm text-gray-600">Implement containerization and infrastructure as code</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-200 rounded-full p-2">
                    <span className="text-gray-700 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoring & Optimization</h4>
                    <p className="text-sm text-gray-600">Deploy monitoring solutions and optimize performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-100 rounded-full p-2">
                    <span className="text-gray-700 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Training & Handover</h4>
                    <p className="text-sm text-gray-600">Team training and knowledge transfer for ongoing maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies to build robust DevOps pipelines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tool.category}</h3>
                <div className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded p-2 text-sm text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our DevOps implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">90%</div>
              <div className="text-gray-600 mb-2">Faster Deployments</div>
              <div className="text-sm text-gray-500">Reduction in deployment time</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">99.9%</div>
              <div className="text-gray-600 mb-2">System Uptime</div>
              <div className="text-sm text-gray-500">Production system reliability</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">75%</div>
              <div className="text-gray-600 mb-2">Fewer Incidents</div>
              <div className="text-sm text-gray-500">Reduction in production issues</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">50%</div>
              <div className="text-gray-600 mb-2">Cost Savings</div>
              <div className="text-sm text-gray-500">Infrastructure cost reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your development and deployment processes with modern DevOps practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your DevOps Journey
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;