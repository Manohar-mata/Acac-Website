"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Users, Trophy, Star, Plus } from "lucide-react"

export default function HeartlandHawksPage() {
  const { toast } = useToast()
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Lisa Martinez",
      position: "Captain/Spin Bowler",
      battingStyle: "Left-hand",
      bowlingStyle: "Left-arm spin",
    },
    { id: 2, name: "Jennifer Adams", position: "Opening Batsman", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    { id: 3, name: "Michelle Thompson", position: "Wicket-keeper", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    {
      id: 4,
      name: "Amanda White",
      position: "All-rounder",
      battingStyle: "Left-hand",
      bowlingStyle: "Left-arm medium",
    },
    {
      id: 5,
      name: "Rebecca Clark",
      position: "Fast Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm fast-medium",
    },
    { id: 6, name: "Nicole Lewis", position: "Middle-order Batsman", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    {
      id: 7,
      name: "Stephanie Walker",
      position: "Spin Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm off-spin",
    },
    {
      id: 8,
      name: "Christina Hall",
      position: "All-rounder",
      battingStyle: "Left-hand",
      bowlingStyle: "Left-arm spin",
    },
    { id: 9, name: "Melissa Young", position: "Opening Batsman", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    {
      id: 10,
      name: "Kimberly King",
      position: "Fast Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm fast",
    },
    { id: 11, name: "Angela Wright", position: "Middle-order Batsman", battingStyle: "Left-hand", bowlingStyle: "N/A" },
    {
      id: 12,
      name: "Brenda Lopez",
      position: "Spin Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm leg-spin",
    },
    {
      id: 13,
      name: "Donna Hill",
      position: "All-rounder",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm medium",
    },
    { id: 14, name: "Carol Green", position: "Wicket-keeper", battingStyle: "Left-hand", bowlingStyle: "N/A" },
  ])

  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    battingStyle: "",
    bowlingStyle: "",
  })

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPlayer.name || !newPlayer.position || !newPlayer.battingStyle) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const player = {
      id: players.length + 1,
      ...newPlayer,
    }

    setPlayers([...players, player])
    setNewPlayer({
      name: "",
      position: "",
      battingStyle: "",
      bowlingStyle: "",
    })

    toast({
      title: "Player Added!",
      description: `${newPlayer.name} has been successfully added to Heartland Hawks.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-yellow-50">
      <Header />

      {/* Team Header */}
      <section className="bg-gradient-to-r from-teal-600 to-yellow-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-6 h-6 rounded-full bg-teal-600"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
            </div>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="Heartland Hawks logo"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Heartland Hawks</h1>
            <p className="text-xl mb-6">Spin Bowling Specialists • Founded 2019</p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">{players.length}</div>
                <div>Players</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1</div>
                <div>Championships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">33</div>
                <div>Matches Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-teal-800">Team Captain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">Lisa Martinez</p>
                <p className="text-slate-600">Spin Bowler • 6 years experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Recent Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">League Champions 2021</p>
                <p className="text-slate-600">Spin bowling dominated season</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Team Strength</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">Spin Bowling Attack</p>
                <p className="text-slate-600">Solid middle order batting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scrolling Images Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="scroll-container">
          <div className="scroll-content animate-scroll">
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 1"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 2"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 3"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 4"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 5"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 6"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            {/* Duplicate images for seamless scrolling */}
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 1"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 2"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Team Action 3"
              className="h-64 w-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Current Squad */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Current Squad</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the talented players representing Heartland Hawks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <Card
                key={player.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-slate-800">{player.name}</CardTitle>
                    {player.position.includes("Captain") && <Badge className="bg-teal-600 text-white">Captain</Badge>}
                  </div>
                  <CardDescription>{player.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Batting:</span>
                      <span className="font-medium">{player.battingStyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Bowling:</span>
                      <span className="font-medium">{player.bowlingStyle}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Player Registration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800">Team Player Registration</CardTitle>
              <CardDescription className="text-lg">Add a new player to the Heartland Hawks squad</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddPlayer} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="playerName">Player Name *</Label>
                    <Input
                      id="playerName"
                      value={newPlayer.name}
                      onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
                      placeholder="Enter player's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select
                      value={newPlayer.position}
                      onValueChange={(value) => setNewPlayer({ ...newPlayer, position: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Opening Batsman">Opening Batsman</SelectItem>
                        <SelectItem value="Middle-order Batsman">Middle-order Batsman</SelectItem>
                        <SelectItem value="Wicket-keeper">Wicket-keeper</SelectItem>
                        <SelectItem value="All-rounder">All-rounder</SelectItem>
                        <SelectItem value="Fast Bowler">Fast Bowler</SelectItem>
                        <SelectItem value="Spin Bowler">Spin Bowler</SelectItem>
                        <SelectItem value="Batsman">Batsman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="battingStyle">Batting Style *</Label>
                    <Select
                      value={newPlayer.battingStyle}
                      onValueChange={(value) => setNewPlayer({ ...newPlayer, battingStyle: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select batting style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Right-hand">Right-hand</SelectItem>
                        <SelectItem value="Left-hand">Left-hand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bowlingStyle">Bowling Style</Label>
                    <Select
                      value={newPlayer.bowlingStyle}
                      onValueChange={(value) => setNewPlayer({ ...newPlayer, bowlingStyle: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select bowling style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="N/A">N/A</SelectItem>
                        <SelectItem value="Right-arm fast">Right-arm fast</SelectItem>
                        <SelectItem value="Right-arm fast-medium">Right-arm fast-medium</SelectItem>
                        <SelectItem value="Right-arm medium">Right-arm medium</SelectItem>
                        <SelectItem value="Right-arm off-spin">Right-arm off-spin</SelectItem>
                        <SelectItem value="Right-arm leg-spin">Right-arm leg-spin</SelectItem>
                        <SelectItem value="Left-arm fast">Left-arm fast</SelectItem>
                        <SelectItem value="Left-arm medium">Left-arm medium</SelectItem>
                        <SelectItem value="Left-arm spin">Left-arm spin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Player to Squad
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
