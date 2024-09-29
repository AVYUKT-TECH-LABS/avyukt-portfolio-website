import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";
import StaticWebsiteFeatures from "./components/Features";
import SuitableFor from "./components/SuitableFor";
import FAQSection from "./components/FAQSection";
import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";

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
                <div className="flex-1 bg-black bg-opacity-80 py-16">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-white font-semibold text-center">
                            Static Website Development
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col space-y-6 justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">What is static website?</h2>
                    </div>
                    <div>
                        <p>
                            A static website is a website that consists of web pages with fixed content that does not change unless it is manually updated by a web developer or designer. Static Website are non editable pages. Means the user who will take static website will not able able to edit the website without any web design knowledge. As it required HTML, CSS and javascript coding to understand the changes. If you want content editable website then visit our <Link className="text-amber-500" href="/dynamic-website">Dynamic Website Packages</Link>. At <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link>, we are a static website design company in India provide various static website design packages as per your requirements and budget.
                            <br /><br /><span className="text-amber-500 text-lg">
                                Content and layout can not be modified by the user in static website.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col space-y-6 justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">Cost of static website design</h2>
                    </div>
                    <div>
                        <p>
                            Explore our static website design packages in India with Avyukt Tech Labs crafted to match your startup and small business requirements at affordable website design prices. Our tailored packages and plans ensure a seamless and efficient design process, providing your business with a professional and impactful online presence. Boost your brand with our budget-friendly static website design solutions. We offer packages from basic to extra creative static websites, all with a focus on quality.
                        </p>
                    </div>
                    <PricingTable packages={packages} />
                </div>
            </div>
        </section>
        <StaticWebsiteFeatures />
        <SuitableFor />
        <FAQSection />
        <BlogPosts 
            title="Our Static Website Development Blogs"
            category="static-website"
        />
        <ContactUs />
    </article>
}