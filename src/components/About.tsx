import React from 'react';
import { Shield, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 group">
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:translate-x-2 transition-transform">
                Our Vision
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-32 transition-all"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be a Trusted Digital Transformation Partners for our customers.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:translate-x-2 transition-transform">
                Our Mission
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-32 transition-all"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be a growth partner by transforming, managing and securing digital footprint of our customers.
            </p>
          </div>
        </div>

        {/* Main About Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform -skew-y-6"></div>
          <div className="relative z-10 py-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">About Digisec Technologies</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We proudly present our dedication to safeguarding your digital dreams. As a leading Cyber Security Solutions provider, we offer a comprehensive range of services and products tailored to your needs.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <AboutCard
                  icon={<Shield className="w-8 h-8" />}
                  title="Security Expertise"
                  description="Specialized in various domains from Data Security to Cloud Security"
                />
                <AboutCard
                  icon={<Target className="w-8 h-8" />}
                  title="Business Focus"
                  description="Understanding your objectives to craft the perfect digital roadmap"
                />
                <AboutCard
                  icon={<Rocket className="w-8 h-8" />}
                  title="Comprehensive Solutions"
                  description="From Cloud solutions to IT infrastructure and Software Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AboutCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);