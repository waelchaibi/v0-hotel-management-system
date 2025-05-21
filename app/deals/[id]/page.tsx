import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Clock, MapPin, Percent, Star, Check, Calendar, Users } from "lucide-react"

export default function DealDetailPage({ params }: { params: { id: string } }) {
  // Mock deal data
  const deal = {
    id: params.id,
    title: "Summer Escape: 30% Off Beach Resorts",
    description:
      "Enjoy a relaxing beach vacation with 30% off at select beach resorts worldwide. This exclusive offer includes luxury accommodations, daily breakfast, and special amenities.",
    longDescription:
      "Escape to paradise with our Summer Beach Resort deal and save 30% on your stay at select beach resorts worldwide. This limited-time offer is perfect for travelers looking to enjoy sun, sand, and sea at a fraction of the regular price.\n\nOur participating beach resorts offer luxurious accommodations with stunning ocean views, world-class amenities, and exceptional service. Whether you're planning a romantic getaway, a family vacation, or a solo adventure, this deal provides incredible value for your summer travel plans.\n\nThis special offer includes:\n- 30% off standard room rates\n- Daily breakfast for two\n- Welcome drink upon arrival\n- Access to resort facilities including pools, fitness center, and beach amenities\n- Late check-out (subject to availability)\n\nParticipating resorts are located in some of the world's most beautiful beach destinations, including Bali, Phuket, Maldives, Cancun, and the Caribbean islands. Each resort offers a unique experience while maintaining the highest standards of comfort and service.\n\nDon't miss this opportunity to enjoy a dream beach vacation at an unbeatable price. Book now to secure your preferred dates and resort!",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    discount: "30%",
    originalPrice: 299,
    discountedPrice: 209,
    priceDetails: "per night, based on double occupancy",
    location: "Multiple Beach Destinations",
    validFrom: "June 1, 2023",
    validUntil: "August 31, 2023",
    bookBy: "July 15, 2023",
    tags: ["Beach", "Summer", "Family"],
    highlights: [
      "30% discount on standard room rates",
      "Daily breakfast included",
      "Free cancellation up to 7 days before arrival",
      "No deposit required",
      "Flexible booking dates",
    ],
    terms: [
      "Offer valid for stays between June 1 and August 31, 2023",
      "Blackout dates may apply",
      "Subject to availability",
      "Cannot be combined with other offers or promotions",
      "Taxes and fees not included",
    ],
    hotels: [
      {
        id: 1,
        name: "Seaside Resort & Spa",
        location: "Bali, Indonesia",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 324,
      },
      {
        id: 2,
        name: "Ocean View Resort",
        location: "Phuket, Thailand",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 256,
      },
      {
        id: 3,
        name: "Paradise Beach Hotel",
        location: "Cancun, Mexico",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        reviews: 198,
      },
    ],
    relatedDeals: [
      {
        id: 2,
        title: "City Break: 3 Nights for the Price of 2",
        image: "/placeholder.svg?height=200&width=300",
        discount: "33%",
        originalPrice: 450,
        discountedPrice: 300,
      },
      {
        id: 3,
        title: "Luxury Retreat: 25% Off + Free Spa Treatment",
        image: "/placeholder.svg?height=200&width=300",
        discount: "25%",
        originalPrice: 599,
        discountedPrice: 449,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/deals" className="hover:underline">
            Deals
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Deal Details</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{deal.title}</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{deal.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Valid until {deal.validUntil}</span>
          </div>
          <Badge variant="destructive" className="flex items-center gap-1">
            <Percent className="h-3 w-3" />
            {deal.discount} OFF
          </Badge>
          {deal.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Deal Image Gallery */}
          <div className="mb-8">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge variant="destructive" className="text-lg px-3 py-1.5">
                  {deal.discount} OFF
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {deal.gallery.map((image, index) => (
                <div key={index} className="relative h-20 rounded-md overflow-hidden">
                  <Image src={image || "/placeholder.svg"} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Deal Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">About This Deal</h2>
            <p className="text-muted-foreground mb-4">{deal.description}</p>
            <div className="prose max-w-none">
              <p className="text-muted-foreground whitespace-pre-line">{deal.longDescription}</p>
            </div>
          </div>

          {/* Deal Highlights */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Deal Highlights</h2>
            <ul className="space-y-2">
              {deal.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Participating Hotels */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Participating Hotels</h2>
            <div className="space-y-4">
              {deal.hotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden">
                  <div className="grid grid-cols-3">
                    <div className="relative h-full">
                      <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{hotel.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {hotel.location}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 font-medium">{hotel.rating}</span>
                          <span className="text-xs text-muted-foreground ml-1">({hotel.reviews})</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-sm line-through text-muted-foreground">${deal.originalPrice}</span>
                          <span className="text-lg font-bold ml-2">${deal.discountedPrice}</span>
                          <span className="text-xs text-muted-foreground"> / night</span>
                        </div>
                        <Button size="sm" asChild>
                          <Link href={`/hotels/${hotel.id}`}>View Hotel</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Terms & Conditions</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {deal.terms.map((term, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Booking Card */}
          <Card className="sticky top-24 mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-sm line-through text-muted-foreground">${deal.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">
                      {deal.discount}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">${deal.discountedPrice}</span>
                    <span className="text-sm text-muted-foreground"> {deal.priceDetails}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Check-in / Check-out</label>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Select dates</span>
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Guests</label>
                    <Button variant="outline" className="w-full justify-between">
                      <span>2 Adults, 0 Children</span>
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Hotel</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select a hotel</option>
                      {deal.hotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}>
                          {hotel.name} - {hotel.location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Original price</span>
                    <span>${deal.originalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount ({deal.discount})</span>
                    <span>-${deal.originalPrice - deal.discountedPrice}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${deal.discountedPrice}</span>
                  </div>
                </div>

                <Button className="w-full">Book Now</Button>

                <div className="text-center text-xs text-muted-foreground">
                  <p>Book by {deal.bookBy} to get this special rate</p>
                  <p className="mt-1">No payment required today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deal Info */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Deal Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid from</span>
                  <span>{deal.validFrom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid until</span>
                  <span>{deal.validUntil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Book by</span>
                  <span>{deal.bookBy}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span>{deal.discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Locations</span>
                  <span>{deal.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Deals */}
          <div>
            <h3 className="font-semibold mb-4">Similar Deals</h3>
            <div className="space-y-4">
              {deal.relatedDeals.map((relatedDeal) => (
                <Card key={relatedDeal.id} className="overflow-hidden">
                  <div className="grid grid-cols-3">
                    <div className="relative h-24">
                      <Image
                        src={relatedDeal.image || "/placeholder.svg"}
                        alt={relatedDeal.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-1 left-1">
                        <Badge variant="destructive" className="text-xs">
                          {relatedDeal.discount}
                        </Badge>
                      </div>
                    </div>
                    <div className="col-span-2 p-3">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{relatedDeal.title}</h4>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs line-through text-muted-foreground">
                            ${relatedDeal.originalPrice}
                          </span>
                          <span className="text-sm font-bold ml-1">${relatedDeal.discountedPrice}</span>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/deals/${relatedDeal.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* More Deals Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">You May Also Like</h2>
        <Tabs defaultValue="beach" className="space-y-6">
          <TabsList>
            <TabsTrigger value="beach">Beach Deals</TabsTrigger>
            <TabsTrigger value="city">City Breaks</TabsTrigger>
            <TabsTrigger value="family">Family Deals</TabsTrigger>
            <TabsTrigger value="luxury">Luxury Offers</TabsTrigger>
          </TabsList>
          <TabsContent value="beach" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Beach deal" fill className="object-cover" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="destructive">25% OFF</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Tropical Beach Escape</h3>
                  <p className="text-sm text-muted-foreground mb-2">Maldives</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm line-through text-muted-foreground">$399</span>
                      <span className="text-lg font-bold ml-2">$299</span>
                    </div>
                    <Button size="sm">View Deal</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="city">{/* City break deals content */}</TabsContent>
          <TabsContent value="family">{/* Family deals content */}</TabsContent>
          <TabsContent value="luxury">{/* Luxury offers content */}</TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
