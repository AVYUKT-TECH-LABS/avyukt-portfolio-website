'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const blogPosts = [
    {
        title: "5 Reasons to Choose a Static Website",
        image: "/placeholder.svg?height=200&width=300",
        description: "Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration. Al...",
        alt: "Computer screen showing a static website"
    },
    {
        title: "17 Basic Elements For Web Design",
        image: "/placeholder.svg?height=200&width=300",
        description: "Businesses that conduct business online must have a website that is attractive and functional. Most excellent websites contain a number of essential components.  If you're creating a websi...",
        alt: "Desk with computer showing web design elements"
    },
    {
        title: "Difference between Static, Dynamic and Ecomme...",
        image: "/placeholder.svg?height=200&width=300",
        description: "In the world of web development, websites can be broadly categorized into three main types: static, dynamic, and eCommerce. Each type serves different purposes, caters to distinct needs, and employs v...",
        alt: "Infographic showing differences between static, dynamic, and ecommerce websites"
    }
]

interface BlogsProps {
    title: string;
    category: string;
}

export default function BlogPosts({ title = "Recommended Blogs", category }: BlogsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    {title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={index}
                            href=""
                            title={post.title}
                        >
                            <motion.div
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={post.image}
                                    alt={post.alt}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        {post.description}
                                    </p>
                                    <motion.a
                                        href="#"
                                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Read More..
                                    </motion.a>
                                </div>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.div></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}