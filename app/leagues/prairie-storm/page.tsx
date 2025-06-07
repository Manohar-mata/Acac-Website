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

export default function PrairieStormPage() {
  const { toast } = useToast()
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Alex Thompson",
      position: "Captain/Opening Batsman",
      battingStyle: "Left-hand",
      bowlingStyle: "N/A",
    },
    {
      id: 2,
      name: "Jordan Smith",
      position: "All-rounder",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm medium",
    },
    {
      id: 3,
      name: "Taylor Johnson",
      position: "Fast Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm fast",
    },
    { id: 4, name: "Casey Williams", position: "Wicket-keeper", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    { id: 5, name: "Morgan Davis", position: "Middle-order Batsman", battingStyle: "Left-hand", bowlingStyle: "N/A" },
    {
      id: 6,
      name: "Riley Brown",
      position: "Spin Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm off-spin",
    },
    {
      id: 7,
      name: "Avery Wilson",
      position: "All-rounder",
      battingStyle: "Left-hand",
      bowlingStyle: "Left-arm medium",
    },
    {
      id: 8,
      name: "Quinn Miller",
      position: "Fast Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm fast-medium",
    },
    { id: 9, name: "Sage Garcia", position: "Opening Batsman", battingStyle: "Right-hand", bowlingStyle: "N/A" },
    {
      id: 10,
      name: "River Martinez",
      position: "All-rounder",
      battingStyle: "Left-hand",
      bowlingStyle: "Left-arm spin",
    },
    {
      id: 11,
      name: "Phoenix Anderson",
      position: "Middle-order Batsman",
      battingStyle: "Right-hand",
      bowlingStyle: "N/A",
    },
    {
      id: 12,
      name: "Skylar Taylor",
      position: "Fast Bowler",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm fast",
    },
    { id: 13, name: "Dakota Moore", position: "Spin Bowler", battingStyle: "Left-hand", bowlingStyle: "Left-arm spin" },
    {
      id: 14,
      name: "Rowan Jackson",
      position: "All-rounder",
      battingStyle: "Right-hand",
      bowlingStyle: "Right-arm medium",
    },
    { id: 15, name: "Emery White", position: "Wicket-keeper", battingStyle: "Left-hand", bowlingStyle: "N/A" },
    {
      id: 16,
      name: "Finley Harris",
      position: "Middle-order Batsman",
      battingStyle: "Right-hand",
      bowlingStyle: "N/A",
    },
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
      description: `${newPlayer.name} has been successfully added to Prairie Storm.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      {/* Team Header */}
      <section className="bg-gradient-to-r from-gray-700 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
              <div className="w-6 h-6 rounded-full bg-blue-400"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prairie Storm</h1>
            <p className="text-xl mb-6">Explosive Batting • Founded 2022</p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">{players.length}</div>
                <div>Players</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">0</div>
                <div>Championships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">18</div>
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
                <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-gray-800">Team Captain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">Alex Thompson</p>
                <p className="text-slate-600">Opening Batsman • 3 years experience</p>
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
                <p className="font-semibold text-lg">Highest Team Score 2024</p>
                <p className="text-slate-600">Record 287 runs in 20 overs</p>
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
                <p className="font-semibold text-lg">Explosive Batting</p>
                <p className="text-slate-600">Dynamic young team</p>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Current Squad</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the talented players representing Prairie Storm
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
                    {player.position.includes("Captain") && <Badge className="bg-gray-700 text-white">Captain</Badge>}
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
              <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-gray-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800">Team Player Registration</CardTitle>
              <CardDescription className="text-lg">Add a new player to the Prairie Storm squad</CardDescription>
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

                <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-lg py-3">
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
