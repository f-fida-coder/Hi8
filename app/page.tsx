import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import RecommendedLiveCasino from "@/components/recommended-live-casino"
import SportsSection from "@/components/sports-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <RecommendedLiveCasino />
        <SportsSection />
      </main>
      <Footer />
    </div>
  )
}
