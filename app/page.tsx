import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel_main.jpg?height=600&width=1200"
            alt="Luxury hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find Your Perfect Stay</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">Discover and book the ideal hotel for your next adventure</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="hotel" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="hotel">Hotel</TabsTrigger>
                <TabsTrigger value="package">Package</TabsTrigger>
              </TabsList>
              <TabsContent value="hotel">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="destination" placeholder="Where are you going?" className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Check-in / Check-out</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Check-in</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Check-out</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <div className="relative">
                      <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Select>
                        <SelectTrigger className="pl-8">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Search Hotels</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="package">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="package-destination">Destination</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="package-destination" placeholder="Where are you going?" className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Dates</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Start</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>End</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package-type">Package Type</Label>
                    <Select>
                      <SelectTrigger id="package-type">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-inclusive">All Inclusive</SelectItem>
                        <SelectItem value="flight-hotel">Flight + Hotel</SelectItem>
                        <SelectItem value="hotel-car">Hotel + Car</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Search Packages</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Paris", image: "/hotel_1.jpg?height=300&width=400", hotels: 243 },
            { name: "New York", image: "/hotel_2.jpg?height=300&width=400", hotels: 315 },
            { name: "Tokyo", image: "/hotel_3.jpg?height=300&width=400", hotels: 189 },
            { name: "London", image: "/hotel_4.jpg?height=300&width=400", hotels: 276 },
          ].map((destination) => (
            <Link
              key={destination.name}
              href={`/destinations/${destination.name.toLowerCase()}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/hotel_5.jpg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p className="text-sm">{destination.hotels} hotels</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Grand Hotel Plaza",
              location: "Paris, France",
              image: "/hotel_6.jpg?height=300&width=500",
              price: 199,
              rating: 4.8,
            },
            {
              name: "Skyline Suites",
              location: "New York, USA",
              image: "/hotel_7.jpg?height=300&width=500",
              price: 249,
              rating: 4.7,
            },
            {
              name: "Imperial Resort",
              location: "Tokyo, Japan",
              image: "/hotel_8.jpg?height=300&width=500",
              price: 179,
              rating: 4.9,
            },
          ].map((hotel) => (
            <Link key={hotel.name} href={`/hotels/${hotel.name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={hotel.image || "/hotel_9.jpg"} alt={hotel.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {hotel.location}
                      </p>
                    </div>
                    <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      <Star className="h-3 w-3 mr-1 fill-primary" />
                      {hotel.rating}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg">${hotel.price}</span>
                      <span className="text-sm text-muted-foreground"> / night</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/hotels">View All Hotels</Link>
          </Button>
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 md:h-full">
                <Image
                  src="/hotel_10.jpg?height=300&width=500"
                  alt="Early booking discount"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute top-0 left-0 p-6 text-white max-w-md">
                  <h3 className="text-2xl font-bold mb-2">Early Booking Discount</h3>
                  <p className="mb-4">Book 60 days in advance and get up to 30% off on your stay.</p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 md:h-full">
                <Image
                  src="/hotel_11.jpg?height=300&width=500"
                  alt="Weekend getaway"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute top-0 left-0 p-6 text-white max-w-md">
                  <h3 className="text-2xl font-bold mb-2">Weekend Getaway</h3>
                  <p className="mb-4">Enjoy a 2-night stay with breakfast included and late checkout.</p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              location: "United States",
              comment:
                "The booking process was seamless, and the hotel exceeded our expectations. Will definitely use this platform again!",
              rating: 5,
            },
            {
              name: "David Chen",
              location: "Canada",
              comment:
                "Great selection of hotels and competitive prices. The customer service was excellent when I needed to modify my reservation.",
              rating: 4,
            },
            {
              name: "Maria Garcia",
              location: "Spain",
              comment:
                "I've used many booking platforms, but this one offers the best user experience and has never disappointed me.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Stay updated with our latest offers, travel tips, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="bg-primary-foreground text-primary" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
