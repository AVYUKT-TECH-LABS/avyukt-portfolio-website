import Link from "next/link";
import Pricing from "./components/Pricing";
import WhyInvest from "./components/WhyInvest";
import BlogPosts from "@/components/shared/BlogPosts";
import ContactUs from "@/components/ContactUs";
import WhatWeOffer from "./components/WhatWeOffer";

export default function page() {
    return <article>
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
                            Enrich Your Brand with<br />Mobile App Development Services
                        </h1>
                        <p className="text-white mt-4 leading-relaxed font-light">
                            Bring your brand to the next level with our professional mobile app development services. We curate custom and high-performance mobile applications that address the client&aops;s business needs, ensuring higher user engagement and brand loyalty.
                        </p>
                        <div className="flex flex-row items-center space-x-4 mt-6">
                            <Link href="get-quote" className="bg-yellow-600 text-white font-medium rounded-full py-2 px-4 hover:bg-yellow-700 border border-white">
                                <span>Request a Consultation</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pricing />
        <WhyInvest />
        <section>
            <div
                style={{
                    backgroundImage: 'url("img/home-bg.webp")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="flex-1 bg-amber-800 bg-opacity-80 py-24">
                    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                        <h1 className="text-4xl text-white text-center font-semibold">
                            Hire the Best Team for Mobile App Development in India
                        </h1>
                        <p className="text-white mt-4 leading-relaxed font-light text-center">
                            Enrich your business by availing of our top-of-the-line Mobile app development team based out of India, who guide in delivering the best to help render the most customized solutions befitting needs, offering one seamless performance on the front of performance and user experiences. Let our experts make your vision turn into one successful and high-performance Mobile app.
                        </p>
                        <div className="flex flex-row items-center space-x-4 mt-6">
                            <Link href="get-quote" className="bg-transparent text-white font-medium rounded-full py-2 px-4 border border-white">
                                <span>Request a Consultation</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <WhatWeOffer />
        <BlogPosts
            title="Our Mobile Application Development Blogs"
            category="mobile-app-development"
        />
        <ContactUs />
    </article>
}