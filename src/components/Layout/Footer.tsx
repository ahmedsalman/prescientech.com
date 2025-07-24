import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PrescienTech</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Global experts delivering elite software engineering and AI solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@prescientech.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/agentic-ai" className="text-gray-400 hover:text-white transition-colors">Agentic AI Development</Link></li>
              <li><Link to="/services/salesforce-development" className="text-gray-400 hover:text-white transition-colors">Salesforce Development</Link></li>
              <li><Link to="/services/zero-to-mvp" className="text-gray-400 hover:text-white transition-colors">Zero to MVP</Link></li>
              <li><Link to="/services/cloud-devops" className="text-gray-400 hover:text-white transition-colors">Cloud DevOps</Link></li>
              <li><Link to="/services/legacy-modernization" className="text-gray-400 hover:text-white transition-colors">Legacy Modernization</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries/fintech" className="text-gray-400 hover:text-white transition-colors">Fintech</Link></li>
              <li><Link to="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/saas" className="text-gray-400 hover:text-white transition-colors">SaaS Platforms</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/engagement-models" className="text-gray-400 hover:text-white transition-colors">Engagement Models</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 PrescienTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;