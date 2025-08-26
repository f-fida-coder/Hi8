import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import RecommendedLiveCasino from "@/components/recommended-live-casino"
import SportsSection from "@/components/sports-section"
import GamingSection from "@/components/gaming-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <RecommendedLiveCasino />
        <SportsSection />

        {/* Hide GamingSection on mobile, show on md+ */}
        <div className="hidden md:block">
          <GamingSection />
        </div>
      </main>
      
      {/* Latest Video Section */}
      <div className="w-full bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="home-video-container">
            <div className="home-video-header text-xl font-bold text-gray-900 mb-4 capitalize">
              Latest Video
            </div>
            <div className="home-video-iframe-container bg-gray-200 rounded-lg p-4 w-full aspect-video max-h-80">
              <iframe 
                className="home-video-iframe w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/TP2h1fPDHec" 
                title="home-video" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
