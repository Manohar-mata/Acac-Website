"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Calendar, DollarSign, Users, FileText } from "lucide-react"

export default function RegistrationPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    program: "",
    experience: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalInfo: "",
    agreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. We'll contact you soon with next steps.",
    })

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      program: "",
      experience: "",
      emergencyContact: "",
      emergencyPhone: "",
      medicalInfo: "",
      agreement: false,
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Registration</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join the American Cricket Academy family and start your cricket journey today
          </p>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Season Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Spring: March - June
                  <br />
                  Fall: August - November
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Program Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Youth: $150/season
                  <br />
                  Adult: $200/season
                  <br />
                  Family discounts available
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional coaching
                  <br />
                  Equipment usage
                  <br />
                  Tournament entry
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Completed registration
                  <br />
                  Medical clearance
                  <br />
                  Waiver signed
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-slate-800">Player Registration Form</CardTitle>
              <CardDescription className="text-lg">
                Please fill out all required information to complete your registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Program *</Label>
                    <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="little-cricketers">Little Cricketers (Ages 6-10)</SelectItem>
                        <SelectItem value="junior-development">Junior Development (Ages 11-14)</SelectItem>
                        <SelectItem value="elite-youth">Elite Youth (Ages 15-18)</SelectItem>
                        <SelectItem value="adult-league">Adult League (18+)</SelectItem>
                        <SelectItem value="adult-coaching">Adult Coaching</SelectItem>
                        <SelectItem value="private-coaching">Private Coaching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Cricket Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - No prior experience</SelectItem>
                      <SelectItem value="some">Some Experience - Played casually</SelectItem>
                      <SelectItem value="intermediate">Intermediate - Regular player</SelectItem>
                      <SelectItem value="advanced">Advanced - Competitive player</SelectItem>
                      <SelectItem value="expert">Expert - Professional/Semi-professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Emergency Contact */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Emergency Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="space-y-2">
                  <Label htmlFor="medicalInfo">Medical Information / Allergies</Label>
                  <Textarea
                    id="medicalInfo"
                    placeholder="Please list any medical conditions, allergies, or medications we should be aware of..."
                    value={formData.medicalInfo}
                    onChange={(e) => handleInputChange("medicalInfo", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-2 p-4 bg-blue-50 rounded-lg">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="agreement"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      By checking this box, I acknowledge that I have read and agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        terms of service
                      </a>
                      ,{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        privacy policy
                      </a>
                      , and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        liability waiver
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Submit Registration
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
