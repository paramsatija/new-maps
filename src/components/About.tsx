import { Globe, Users, Award, Zap } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural Bridge Building",
      description: "Curate transformative cultural experiences that bridge nations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Youth Innovation",
      description: "Champion youth innovation & Space Science programs across Qatar"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Strategic Alliances",
      description: "Build strategic public-private alliances for sustainable cultural impact"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cultural Leadership",
      description: "Empower the next generation of cultural ambassadors and leaders"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-dark mb-6">Who We Are</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              MAPS International WLL is Qatar's premier cultural diplomacy powerhouse, founded by Rashmi Agarwal in 2014, building bridges across art, science, and youth engagement.
            </p>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white animate-scale-in">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading cultural & creative enterprise in the Middle East and beyond, connecting 70+ countries through transformative cultural experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="text-center p-8 bg-light rounded-2xl hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-magenta mb-4 flex justify-center">
                {mission.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">{mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-20 bg-gradient-to-br from-dark to-gray-900 rounded-3xl p-12 text-white animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Leadership Profile</h3>
              <h4 className="text-xl text-teal mb-4">Rashmi Agarwal, Founder & President</h4>
              <p className="text-lg leading-relaxed mb-6">
                Rashmi Agarwal, Founder & President of MAPS International WLL, is a cultural diplomat who has shaped Qatar's cultural landscape for 11+ years, leading global festivals and youth programs.
              </p>
              <p className="text-white/90 leading-relaxed">
                Rashmi Agarwal founded MAPS International WLL in 2014 with a vision to bridge cultures through artistic excellence. Over 11+ years, she has built Qatar's premier cultural organization, connecting 400+ artists from 70+ countries, launching The YOUTH platform, and establishing government-backed educational programs. Her leadership has transformed Qatar's cultural landscape and created lasting international partnerships.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-1">
                <div className="w-full h-full bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Profile photo placeholder</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl font-semibold">
                11+ Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;