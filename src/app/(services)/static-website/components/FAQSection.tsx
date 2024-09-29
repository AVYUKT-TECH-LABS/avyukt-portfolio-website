'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        question: "What is a static website?",
        answer: "A static website is a website that consists of web pages with fixed content that does not change unless it is manually updated by a web developer or designer. A static website is made up of HTML, CSS, and JavaScript files that act as the website's content."
    },
    {
        question: "Does the website work well on mobile and tablet devices?",
        answer: "Yes, our developed website works well on all devices including desktop, laptop, mobile and tablets."
    },
    {
        question: "Static sites are best suited for which types of businesses?",
        answer: "Static websites are best suited for websites or industries that have relatively simple content that doesn't change frequently, and where the focus is more on presenting information than on providing interactive functionality. Static sites are best suited for small business websites, personal or portfolio websites, informational websites, events websites and landing pages."
    },
    {
        question: "How Much Does a Single Page (One page) Static Website Cost in India?",
        answer: "For a single-page static website cost, we charge between INR 3,000 to INR 15,000 ($99 - $299) in India."
    },
    {
        question: "How Much Does a 5 Page Website Cost in India?",
        answer: "The cost of a 5 page website ranges from INR 3,000 to INR 15,000 ($99 - $299), depending on factors such as design quality, functionality, Domain/Hosting, No of email ids and customization."
    },
    {
        question: "What factors that influence the cost of static website design?",
        answer: "The cost of a static website can vary depending on several factors, including the complexity of the design, the number of pages, the type of content, and the level of customization required. Static websites are less expensive to create and maintain than dynamic websites."
    },
    {
        question: "What is Web hosting or web space in website development?",
        answer: "Web hosting, also known as web space or web hosting space, refers to the storage space on a server that is used to store the files and data associated with a website. When you create a website, you need a place or space to store the files, images, videos, and other content that make up your website, and that's where web hosting comes in."
    },
    {
        question: "What is a domain and why does it matter?",
        answer: "A domain name is a unique address that identifies a website on the internet. It's the name that people type into their web browser's address bar to access your website. For example, \"avyuktlabs.in\" is a domain name."
    },
    {
        question: "How does a static website differ from a dynamic website?",
        answer: "Static website's content appears the same when anyone accesses it, but a dynamic website's content appears different for everyone. It's because of functionality. Content can't be modified by the user in static website while content can be easily modified by the user in dynamic website."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Static Website Development FAQs
                </h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-medium text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div
                                    id={`faq-answer-${index}`}
                                    className="p-4 bg-gray-50 border-t border-gray-200"
                                >
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}