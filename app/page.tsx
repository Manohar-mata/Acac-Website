import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Trophy, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-in fade-in-50 duration-1000">
            <Image
              src="/images/acac-logo.png"
              alt="American Cricket Academy Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Welcome to American Cricket Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            Cricket is our passion. Our goal is your dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="/registration">Register Player</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Event Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Community Fall Blood Drive</h2>
                <p className="text-lg text-blue-700 mb-4">Hosted by: American Cricket Academy and Club</p>
                <div className="text-2xl font-bold text-red-600 mb-2">Saturday, October 7, 2017</div>
                <div className="text-xl text-red-500 mb-6">9 a.m. - 2 p.m.</div>
                <p className="text-blue-600 mb-6">
                  Drive will be held in the Council Room
                  <br />
                  Dardenne Prairie City Hall
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/events">View All Events</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image src="/images/acac-logo.png" alt="ACAC Logo" width={300} height={300} className="animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose ACAC?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive cricket training and development programs for all ages and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Expert Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Learn from experienced coaches with professional cricket backgrounds</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Regular Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participate in tournaments, matches, and community events throughout the year
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Competitive Leagues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join our competitive leagues and showcase your skills against other teams
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Youth Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Specialized programs to nurture young talent and build future cricket stars
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Cricket Journey?</h2>
          <p className="text-xl mb-8">
            Join the American Cricket Academy family and take your cricket skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
