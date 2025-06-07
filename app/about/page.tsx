import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, and commitment to promoting cricket excellence in St. Louis
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                The American Cricket Academy & Club was founded with a simple yet powerful vision: to make cricket
                accessible to everyone in the St. Louis community and beyond. As a non-profit organization, we are
                dedicated to fostering the growth of cricket in America.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Since our inception, we have been committed to providing high-quality cricket education, training, and
                competitive opportunities for players of all ages and skill levels. Our passion for cricket drives
                everything we do.
              </p>
              <p className="text-lg text-slate-600">
                <strong className="text-blue-600">"Cricket is our passion. Our goal is your dream."</strong> This motto
                encapsulates our commitment to helping every player achieve their cricket aspirations.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/acac-logo.png" alt="ACAC Logo" width={400} height={400} className="animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These values guide everything we do at the American Cricket Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do, from coaching to community engagement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our love for cricket drives our commitment to developing the sport in America
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in building strong communities through the shared love of cricket
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We uphold the highest standards of sportsmanship and ethical conduct</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who lead our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <CardTitle>John Smith</CardTitle>
                <CardDescription>President & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Former professional cricketer with 15+ years of coaching experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Head Coach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">International cricket coach specializing in youth development</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Operations Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Sports management professional with expertise in program development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
