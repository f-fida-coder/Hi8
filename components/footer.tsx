import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const suggestedBrowsers = [
    { name: "Chrome", icon: "/placeholder.svg?height=32&width=32" },
    { name: "Firefox", icon: "/placeholder.svg?height=32&width=32" },
    { name: "Safari", icon: "/placeholder.svg?height=32&width=32" },
    { name: "Edge", icon: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              HEY<span className="text-accent">8</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your premier destination for online gaming. Experience the thrill of casino games, sports betting, and
              more.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@HEY8.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Licensed in Curacao</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Games</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Live Casino
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Slot Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sports Betting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  E-Sports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Poker
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lottery
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & Browsers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <h4 className="font-semibold text-foreground mb-3">Suggested Browsers</h4>
            <div className="grid grid-cols-2 gap-2">
              {suggestedBrowsers.map((browser) => (
                <div key={browser.name} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <img src={browser.icon || "/placeholder.svg"} alt={browser.name} className="h-6 w-6" />
                  <span>{browser.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 HEY8 Casino. All rights reserved. | Developed  by f-fida
            </div>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=32&width=60" alt="18+" className="h-8" />
              <img src="/placeholder.svg?height=32&width=60" alt="Responsible Gaming" className="h-8" />
              <img src="/placeholder.svg?height=32&width=60" alt="SSL Secure" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
