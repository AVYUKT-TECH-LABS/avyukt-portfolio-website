import { Share2, Users, User, DollarSign, Globe, Laptop, CheckSquare, Megaphone, Lightbulb } from "lucide-react"

export default function WhyInvest() {
    const reasons = [
        {
            icon: <Share2 className="w-8 h-8" />,
            title: "Market Share",
            description: "Globally, Mobile is the most used mobile operating system. In other words, with the development of Mobile apps, you will be targeting a huge and diversified user base."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Grow Your Business",
            description: "For any business, Mobile development may prove to be the growth saga. This extends online presence, reaches out to customers & offers more value w/t the help of mobile app."
        },
        {
            icon: <User className="w-8 h-8" />,
            title: "Customer Engagement",
            description: "Mobile apps provide one-on-one direct access b/w businesses & customers because of which you can offer customized and personalized experiences to your customers."
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Revenue Generation",
            description: "Mobile apps have several monetization methods that range from in-app ads, in-app purchases, subscription models, and paid apps. This can enable chances of earning revenue through businesses."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Brand Building",
            description: "A good and efficient Mobile app helps you fortify your brand identity apart from enhancing brand recognition. No doubt, it leaves a positive impression and gives easier access to your brand."
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Competitive Advantage",
            description: "In today's highly competitive market, the presence on Mobile devices is of prime importance. If your competitors have Mobile apps and you do not have one, then your customers may surely go to them."
        },
        {
            icon: <CheckSquare className="w-8 h-8" />,
            title: "User Convenience",
            description: "Mobile apps can offer an easier way for users to interact with your services or products. With the help of a great Mobile app, you will be able to make it easier for customers to interact with your business."
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "Global Reach",
            description: "Since Mobile has a global reach, it has become easy to expand your business to international markets. It will help you target different regions, languages, and demographics of people."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Scope of Innovation",
            description: "With every year, Mobile brings up some innovative ideas and trends that symbolize the future. It has the best policies, including app development, which allow the Mobile App Development to do experiments & come up w/t innovative ideas."
        }
    ]

    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">Why You Should Invest in Mobile App Development?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <div key={index} className="border rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{reason.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{reason.title}</h2>
                        <p className="text-sm text-gray-600">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}