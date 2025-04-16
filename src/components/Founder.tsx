import React from 'react';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Jagdeep Bhardwaj"
                className="relative z-10 rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform"
              />
            </div>
            <div className="space-y-6">
              <Quote className="w-12 h-12 text-blue-600" />
              <blockquote className="text-xl text-gray-600 leading-relaxed">
                At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. By embracing these values, we strive to exceed our customers' expectations, stay ahead of the competition, and drive our continued success.
              </blockquote>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Jagdeep Bhardwaj</h3>
                <p className="text-blue-600">Founder & Director, CodeDev Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
