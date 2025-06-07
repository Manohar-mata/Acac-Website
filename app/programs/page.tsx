import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Trophy, Star, Calendar, Target } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive cricket training programs designed for all ages and skill levels
          </p>
        </div>
      </section>

      {/* Youth Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Youth Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Building the next generation of cricket stars through structured training and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Ages 6-10
                  </Badge>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-blue-800">Little Cricketers</CardTitle>
                <CardDescription>Introduction to cricket fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Saturdays 9:00 AM - 10:30 AM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Max 12 players per group
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Target className="h-4 w-4 mr-2" />
                    Basic skills & fun activities
                  </div>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Ball handling and catching</li>
                  <li>• Basic batting techniques</li>
                  <li>• Simple bowling actions</li>
                  <li>• Team games and activities</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Ages 11-14
                  </Badge>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-green-800">Junior Development</CardTitle>
                <CardDescription>Skill development and competitive play</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Saturdays 11:00 AM - 1:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Max 16 players per group
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Target className="h-4 w-4 mr-2" />
                    Intermediate skills & tactics
                  </div>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Advanced batting techniques</li>
                  <li>• Bowling variations</li>
                  <li>• Fielding positions</li>
                  <li>• Match situations</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Ages 15-18
                  </Badge>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-purple-800">Elite Youth</CardTitle>
                <CardDescription>Advanced training for serious players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Saturdays 2:00 PM - 4:30 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Max 14 players per group
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Target className="h-4 w-4 mr-2" />
                    Elite level training
                  </div>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Professional techniques</li>
                  <li>• Mental conditioning</li>
                  <li>• Fitness training</li>
                  <li>• Tournament preparation</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adult Programs */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Adult Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Competitive leagues and training opportunities for adult cricket enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    18+ Years
                  </Badge>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-blue-800">Adult League</CardTitle>
                <CardDescription>Competitive cricket league for adults</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Weekends & Evenings
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Season: April - October
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Team-based registration
                  </div>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• 20-over and 40-over formats</li>
                  <li>• Regular season matches</li>
                  <li>• Playoffs and championships</li>
                  <li>• Awards and recognition</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/registration">Join League</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    All Levels
                  </Badge>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-green-800">Adult Coaching</CardTitle>
                <CardDescription>Skill development for adult players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Weekday Evenings
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Small group sessions
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Target className="h-4 w-4 mr-2" />
                    Personalized coaching
                  </div>
                </div>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Technical skill improvement</li>
                  <li>• Fitness and conditioning</li>
                  <li>• Match strategy</li>
                  <li>• Individual assessments</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/registration">Book Session</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Special Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized training and development opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Summer Camps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Intensive week-long cricket camps during summer break
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Private Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  One-on-one coaching sessions for personalized development
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/coaches">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Clinics & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized clinics focusing on specific cricket skills
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
