import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Check,
  ChevronRight,
  Coffee,
  MapPin,
  Minus,
  Plus,
  Star,
  Utensils,
  Wifi,
  Car,
  Tv,
  Users,
} from "lucide-react"

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  // Mock hotel data
  const hotel = {
    id: params.id,
    name: "Grand Hotel Plaza",
    location: "123 Main Street, Paris, France",
    description:
      "Experience luxury and comfort at the Grand Hotel Plaza, located in the heart of Paris. Our hotel offers stunning views of the city, elegant rooms, and world-class amenities to make your stay unforgettable.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 4.8,
    reviews: 324,
    price: 199,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-4 w-4" /> },
      { name: "Parking", icon: <Car className="h-4 w-4" /> },
      { name: "Breakfast", icon: <Coffee className="h-4 w-4" /> },
      { name: "TV", icon: <Tv className="h-4 w-4" /> },
      { name: "Restaurant", icon: <Utensils className="h-4 w-4" /> },
    ],
    rooms: [
      {
        id: 1,
        name: "Standard Room",
        description: "Comfortable room with all basic amenities",
        price: 199,
        capacity: 2,
        size: "25m²",
        beds: "1 Queen Bed",
        image: "/placeholder.svg?height=300&width=500",
        amenities: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom"],
      },
      {
        id: 2,
        name: "Deluxe Room",
        description: "Spacious room with city view and premium amenities",
        price: 299,
        capacity: 2,
        size: "35m²",
        beds: "1 King Bed",
        image: "/placeholder.svg?height=300&width=500",
        amenities: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom", "Mini Bar", "Coffee Machine"],
      },
      {
        id: 3,
        name: "Family Suite",
        description: "Perfect for families with separate living area",
        price: 399,
        capacity: 4,
        size: "50m²",
        beds: "1 King Bed + 2 Single Beds",
        image: "/placeholder.svg?height=300&width=500",
        amenities: [
          "Free WiFi",
          "TV",
          "Air Conditioning",
          "Private Bathroom",
          "Mini Bar",
          "Coffee Machine",
          "Kitchenette",
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "John Smith",
        rating: 5,
        date: "October 15, 2023",
        comment:
          "Excellent hotel with amazing service. The staff was very friendly and helpful. The room was clean and comfortable. Would definitely stay here again!",
      },
      {
        id: 2,
        user: "Emily Johnson",
        rating: 4,
        date: "September 22, 2023",
        comment:
          "Great location and beautiful rooms. The breakfast was delicious with many options. Only downside was the noise from the street at night.",
      },
      {
        id: 3,
        user: "Michael Brown",
        rating: 5,
        date: "August 10, 2023",
        comment:
          "Perfect stay in every way. The hotel is centrally located, the staff is professional, and the rooms are luxurious. Highly recommended!",
      },
    ],
    policies: {
      checkIn: "From 3:00 PM",
      checkOut: "Until 12:00 PM",
      cancellation:
        "Free cancellation up to 48 hours before check-in. Cancellations made less than 48 hours before check-in are subject to a one-night charge.",
      children: "Children of all ages are welcome.",
      pets: "Pets are not allowed.",
      payment: "We accept all major credit cards.",
    },
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/hotels" className="hover:underline">
            Hotels
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>{hotel.name}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{hotel.name}</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-medium">{hotel.rating}</span>
            <span className="mx-1 text-muted-foreground">•</span>
            <span className="text-muted-foreground">{hotel.reviews} reviews</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {hotel.location}
          </div>
        </div>
      </div>

      {/* Hotel Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[400px] mb-8">
        <div className="col-span-2 row-span-2 relative rounded-l-lg overflow-hidden">
          <Image src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
        </div>
        <div className="relative">
          <Image
            src={hotel.images[1] || "/placeholder.svg"}
            alt={`${hotel.name} image 2`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-tr-lg overflow-hidden">
          <Image
            src={hotel.images[2] || "/placeholder.svg"}
            alt={`${hotel.name} image 3`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={hotel.images[3] || "/placeholder.svg"}
            alt={`${hotel.name} image 4`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-br-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button variant="secondary">View All Photos</Button>
          </div>
          <Image
            src={hotel.images[4] || "/placeholder.svg"}
            alt={`${hotel.name} image 5`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hotel Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About This Hotel</h2>
            <p className="text-muted-foreground">{hotel.description}</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    {amenity.icon}
                  </div>
                  <span className="text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Rooms */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Available Rooms</h2>
            <div className="space-y-6">
              {hotel.rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 md:col-span-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{room.name}</h3>
                          <p className="text-sm text-muted-foreground">{room.description}</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {room.capacity}
                        </Badge>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{room.beds}</span>
                        </div>
                        {room.amenities.slice(0, 4).map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <span className="font-semibold text-lg">${room.price}</span>
                          <span className="text-sm text-muted-foreground"> / night</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline">Details</Button>
                          <Button>Book Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Reviews */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Guest Reviews</h2>
              <Button variant="outline">Write a Review</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {hotel.reviews.map((review) => (
                <Card key={review.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{review.user}</h3>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                  <p className="text-sm">{review.comment}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">View All Reviews</Button>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Policies */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Hotel Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Check-in / Check-out</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-0.5" />
                    <div>
                      <span className="font-medium">Check-in:</span> {hotel.policies.checkIn}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-0.5" />
                    <div>
                      <span className="font-medium">Check-out:</span> {hotel.policies.checkOut}
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                <p className="text-sm">{hotel.policies.cancellation}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Children and Pets</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-0.5" />
                    <div>{hotel.policies.children}</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-4 w-4 mt-0.5" />
                    <div>{hotel.policies.pets}</div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <p className="text-sm">{hotel.policies.payment}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Book Your Stay</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">Check-in / Check-out</div>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Select dates</span>
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Guests</div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <span>2 Adults, 0 Children</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span>2</span>
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Room Type</div>
                  <select className="w-full p-2 border rounded-md">
                    <option>Select a room</option>
                    {hotel.rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} - ${room.price}/night
                      </option>
                    ))}
                  </select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>1 Room x 3 Nights</span>
                    <span>$597</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes and fees</span>
                    <span>$72</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$669</span>
                  </div>
                </div>

                <Button className="w-full">Book Now</Button>

                <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
