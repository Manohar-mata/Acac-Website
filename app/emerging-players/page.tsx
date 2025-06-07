import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Target, TrendingUp, Users, Award } from "lucide-react"

export default function EmergingPlayersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Emerging Players</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Showcasing the promising young talent and future stars of American Cricket Academy
          </p>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Rising Stars</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet our most promising young cricketers who are making waves in youth cricket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-12 w-12 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-yellow-800">Alex Johnson</CardTitle>
                <CardDescription className="text-lg">All-Rounder | Age 16</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-yellow-600">Captain</Badge>
                  <Badge variant="outline">MVP 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">847</div>
                      <div className="text-sm text-blue-800">Runs Scored</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">23</div>
                      <div className="text-sm text-green-800">Wickets Taken</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                      Youth League Champion 2024
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Target className="h-4 w-4 mr-2 text-blue-500" />
                      Batting Average: 45.2
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Bowling Average: 18.5
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Alex has shown exceptional leadership qualities and all-round skills. Selected for state youth team
                    trials and considered a future star.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Future Opportunities</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• State Youth Team Selection</li>
                      <li>• College Cricket Scholarship</li>
                      <li>• National Academy Invitation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Priya Patel</CardTitle>
                <CardDescription className="text-lg">Fast Bowler | Age 15</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-blue-600">Rising Star</Badge>
                  <Badge variant="outline">Best Bowler 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">34</div>
                      <div className="text-sm text-red-800">Wickets</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85</div>
                      <div className="text-sm text-purple-800">Top Speed (mph)</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                      Best Bowler Award 2024
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Target className="h-4 w-4 mr-2 text-blue-500" />
                      Economy Rate: 3.2
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Strike Rate: 12.4
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Priya's pace and accuracy have made her one of the most feared bowlers in youth cricket. Her
                    dedication to fitness and technique is exemplary.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Future Opportunities</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Regional Fast Bowling Academy</li>
                      <li>• Women's Cricket Development Program</li>
                      <li>• International Youth Exchange</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Marcus Chen</CardTitle>
                <CardDescription className="text-lg">Wicket-Keeper Batsman | Age 17</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-green-600">Keeper</Badge>
                  <Badge variant="outline">Top Scorer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">692</div>
                      <div className="text-sm text-orange-800">Runs</div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-teal-600">15</div>
                      <div className="text-sm text-teal-800">Dismissals</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                      Top Run Scorer 2024
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Target className="h-4 w-4 mr-2 text-blue-500" />
                      Batting Average: 52.5
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Keeping Success: 94%
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Marcus combines excellent wicket-keeping skills with consistent batting performance. His leadership
                    behind the stumps is invaluable to the team.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Future Opportunities</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Professional Club Trials</li>
                      <li>• Wicket-Keeping Academy</li>
                      <li>• University Cricket Scholarship</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Program */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Player Development Program</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive development pathway for emerging players
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Talent Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular assessments and trials to identify promising young cricketers with potential for development
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Specialized Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalized coaching programs focusing on individual strengths and areas for improvement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Competitive Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Opportunities to compete in higher-level tournaments and representative teams
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Pathway Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Guidance and support for progression to higher levels including scholarships and academy placements
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Former emerging players who have achieved success at higher levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">Sarah Williams</CardTitle>
                    <CardDescription>ACAC Alumni | Professional Cricketer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    "My journey at ACAC from age 12 to 18 shaped my cricket career. The coaching and support I received
                    helped me earn a college scholarship and eventually play professional cricket."
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Achievements</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Full college cricket scholarship</li>
                      <li>• State team representative</li>
                      <li>• Professional contract with regional team</li>
                      <li>• National team training squad</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">David Rodriguez</CardTitle>
                    <CardDescription>ACAC Alumni | College Captain</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    "The emerging players program at ACAC gave me the foundation I needed. The mentorship and
                    development opportunities were incredible and set me up for success."
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Achievements</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• University cricket captain</li>
                      <li>• Regional youth team captain</li>
                      <li>• Academic excellence award</li>
                      <li>• Cricket coaching certification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Emerging Players Program?</h2>
          <p className="text-xl mb-8">
            If you're a young cricketer with potential and dedication, we want to help you reach the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/registration">Apply for Assessment</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a href="/contact">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
