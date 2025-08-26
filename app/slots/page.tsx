import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import SlotsGallery from "@/components/slots-gallery"
import Footer from "@/components/footer"

export default function SlotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <SlotsGallery />
      </main>
      <Footer />
    </div>
  )
}
