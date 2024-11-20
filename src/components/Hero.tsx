import React from 'react';
import { ArrowRight, Shield, Cloud, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Digital
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {' '}Transformation{' '}
              </span>
              Partner
            </h1>
            
            <p className="text-xl text-gray-600">
              Secure your digital future with our comprehensive cybersecurity solutions,
              cloud transformation services, and expert consulting.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg transition-all">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="border-2 border-gray-300 px-8 py-3 rounded-full hover:border-blue-500 transition-all">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <ServiceCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Cyber Security"
              description="Advanced threat protection and security solutions"
              link="/services/cyber-security"
            />
            <ServiceCard
              icon={<Cloud className="w-8 h-8 text-cyan-500" />}
              title="Cloud Solutions"
              description="Seamless digital transformation and cloud services"
              link="/services/cloud"
            />
            <ServiceCard
              icon={<Code className="w-8 h-8 text-purple-500" />}
              title="Development"
              description="Custom software and application development"
              link="/development"
            />
            <ServiceCard
              title="Security Audit"
              description="Comprehensive security assessment and consulting"
              icon={<Shield className="w-8 h-8 text-green-500" />}
              link="/services/audit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="space-y-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </Link>
);