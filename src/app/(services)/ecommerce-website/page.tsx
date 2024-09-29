import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";

const packages = [
    {
        name: 'Basic',
        price: 2999,
        color: 'bg-blue-500',
        features: {
            homePage: true,
            numberOfPages: 5,
            designQuality: 'Basic',
            navigationSystem: true,
            domain: '-',
            webSpace: '100MB',
            numberOfEmailId: 1,
            inquiryPage: 1,
            mobileTabletFriendly: false,
            socialMediaLinkIntegration: false,
            googleMapIntegration: false,
            liveChatIntegration: false,
            whatsappIntegration: false,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Business',
        price: 6999,
        color: 'bg-green-500',
        features: {
            homePage: true,
            numberOfPages: 7,
            designQuality: 'Business',
            navigationSystem: true,
            domain: 'Domain (.in)*',
            webSpace: '300MB',
            numberOfEmailId: 1,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: false,
            googleMapIntegration: false,
            liveChatIntegration: false,
            whatsappIntegration: false,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Professional',
        price: 9999,
        color: 'bg-red-500',
        features: {
            homePage: true,
            numberOfPages: 10,
            designQuality: 'Professional',
            navigationSystem: true,
            domain: 'Domain (.com)*',
            webSpace: '500MB',
            numberOfEmailId: 2,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            liveChatIntegration: false,
            whatsappIntegration: true,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Creative',
        price: 19999,
        color: 'bg-yellow-500',
        features: {
            homePage: true,
            numberOfPages: 15,
            designQuality: 'Creative',
            navigationSystem: true,
            domain: 'Domain (.com/.in/.net/.org)*',
            webSpace: '700MB',
            numberOfEmailId: 5,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            liveChatIntegration: true,
            whatsappIntegration: true,
            extraPages: 'Rs.500/page'
        },
    },
]

export default function page() {
    return (
        <article>
            <section>
                <div
                    style={{
                        backgroundImage: 'url("img/home-bg.webp")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="flex-1 bg-black bg-opacity-80 py-24">
                        <div className="flex flex-col items-start justify-center max-w-6xl mx-auto">
                            <h1 className="text-4xl text-white font-semibold">
                                Ecommerce Website Design &<br />Development Services
                            </h1>
                            <p className="text-white mt-4 leading-relaxed font-light">
                                Enhance your online business with tailored eCommerce website design solutions.<br />Our team combines the latest tech and a smart strategic approach to create feature rich<br />eCommerce stores that make users happy, boost sales, and optimize conversion rates.
                            </p>
                            <ul className="grid grid-cols-2 gap-12 mt-6 text-white list-disc ml-4 font-light">
                                <div>
                                    <li>
                                        Mobile Responsive Design
                                    </li>
                                    <li>
                                        Easy Product Management
                                    </li>
                                    <li>
                                        Multi-Lingual Support
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        Custom Ecommerce Design
                                    </li>
                                    <li>
                                        Payment & Shipping
                                    </li>
                                    <li>
                                        Multi-Currency Support
                                    </li>
                                </div>
                            </ul>
                            <div className="flex flex-row items-center space-x-4 mt-6">
                                <Link href="get-quote" className="bg-yellow-600 text-white font-medium rounded-full py-2 px-4 hover:bg-yellow-700 border border-white">
                                    <span>Request a Consultation</span>
                                </Link>
                                <Link href="#ecommerce-packages" className="bg-yellow-600 text-white font-medium rounded-full py-2 px-4 hover:bg-yellow-700 border border-white">
                                    <span>See Ecommerce Packages</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 pb-4 px-4 md:px-0" id="ecommerce-packages">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col space-y-6 justify-between">
                        <div>
                            <h2 className="font-bold text-2xl text-center">Our Ecommerce Website Development Packages</h2>
                        </div>
                        <div>
                            <p className="text-center">If you&aops;re new to e-commerce, you might be wondering how to set up a successful online store with minimal tech know-how, time, and investment. Don&aops;t worry; you&aops;re in the right place. <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link> has all the tools you need to make online selling easy. We offer packages from basic to fully customized enterprise websites, all with a focus on quality. Check out the package options presented below.</p>
                        </div>
                        <PricingTable packages={packages} />
                    </div>
                </div>
            </section>
            <section className="py-12 pb-4 px-4 md:px-0" id="ecom-packages">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col space-y-6 justify-between">
                        <div>
                            <h2 className="font-bold text-2xl text-center">Avyukt Tech Labs - A Leading eCommerce Website Development Company</h2>
                        </div>
                        <div>
                            <p className="text-center leading-relaxed">
                                Our steadfast dedication to offering custom eCommerce solutions made to meet the particular needs of each customer is what distinguishes <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link>. We are successful in a number of sectors, including electronics, fashion, retail, and more.Beyond development, we also offer design, UX optimisation,smooth payment integration, and reliable backend management solutions.We have established a solid reputation for delivering projects on time, within budget, and with the best possible levels of functionality and quality. Our customer-focused methodology guarantees that companies obtain not just a website but also an effective instrument for boosting revenue and interacting with clients. Our significant portfolio of eCommerce systems and successful track record attest to our proficiency and commitment to quality in eCommerce website creation.

                                <br /><br />With 12 years of experience in the field, <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link> is an established eCommerce <Link className="text-amber-500" href="/">website development company</Link> based in India. We have been in the forefront of creating dynamic online shopping systems that enable businesses in the digital arena since our founding in 2024. To provide creative solutions to a wide range of clients, our committed team of skilled developers,designers, and strategists collaborates.

                                <br /><br /><b>Package can be customized as per your requirement. If you have something specific in requirement please don&aops;t forget to mention it.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BlogPosts
                title="Our Fresh eCommerce Blogs"
                category="ecommerce-website"
            />
            <ContactUs />
        </article>
    )
}