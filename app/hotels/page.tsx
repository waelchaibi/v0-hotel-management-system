import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Star, Wifi, Car, Coffee, Tv, Utensils } from "lucide-react"

export default function HotelsPage() {
  // Mock data for hotels
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Plaza",
      location: "Paris, France",
      image: "/hotel_12.jpg?height=300&width=500",
      price: 199,
      rating: 4.8,
      reviews: 324,
      amenities: ["wifi", "parking", "breakfast", "tv", "restaurant"],
      tags: ["Luxury", "City Center"],
    },
    {
      id: 2,
      name: "Skyline Suites",
      location: "New York, USA",
      image: "/hotel_13.jpg?height=300&width=500",
      price: 249,
      rating: 4.7,
      reviews: 256,
      amenities: ["wifi", "parking", "tv", "restaurant"],
      tags: ["Business", "City View"],
    },
    {
      id: 3,
      name: "Imperial Resort",
      location: "Tokyo, Japan",
      image: "/hotel_14.jpg?height=300&width=500",
      price: 179,
      rating: 4.9,
      reviews: 412,
      amenities: ["wifi", "breakfast", "tv", "restaurant"],
      tags: ["Family Friendly", "Spa"],
    },
    {
      id: 4,
      name: "Seaside Retreat",
      location: "Bali, Indonesia",
      image: "/hotel_15.jpg?height=300&width=500",
      price: 159,
      rating: 4.6,
      reviews: 198,
      amenities: ["wifi", "breakfast", "tv"],
      tags: ["Beach", "Romantic"],
    },
    {
      id: 5,
      name: "Mountain View Lodge",
      location: "Zurich, Switzerland",
      image: "/hotel_16.jpg?height=300&width=500",
      price: 219,
      rating: 4.8,
      reviews: 287,
      amenities: ["wifi", "parking", "breakfast", "tv", "restaurant"],
      tags: ["Mountain View", "Ski Access"],
    },
    {
      id: 6,
      name: "Urban Boutique Hotel",
      location: "Barcelona, Spain",
      image: "/hotel_17.jpg?height=300&width=500",
      price: 169,
      rating: 4.5,
      reviews: 176,
      amenities: ["wifi", "breakfast", "tv"],
      tags: ["Boutique", "Design"],
    },
  ]

  // Helper function to render amenity icons
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "parking":
        return <Car className="h-4 w-4" />
      case "breakfast":
        return <Coffee className="h-4 w-4" />
      case "tv":
        return <Tv className="h-4 w-4" />
      case "restaurant":
        return <Utensils className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Find Hotels</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>

              <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="search" placeholder="Hotel name or location" className="pl-8" />
                  </div>
                </div>

                <Separator />

                {/* Price Range */}
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[50, 250]} min={0} max={500} step={10} />
                    <div className="flex items-center justify-between">
                      <div className="border rounded-md px-2 py-1 text-sm">$50</div>
                      <div className="border rounded-md px-2 py-1 text-sm">$250</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Star Rating */}
                <Accordion type="single" collapsible defaultValue="star-rating">
                  <AccordionItem value="star-rating">
                    <AccordionTrigger>Star Rating</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <Label htmlFor={`rating-${rating}`} className="flex items-center">
                              {Array.from({ length: rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                              {Array.from({ length: 5 - rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-gray-300" />
                              ))}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator />

                {/* Amenities */}
                <Accordion type="single" collapsible defaultValue="amenities">
                  <AccordionItem value="amenities">
                    <AccordionTrigger>Amenities</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[
                          { id: "wifi", label: "WiFi" },
                          { id: "parking", label: "Parking" },
                          { id: "breakfast", label: "Breakfast" },
                          { id: "pool", label: "Swimming Pool" },
                          { id: "fitness", label: "Fitness Center" },
                          { id: "spa", label: "Spa" },
                          { id: "restaurant", label: "Restaurant" },
                          { id: "bar", label: "Bar" },
                          { id: "ac", label: "Air Conditioning" },
                        ].map((amenity) => (
                          <div key={amenity.id} className="flex items-center space-x-2">
                            <Checkbox id={`amenity-${amenity.id}`} />
                            <Label htmlFor={`amenity-${amenity.id}`}>{amenity.label}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator />

                {/* Property Type */}
                <Accordion type="single" collapsible defaultValue="property-type">
                  <AccordionItem value="property-type">
                    <AccordionTrigger>Property Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[
                          { id: "hotel", label: "Hotel" },
                          { id: "resort", label: "Resort" },
                          { id: "apartment", label: "Apartment" },
                          { id: "villa", label: "Villa" },
                          { id: "hostel", label: "Hostel" },
                          { id: "guesthouse", label: "Guesthouse" },
                        ].map((type) => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox id={`type-${type.id}`} />
                            <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button className="w-full mt-4">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hotel Listings */}
        <div className="lg:col-span-3">
          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-muted-foreground">Showing {hotels.length} hotels</p>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-by" className="whitespace-nowrap">
                Sort by:
              </Label>
              <Select defaultValue="recommended">
                <SelectTrigger id="sort-by" className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={hotel.image || "/hotel_18.jpg"} alt={hotel.name} fill className="object-cover" />
                  {hotel.tags.length > 0 && (
                    <div className="absolute top-2 left-2 flex gap-2">
                      {hotel.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
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

                  <div className="mt-3 flex items-center gap-1">
                    {hotel.amenities.map((amenity) => (
                      <div key={amenity} className="text-muted-foreground p-1" title={amenity}>
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg">${hotel.price}</span>
                      <span className="text-sm text-muted-foreground"> / night</span>
                    </div>
                    <Button asChild>
                      <Link href={`/hotels/${hotel.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
