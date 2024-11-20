import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Registered Address</h3>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Digisec Technologies</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <p>62 C, MIG, Sector-100, Noida, 201301</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contact@digisectechnologies.com" className="hover:text-white transition-colors">
                  contact@digisectechnologies.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:01204541812" className="hover:text-white transition-colors">
                  0120-4541812
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Pages</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Solutions & Services', 'Why Us', 'Blogs', 'Contact Us'].map((page) => (
                <li key={page}>
                  <Link to={`/${page.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-white transition-colors">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook />} href="#" />
              <SocialLink icon={<Linkedin />} href="#" />
              <SocialLink icon={<Youtube />} href="#" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p>Copyright © 2024 digisectechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    {icon}
  </a>
);