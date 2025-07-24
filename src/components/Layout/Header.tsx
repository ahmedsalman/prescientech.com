import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Code, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow mouse to move to submenu
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };
  const services = [
    { name: 'Agentic AI Development', path: '/services/agentic-ai' },
    { name: 'Salesforce Development', path: '/services/salesforce-development' },
    { name: 'Application Architecture Design', path: '/services/application-architecture' },
    { name: 'Zero to MVP', path: '/services/zero-to-mvp' },
    { name: 'AI Adoption for Enterprises', path: '/services/ai-adoption' },
    { name: 'Data Analytics', path: '/services/data-analytics' },
    { name: 'Business Analysis Consulting', path: '/services/business-analysis' },
    { name: 'Cloud Advisory', path: '/services/cloud-advisory' },
    { name: 'Cloud DevOps Engineering', path: '/services/cloud-devops' },
    { name: 'Software Migration', path: '/services/software-migration' },
    { name: 'Legacy Software Modernization', path: '/services/legacy-modernization' },
  ];

  const industries = [
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Insurance', path: '/industries/insurance' },
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'SaaS Platforms', path: '/industries/saas' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PrescienTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.path}
                      to={industry.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/engagement-models"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/engagement-models') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Engagement Models
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all hover:scale-105"
            >
              Let's Build Together
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/engagement-models"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Engagement Models
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;