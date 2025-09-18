import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Star, Award, Users, Calendar, Globe, Building, FileText, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMagnetic, use3DTilt, useScrollReveal, useRipple } from "@/hooks/useAdvancedAnimations";
import AnimatedContactCard from "@/components/AnimatedContactCard";
import ParticleSystem from "@/components/ParticleSystem";

const Connect = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    partnerships: 0,
    responses: 0,
    satisfaction: 0
  });

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
    timeline: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targets = { partnerships: 150, responses: 24, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateNumber = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    setTimeout(() => animateNumber('partnerships', targets.partnerships), 400);
    setTimeout(() => animateNumber('responses', targets.responses), 600);
    setTimeout(() => animateNumber('satisfaction', targets.satisfaction), 800);
  }, []);

  const contactMethods = [
    {
      id: "business",
      title: "Business",
      subtitle: "Inquiries",
      email: "info@mapsinternational.qa",
      icon: <Building className="w-6 h-6" />,
      color: "magenta",
      description: "General business inquiries and information"
    },
    {
      id: "partnerships",
      title: "Partnership",
      subtitle: "Opportunities",
      email: "partnerships@mapsinternational.qa",
      icon: <Award className="w-6 h-6" />,
      color: "teal",
      description: "Corporate and institutional partnerships"
    },
    {
      id: "press",
      title: "Press and",
      subtitle: "Media",
      email: "press@mapsinternational.qa",
      icon: <FileText className="w-6 h-6" />,
      color: "cta",
      description: "Media inquiries and press releases"
    },
    {
      id: "artists",
      title: "Artist",
      subtitle: "Applications",
      email: "artists@mapsinternational.qa",
      icon: <Star className="w-6 h-6" />,
      color: "accent",
      description: "Artist applications and portfolio submissions"
    },
    {
      id: "youth",
      title: "Youth",
      subtitle: "Programs",
      email: "youth@mapsinternational.qa",
      icon: <Heart className="w-6 h-6" />,
      color: "magenta",
      description: "Youth program registrations and participation"
    }
  ];

  const ctaButtons = [
    { id: "sponsor", label: "Sponsor", icon: <Star className="w-5 h-5" />, color: "magenta" },
    { id: "partner", label: "Partner", icon: <Award className="w-5 h-5" />, color: "teal" },
    { id: "artist", label: "Artist", icon: <Users className="w-5 h-5" />, color: "accent" },
    { id: "youth", label: "Youth", icon: <Heart className="w-5 h-5" />, color: "cta" },
    { id: "press", label: "Press", icon: <FileText className="w-5 h-5" />, color: "teal" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", organization: "", email: "", message: "", timeline: "" });
    setActiveForm(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Particle System Background */}
      <ParticleSystem 
        particleCount={40} 
        colors={['#e91e63', '#00bcd4', '#ff9800', '#4caf50']}
        mouseInteraction={true}
      />
      
      {/* Enhanced Hero Section */}
      <section className="h-[50vh] bg-dark flex items-center justify-center py-20 relative overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              className="font-bold text-white mb-8 text-shimmer leading-none text-5xl"
            >
              Connect
            </h1>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-teal mb-6">
                Let's Build Something Extraordinary
              </h2>
            </div>
            
            <p 
              className="text-white/90 leading-relaxed max-w-4xl mx-auto mb-12 text-xl"
            >
              Join our mission to connect cultures, empower youth, and create lasting impact across 70+ countries.
            </p>
            
            {/* Hero Stats */}
            <div className="flex justify-center gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.partnerships}+
                </div>
                <div className="text-white/70 text-sm font-medium">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.responses}h
                </div>
                <div className="text-white/70 text-sm font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.satisfaction}%
                </div>
                <div className="text-white/70 text-sm font-medium">Satisfaction</div>
              </div>
            </div>

            {/* Glassmorphism Value Proposition Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Globe className="w-6 h-6 text-magenta" />
                <h3 className="text-xl font-semibold text-white">Why Partner With MAPS?</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                We're not just another cultural organization. We're architects of meaningful change, connecting diverse communities through the universal language of art and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-magenta mb-1">11+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-teal mb-1">70+</div>
                  <div className="text-white/70 text-sm">Countries Reached</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-cta mb-1">500+</div>
                  <div className="text-white/70 text-sm">Artists Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex flex-col items-center justify-start pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Contact Methods Grid - MKG Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const { ref, isVisible } = useScrollReveal(0.1);
                return (
                  <div
                    key={method.id}
                    ref={ref}
                    className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <AnimatedContactCard
                      {...method}
                      onClick={() => window.open(`mailto:${method.email}`, '_blank')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Opportunities Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark mb-6">Work with us</h2>
            <p className="text-xl text-gray-600 mb-12">
              Currently, we don't have any open positions, but we're always looking for passionate individuals who share our vision of cultural excellence and social impact.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">No Open Positions</h3>
                <p className="text-gray-600 mb-6">
                  We're not currently hiring, but we'd love to hear from talented individuals who are passionate about cultural diplomacy and youth empowerment.
                </p>
                <button 
                  onClick={() => window.open('mailto:careers@mapsinternational.qa', '_blank')}
                  className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Us Your CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Forms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark text-center mb-12">How Would You Like to Connect?</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {ctaButtons.map((button) => {
                const rippleRef = useRipple();
                return (
                  <button
                    key={button.id}
                    ref={rippleRef}
                    onClick={() => setActiveForm(activeForm === button.id ? null : button.id)}
                    className={`group liquid-button ripple bg-white border-2 border-gray-200 text-gray-700 p-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2 hover:border-${button.color} hover:text-${button.color} ${
                      activeForm === button.id ? `border-${button.color} text-${button.color} bg-${button.color}/5` : ''
                    }`}
                    style={{
                      background: activeForm === button.id 
                        ? `linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)`
                        : 'white'
                    }}
                  >
                    <div className={`group-hover:scale-110 transition-transform duration-300 group-hover:text-glow`}>
                      {button.icon}
                    </div>
                    <span className="text-sm md:text-base text-morphing">{button.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Contact Form */}
            {activeForm && (
              <div className="bg-white rounded-2xl shadow-elegant p-8 animate-scale-in">
                <h3 className="text-2xl font-semibold text-dark mb-6 capitalize">
                  {activeForm} Collaboration Form
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-dark mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-dark mb-2">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="short">Short term (1-3 months)</option>
                      <option value="medium">Medium term (3-6 months)</option>
                      <option value="long">Long term (6+ months)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, goals, and how you'd like to collaborate..."
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="neu-button text-dark px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 pulse-glow"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveForm(null)}
                      className="neu-button text-gray-700 px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark text-center mb-12">Our Location</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-magenta group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-gray-700 transition-colors duration-300">
                        Doha
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        Katara Cultural Village, Building 12
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    Doha, Qatar
                  </p>
                </div>
                
                <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-teal group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-gray-700 transition-colors duration-300">
                        Everywhere
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        We create cultural magic globally
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    info@mapsinternational.qa
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-light rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  From our base in Doha, we connect cultures across 70+ countries, 
                  creating meaningful partnerships and cultural exchanges worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Packages */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Partnership Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Cultural Supporter</h3>
                <p className="text-white/80 mb-6">Logo placement, basic recognition</p>
                <ul className="text-left space-y-2 text-white/90">
                  <li>• Logo on event materials</li>
                  <li>• Social media mentions</li>
                  <li>• Basic partnership recognition</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Cultural Partner</h3>
                <p className="text-white/80 mb-6">Event co-branding, premium placement</p>
                <ul className="text-left space-y-2 text-white/90">
                  <li>• Co-branded event materials</li>
                  <li>• Premium logo placement</li>
                  <li>• Speaking opportunities</li>
                  <li>• Custom content collaboration</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Cultural Ambassador</h3>
                <p className="text-white/80 mb-6">Exclusive partnership, custom content</p>
                <ul className="text-left space-y-2 text-white/90">
                  <li>• Exclusive partnership rights</li>
                  <li>• Custom content creation</li>
                  <li>• VIP event access</li>
                  <li>• Strategic consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;