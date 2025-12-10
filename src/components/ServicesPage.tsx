import React from 'react';
import { Bot, MessageSquare, Calendar, Globe, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigateHome: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateHome }) => {
  const services = [
    {
      icon: <MessageSquare className="w-12 h-12 text-[#003366]" />,
      title: "AI Customer Support Chat Agents",
      description: "Transform your customer service with intelligent AI agents that provide 24/7 support, understand context, and deliver personalized responses.",
      features: [
        "24/7 automated customer support",
        "Natural language processing",
        "Multi-language support",
        "Integration with existing systems",
        "Real-time analytics and reporting"
      ],
      benefits: "Reduce response times by 90% and increase customer satisfaction while cutting support costs."
    },
    {
      icon: <Calendar className="w-12 h-12 text-[#003366]" />,
      title: "AI Appointment Scheduling",
      description: "Streamline your booking process with intelligent scheduling that handles appointments, cancellations, and rescheduling automatically.",
      features: [
        "Automated appointment booking",
        "Calendar integration",
        "SMS and email confirmations",
        "Conflict resolution",
        "Customer preference learning"
      ],
      benefits: "Eliminate double bookings and reduce no-shows by 60% with smart scheduling optimization."
    },
    {
      icon: <Globe className="w-12 h-12 text-[#003366]" />,
      title: "Website Design & Development",
      description: "Create stunning, responsive websites that serve as your digital business card and drive conversions with modern design principles.",
      features: [
        "Responsive mobile-first design",
        "SEO optimization",
        "Fast loading performance",
        "Content management systems",
        "E-commerce integration"
      ],
      benefits: "Increase online presence and convert 40% more visitors into customers with professional web design."
    },
    {
      icon: <Bot className="w-12 h-12 text-[#003366]" />,
      title: "AI App Development",
      description: "Custom AI-powered applications that leverage machine learning and automation to solve complex business challenges and drive growth.",
      features: [
        "Custom AI model development",
        "Data processing and analytics",
        "Workflow automation",
        "API integrations",
        "Scalable cloud deployment"
      ],
      benefits: "Automate complex processes and gain competitive advantage with cutting-edge AI technology."
    }
  ];

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
                onClick={onNavigateHome}
                className="text-white hover:text-[#003366] transition-colors font-semibold"
              >
                Home
              </button>
              <button 
                className="text-[#003366] border-b-2 border-[#003366] pb-1 transition-colors font-semibold"
              >
                Services
              </button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <spline-viewer url="https://prod.spline.design/8cxRi0yAVtO02Kub/scene.splinecode"></spline-viewer>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-h1 md:text-display font-bold text-white mb-8 tracking-tight font-cursive">
            Transform Your Business with Our Premium AI Solutions
          </h1>
          <p className="text-body text-gray-300 max-w-3xl mx-auto leading-relaxed font-bold">
            Discover our comprehensive suite of cutting-edge services designed to elevate your business operations and customer experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                icon: <MessageSquare className="w-12 h-12 text-[#003366]" />,
                emoji: "🤖",
                title: "AI Customer Support Chat Agents",
                subtitle: "24/7 Intelligent Customer Care",
                description: "Experience seamless customer service with our custom-built AI chat agents. Designed specifically for your business, these intelligent assistants provide round-the-clock support, ensuring 100% quality customer interactions while you focus on growing your business.",
                benefits: "Always available • Personalized responses • Consistent quality"
              },
              {
                icon: <Calendar className="w-12 h-12 text-[#003366]" />,
                emoji: "📅",
                title: "AI Appointment Scheduling",
                subtitle: "Effortless Booking Made Simple",
                description: "Say goodbye to manual scheduling headaches. Our intelligent appointment scheduling system streamlines your booking process, making it smooth and intuitive for both you and your clients. Let AI handle the logistics while you focus on delivering exceptional service.",
                benefits: "Automated scheduling • Reduced no-shows • Time optimization"
              },
              {
                icon: <Bot className="w-12 h-12 text-[#003366]" />,
                emoji: "🎨",
                title: "Professional Website Design",
                subtitle: "Your Digital Business Card, Perfected",
                description: "In today's digital landscape, first impressions are everything. We craft stunning, fully automated websites that serve as powerful business cards, perfectly tailored to your vision and brand identity. Transform your online presence and captivate your audience from the first click.",
                benefits: "Custom design • Mobile responsive • Brand-focused"
              },
              {
                icon: <Bot className="w-12 h-12 text-[#003366]" />,
                emoji: "📱",
                title: "AI App Development",
                subtitle: "Next-Generation Mobile & Web Applications",
                description: "Harness the power of artificial intelligence with our custom-built applications. From intelligent data processing to automated workflows, we develop cutting-edge mobile and web apps that leverage the latest AI technologies to give your business an unmatched competitive advantage.",
                benefits: "AI-powered features • Scalable solutions • Future-ready technology"
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#121212] p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#003366]/30">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#1A1A1A] w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{service.emoji}</span>
                      <h3 className="text-h3 font-bold text-white">{service.title}</h3>
                    </div>
                    <h4 className="text-h4 font-semibold text-[#003366] mb-4">{service.subtitle}</h4>
                    <p className="text-body text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-700">
                      <p className="text-small text-gray-400 italic">
                        <span className="text-[#003366] font-semibold">Key Benefits:</span> {service.benefits}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold text-white mb-6 tracking-tight font-cursive">
            Ready to revolutionize your business?
          </h2>
          <p className="text-body text-gray-300 mb-10 leading-relaxed font-bold">
            Contact us today to discuss your project and discover how our AI solutions can transform your operations.
          </p>
          <div className="text-center">
            <div className="text-h4 font-cursive text-white mb-6 leading-relaxed">
              Contact Me
            </div>
            <div className="text-body font-cursive text-white mb-4 leading-relaxed flex items-center justify-center">
              <span className="mr-3">☎️</span>
              (682) 472-8400
            </div>
            <a 
              href="mailto:israel.medrano218@icloud.com" 
              className="text-body font-cursive text-gray-400 hover:text-white transition-colors leading-relaxed flex items-center justify-center"
            >
              <span className="mr-3">✉️</span>
              israel.medrano218@icloud.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;