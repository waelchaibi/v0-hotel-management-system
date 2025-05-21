"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Building, Calendar, DollarSign, Download, Plus, Search, Users } from "lucide-react"
import { Star } from "lucide-react"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for hotels
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Plaza",
      location: "Paris, France",
      image: "/placeholder.svg?height=100&width=150",
      rooms: 120,
      occupancy: 78,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Skyline Suites",
      location: "New York, USA",
      image: "/placeholder.svg?height=100&width=150",
      rooms: 85,
      occupancy: 92,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Imperial Resort",
      location: "Tokyo, Japan",
      image: "/placeholder.svg?height=100&width=150",
      rooms: 150,
      occupancy: 65,
      rating: 4.9,
    },
  ]

  // Mock data for bookings
  const bookings = [
    {
      id: "B12345",
      guest: "John Smith",
      hotel: "Grand Hotel Plaza",
      checkIn: "2023-05-15",
      checkOut: "2023-05-18",
      status: "Confirmed",
      amount: 942,
    },
    {
      id: "B12346",
      guest: "Emily Johnson",
      hotel: "Skyline Suites",
      checkIn: "2023-05-20",
      checkOut: "2023-05-25",
      status: "Pending",
      amount: 1250,
    },
    {
      id: "B12347",
      guest: "Michael Brown",
      hotel: "Imperial Resort",
      checkIn: "2023-06-01",
      checkOut: "2023-06-05",
      status: "Confirmed",
      amount: 895,
    },
    {
      id: "B12348",
      guest: "Sarah Wilson",
      hotel: "Grand Hotel Plaza",
      checkIn: "2023-06-10",
      checkOut: "2023-06-15",
      status: "Cancelled",
      amount: 1100,
    },
    {
      id: "B12349",
      guest: "David Lee",
      hotel: "Skyline Suites",
      checkIn: "2023-06-18",
      checkOut: "2023-06-22",
      status: "Confirmed",
      amount: 780,
    },
  ]

  // Mock data for rooms
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      hotel: "Grand Hotel Plaza",
      type: "Standard",
      capacity: 2,
      price: 199,
      status: "Available",
    },
    {
      id: 2,
      name: "Deluxe Room",
      hotel: "Grand Hotel Plaza",
      type: "Deluxe",
      capacity: 2,
      price: 299,
      status: "Booked",
    },
    {
      id: 3,
      name: "Family Suite",
      hotel: "Grand Hotel Plaza",
      type: "Suite",
      capacity: 4,
      price: 399,
      status: "Available",
    },
    {
      id: 4,
      name: "Standard Room",
      hotel: "Skyline Suites",
      type: "Standard",
      capacity: 2,
      price: 249,
      status: "Available",
    },
    {
      id: 5,
      name: "Executive Suite",
      hotel: "Skyline Suites",
      type: "Suite",
      capacity: 3,
      price: 449,
      status: "Maintenance",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Bookings</p>
              <p className="text-3xl font-bold">1,248</p>
              <p className="text-xs text-green-500 mt-1">+12% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Revenue</p>
              <p className="text-3xl font-bold">$52,489</p>
              <p className="text-xs text-green-500 mt-1">+8% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Hotels</p>
              <p className="text-3xl font-bold">24</p>
              <p className="text-xs text-green-500 mt-1">+2 new this month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Users</p>
              <p className="text-3xl font-bold">3,157</p>
              <p className="text-xs text-green-500 mt-1">+15% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="hotels" className="space-y-8">
        <TabsList>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="rooms">Rooms</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Hotels Tab */}
        <TabsContent value="hotels">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle>Manage Hotels</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search hotels..."
                    className="pl-8 w-[200px] sm:w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Hotel
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hotels.map((hotel) => (
                  <div key={hotel.id} className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="relative h-40 md:h-auto">
                        <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                      </div>
                      <div className="p-4 md:col-span-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{hotel.name}</h3>
                            <p className="text-sm text-muted-foreground">{hotel.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <BarChart3 className="h-3 w-3" />
                              {hotel.occupancy}% Occupancy
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {hotel.rating}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Total Rooms</p>
                            <p className="text-sm font-medium">{hotel.rooms}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Available Rooms</p>
                            <p className="text-sm font-medium">
                              {Math.round(hotel.rooms * (1 - hotel.occupancy / 100))}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Booked Rooms</p>
                            <p className="text-sm font-medium">{Math.round(hotel.rooms * (hotel.occupancy / 100))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rooms Tab */}
        <TabsContent value="rooms">{/* Room management content here */}</TabsContent>

        {/* Bookings Tab */}
        <TabsContent value="bookings">{/* Booking management content here */}</TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">{/* User management content here */}</TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">{/* Reporting content here */}</TabsContent>
      </Tabs>
    </div>
  )
}
