import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Trophy, Heart } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Tournaments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for exciting cricket events, tournaments, and community activities throughout the year
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-red-600 text-white mb-4">Community Event</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">Community Fall Blood Drive</h2>
                <p className="text-lg text-red-700 mb-4">Hosted by: American Cricket Academy and Club</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-red-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Saturday, October 7, 2017</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Council Room, Dardenne Prairie City Hall</span>
                  </div>
                </div>
                <p className="text-red-700 mb-6">
                  Join us for this important community service event. Help save lives by donating blood and supporting
                  our local community.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Heart className="h-4 w-4 mr-2" />
                  Register to Donate
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="bg-red-200 w-64 h-64 rounded-full flex items-center justify-center">
                  <Heart className="h-32 w-32 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't miss out on these exciting cricket events and tournaments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Tournament
                  </Badge>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-blue-800">Spring Championship</CardTitle>
                <CardDescription>Annual spring cricket tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    May 15-16, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM - 6:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    ACAC Cricket Grounds
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    16 teams participating
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Our biggest tournament of the spring season featuring teams from across the region.
                </p>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Team</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Training
                  </Badge>
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <CardTitle className="text-green-800">Youth Skills Clinic</CardTitle>
                <CardDescription>Intensive training for young players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    June 1-5, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM - 3:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    ACAC Training Facility
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Ages 8-16
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Five-day intensive clinic focusing on fundamental cricket skills and techniques.
                </p>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Social
                  </Badge>
                  <Heart className="h-5 w-5 text-purple-500" />
                </div>
                <CardTitle className="text-purple-800">Family Fun Day</CardTitle>
                <CardDescription>Cricket and community celebration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    July 4, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    11:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Community Park
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    All ages welcome
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Join us for a day of cricket activities, food, and family fun on Independence Day.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Workshop
                  </Badge>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-yellow-800">Coaching Certification</CardTitle>
                <CardDescription>Become a certified cricket coach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    August 12-13, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    ACAC Conference Room
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    Limited to 20 participants
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Two-day certification program for aspiring cricket coaches and instructors.
                </p>
                <Button asChild className="w-full">
                  <Link href="/registration">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Tournament
                  </Badge>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-red-800">Fall Classic</CardTitle>
                <CardDescription>Season-ending championship tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    September 21-22, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    8:00 AM - 7:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Multiple Venues
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    24 teams expected
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  The premier fall tournament featuring the best teams from our league and beyond.
                </p>
                <Button asChild className="w-full">
                  <Link href="/registration">Register Team</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Meeting
                  </Badge>
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <CardTitle className="text-blue-800">Annual General Meeting</CardTitle>
                <CardDescription>Community meeting and elections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    November 15, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    7:00 PM - 9:00 PM
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Community Center
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    All members welcome
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Join us for our annual meeting to discuss the year's achievements and future plans.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">RSVP</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Stay Updated on All Events</h2>
          <p className="text-xl text-slate-600 mb-8">
            Subscribe to our calendar to never miss an important cricket event or tournament.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/calendar">View Full Calendar</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Subscribe to Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
