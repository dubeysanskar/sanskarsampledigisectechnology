import React from 'react';
import { BookOpen, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Professional Courses</h2>
          <p className="text-xl text-gray-600">
            Enhance your skills with our industry-focused cybersecurity and development courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of cybersecurity, including threat detection and prevention",
    duration: "12 Weeks",
    students: "500+",
    level: "Beginner",
    price: "$499",
    link: "/courses/cyber-fundamentals"
  },
  {
    title: "Advanced Cloud Security",
    description: "Master cloud security principles and best practices",
    duration: "16 Weeks",
    students: "300+",
    level: "Advanced",
    price: "$699",
    link: "/courses/cloud-security"
  },
  {
    title: "Ethical Hacking",
    description: "Learn penetration testing and ethical hacking techniques",
    duration: "14 Weeks",
    students: "400+",
    level: "Intermediate",
    price: "$599",
    link: "/courses/ethical-hacking"
  }
];

const CourseCard = ({ title, description, duration, students, level, price, link }: {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  link: string;
}) => (
  <Link to={link} className="block group">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">{students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">{level}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">Certificate</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full group-hover:shadow-lg transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </Link>
);