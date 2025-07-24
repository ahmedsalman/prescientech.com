import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Database, BarChart3, Brain, CheckCircle, Target } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "BI dashboards",
      description: "Interactive dashboards for real-time business insights"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data engineering & warehousing",
      description: "Scalable data infrastructure and ETL pipelines"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ML model support",
      description: "Machine learning models for predictive analytics"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "KPI and predictive metric tracking",
      description: "Advanced analytics for business performance monitoring"
    }
  ];

  const benefits = [
    "Make data-driven decisions with confidence",
    "Identify trends and patterns early",
    "Optimize operations and reduce costs",
    "Improve customer insights and targeting",
    "Automate reporting and monitoring",
    "Scale analytics across the organization"
  ];

  const solutions = [
    {
      title: "Executive Dashboards",
      description: "High-level KPI tracking and business performance monitoring",
      features: ["Real-time metrics", "Executive summaries", "Trend analysis", "Performance alerts"]
    },
    {
      title: "Operational Analytics",
      description: "Day-to-day operational insights and process optimization",
      features: ["Process monitoring", "Efficiency metrics", "Resource utilization", "Quality tracking"]
    },
    {
      title: "Customer Analytics",
      description: "Deep customer insights and behavior analysis",
      features: ["Customer segmentation", "Churn prediction", "Lifetime value", "Journey mapping"]
    },
    {
      title: "Financial Analytics",
      description: "Financial performance and planning analytics",
      features: ["Revenue forecasting", "Cost analysis", "Budget tracking", "ROI measurement"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Data Analytics
              </span><br />
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform data into your competitive edge with comprehensive analytics, BI dashboards, 
              and predictive insights that drive informed business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Transform Your Data</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all"
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
                Turn Data Into Strategic Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your data contains valuable insights waiting to be discovered. Our analytics services 
                help you unlock the full potential of your data, from basic reporting to advanced 
                predictive modeling.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We build comprehensive analytics solutions that scale with your business, providing 
                the insights you need to make informed decisions and stay ahead of the competition.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">25% average improvement in decision speed</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Data Analytics?</h3>
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
              Our Analytics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end analytics solutions from data infrastructure to advanced insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-cyan-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Analytics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored analytics solutions for different business needs and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded p-2 text-sm text-gray-700">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies for reliable, scalable analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Infrastructure</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded p-2 text-sm">AWS / Azure / GCP</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Snowflake / BigQuery</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Apache Spark</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Kafka / Airflow</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & BI</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded p-2 text-sm">Tableau / Power BI</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Looker / Grafana</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Python / R</div>
                <div className="bg-gray-100 rounded p-2 text-sm">SQL / NoSQL</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded p-2 text-sm">TensorFlow / PyTorch</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Scikit-learn</div>
                <div className="bg-gray-100 rounded p-2 text-sm">MLflow / Kubeflow</div>
                <div className="bg-gray-100 rounded p-2 text-sm">Docker / Kubernetes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering actionable insights from your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand business goals and data requirements</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Assessment</h3>
              <p className="text-gray-600">Evaluate data quality, sources, and infrastructure</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Build analytics infrastructure and dashboards</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Refine insights and expand analytics capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Transform your data into actionable insights that drive business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Analytics Project
            </Link>
            <Link
              to="/engagement-models"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;