import { useState } from "react";
import { Mail, Phone, MapPin, Send, Star, Award, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
    timeline: ""
  });
  const { toast } = useToast();

  const ctaButtons = [
    { id: "sponsor", label: "Sponsor", icon: <Star className="w-5 h-5" />, color: "from-magenta to-cta" },
    { id: "partner", label: "Partner", icon: <Award className="w-5 h-5" />, color: "from-teal to-accent" },
    { id: "artist", label: "Artist", icon: <Users className="w-5 h-5" />, color: "from-dark to-gray-700" },
    { id: "youth", label: "Youth", icon: <Users className="w-5 h-5" />, color: "from-cta to-magenta" },
    { id: "press", label: "Press", icon: <Mail className="w-5 h-5" />, color: "from-accent to-teal" }
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
    <section className="py-20 bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-dark mb-6">Let's Build Cultural Connections</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our mission to connect cultures, empower youth, and create lasting impact across 70+ countries. Choose how you want to collaborate with MAPS International.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {ctaButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveForm(activeForm === button.id ? null : button.id)}
              className={`bg-gradient-to-r ${button.color} text-white p-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow flex flex-col items-center gap-2 ${
                activeForm === button.id ? 'ring-4 ring-white/50 scale-105' : ''
              }`}
            >
              {button.icon}
              <span className="text-sm md:text-base">{button.label}</span>
            </button>
          ))}
        </div>

        {/* Contact Form */}
        {activeForm && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-elegant p-8 animate-scale-in">
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
                  className="btn-hero flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setActiveForm(null)}
                  className="px-6 py-3 border border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-card animate-slide-up">
            <Mail className="w-8 h-8 text-magenta mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-dark mb-2">Email Us</h4>
            <p className="text-muted-foreground">info@mapsinternational.qa</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Phone className="w-8 h-8 text-teal mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-dark mb-2">Call Us</h4>
            <p className="text-muted-foreground">+974 XXXX XXXX</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-8 h-8 text-cta mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-dark mb-2">Visit Us</h4>
            <p className="text-muted-foreground">Doha, Qatar</p>
          </div>
        </div>
        
        {/* Sponsor Packages Preview */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-12 text-white animate-fade-in">
          <h3 className="text-3xl font-semibold text-center mb-8">Partnership Packages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Cultural Supporter</div>
              <p className="text-white/80">Logo placement, basic recognition</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Cultural Partner</div>
              <p className="text-white/80">Event co-branding, premium placement</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Cultural Ambassador</div>
              <p className="text-white/80">Exclusive partnership, custom content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;