import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Clock, Mail } from "lucide-react"

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Coaching Staff</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our experienced and certified cricket coaches dedicated to developing players at all levels
          </p>
        </div>
      </section>

      {/* Head Coaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Head Coaches</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our senior coaching staff brings decades of professional cricket experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Rajesh Sharma</CardTitle>
                <CardDescription className="text-lg">Head Coach & Technical Director</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-blue-600">Level 3 Certified</Badge>
                  <Badge variant="outline">15+ Years</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Former First-Class Cricketer (India)
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    ICC Level 3 Coaching Certification
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    Specializes in batting technique and youth development
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    Rajesh brings extensive professional playing experience and has coached at various levels including
                    state and national teams. His expertise in batting technique and player development has helped
                    numerous players achieve their cricket goals.
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline">
                      <Clock className="h-4 w-4 mr-1" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Michael Thompson</CardTitle>
                <CardDescription className="text-lg">Assistant Head Coach</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-green-600">Level 2 Certified</Badge>
                  <Badge variant="outline">12+ Years</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Former County Cricketer (England)
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    ECB Level 2 Coaching Certification
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    Specializes in bowling and fielding techniques
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    Michael's background in county cricket and coaching expertise makes him invaluable for developing
                    bowling skills and fielding techniques. He has a particular talent for working with fast bowlers and
                    improving overall team fielding standards.
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline">
                      <Clock className="h-4 w-4 mr-1" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Coaches */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Specialized Coaches</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert coaches focusing on specific aspects of cricket development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-yellow-800">Sarah Mitchell</CardTitle>
                <CardDescription>Youth Development Coach</CardDescription>
                <Badge className="bg-yellow-600 text-white mt-2">Level 2 Certified</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Specializes in ages 6-14
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Child Development Certified
                  </div>
                  <p className="text-sm text-slate-600">
                    Sarah focuses on making cricket fun and engaging for young players while building fundamental
                    skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-800">David Chen</CardTitle>
                <CardDescription>Wicket-Keeping Coach</CardDescription>
                <Badge className="bg-purple-600 text-white mt-2">Specialist</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Former professional keeper
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    10+ years coaching experience
                  </div>
                  <p className="text-sm text-slate-600">
                    David provides specialized training for wicket-keepers at all levels, from basics to advanced
                    techniques.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-800">Amanda Rodriguez</CardTitle>
                <CardDescription>Fitness & Conditioning Coach</CardDescription>
                <Badge className="bg-red-600 text-white mt-2">Certified Trainer</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Sports science background
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Injury prevention specialist
                  </div>
                  <p className="text-sm text-slate-600">
                    Amanda develops fitness programs tailored to cricket-specific movements and injury prevention.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-indigo-600" />
                </div>
                <CardTitle className="text-xl text-indigo-800">James Wilson</CardTitle>
                <CardDescription>Spin Bowling Coach</CardDescription>
                <Badge className="bg-indigo-600 text-white mt-2">Specialist</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Former spin bowler
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Spin bowling techniques expert
                  </div>
                  <p className="text-sm text-slate-600">
                    James specializes in developing spin bowlers and teaching the art of spin bowling variations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-teal-800">Lisa Patel</CardTitle>
                <CardDescription>Mental Performance Coach</CardDescription>
                <Badge className="bg-teal-600 text-white mt-2">Sports Psychology</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Sports psychology degree
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Mental conditioning expert
                  </div>
                  <p className="text-sm text-slate-600">
                    Lisa helps players develop mental toughness, concentration, and performance under pressure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-800">Robert Kumar</CardTitle>
                <CardDescription>Fast Bowling Coach</CardDescription>
                <Badge className="bg-orange-600 text-white mt-2">Specialist</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Former fast bowler
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Pace bowling techniques
                  </div>
                  <p className="text-sm text-slate-600">
                    Robert works with fast bowlers to develop pace, accuracy, and bowling variations while preventing
                    injuries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Coaching Philosophy</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in developing not just skilled cricketers, but well-rounded individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Individual Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every player receives personalized attention and coaching tailored to their specific needs and goals
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Progressive skill development from basic fundamentals to advanced techniques and match situations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Character Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Emphasis on sportsmanship, teamwork, discipline, and respect both on and off the field
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Long-term Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focus on long-term player development rather than short-term results, building sustainable skills
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Private Coaching CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-xl mb-8">
            Book a private coaching session with one of our expert coaches and accelerate your cricket development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/registration">Book Private Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">Contact Coaches</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
