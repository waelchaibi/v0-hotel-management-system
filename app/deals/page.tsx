import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Percent, Tag, Users } from "lucide-react"

export default function DealsPage() {
  // Mock data for deals
  const featuredDeals = [
    {
      id: 1,
      title: "Summer Escape: 30% Off Beach Resorts",
      description: "Enjoy a relaxing beach vacation with 30% off at select beach resorts worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      discount: "30%",
      originalPrice: 299,
      discountedPrice: 209,
      location: "Multiple Destinations",
      validUntil: "August 31, 2023",
      tags: ["Beach", "Summer", "Family"],
    },
    {
      id: 2,
      title: "City Break: 3 Nights for the Price of 2",
      description: "Explore vibrant cities and get one night free when you book a 3-night stay.",
      image: "/placeholder.svg?height=400&width=600",
      discount: "33%",
      originalPrice: 450,
      discountedPrice: 300,
      location: "Major Cities Worldwide",
      validUntil: "December 15, 2023",
      tags: ["City", "Weekend", "Cultural"],
    },
    {
      id: 3,
      title: "Luxury Retreat: 25% Off + Free Spa Treatment",
      description: "Indulge in luxury with 25% off and a complimentary spa treatment at select 5-star hotels.",
      image: "/placeholder.svg?height=400&width=600",
      discount: "25%",
      originalPrice: 599,
      discountedPrice: 449,
      location: "Luxury Destinations",
      validUntil: "October 31, 2023",
      tags: ["Luxury", "Spa", "Romantic"],
    },
  ]

  const lastMinuteDeals = [
    {
      id: 4,
      title: "Last-Minute Paris Getaway",
      location: "Paris, France",
      image: "/placeholder.svg?height=200&width=300",
      discount: "40%",
      originalPrice: 299,
      discountedPrice: 179,
      validUntil: "Next Week",
    },
    {
      id: 5,
      title: "Weekend in Barcelona",
      location: "Barcelona, Spain",
      image: "/placeholder.svg?height=200&width=300",
      discount: "35%",
      originalPrice: 275,
      discountedPrice: 179,
      validUntil: "This Weekend",
    },
    {
      id: 6,
      title: "Rome City Break",
      location: "Rome, Italy",
      image: "/placeholder.svg?height=200&width=300",
      discount: "30%",
      originalPrice: 250,
      discountedPrice: 175,
      validUntil: "Next 10 Days",
    },
    {
      id: 7,
      title: "Amsterdam Adventure",
      location: "Amsterdam, Netherlands",
      image: "/placeholder.svg?height=200&width=300",
      discount: "25%",
      originalPrice: 225,
      discountedPrice: 169,
      validUntil: "Next 2 Weeks",
    },
  ]

  const packageDeals = [
    {
      id: 8,
      title: "Paris & London Combo",
      description: "Explore two iconic European capitals with this 7-night package.",
      image: "/placeholder.svg?height=200&width=300",
      price: 1299,
      duration: "7 nights",
      includes: ["Flights", "Hotels", "Transfers", "Breakfast"],
    },
    {
      id: 9,
      title: "Mediterranean Cruise Package",
      description: "Sail the Mediterranean with stops in Italy, Greece, and Croatia.",
      image: "/placeholder.svg?height=200&width=300",
      price: 1899,
      duration: "10 nights",
      includes: ["Cruise", "Cabin", "All Meals", "Entertainment"],
    },
    {
      id: 10,
      title: "Thailand Beach & City",
      description: "Experience Bangkok's vibrant culture and Phuket's beautiful beaches.",
      image: "/placeholder.svg?height=200&width=300",
      price: 1499,
      duration: "8 nights",
      includes: ["Flights", "Hotels", "Some Meals", "Tours"],
    },
  ]

  const seasonalDeals = [
    {
      id: 11,
      title: "Winter Ski Escape",
      location: "Alps, Switzerland",
      image: "/placeholder.svg?height=200&width=300",
      discount: "20%",
      season: "Winter",
    },
    {
      id: 12,
      title: "Cherry Blossom Tour",
      location: "Tokyo, Japan",
      image: "/placeholder.svg?height=200&width=300",
      discount: "15%",
      season: "Spring",
    },
    {
      id: 13,
      title: "Summer Beach Holiday",
      location: "Bali, Indonesia",
      image: "/placeholder.svg?height=200&width=300",
      discount: "25%",
      season: "Summer",
    },
    {
      id: 14,
      title: "Autumn Colors Tour",
      location: "New England, USA",
      image: "/placeholder.svg?height=200&width=300",
      discount: "18%",
      season: "Autumn",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Special Deals & Offers</h1>

      {/* Search Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <Tabs defaultValue="deals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="deals">Deals</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="last-minute">Last Minute</TabsTrigger>
            </TabsList>
            <TabsContent value="deals">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Destination" className="pl-8" />
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
                    <Tag className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8">
                      <option value="">Deal Type</option>
                      <option value="hotel">Hotel Deals</option>
                      <option value="package">Package Deals</option>
                      <option value="seasonal">Seasonal Offers</option>
                      <option value="last-minute">Last Minute</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search Deals</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="packages">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Destination" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Travel Dates" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Travelers" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search Packages</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="last-minute">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Where to?" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8">
                      <option value="">When?</option>
                      <option value="today">Today</option>
                      <option value="tomorrow">Tomorrow</option>
                      <option value="this-week">This Week</option>
                      <option value="next-week">Next Week</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Find Last Minute Deals</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Featured Deals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredDeals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <Percent className="h-3 w-3" />
                    {deal.discount} OFF
                  </Badge>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  {deal.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{deal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{deal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Valid until {deal.validUntil}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm line-through text-muted-foreground">${deal.originalPrice}</span>
                    <span className="text-lg font-bold ml-2">${deal.discountedPrice}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/deals/${deal.id}`}>View Deal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Last Minute Deals */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Last Minute Deals</h2>
          <Button variant="outline" asChild>
            <Link href="/deals/last-minute">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {lastMinuteDeals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden">
              <div className="relative h-40">
                <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <Badge variant="destructive">{deal.discount} OFF</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{deal.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{deal.location}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="h-3 w-3" />
                  <span>Valid until {deal.validUntil}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs line-through text-muted-foreground">${deal.originalPrice}</span>
                    <span className="text-base font-bold ml-1">${deal.discountedPrice}</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/deals/${deal.id}`}>Book</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Package Deals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Package Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packageDeals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{deal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{deal.duration}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.includes.map((item, index) => (
                      <Badge key={index} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold">${deal.price}</span>
                    <span className="text-sm text-muted-foreground"> / person</span>
                  </div>
                  <Button asChild>
                    <Link href={`/deals/packages/${deal.id}`}>View Package</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seasonal Deals */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Seasonal Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {seasonalDeals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden">
              <div className="relative h-40">
                <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-2 right-2">
                  <Badge>{deal.season}</Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="destructive">{deal.discount} OFF</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{deal.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{deal.location}</p>
                <Button size="sm" className="w-full" asChild>
                  <Link href={`/deals/seasonal/${deal.id}`}>View Offer</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-16 bg-muted rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Get Exclusive Deals</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and be the first to know about our special offers and promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
