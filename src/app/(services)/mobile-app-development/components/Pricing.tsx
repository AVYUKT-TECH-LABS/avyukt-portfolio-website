import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
    const pricingOptions = [
        { type: "Static", price: "Rs.4999", color: "bg-blue-500" },
        { type: "Limited Features", price: "Rs.29999", color: "bg-green-500" },
        { type: "Ecommerce", price: "Rs.69999", color: "bg-red-500" },
        { type: "Custom", price: "Depends", color: "bg-yellow-500" },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Mobile App Development Cost in India</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {pricingOptions.map((option, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className={`${option.color} text-white font-semibold text-center py-2 rounded-t-xl`}>
                            {option.type}
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center text-2xl font-bold py-4">
                            {option.price}
                        </CardContent>
                        <CardFooter className="flex justify-center pb-4">
                            <Link href="/contact" className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded">Contact Us Now</Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="container mx-auto my-12 pt-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="md:w-1/3">
                    <Image
                        src="/img/trusted-company.webp"
                        alt="App Development Illustration"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Avyukt Tech Labs, A Trusted Mobile App Development Company for Start-ups and Businesses</h2>
                    <p className="mb-6">
                        Avyukt Tech Labs, is a strong Mobile Application Development Company in India in developing innovative and flexible, scalable Mobile app solutions for start-ups and businesses. Our expert android app developers exploit the latest technologies in making top-notch Mobile applications according to your requirements. We create customized, feature-rich, and secure android apps that satisfy your company needs and objectives. Whether it&aops;s a completely new app that you wish to build or refurnishing the existing one, we provide end-to-end services from the time of conceptualization up to the time of deployment. Collaborate with us to make your ideas strong with super Mobile apps that power growth and success.
                    </p>
                    <Link href="/contact" className="bg-yellow-200 hover:bg-yellow-300 py-3 mt-3 px-4 rounded">Contact us for a free consultation!</Link>
                </div>
            </div>
        </div>
    )
}