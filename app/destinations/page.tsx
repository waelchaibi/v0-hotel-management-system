import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Calendar, Users } from "lucide-react"

export default function DestinationsPage() {
  // Mock data for destinations
  const featuredDestinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      description:
        "Experience the romance and charm of the City of Light. Visit iconic landmarks like the Eiffel Tower and Louvre Museum.",
      image: "/placeholder.svg?height=400&width=600",
      hotels: 243,
      rating: 4.8,
      tags: ["Romantic", "Cultural", "Historic"],
    },
    {
      id: 2,
      name: "New York",
      country: "United States",
      description:
        "Discover the vibrant energy of the Big Apple. Explore Times Square, Central Park, and world-class museums.",
      image: "/placeholder.svg?height=400&width=600",
      hotels: 315,
      rating: 4.7,
      tags: ["Urban", "Shopping", "Nightlife"],
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      description:
        "Immerse yourself in the fascinating blend of tradition and innovation. Experience unique culture and cuisine.",
      image: "/placeholder.svg?height=400&width=600",
      hotels: 189,
      rating: 4.9,
      tags: ["Cultural", "Foodie", "Shopping"],
    },
  ]

  const popularDestinations = [
    {
      id: 4,
      name: "London",
      country: "United Kingdom",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 276,
    },
    {
      id: 5,
      name: "Rome",
      country: "Italy",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 198,
    },
    {
      id: 6,
      name: "Barcelona",
      country: "Spain",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 167,
    },
    {
      id: 7,
      name: "Dubai",
      country: "United Arab Emirates",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 145,
    },
    {
      id: 8,
      name: "Sydney",
      country: "Australia",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 132,
    },
    {
      id: 9,
      name: "Bangkok",
      country: "Thailand",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 178,
    },
    {
      id: 10,
      name: "Amsterdam",
      country: "Netherlands",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 112,
    },
    {
      id: 11,
      name: "Singapore",
      country: "Singapore",
      image: "/placeholder.svg?height=300&width=400",
      hotels: 98,
    },
  ]

  const destinationTypes = [
    {
      type: "Beach",
      image: "/placeholder.svg?height=300&width=400",
      count: 156,
    },
    {
      type: "Mountain",
      image: "/placeholder.svg?height=300&width=400",
      count: 89,
    },
    {
      type: "City",
      image: "/placeholder.svg?height=300&width=400",
      count: 243,
    },
    {
      type: "Countryside",
      image: "/placeholder.svg?height=300&width=400",
      count: 67,
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Explore Destinations</h1>

      {/* Search Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <Tabs defaultValue="destination" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="destination">Destination</TabsTrigger>
              <TabsTrigger value="hotel">Hotel</TabsTrigger>
            </TabsList>
            <TabsContent value="destination">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Where do you want to go?" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Check-in - Check-out" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="2 Adults, 0 Children" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hotel">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Hotel name" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Check-in - Check-out" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Featured Destinations */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {destination.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground">{destination.country}</p>
                  </div>
                  <Badge variant="outline">{destination.hotels} Hotels</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
                <Button asChild className="w-full">
                  <Link href={`/destinations/${destination.id}`}>Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Destination Types */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Explore by Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinationTypes.map((type) => (
            <Link
              key={type.type}
              href={`/destinations/type/${type.type.toLowerCase()}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.type}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{type.type}</h3>
                  <p className="text-sm">{type.count} destinations</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p className="text-sm">{destination.country}</p>
                  <p className="text-xs mt-1">{destination.hotels} hotels</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
