import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, Clock, Shield, TrendingUp } from 'lucide-react';

const EngagementModels: React.FC = () => {
  const staffAugmentationBenefits = [
    "Vetted engineers across all tech stacks",
    "Onboard in days, not weeks",
    "Full control over project management",
    "No overhead costs or HR complexities",
    "Flexible scaling up or down",
    "Direct communication with engineers"
  ];

  const dedicatedTeamBenefits = [
    "Complete product development teams",
    "Project managers, designers, engineers, QA",
    "Agile delivery and sprint planning",
    "Fixed cost or milestone-based pricing",
    "Long-term partnership approach",
    "Transparent milestone tracking"
  ];

  const comparisonData = [
    {
      aspect: "Team Composition",
      staffAug: "Individual specialists",
      dedicated: "Full cross-functional teams"
    },
    {
      aspect: "Project Management",
      staffAug: "You manage directly",
      dedicated: "We provide PM included"
    },
    {
      aspect: "Best For",
      staffAug: "Specific skill gaps",
      dedicated: "Complete product builds"
    },
    {
      aspect: "Pricing Model",
      staffAug: "Hourly or monthly rates",
      dedicated: "Fixed project or milestone"
    },
    {
      aspect: "Communication",
      staffAug: "Direct with engineers",
      dedicated: "Through dedicated PM"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Engagement <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Models</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Choose the partnership model that best fits your needs, timeline, and business goals. 
              We're flexible and adapt to how you work best.
            </p>
          </div>
        </div>
      </section>

      {/* Main Engagement Models */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Staff Augmentation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Staff Augmentation</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Need to scale your team fast? We've got you covered with pre-vetted engineers 
                who integrate seamlessly with your existing team and processes.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Companies with existing development teams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Specific skill gaps in your current team</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Short to medium-term project needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">When you want direct control over management</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-2">
                  {staffAugmentationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started with Staff Augmentation
              </Link>
            </div>

            {/* Dedicated Product Teams */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-600 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Dedicated Product Teams</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Get a complete, managed team for end-to-end product development. We handle everything 
                from planning to delivery while you focus on your business.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Complete product development projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Startups building their first product</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Long-term product development partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">When you need a fully managed solution</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-2">
                  {dedicatedTeamBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
              >
                Get Started with Dedicated Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Comparison
            </h2>
            <p className="text-lg text-gray-600">
              At a glance: understand the key differences between our engagement models
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Aspect</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">Staff Augmentation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600">Dedicated Teams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.staffAug}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.dedicated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              From initial consultation to project delivery, here's how we work together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery Call</h3>
              <p className="text-gray-600">We understand your needs, goals, and technical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Assembly</h3>
              <p className="text-gray-600">We match the perfect engineers or team to your project</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Onboarding</h3>
              <p className="text-gray-600">Fast integration with your team and tools (1-2 weeks)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery & Support</h3>
              <p className="text-gray-600">Ongoing development with regular updates and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No hidden fees, no surprises. Just clear, upfront pricing that fits your budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Augmentation</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$50-120</div>
                <div className="text-gray-600">per hour, depending on seniority</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Junior: $50-70/hr</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Mid-level: $70-90/hr</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Senior: $90-120/hr</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Monthly contracts available with 15% discount</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Teams</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-teal-600 mb-2">$15k-40k</div>
                <div className="text-gray-600">per month, depending on team size</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Small team (3-4): $15-25k/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Medium team (5-7): $25-35k/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Large team (8+): $35k+/month</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Includes PM, design, development, and QA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still not sure which model is right for you?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's have a conversation about your specific needs and find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementModels;