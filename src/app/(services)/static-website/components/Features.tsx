'use client'
import { BarChart2, DollarSign, Lightbulb, Rocket, Shield, ThumbsUp } from 'lucide-react'

const features = [
    {
        icon: Rocket,
        title: 'Fast Loading Speed',
        description: 'Static websites load faster than dynamic websites because they don\'t require dynamic elements or server-side processing.'
    },
    {
        icon: Shield,
        title: 'Website Security',
        description: 'Static websites are more secure because they don\'t rely on server-side processing or databases.'
    },
    {
        icon: Lightbulb,
        title: 'Simplicity',
        description: 'Static websites are simpler to create and maintain, especially for small websites that don\'t require frequent updates.'
    },
    {
        icon: ThumbsUp,
        title: 'Good for Small Websites',
        description: 'Static websites are ideal for small business websites or startups that don\'t require frequent updates or complex functionality.'
    },
    {
        icon: BarChart2,
        title: 'Search Engine Optimization (SEO)',
        description: 'Static websites are SEO-friendly and easier to optimize for search engines (Google, Bing, Yahoo).'
    },
    {
        icon: DollarSign,
        title: 'Affordable Prices',
        description: 'Static websites do not require server-side languages or databases that\'s why they are cost-effective to develop and host.'
    }
]

export default function StaticWebsiteFeatures() {

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-orange-600 rounded-lg shadow-xl overflow-hidden">
                    <h2 className="text-3xl font-bold text-white text-center py-6">
                        Features of Static Website Design
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}