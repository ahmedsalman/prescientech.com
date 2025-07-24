import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EngagementModels from './pages/EngagementModels';
import AgenticAI from './pages/services/AgenticAI';
import SalesforceDevPage from './pages/services/SalesforceDevPage';
import ApplicationArchitecture from './pages/services/ApplicationArchitecture';
import ZeroToMVP from './pages/services/ZeroToMVP';
import AIAdoption from './pages/services/AIAdoption';
import DataAnalytics from './pages/services/DataAnalytics';
import BusinessAnalysis from './pages/services/BusinessAnalysis';
import CloudAdvisory from './pages/services/CloudAdvisory';
import CloudDevOps from './pages/services/CloudDevOps';
import SoftwareMigration from './pages/services/SoftwareMigration';
import LegacyModernization from './pages/services/LegacyModernization';
import Fintech from './pages/industries/Fintech';
import Healthcare from './pages/industries/Healthcare';
import Insurance from './pages/industries/Insurance';
import Automotive from './pages/industries/Automotive';
import SaaS from './pages/industries/SaaS';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/engagement-models" element={<EngagementModels />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/agentic-ai" element={<AgenticAI />} />
          <Route path="/services/salesforce-development" element={<SalesforceDevPage />} />
          <Route path="/services/application-architecture" element={<ApplicationArchitecture />} />
          <Route path="/services/zero-to-mvp" element={<ZeroToMVP />} />
          <Route path="/services/ai-adoption" element={<AIAdoption />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/business-analysis" element={<BusinessAnalysis />} />
          <Route path="/services/cloud-advisory" element={<CloudAdvisory />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/software-migration" element={<SoftwareMigration />} />
          <Route path="/services/legacy-modernization" element={<LegacyModernization />} />
          
          {/* Industry Pages */}
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/saas" element={<SaaS />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;