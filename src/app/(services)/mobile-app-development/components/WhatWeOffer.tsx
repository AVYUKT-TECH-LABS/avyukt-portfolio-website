import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <Card className="flex flex-col items-center justify-center text-center">
        <CardHeader>
            <div className="w-full h-16 text-orange-500 flex flex-row items-center justify-center" aria-hidden="true">
                <div className="w-16 h-16">
                    {icon}
                </div>
            </div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
    </Card>
)

const CustomAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
)

const NativeAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
)

const HybridAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
    </svg>
)

const EnterpriseAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
)

const IoTIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
)

const UXUIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
)

const FlexibleSolutionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
)

const OnlineShoppingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
)

const HassleFreeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

export default function WhatWeOffer() {
    const services = [
        {
            icon: <CustomAppIcon />,
            title: "Custom App Development",
            description: "We fully comprehend our customers' individual requirements for developing custom Mobile applications in cutting-edge software environments."
        },
        {
            icon: <NativeAppIcon />,
            title: "Native App Development",
            description: "Our team uses high-end Mobile capabilities and quick reaction time to write codes in platform-specific programming languages as part of our strategic native app development approach."
        },
        {
            icon: <HybridAppIcon />,
            title: "Hybrid App Development",
            description: "Use Mobile applications that are both cost-effective and strong, thanks to a hybrid development strategy that allows you to program once and use anywhere."
        },
        {
            icon: <EnterpriseAppIcon />,
            title: "Enterprise Mobile Apps",
            description: "With enterprise mobile application development, firms can profit from increased functional efficacy that streamlines many business benefits."
        },
        {
            icon: <IoTIcon />,
            title: "IOT Applications",
            description: "As you stride into the future with our mobile app developers, keep up with the times by developing mobile applications for the internet of things."
        },
        {
            icon: <UXUIIcon />,
            title: "UX/UI",
            description: "Enhance your user experience with our well produced Mobile mobile applications, which have a user interface that is appealing to your users."
        },
        {
            icon: <FlexibleSolutionIcon />,
            title: "Flexible Solution",
            description: "We expertise in developing, integrating, and configuring third-party APIs in accordance with customer business requirements."
        },
        {
            icon: <OnlineShoppingIcon />,
            title: "Online Shopping",
            description: "Get created an eye-catching eCommerce Mobile app to accelerate your company's growth."
        },
        {
            icon: <HassleFreeIcon />,
            title: "Hassle Free Solution",
            description: "To provide clients with a hassle-free, safe, and resilient mobile application, our skilled mobile app developers use advanced development methodologies."
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">What Do We Offer</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    )
}