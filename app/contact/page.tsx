import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linen">
      {/* Header */}
      <header className="relative z-10 bg-linen border-b border-mist">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-espresso">
              ALCHEMY BEAUTY STUDIO
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-coral transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-coral transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/team"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-coral transition-colors"
              >
                MEET THE TEAM
              </Link>
              <Link
                href="/press"
                className="text-sm font-sans font-medium tracking-wide text-espresso hover:text-coral transition-colors"
              >
                PRESS
              </Link>
              <Link href="/contact" className="text-sm font-sans font-medium tracking-wide text-coral">
                CONTACT
              </Link>
            </nav>
            <Button className="hidden md:inline-flex bg-coral text-white hover:bg-rosewood font-sans font-medium tracking-wide text-sm px-6 py-2 rounded-full transition-colors">
              BOOK AN APPOINTMENT
            </Button>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-espresso mb-6">CONTACT US</h1>
            <p className="text-lg font-sans text-plum max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch to book an appointment or learn more about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-none bg-blush">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-coral mt-1" />
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Location</h3>
                      <p className="text-plum font-sans">
                        120 Thoma St, Suite 2
                        <br />
                        Reno, NV 89501
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-blush">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-coral mt-1" />
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Phone</h3>
                      <p className="text-plum font-sans">
                        <a href="tel:+17755551234" className="hover:text-coral transition-colors">
                          (775) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-blush">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-coral mt-1" />
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Email</h3>
                      <p className="text-plum font-sans">
                        <a href="mailto:hello@alchemybeautystudio.com" className="hover:text-coral transition-colors">
                          hello@alchemybeautystudio.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-blush">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-coral mt-1" />
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-espresso mb-2">Hours</h3>
                      <div className="text-plum font-sans space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border border-mist bg-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold tracking-wide text-espresso mb-6">
                    Send us a message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-sans font-medium text-espresso mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-sans font-medium text-espresso mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-medium text-espresso mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-sans font-medium text-espresso mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-sans font-medium text-espresso mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                      >
                        <option value="">Select a service</option>
                        <option value="blonding">Blonding & Color</option>
                        <option value="fantasy-color">Fantasy Color</option>
                        <option value="extensions">Hair Extensions</option>
                        <option value="nails">Nail Services</option>
                        <option value="bridal">Bridal Services</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-sans font-medium text-espresso mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-mist rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent font-sans"
                        placeholder="Tell us about your hair goals or any questions you have..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-coral text-white hover:bg-rosewood font-sans font-medium tracking-wide py-3 rounded-full transition-colors">
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-blush rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold tracking-wide text-espresso mb-4">Visit Our Studio</h2>
            <p className="text-lg font-sans text-plum mb-6">Located in Midtown Reno on Thoma Street</p>
            <div className="bg-linen rounded-lg h-64 flex items-center justify-center">
              <p className="text-plum font-sans">Interactive Map Coming Soon</p>
            </div>
            <div className="mt-6">
              <Button className="bg-coral text-white hover:bg-rosewood font-sans font-medium tracking-wide rounded-full transition-colors">
                GET DIRECTIONS
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
