import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";
import StaticWebsiteFeatures from "./components/Features";
import SuitableFor from "./components/SuitableFor";
import FAQSection from "./components/FAQSection";
import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Static Website Development Services in Dubai & India",
  description: "Best static website development services in Dubai & India. Fast, secure, and SEO-friendly designs. Best website design company for startups & small businesses.",
  keywords: [
    "static website development",
    "best dynamic websites in dubai",
    "Best static websites in dubai",
    "static web design services",
    "static website design company",
    "best static website development services in dubai",
    "website design company in dubai",
    "static landing page design service",
    "affordable static website design"
  ],
};

const packages = [
    {
        name: 'Basic',
        price: 9999,
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
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: false,
            googleMapIntegration: true,
            liveChatIntegration: false,
            whatsappIntegration: false,
            extraPages: 'Rs.499/page'
        },
    },
    {
        name: 'Business',
        price: 15999,
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
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            liveChatIntegration: false,
            whatsappIntegration: true,
            extraPages: 'Rs.999/page'
        },
    },
    {
        name: 'Professional',
        price: 29999,
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
            extraPages: 'Rs.1499/page'
        },
    },
    {
        name: 'Creative',
        price: 49999,
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
            extraPages: 'Rs.1999/page'
        },
    },
]

export default function page() {
    return <article className="mt-[135px]">
        <section>
            <div
                style={{
                    backgroundImage: 'url("img/home-bg.webp")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="flex-1 bg-black bg-opacity-80 py-32 md:py-16">
                    <div className="flex flex-col items-center justify-center md:pt-0 pt-24">
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
                        <p className="text-lg leading-relaxed">
                            Being a progressive and welcoming city, Dubai requires web solutions that merge top performance, striking design, and affordability. At Avyukt Labs, we take pride in being the premier provider of static website development services in Dubai. We assist businesses of all scales in establishing a robust online presence that fosters growth and engagement. Our approach to static website development goes beyond webpage creation; we curate digital experiences that resonate with your desired audience while providing the necessary speed, security, and dependability for modern enterprises.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            Static website development is a refined approach to creating high-performing and efficient websites. Unlike traditional dynamic web development services, which use complex server-side processing to generate content on demand, static websites serve pre-built HTML, CSS, and JavaScript files directly to visitors' browsers. This architectural difference results in speedy loading times, improved security, and reduced hosting costs. And for businesses operating in Dubai's competitive market, these are not just technical benefits; they can give you a strategic edge and enhance customer satisfaction. When visitors arrive at your website and encounter instant page loads, user-friendly navigation, and seamless interactions, they are more likely to engage with your content, explore your offerings, and ultimately become paying customers.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            Our reputation as the premier provider of best static website development services in Dubai and India is built upon our dedication to delivering excellence, originality, and client achievement. We understand that each business has its own unique requirements, challenges, and goals. Whether you're a new company looking to make an impactful online debut, an established corporation aiming to revitalize your digital presence, or anything in between, our team possesses the expertise and ingenuity necessary to bring your ideas to life. Combining cutting-edge development techniques with timeless design principles, we ensure that your website not only looks exceptional right now but also remains relevant and high-performing for years to come. Our comprehensive range of services includes custom designs tailored specifically to your brand's identity, responsive layouts that seamlessly adapt across all devices - including smartphones, tablets, and desktops - strategic SEO optimization for increased visibility in search results, and effortless integration with your existing business tools and platforms.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            Dubai's diverse economy thrives on small businesses, and we're committed to empowering entrepreneurs through professional web solutions. Our specialized small business static website design services cater to the unique needs and budget constraints of growing enterprises. We understand that small business owners have multiple responsibilities and limited technical knowledge and marketing resources. Hence, our approach to small business static website design focuses on delivering maximum impact without unnecessary complexities or costs. Each project starts with a thorough consultation where we deep dive into your business model, target audience, competition, and growth goals. This allows us to create authentic websites that reflect your brand while strategically attracting and retaining loyal customers.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            When it comes to small business website design, we strongly believe in the power of focused and purpose-driven design. Your website should not simply exist but should serve as your most valuable marketing asset. We meticulously create every aspect of your site, from attention-grabbing hero sections that effectively communicate your value proposition to strategically placed call-to-action buttons that guide visitors towards taking the next step. Our team of designers and developers works closely together to ensure that aesthetics do not compromise functionality or performance. The end result is a sleek and fast-loading website that produces measurable results for your business. Additionally, we offer comprehensive training and documentation so that you feel confident managing and updating your site long after its launch.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            Our static landing page design service has gained popularity among Dubai businesses running targeted marketing campaigns due to its dedicated focus and precision in achieving optimal results. Unlike general website pages, landing pages serve a distinct purpose – eliminating distractions and solely focusing on a single conversion goal. This allows for higher conversions when capturing email addresses, promoting limited-time offers, generating qualified leads, or driving registrations for events. Our service creates high-converting pages that maximize your return on advertising investment.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            As businesses of all sizes are aware, budget is a crucial consideration. At our company, we strongly believe that financial limitations should not hinder the opportunity to have a professional website. Our static website design services aim to level the web presence playing field by offering affordable options, thus giving access to startups, small businesses, and organizations with limited marketing budgets. It's important to note that cost-effectiveness does not equate to sacrificing quality or taking shortcuts. Our affordable static website design packages include all the necessary elements for online success: a tailored responsive design that embodies your brand's personality, an SEO-friendly structure for improved search engine rankings, fast-loading pages for better user experience and search results visibility, secure HTTPS implementation for visitor data protection and credibility, and ongoing support for addressing inquiries and concerns promptly.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            The division between static and dynamic websites can be blurred, making it important to carefully consider your specific needs. For simpler websites such as brochures, portfolios, landing pages, or marketing sites, static development is usually sufficient. However, for sites that require frequent updates or have more complex functionality like ecommerce website development, social networks, or web applications, a dynamic approach may be necessary. Fortunately, advancements in static site generators and headless CMS options have made it possible for static sites to incorporate certain dynamic elements without sacrificing speed. Our team stays up-to-date on these developments so we can recommend and implement the most suitable solution for your unique requirements.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            In Dubai and the surrounding UAE area, companies are realizing the value of investing in top-notch web development. It's not a financial burden, but rather a shrewd decision to drive growth. Your website acts as a virtual storefront that is always open, drawing in potential customers, showcasing your worth, and bringing in profits. No matter if you opt for our budget-friendly static website design for a simple online presence, our small business static website design for an all-encompassing digital base, our static landing page design to target specific campaigns, or our dynamic website solutions for intricate features, you are teaming up with experts committed to your prosperity.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed">
                            At Avyukt Labs, we define our success through yours. Each website we produce prioritizes your business goals and delivers measurable outcomes that positively impact your profits. Feel free to browse our portfolio, read reviews from happy customers, and see why companies in Dubai rely on us for their web development requirements. Don't hesitate to reach out to us to discuss your project and see how our expertise in static website development can boost your business in the digital era.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col space-y-6 justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">Our Static Website Packages</h2>
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