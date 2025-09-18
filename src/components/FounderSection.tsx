import { Award, Globe, Users, Star, Crown, Shield, Building, Mic, Camera, Trophy } from "lucide-react";
import rashmiFounder from "@/assets/Rashmi-founder/rashmi-agarwal-professional.jpg";

const FounderSection = () => {
  const globalPositions = [
    {
      category: "International Organizations",
      icon: <Globe className="w-6 h-6" />,
      positions: [
        {
          title: "Chairperson & International Director",
          organization: "Human Rights International Federation",
          location: "India",
          description: "Leading global human rights advocacy and policy development"
        },
        {
          title: "International Director & National Chairperson",
          organization: "Anti-Corruption Foundation",
          location: "Qatar",
          description: "Championing transparency and ethical governance"
        },
        {
          title: "Board Member",
          organization: "Silk Painters International",
          location: "USA",
          description: "Supporting global artistic excellence and cultural exchange"
        }
      ]
    },
    {
      category: "Arts & Media",
      icon: <Star className="w-6 h-6" />,
      positions: [
        {
          title: "Proprietor",
          organization: "Oyster Silk Art Gallery",
          location: "Since 2006",
          description: "Curating and promoting contemporary art and cultural heritage"
        },
        {
          title: "Featured Recognition",
          organization: "Gulf Times, Al Jazeera, Qatar TV, The Peninsula",
          location: "International Media",
          description: "Recognized for cultural leadership and social impact"
        },
        {
          title: "Space Program Recognition",
          organization: "Al Thuraya Planetarium",
          location: "Katara Cultural Village",
          description: "Pioneering space science education and youth engagement"
        }
      ]
    }
  ];

  const awards = [
    {
      year: "2023-2024",
      title: "Qatar Ministry of Culture Recognition",
      description: "Official recognition for outstanding contribution to Qatar's cultural landscape",
      icon: <Crown className="w-8 h-8" />
    },
    {
      year: "2019",
      title: "Best NRI Women Entrepreneur",
      description: "Celebrating exceptional leadership and innovation in cultural entrepreneurship",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      year: "2018",
      title: "Asia Pride Award",
      description: "Honoring significant contributions to Asian cultural heritage and social impact",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const expertise = [
    {
      title: "Cultural Curation",
      description: "20+ years of curating transformative cultural experiences",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Strategic Planning",
      description: "Bridging art and business through innovative strategies",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Global Leadership",
      description: "Leading international organizations and cultural diplomacy",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Social Impact",
      description: "Driving positive change through art and cultural engagement",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-light">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A visionary leader fostering cultural dialogue and social impact through art and innovation
            </p>
          </div>

          {/* Founder Profile */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-dark mb-2">Rashmi Agarwal</h3>
                <p className="text-xl text-magenta font-semibold mb-4">
                  Founder & President of MAPS International WLL
                </p>
                <p className="text-lg text-cta font-medium mb-6">
                  CEO of Qatar International Art Festival
                </p>
                <div className="bg-gradient-to-r from-magenta/10 to-cta/10 rounded-2xl p-6 border-l-4 border-magenta">
                  <p className="text-lg italic text-dark">
                    "A Visionary at the Crossroads of Art, Business, and Social Impact"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— HuffMag Magazine, July 2025</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rashmi Agarwal is a pioneering entrepreneur and strategic leader with over 20 years of experience driving innovation, cultural engagement, and social impact in the fine arts industry. At MAPS International WLL and QIAF, she has been instrumental in elevating the region's art landscape, creating platforms that empower emerging voices and foster meaningful global cultural dialogue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her unique blend of expertise in curation, strategic planning, finance, and management has allowed her to bridge the worlds of art and business effectively. Through close collaborations with government bodies, cultural institutions, dignitaries, and globally recognized organizations, she amplifies art's impact for positive social change.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-magenta to-cta rounded-3xl p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                  <img
                    src={rashmiFounder}
                    alt="Rashmi Agarwal - Founder & President of MAPS International WLL"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-dark text-center mb-12">Expertise & Leadership</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-magenta mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-dark mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Leadership Positions */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-dark text-center mb-12">Global Leadership Positions</h3>
            <div className="space-y-12">
              {globalPositions.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-magenta">{category.icon}</div>
                    <h4 className="text-2xl font-bold text-dark">{category.category}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.positions.map((position, positionIndex) => (
                      <div
                        key={positionIndex}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <h5 className="text-lg font-semibold text-dark mb-2">{position.title}</h5>
                        <p className="text-magenta font-medium mb-1">{position.organization}</p>
                        <p className="text-sm text-muted-foreground mb-3">{position.location}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{position.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-dark text-center mb-12">Awards & Recognition</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-light rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="text-magenta mb-4 flex justify-center">{award.icon}</div>
                  <div className="text-cta font-bold text-lg mb-2">{award.year}</div>
                  <h4 className="text-xl font-bold text-dark mb-4">{award.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Social Impact */}
          <div className="bg-gradient-primary rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Global Social Impact</h3>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              As Chairperson and International Director of the Human Rights International Federation and International Director & National Chairperson (Qatar) of the Anti-Corruption Foundation, she exemplifies ethical leadership and social justice advocacy on a global scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-dark px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Learn More About Our Impact
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-dark transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
