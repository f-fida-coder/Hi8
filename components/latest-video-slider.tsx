"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "How to Play Blackjack",
    description: "Learn the basics of blackjack strategy",
    thumbnail: "/blackjack-tutorial.png",
    duration: "5:32",
    views: "12.5K",
  },
  {
    id: 2,
    title: "Slot Machine Tips",
    description: "Maximize your wins with these tips",
    thumbnail: "/slot-machine-tips-video.png",
    duration: "8:15",
    views: "8.9K",
  },
  {
    id: 3,
    title: "Live Casino Experience",
    description: "Behind the scenes of live casino",
    thumbnail: "/live-casino-studio.png",
    duration: "12:45",
    views: "15.2K",
  },
  {
    id: 4,
    title: "Poker Strategy Guide",
    description: "Advanced poker strategies explained",
    thumbnail: "/poker-strategy-video.png",
    duration: "18:30",
    views: "22.1K",
  },
  {
    id: 5,
    title: "Sports Betting Basics",
    description: "Introduction to sports betting",
    thumbnail: "/placeholder-nn0h6.png",
    duration: "10:20",
    views: "9.7K",
  },
]

export default function LatestVideoSlider() {
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

  const maxIndex = Math.max(0, videos.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">Latest Videos</h2>
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
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <Card className="bg-card border-border hover:border-primary transition-colors group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-primary/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{video.views} views</span>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                          Watch Now
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
