import React from 'react';
import { Award, Users, Target } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ReasonCard
            icon={<Award />}
            title="Rich Industry Experience"
            description="For our exceptional quality, reliable services, and customer satisfaction, making us the ideal partner for your needs."
          />
          <ReasonCard
            icon={<Users />}
            title="Consultative Approach"
            description="Our consultative approach ensures personalized solutions tailored to your specific requirements, guaranteeing success."
          />
          <ReasonCard
            icon={<Target />}
            title="Services Is Our Core"
            description="As a company, our core focus is on delivering exceptional services, prioritizing customer satisfaction."
          />
        </div>
      </div>
    </section>
  );
}

const ReasonCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);