import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, MapPin, Star, Calendar, Users, Cloud, Thermometer, Droplets } from "lucide-react"

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  // Mock destination data
  const destination = {
    id: params.id,
    name: "Paris",
    country: "France",
    description:
      "Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    longDescription:
      "Paris, often referred to as the 'City of Light' (la Ville Lumière) and the 'City of Love,' is the capital and most populous city of France. Situated on the Seine River in the north-central part of the country, Paris is one of the world's most beautiful and culturally rich destinations.\n\nThe city is home to some of the world's most iconic landmarks, including the Eiffel Tower, Notre-Dame Cathedral, the Louvre Museum, and the Arc de Triomphe. Its cityscape is characterized by wide boulevards, historic architecture, and charming neighborhoods like Montmartre and Le Marais.\n\nParis is renowned for its art and cultural scene, housing world-class museums and galleries. The Louvre, the world's largest art museum, contains over 38,000 objects, including the famous Mona Lisa. Other notable museums include the Musée d'Orsay, Centre Pompidou, and the Rodin Museum.\n\nThe city's culinary scene is legendary, with countless cafes, bistros, and Michelin-starred restaurants offering exquisite French cuisine. From fresh croissants and baguettes to fine wines and gourmet cheeses, Paris is a paradise for food lovers.\n\nParis is also a global fashion capital, home to renowned fashion houses like Chanel, Dior, and Louis Vuitton. The city hosts Paris Fashion Week, one of the world's most prestigious fashion events.\n\nWith its romantic ambiance, stunning architecture, rich history, and cultural treasures, Paris continues to captivate visitors from around the world, making it one of the most visited cities globally.",
    image: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.8,
    reviews: 1245,
    hotels: 243,
    attractions: [
      {
        name: "Eiffel Tower",
        description: "Iconic wrought-iron tower offering city views.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Louvre Museum",
        description: "World's largest art museum and historic monument.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Notre-Dame Cathedral",
        description: "Medieval Catholic cathedral with Gothic architecture.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Arc de Triomphe",
        description: "Iconic triumphal arch honoring those who fought for France.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    weather: {
      current: {
        temp: 22,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6" />,
      },
      forecast: [
        { day: "Mon", temp: 22, icon: <Cloud className="h-4 w-4" /> },
        { day: "Tue", temp: 24, icon: <Cloud className="h-4 w-4" /> },
        { day: "Wed", temp: 21, icon: <Droplets className="h-4 w-4" /> },
        { day: "Thu", temp: 19, icon: <Droplets className="h-4 w-4" /> },
        { day: "Fri", temp: 23, icon: <Thermometer className="h-4 w-4" /> },
      ],
    },
    bestTimeToVisit: "April to June, September to October",
    localCurrency: "Euro (€)",
    language: "French",
    timeZone: "Central European Time (CET)",
  }

  // Mock hotel data
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Paris",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 324,
      price: 199,
    },
    {
      id: 2,
      name: "Eiffel View Suites",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 256,
      price: 249,
    },
    {
      id: 3,
      name: "Seine River Hotel",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviews: 198,
      price: 179,
    },
    {
      id: 4,
      name: "Montmartre Boutique Hotel",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      reviews: 176,
      price: 159,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="container">
            <div className="flex items-center text-sm mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/destinations" className="hover:underline">
                Destinations
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>{destination.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl mb-4">{destination.country}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-medium">{destination.rating}</span>
                <span className="mx-1">•</span>
                <span>{destination.reviews} reviews</span>
              </div>
              <Badge variant="secondary">{destination.hotels} Hotels</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Search */}
        <Card className="mb-8 -mt-16 relative z-10">
          <CardContent className="p-6">
            <Tabs defaultValue="hotels" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="flights">Flights</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="hotels">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Check-in - Check-out"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="2 Adults, 0 Children"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Price Range</option>
                      <option value="0-100">$0 - $100</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="300+">$300+</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Search</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="flights">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="From"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="To"
                        defaultValue={destination.name}
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Departure - Return"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Search</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="packages">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Departure - Return"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="2 Adults, 0 Children"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                      />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">About {destination.name}</h2>
              <div className="prose max-w-none">
                <p className="text-muted-foreground whitespace-pre-line">{destination.longDescription}</p>
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {destination.images.map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${destination.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button variant="secondary">View All Photos</Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={`${destination.name} more`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Top Attractions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Top Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{attraction.name}</h3>
                      <p className="text-sm text-muted-foreground">{attraction.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hotels */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold tracking-tight">Popular Hotels</h2>
                <Button variant="outline" asChild>
                  <Link href={`/hotels?destination=${destination.name}`}>View All</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hotels.map((hotel) => (
                  <Card key={hotel.id} className="overflow-hidden">
                    <div className="grid grid-cols-3">
                      <div className="relative h-full">
                        <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                      </div>
                      <div className="col-span-2 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">{hotel.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm">{hotel.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{hotel.reviews} reviews</p>
                        <div className="mt-auto flex justify-between items-center">
                          <div>
                            <span className="font-semibold">${hotel.price}</span>
                            <span className="text-xs text-muted-foreground"> / night</span>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={`/hotels/${hotel.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Weather */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Current Weather</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {destination.weather.current.icon}
                    <span>{destination.weather.current.condition}</span>
                  </div>
                  <div className="text-2xl font-bold">{destination.weather.current.temp}°C</div>
                </div>
                <Separator className="my-4" />
                <h4 className="text-sm font-medium mb-2">5-Day Forecast</h4>
                <div className="grid grid-cols-5 gap-2">
                  {destination.weather.forecast.map((day) => (
                    <div key={day.day} className="text-center">
                      <div className="text-xs">{day.day}</div>
                      <div className="my-1">{day.icon}</div>
                      <div className="text-sm">{day.temp}°</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Info */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Travel Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                    <p className="font-medium">{destination.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Local Currency</p>
                    <p className="font-medium">{destination.localCurrency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Language</p>
                    <p className="font-medium">{destination.language}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time Zone</p>
                    <p className="font-medium">{destination.timeZone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-[300px] bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-4">
                    <h3 className="font-semibold">
                      {destination.name}, {destination.country}
                    </h3>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
