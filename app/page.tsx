"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Leaf, Users, Target, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ArunodayaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all animation elements
    const animateElements = document.querySelectorAll(
      ".fade-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll, .scale-in-on-scroll",
    )
    animateElements.forEach((el) => observerRef.current?.observe(el))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observerRef.current?.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-fade-in-left">
              <Leaf className="h-8 w-8 text-primary animate-pulse-glow" />
              <span className="text-xl font-bold text-primary">Arunodaya Enterprises</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 animate-fade-in-right">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    activeSection === item.id ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  } stagger-${index + 1}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover-glow">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border animate-slide-in-bottom">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left transition-all duration-300 hover-slide stagger-${index + 1}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg bg-slate-900"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        </div>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="fade-in-on-scroll">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight animate-text-reveal bg-slate-900/20 rounded-lg p-4"
              style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)" }}
            >
              Cultivating Sustainable
              <span
                className="text-green-400 block animate-shimmer"
                style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)" }}
              >
                Agricultural Excellence
              </span>
            </h1>
            <p
              className="text-xl sm:text-2xl lg:text-3xl mb-12 text-pretty opacity-90 fade-in-on-scroll stagger-2 bg-slate-900/20 rounded-lg p-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)" }}
            >
              Premium Red Sandalwood Farming & Land Development Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-on-scroll stagger-3">
              <Button
                size="lg"
                className="btn-professional bg-primary hover:bg-primary/90 text-white px-10 py-4 text-xl font-semibold rounded-full hover-glow shadow-lg"
                onClick={() => scrollToSection("projects")}
              >
                Explore Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-professional border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-xl font-semibold bg-slate-900/40 backdrop-blur-sm rounded-full hover-slide shadow-lg"
                onClick={() => scrollToSection("contact")}
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown
            className="h-10 w-10 text-white cursor-pointer hover:text-green-400 transition-all duration-300 hover:scale-125 pulse-on-hover"
            onClick={() => scrollToSection("about")}
            style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))" }}
          />
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-shimmer">
              About Arunodaya Enterprises
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Leading the way in sustainable agriculture and land development with innovative farming solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 slide-in-left-on-scroll">
              <div className="group hover-lift hover-tilt bg-card p-8 rounded-2xl shadow-lg stagger-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-bounce-in">
                    <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading provider of sustainable agricultural solutions, creating value for investors while
                  preserving our natural heritage through responsible farming practices.
                </p>
              </div>

              <div className="group hover-lift hover-tilt bg-card p-8 rounded-2xl shadow-lg stagger-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-bounce-in">
                    <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide premium quality red sandalwood farming opportunities and comprehensive land development
                  services that deliver exceptional returns while maintaining environmental sustainability.
                </p>
              </div>

              <div className="group hover-lift hover-tilt bg-card p-8 rounded-2xl shadow-lg stagger-3">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-bounce-in">
                    <Leaf className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Commitment</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We are committed to ethical farming practices, transparent business operations, and building long-term
                  partnerships with our clients and the communities we serve.
                </p>
              </div>
            </div>

            <div className="relative slide-in-right-on-scroll">
              <div className="image-overlay rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Sustainable farming practices"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl animate-float hover-glow">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-shimmer">Our Premium Projects</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Discover our flagship agricultural and land development initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group hover-lift hover-tilt overflow-hidden bg-card shadow-xl rounded-3xl slide-in-left-on-scroll">
              <div className="relative h-80 overflow-hidden image-overlay">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Red Sandalwood Farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Red Sandalwood Farm Lands</h3>
                  <p className="text-sm opacity-90">Premium Investment Opportunity</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Premium red sandalwood cultivation with guaranteed returns. Our scientifically managed farms ensure
                  optimal growth conditions and maximum yield potential.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-1">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">15-20 year investment cycle</span>
                  </li>
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">Expert agricultural management</span>
                  </li>
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">Guaranteed buyback policy</span>
                  </li>
                </ul>
                <Button className="w-full btn-professional bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-full hover-slide">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift hover-tilt overflow-hidden bg-card shadow-xl rounded-3xl slide-in-right-on-scroll">
              <div className="relative h-80 overflow-hidden image-overlay">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Raigiri Venture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Raigiri Venture</h3>
                  <p className="text-sm opacity-90">Land Development Excellence</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Comprehensive land development and agricultural infrastructure projects designed to maximize land
                  value and agricultural productivity.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-1">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">Land development & planning</span>
                  </li>
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">Infrastructure development</span>
                  </li>
                  <li className="flex items-center space-x-3 fade-in-on-scroll stagger-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-lg">Sustainable farming solutions</span>
                  </li>
                </ul>
                <Button className="w-full btn-professional bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-full hover-slide">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-shimmer">Project Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Explore our agricultural projects and land development initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Sustainable farming practices",
                title: "Sustainable Farming",
              },
              {
                src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Agricultural landscape",
                title: "Agricultural Landscape",
              },
              {
                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Forest management",
                title: "Forest Management",
              },
              {
                src: "https://images.unsplash.com/photo-1416879595884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Agricultural field",
                title: "Agricultural Fields",
              },
              {
                src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Land development",
                title: "Land Development",
              },
              {
                src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Natural landscape",
                title: "Natural Landscape",
              },
            ].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover-lift hover-tilt image-overlay scale-in-on-scroll stagger-${(index % 6) + 1}`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-bold animate-shimmer">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-shimmer">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Ready to start your agricultural investment journey? Contact us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 slide-in-left-on-scroll">
              <div className="group hover-lift hover-tilt stagger-1">
                <div className="flex items-center space-x-6 p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-pulse-glow">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-muted-foreground text-lg">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="group hover-lift hover-tilt stagger-2">
                <div className="flex items-center space-x-6 p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-pulse-glow">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground text-lg">info@arunodayaenterprises.com</p>
                  </div>
                </div>
              </div>

              <div className="group hover-lift hover-tilt stagger-3">
                <div className="flex items-center space-x-6 p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-pulse-glow">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Address</h3>
                    <p className="text-muted-foreground text-lg">
                      123 Agricultural District
                      <br />
                      Green Valley, Karnataka 560001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-2xl rounded-3xl hover-lift slide-in-right-on-scroll">
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="fade-in-on-scroll stagger-1">
                    <label className="block text-sm font-semibold mb-3">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-lg hover-glow"
                      placeholder="John"
                    />
                  </div>
                  <div className="fade-in-on-scroll stagger-2">
                    <label className="block text-sm font-semibold mb-3">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-lg hover-glow"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="fade-in-on-scroll stagger-3">
                  <label className="block text-sm font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none text-lg hover-glow"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="fade-in-on-scroll stagger-4">
                  <label className="block text-sm font-semibold mb-3">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-lg hover-glow"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="fade-in-on-scroll stagger-5">
                  <label className="block text-sm font-semibold mb-3">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none text-lg hover-glow"
                    placeholder="Tell us about your agricultural investment interests..."
                  ></textarea>
                </div>

                <Button className="w-full btn-professional bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-full hover-slide fade-in-on-scroll stagger-6">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in-on-scroll stagger-1">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 animate-pulse-glow" />
                <span className="text-xl font-bold">Arunodaya Enterprises</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Leading the way in sustainable agriculture and land development with innovative farming solutions.
              </p>
            </div>

            <div className="fade-in-on-scroll stagger-2">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Gallery", "Contact"].map((item, index) => (
                  <li key={item} className={`stagger-${index + 1}`}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-primary-foreground/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in-on-scroll stagger-3">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="hover:text-white transition-colors duration-300">+91 98765 43210</p>
                <p className="hover:text-white transition-colors duration-300">info@arunodayaenterprises.com</p>
                <p className="hover:text-white transition-colors duration-300">Green Valley, Karnataka 560001</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 fade-in-on-scroll">
            <p>&copy; 2024 Arunodaya Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
