import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { getProjectById, renderIcon } from "@/data/projects";
import BrandAmbassadors from "@/components/BrandAmbassadors";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-hero"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed Left Side */}
      <button
        onClick={handleBack}
        className="fixed left-6 top-20 z-50 bg-white/95 backdrop-blur-md hover:bg-white text-dark rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 border border-white/20 animate-pulse hover:animate-none group"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="hidden sm:inline font-semibold">Back</span>
      </button>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <div className="max-w-4xl">
              {/* Category & Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white">{renderIcon(project.iconType, "w-6 h-6")}</div>
                <span className="text-white/80 text-lg font-medium">{project.category}</span>
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span className="text-white/60">{project.year}</span>
              </div>

              {/* Title */}
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}+</div>
                    <div className="text-sm text-white/70 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Long Description */}
            {project.longDescription && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-dark mb-6">About This Project</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-dark mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-magenta" />
                    <span className="text-muted-foreground">Year: <span className="text-dark font-medium">{project.year}</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-teal">{renderIcon(project.iconType, "w-5 h-5")}</div>
                    <span className="text-muted-foreground">Category: <span className="text-dark font-medium">{project.category}</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cta" />
                    <span className="text-muted-foreground">Location: <span className="text-dark font-medium">Doha, Qatar</span></span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark mb-6">Impact Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-light rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-dark mb-1">{value}+</div>
                      <div className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Ambassadors Section - Only for QIAF */}
            {project.id === "qiaf-2025" && <BrandAmbassadors />}

            {/* CTA Section */}
            <div className="bg-gradient-primary rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Interested in This Project?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in creating meaningful cultural impact. Partner with MAPS International to support this initiative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-dark px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                  Partner With Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
