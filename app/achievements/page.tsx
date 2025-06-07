import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Calendar, Target } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACAC Achievements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating our milestones, trophies, and the success of our cricket community since inception
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A testament to our commitment to cricket excellence and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <div className="mx-auto bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-yellow-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-yellow-800">47</CardTitle>
                <CardDescription className="text-yellow-700 font-medium">Trophies Won</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="mx-auto bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-800">1,200+</CardTitle>
                <CardDescription className="text-blue-700 font-medium">Players Trained</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="mx-auto bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-800">15</CardTitle>
                <CardDescription className="text-green-700 font-medium">Years of Excellence</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="mx-auto bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-800">89</CardTitle>
                <CardDescription className="text-purple-700 font-medium">Alumni in Higher Cricket</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Trophies */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Major Trophies & Championships</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our most prestigious victories and championship wins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-gold text-black font-bold">Championship</Badge>
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-xl text-yellow-800">Midwest Regional Championship</CardTitle>
                <CardDescription>Senior Division Champions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024, 2022, 2020
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    16 teams competed
                  </div>
                  <p className="text-sm text-slate-600">
                    Our senior team's dominance in the regional championship, winning 3 out of the last 5 years.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-silver text-black font-bold">Tournament</Badge>
                  <Trophy className="h-6 w-6 text-gray-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">St. Louis Cricket Cup</CardTitle>
                <CardDescription>City-wide Tournament Winners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024, 2023, 2021, 2019
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    12 local teams
                  </div>
                  <p className="text-sm text-slate-600">
                    Consistent winners of the premier St. Louis cricket tournament, showcasing local dominance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-bronze text-white font-bold">Youth</Badge>
                  <Trophy className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl text-orange-800">National Youth Championship</CardTitle>
                <CardDescription>Under-16 Division Champions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    32 teams nationwide
                  </div>
                  <p className="text-sm text-slate-600">
                    Historic first national championship win by our youth team, defeating teams from across the country.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-600 text-white font-bold">League</Badge>
                  <Trophy className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-blue-800">Missouri State League</CardTitle>
                <CardDescription>Division 1 Champions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024, 2021, 2018
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    10 teams in division
                  </div>
                  <p className="text-sm text-slate-600">
                    Multiple state league championships demonstrating consistent high-level performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-600 text-white font-bold">Women's</Badge>
                  <Trophy className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-xl text-green-800">Women's Cricket Championship</CardTitle>
                <CardDescription>Regional Women's Division</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024, 2022
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />8 women's teams
                  </div>
                  <p className="text-sm text-slate-600">
                    Leading the way in women's cricket development with championship victories.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-600 text-white font-bold">Indoor</Badge>
                  <Trophy className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-purple-800">Winter Indoor League</CardTitle>
                <CardDescription>Indoor Cricket Champions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024, 2023, 2022
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    14 teams participated
                  </div>
                  <p className="text-sm text-slate-600">
                    Dominating the winter indoor cricket scene with three consecutive championships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Notable Alumni</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Former ACAC players who have achieved success at higher levels of cricket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-10 w-10 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Michael Thompson</CardTitle>
                <CardDescription>Professional Cricketer</CardDescription>
                <Badge className="bg-yellow-600 text-white mt-2">ACAC Alumni 2015</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                    Professional contract with Major League Cricket
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-blue-500" />
                    USA National Team squad member
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-green-500" />
                    College cricket scholarship recipient
                  </div>
                  <p className="text-sm text-slate-600">
                    Started at ACAC at age 10, developed through our youth programs, and now represents the USA in
                    international cricket.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Sarah Johnson</CardTitle>
                <CardDescription>Women's Cricket Captain</CardDescription>
                <Badge className="bg-blue-600 text-white mt-2">ACAC Alumni 2018</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                    State women's team captain
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-blue-500" />
                    University cricket team MVP
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-green-500" />
                    Women's cricket development coach
                  </div>
                  <p className="text-sm text-slate-600">
                    A product of our women's cricket program, now leading the next generation of female cricketers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Raj Patel</CardTitle>
                <CardDescription>Cricket Academy Director</CardDescription>
                <Badge className="bg-green-600 text-white mt-2">ACAC Alumni 2012</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                    Founded successful cricket academy
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="h-4 w-4 mr-2 text-blue-500" />
                    Level 3 certified coach
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-green-500" />
                    Youth development specialist
                  </div>
                  <p className="text-sm text-slate-600">
                    Returned to give back to cricket development, establishing his own academy and coaching programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Major Milestones</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Key moments in our journey since establishment</p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800">Academy Founded</h3>
                      <Badge className="bg-blue-600 text-white">2009</Badge>
                    </div>
                    <p className="text-slate-600 mt-2">
                      American Cricket Academy & Club was established with a vision to promote cricket in St. Louis and
                      develop local talent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800">First Championship Win</h3>
                      <Badge className="bg-green-600 text-white">2012</Badge>
                    </div>
                    <p className="text-slate-600 mt-2">
                      Our senior team won their first major championship, the St. Louis Cricket Cup, marking our arrival
                      as a competitive force.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800">500th Player Milestone</h3>
                      <Badge className="bg-yellow-600 text-white">2017</Badge>
                    </div>
                    <p className="text-slate-600 mt-2">
                      Reached the milestone of training our 500th player, demonstrating our growing impact on the
                      cricket community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800">First National Championship</h3>
                      <Badge className="bg-purple-600 text-white">2023</Badge>
                    </div>
                    <p className="text-slate-600 mt-2">
                      Our youth team achieved the historic first national championship win, putting ACAC on the national
                      cricket map.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800">New Training Facility</h3>
                      <Badge className="bg-red-600 text-white">2024</Badge>
                    </div>
                    <p className="text-slate-600 mt-2">
                      Opened our state-of-the-art indoor training facility, providing year-round cricket development
                      opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Community Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond cricket, our contributions to the St. Louis community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">25+</div>
                <CardDescription>
                  Annual community events including blood drives, charity matches, and cultural celebrations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Scholarships Awarded</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$150K+</div>
                <CardDescription>
                  Total scholarship value provided to deserving young cricketers for education and cricket development
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Volunteer Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600 mb-2">5,000+</div>
                <CardDescription>
                  Annual volunteer hours contributed by our members to various community service initiatives
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Recognition Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600 mb-2">12</div>
                <CardDescription>
                  Community service awards and recognition received for our contributions to St. Louis
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
