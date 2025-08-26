import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import SlotsGallery from "@/components/slots-gallery"
import Footer from "@/components/footer"
import MobileAuthButtons from "@/components/MobileAuthButtons"
import MobileNavSlider from "@/components/MobileNavSlider"

export default function SlotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
          {/* Show MobileAuthButtons only on mobile */}
      <div className="block md:hidden">
        <MobileAuthButtons />
      </div>
       {/* MobileNavSlider only on mobile */}
    <div className="block md:hidden">
      <MobileNavSlider />
    </div>
        <SlotsGallery />
      </main>
      <Footer />
    </div>
  )
}
