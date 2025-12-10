import React from 'react';
import { useState } from 'react';
import { Bot, MessageSquare, Calendar, ChevronRight, DollarSign, Clock, Users, ExternalLink } from 'lucide-react';
import ServicesPage from './components/ServicesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'services') {
    return <ServicesPage onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#121212] font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#121212]/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Bot className="w-8 h-8 text-[#003366]" />
              <span className="text-h4 font-bold text-white tracking-tight font-cursive">IZZY MAKES BOTS</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors font-semibold ${
                  currentPage === 'home' 
                    ? 'text-[#003366] border-b-2 border-[#003366] pb-1' 
                    : 'text-white hover:text-[#003366]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className={`transition-colors font-semibold ${
                  currentPage === 'services' 
                    ? 'text-[#003366] border-b-2 border-[#003366] pb-1' 
                    : 'text-white hover:text-[#003366]'
                }`}
              >
                Services
              </button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <spline-viewer url="https://prod.spline.design/8cxRi0yAVtO02Kub/scene.splinecode"></spline-viewer>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-h1 md:text-display font-bold text-white mb-8 tracking-tight font-cursive">
              The Future of Automation is Here!
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-bold">
              AI is here to stay and with my services your business has the potential to 10x join the wave, don't get left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Previous Client Work Section */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-center mb-16 text-white">Previous Client Work</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-gray-800 text-center">
              <div className="bg-[#121212] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <ExternalLink className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="text-h4 font-bold mb-4 text-white">TX Strong Freight</h3>
              <p className="text-body text-gray-400 mb-6 font-bold">
                A comprehensive freight and logistics website showcasing our web design capabilities
              </p>
              <a 
                href="https://txstrongfreight.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#003366] text-white px-6 py-3 rounded-full hover:bg-[#002244] transition-colors text-body font-bold"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-gray-800 text-center">
              <div className="bg-[#121212] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <ExternalLink className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="text-h4 font-bold mb-4 text-white">Texas Plumbing Solution</h3>
              <p className="text-body text-gray-400 mb-6 font-bold">
                Professional plumbing services website with modern design and user-friendly interface
              </p>
              <a 
                href="https://texasplumbingsolution.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#003366] text-white px-6 py-3 rounded-full hover:bg-[#002244] transition-colors text-body font-bold"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-center mb-16 text-white">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#003366]" />,
                title: "Fast Setup",
                description: "Start automating in days, not weeks"
              },
              {
                icon: <Users className="w-8 h-8 text-[#003366]" />,
                title: "24/7 Availability",
                description: "Our AI never sleeps, ensuring your business is always running"
              },
              {
                icon: <Bot className="w-8 h-8 text-[#003366]" />,
                title: "Tailored Solutions",
                description: "Custom AI systems to fit your business needs perfectly"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-[#003366]" />,
                title: "Scalable Growth",
                description: "As your business grows, so does our automation"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#121212] w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border border-gray-800">
                  {benefit.icon}
                </div>
                <h3 className="text-h4 font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-body text-gray-400 font-bold">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-8 h-8" />
              <span className="text-h4 font-bold tracking-tight font-cursive">IZZY MAKES BOTS</span>
            </div>
            <div className="text-right">
              <div className="text-[16px] font-cursive text-white mb-3 leading-relaxed">
                Contact Me
              </div>
              <div className="text-[16px] font-cursive text-white mb-3 leading-relaxed flex items-center justify-end">
                <span className="mr-2">☎️</span>
                (682) 472-8400
              </div>
              <a 
                href="mailto:israel.medrano218@icloud.com" 
                className="text-[16px] font-cursive text-gray-400 hover:text-white transition-colors leading-relaxed flex items-center justify-end"
              >
                <span className="mr-2">✉️</span>
                israel.medrano218@icloud.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;