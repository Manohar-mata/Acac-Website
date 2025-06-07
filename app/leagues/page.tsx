import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Trophy, Calendar, Target } from "lucide-react"

const teams = [
  {
    name: "St. Louis Thunder",
    slug: "st-louis-thunder",
    description: "Defending champions with a strong batting lineup",
    players: 15,
    founded: 2018,
    captain: "Michael Rodriguez",
    colors: ["bg-blue-600", "bg-yellow-500"],
  },
  {
    name: "Gateway Warriors",
    slug: "gateway-warriors",
    description: "Known for their aggressive fast bowling attack",
    players: 14,
    founded: 2019,
    captain: "Sarah Johnson",
    colors: ["bg-red-600", "bg-white"],
  },
  {
    name: "Arch City Eagles",
    slug: "arch-city-eagles",
    description: "Young team with exceptional fielding skills",
    players: 16,
    founded: 2020,
    captain: "David Chen",
    colors: ["bg-green-600", "bg-gold"],
  },
  {
    name: "Missouri Mavericks",
    slug: "missouri-mavericks",
    description: "Experienced squad with tactical expertise",
    players: 13,
    founded: 2017,
    captain: "Priya Patel",
    colors: ["bg-purple-600", "bg-silver"],
  },
  {
    name: "River City Royals",
    slug: "river-city-royals",
    description: "Balanced team with strong all-rounders",
    players: 15,
    founded: 2021,
    captain: "James Wilson",
    colors: ["bg-indigo-600", "bg-orange-500"],
  },
  {
    name: "Heartland Hawks",
    slug: "heartland-hawks",
    description: "Spin bowling specialists with solid middle order",
    players: 14,
    founded: 2019,
    captain: "Lisa Martinez",
    colors: ["bg-teal-600", "bg-yellow-400"],
  },
  {
    name: "Prairie Storm",
    slug: "prairie-storm",
    description: "Dynamic team known for explosive batting",
    players: 16,
    founded: 2022,
    captain: "Alex Thompson",
    colors: ["bg-gray-700", "bg-blue-400"],
  },
]

export default function LeaguesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACAC Leagues</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Competitive cricket leagues featuring talented teams from across the St. Louis region
          </p>
        </div>
      </section>

      {/* League Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <CardDescription>Active teams competing in our leagues</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">42</div>
                <CardDescription>Matches played this season</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Season</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-2">2024</div>
                <CardDescription>Current season running</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">103</div>
                <CardDescription>Total registered players</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">League Teams</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the teams competing in our premier cricket league
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <Card
                key={team.slug}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-4 h-4 rounded-full ${team.colors[0]}`}></div>
                    <div className={`w-4 h-4 rounded-full ${team.colors[1]}`}></div>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{team.name}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Captain:</span>
                      <Badge variant="outline">{team.captain}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Players:</span>
                      <span className="font-semibold text-slate-800">{team.players}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Founded:</span>
                      <span className="font-semibold text-slate-800">{team.founded}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/leagues/${team.slug}`}>View Team Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* League Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">League Information</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our competitive cricket leagues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Season Format</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Round-robin format with each team playing twice</li>
                  <li>• 20-over matches during regular season</li>
                  <li>• Top 4 teams qualify for playoffs</li>
                  <li>• Championship final in 40-over format</li>
                  <li>• Season runs from April to October</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Team Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Minimum 11 players, maximum 16 players</li>
                  <li>• All players must be ACAC registered members</li>
                  <li>• Team captain must be certified</li>
                  <li>• Regular practice sessions required</li>
                  <li>• Fair play and sportsmanship emphasized</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
