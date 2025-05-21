"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Check, CreditCard, MapPin } from "lucide-react"

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleNextStep = () => {
    setActiveStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setActiveStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Booking confirmed!",
        description: "Your booking has been successfully confirmed.",
      })
      // Redirect would happen here in a real app
    }, 1500)
  }

  // Mock booking data
  const bookingData = {
    hotel: {
      name: "Grand Hotel Plaza",
      location: "Paris, France",
      image: "/placeholder.svg?height=200&width=300",
    },
    room: {
      name: "Deluxe Room",
      guests: 2,
      beds: "1 King Bed",
    },
    dates: {
      checkIn: "May 15, 2023",
      checkOut: "May 18, 2023",
      nights: 3,
    },
    price: {
      roomRate: 299,
      taxes: 45,
      total: 942,
    },
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Complete Your Booking</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step === activeStep
                    ? "bg-primary text-primary-foreground"
                    : step < activeStep
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step < activeStep ? <Check className="h-5 w-5" /> : step}
              </div>
              <span className={`text-sm mt-2 ${step === activeStep ? "font-medium" : "text-muted-foreground"}`}>
                {step === 1 ? "Your Details" : step === 2 ? "Payment" : "Confirmation"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 max-w-md mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-muted" />
            <div
              className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all"
              style={{ width: `${((activeStep - 1) / 2) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Step 1: Your Details */}
          {activeStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Guest Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4">Special Requests</h3>
                  <Textarea
                    placeholder="Let us know if you have any special requests or requirements"
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Special requests cannot be guaranteed but we will do our best to accommodate your needs.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNextStep}>Continue to Payment</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Payment */}
          {activeStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="credit-card">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card" className="space-y-6 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="paypal" className="pt-4">
                    <div className="text-center py-8">
                      <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                      <Button>Continue to PayPal</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="bank-transfer" className="pt-4">
                    <div className="space-y-4 py-4">
                      <p>Please use the following details to make a bank transfer:</p>
                      <div className="bg-muted p-4 rounded-md space-y-2">
                        <p>
                          <span className="font-semibold">Bank:</span> International Bank
                        </p>
                        <p>
                          <span className="font-semibold">Account Name:</span> HotelBooking Ltd
                        </p>
                        <p>
                          <span className="font-semibold">Account Number:</span> 1234567890
                        </p>
                        <p>
                          <span className="font-semibold">Sort Code:</span> 12-34-56
                        </p>
                        <p>
                          <span className="font-semibold">Reference:</span> BOOKING-12345
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Please note that your booking will only be confirmed once we have received your payment.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <select
                        id="country"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main St" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" placeholder="10001" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>Review Booking</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Confirmation */}
          {activeStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Booking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Hotel</p>
                      <p className="font-medium">{bookingData.hotel.name}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{bookingData.hotel.location}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Room Type</p>
                      <p className="font-medium">{bookingData.room.name}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Guests</p>
                      <p className="font-medium">{bookingData.room.guests} Adults</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Check-in</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {bookingData.dates.checkIn}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Check-out</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {bookingData.dates.checkOut}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Guest Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Payment Method</h3>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <p>Credit Card ending in 3456</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Cancellation Policy</h3>
                  <p className="text-sm">
                    Free cancellation until 48 hours before check-in. Cancellations made less than 48 hours before
                    check-in are subject to a one-night charge.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Processing..." : "Confirm Booking"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Booking Summary */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={bookingData.hotel.image || "/placeholder.svg"}
                    alt={bookingData.hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{bookingData.hotel.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {bookingData.hotel.location}
                  </p>
                  <p className="text-sm mt-1">{bookingData.room.name}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Check-in</span>
                  </div>
                  <span>{bookingData.dates.checkIn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Check-out</span>
                  </div>
                  <span>{bookingData.dates.checkOut}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duration</span>
                  <span>{bookingData.dates.nights} nights</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Guests</span>
                  <span>{bookingData.room.guests} Adults</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Room Rate</span>
                  <span>
                    ${bookingData.price.roomRate} x {bookingData.dates.nights} nights
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>${bookingData.price.taxes}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${bookingData.price.total}</span>
                </div>
              </div>

              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-medium">Price Guarantee</p>
                <p className="text-muted-foreground mt-1">
                  You're getting the best price for this stay. If you find a lower price elsewhere, we'll match it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
