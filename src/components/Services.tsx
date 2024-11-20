import React from 'react';
import { Shield, Cloud, FileSearch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Solutions & Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Shield />}
            title="Cyber Security Solutions"
            description="Implement both traditional and advanced cybersecurity solutions to comprehensively secure your users, network, applications, data, and mobile apps effectively."
            gradient="from-blue-600 to-blue-400"
            link="/services/cyber-security"
          />
          <ServiceCard
            icon={<Cloud />}
            title="Digital Transformation & Cloud"
            description="Empowering businesses to seamlessly transition to the cloud and navigate their digital transformation through expert consultation and facilitation."
            gradient="from-cyan-500 to-cyan-300"
            link="/services/digital-transformation"
          />
          <ServiceCard
            icon={<FileSearch />}
            title="Security Consulting & Audit"
            description="Help organizations to meet regulatory compliance, industry standards like ISO 27001, security assessment of your network, applications and cloud infrastructure"
            gradient="from-purple-600 to-purple-400"
            link="/services/security-consulting"
          />
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description, gradient, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  link: string;
}) => (
  <Link to={link} className="block group">
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      <div className="p-8 space-y-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors">
          <span>Know More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </Link>
);