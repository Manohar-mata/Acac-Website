import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ImageIcon, FileText, Calendar, Eye } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore photos, videos, and news from American Cricket Academy events and activities
          </p>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Content</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Latest highlights from our cricket academy and community events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-600 text-white">Featured Video</Badge>
                  <Play className="h-5 w-5 text-red-500" />
                </div>
                <CardTitle className="text-red-800">2024 Spring Championship Highlights</CardTitle>
                <CardDescription>Best moments from our annual spring tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-48 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-16 w-16 text-slate-400" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Published: May 20, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Eye className="h-4 w-4 mr-2" />
                    1,234 views
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Watch the exciting highlights from our 2024 Spring Championship tournament featuring amazing catches,
                  boundaries, and wickets from teams across the region.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-600 text-white">Photo Gallery</Badge>
                  <ImageIcon className="h-5 w-5 text-blue-500" />
                </div>
                <CardTitle className="text-blue-800">Youth Training Camp 2024</CardTitle>
                <CardDescription>Photos from our summer youth development program</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-48 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-16 w-16 text-slate-400" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Added: June 15, 2024
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    45 photos
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Browse through photos from our intensive youth training camp featuring young cricketers learning new
                  skills and having fun.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Video Gallery</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Watch training sessions, match highlights, and educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-green-600 text-white mb-2 w-fit">Training</Badge>
                <CardTitle className="text-green-800">Batting Techniques Masterclass</CardTitle>
                <CardDescription>Learn proper batting stance and stroke play</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 15:30</span>
                  <span>892 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-yellow-600 text-white mb-2 w-fit">Match</Badge>
                <CardTitle className="text-yellow-800">Fall Classic Final 2023</CardTitle>
                <CardDescription>Thrilling final match highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 8:45</span>
                  <span>1,567 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-purple-600 text-white mb-2 w-fit">Tutorial</Badge>
                <CardTitle className="text-purple-800">Bowling Action Basics</CardTitle>
                <CardDescription>Fundamental bowling techniques for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 12:20</span>
                  <span>743 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-blue-600 text-white mb-2 w-fit">Event</Badge>
                <CardTitle className="text-blue-800">Community Blood Drive</CardTitle>
                <CardDescription>ACAC community service event coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 5:15</span>
                  <span>456 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-red-600 text-white mb-2 w-fit">Interview</Badge>
                <CardTitle className="text-red-800">Coach Spotlight: Rajesh Sharma</CardTitle>
                <CardDescription>Meet our head coach and his cricket journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 18:30</span>
                  <span>1,123 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-teal-600 text-white mb-2 w-fit">Youth</Badge>
                <CardTitle className="text-teal-800">Little Cricketers Program</CardTitle>
                <CardDescription>Young players learning cricket fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>Duration: 10:45</span>
                  <span>678 views</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Photo Galleries</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse through our collection of photos from events, training, and tournaments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-12 w-12 text-slate-400" />
                </div>
                <CardTitle className="text-slate-800">Spring Tournament 2024</CardTitle>
                <CardDescription>32 photos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-12 w-12 text-slate-400" />
                </div>
                <CardTitle className="text-slate-800">Youth Training Camp</CardTitle>
                <CardDescription>45 photos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-12 w-12 text-slate-400" />
                </div>
                <CardTitle className="text-slate-800">Family Fun Day</CardTitle>
                <CardDescription>28 photos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-slate-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-12 w-12 text-slate-400" />
                </div>
                <CardTitle className="text-slate-800">Coaching Clinic</CardTitle>
                <CardDescription>19 photos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Articles */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">News & Articles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest news and articles from ACAC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-blue-600 text-white mb-2 w-fit">News</Badge>
                <CardTitle className="text-blue-800">ACAC Wins Regional Championship</CardTitle>
                <CardDescription>Our senior team brings home the trophy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Published: May 25, 2024
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  The American Cricket Academy senior team made history by winning the regional championship for the
                  first time...
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-green-600 text-white mb-2 w-fit">Feature</Badge>
                <CardTitle className="text-green-800">New Training Facility Opens</CardTitle>
                <CardDescription>State-of-the-art cricket training center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Published: April 15, 2024
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  ACAC unveils its new indoor training facility featuring modern equipment and technology to enhance
                  player development...
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="bg-purple-600 text-white mb-2 w-fit">Community</Badge>
                <CardTitle className="text-purple-800">Youth Program Expansion</CardTitle>
                <CardDescription>Reaching more young cricketers in St. Louis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Published: March 10, 2024
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Our youth programs are expanding to serve more communities across the St. Louis metropolitan area...
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Article
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
