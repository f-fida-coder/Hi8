import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import CasinoGallery from "@/components/casino-gallery"
import Footer from "@/components/footer"

export default function CasinoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <CasinoGallery />
      </main>
      <Footer />
    </div>
  )
}
