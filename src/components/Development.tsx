import React from 'react';
import { Code, Smartphone, Bot, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Development() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Development Services</h2>
          <p className="text-xl text-gray-600">
            From custom web applications to mobile solutions and AI tools, we bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DevCard
            icon={<Code />}
            title="Website Development"
            description="Custom websites built with modern technologies and best practices"
            link="/development/web"
            gradient="from-blue-600 to-blue-400"
          />
          <DevCard
            icon={<Smartphone />}
            title="App Development"
            description="Native and cross-platform mobile applications"
            link="/development/app"
            gradient="from-purple-600 to-purple-400"
          />
          <DevCard
            icon={<Bot />}
            title="AI Solutions"
            description="Custom AI tools and automation solutions"
            link="/development/ai"
            gradient="from-cyan-500 to-cyan-300"
          />
          <DevCard
            icon={<Rocket />}
            title="Startup Solutions"
            description="Complete tech solutions for startups"
            link="/development/startup"
            gradient="from-green-600 to-green-400"
          />
        </div>
      </div>
    </section>
  );
}

const DevCard = ({ icon, title, description, link, gradient }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  gradient: string;
}) => (
  <Link to={link} className="block group">
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-300 hover:shadow-xl">
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="text-blue-600 font-medium group-hover:text-blue-700">Learn More →</div>
    </div>
  </Link>
);