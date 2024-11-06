import Navbar from '@/app/Components/Navbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200/70">
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-8">Welcome to Waffle</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          the blog where your stories, thoughts, and experiences come to life! This is a space for every idea,
          whether you're sharing a fun story, an inspiring article, or simply your unique perspective
          with the online world. Waffle is here to welcome you every step of the way!
          Start your writing journey with us today, and let your creativity shine for all to see.
        </p>
        <button
          onClick={() => navigate('/home')}
          className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Started
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </main>
    </div>
  );
};

export default Landing; 