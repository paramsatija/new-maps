import Hero from "@/components/Hero";
import CardDeck from "@/components/CardDeck";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* SEO Meta - handled by document head */}
      <Hero />
      <CardDeck />
      
      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-gradient">MAPS International WLL</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Mapping Possibilities. Building Impact.
              </p>
              <p className="text-white/60 text-sm">
                © 2024 MAPS International WLL. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/connect" className="hover:text-white transition-colors">Connect</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="mailto:info@mapsinternational.qa" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
