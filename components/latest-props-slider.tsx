"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const props = [
  {
    id: 1,
    title: "Weekend Cashback",
    description: "Get 20% cashback on all losses",
    image: "/casino-welcome-bonus.png",
    validUntil: "2024-01-31",
    bonus: "20% Cashback",
  },
  {
    id: 2,
    title: "Free Spins Friday",
    description: "100 free spins on selected slots",
    image: "/slot-machine-free-spins.png",
    validUntil: "2024-01-26",
    bonus: "100 Free Spins",
  },
  {
    id: 3,
    title: "VIP Tournament",
    description: "Exclusive tournament for VIP members",
    image: "/placeholder-k7zcq.png",
    validUntil: "2024-02-15",
    bonus: "$50,000 Prize Pool",
  },
  {
    id: 4,
    title: "Live Casino Bonus",
    description: "Extra bonus for live casino games",
    image: "/placeholder-os2ps.png",
    validUntil: "2024-01-30",
    bonus: "50% Bonus",
  },
  {
    id: 5,
    title: "Sports Betting Boost",
    description: "Enhanced odds on popular matches",
    image: "/placeholder-6ba02.png",
    validUntil: "2024-02-05",
    bonus: "Enhanced Odds",
  },
]

export default function LatestPropsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, props.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">Latest Promotions</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-border text-foreground hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="border-border text-foreground hover:bg-muted bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {props.map((prop) => (
              <div key={prop.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <Card className="bg-background border-border hover:border-primary transition-colors group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={prop.image || "/placeholder.svg"}
                        alt={prop.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {prop.bonus}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{prop.title}</h3>
                      <p className="text-muted-foreground mb-4">{prop.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Valid until: {prop.validUntil}</span>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Claim Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
