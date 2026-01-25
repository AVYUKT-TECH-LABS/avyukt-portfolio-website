import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Design & Development | Avyukt Labs",
  description: "Expert ecommerce website development with stunning design. Create mobile responsive online stores with user-friendly shopping carts, secure checkout, and powerful features.",
  keywords: [
    "ecommerce website development",
    "ecommerce web development",
    "ecommerce website design",
    "ecommerce development company",
    "ecommerce website builders",
    "online store development services",
    "best ecommerce website design in dubai",
    "cms based ecommerce website services"
  ],
};

const packages = [
    {
        name: 'Basic',
        price: 29999,
        color: 'bg-blue-500',
        features: {
            homePage: true,
            numberOfPages: 5,
            designQuality: 'Basic',
            navigationSystem: true,
            domain: '-',
            webSpace: '1GB',
            numberOfEmailId: 1,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: false,
            googleMapIntegration: false,
            liveChatIntegration: false,
            whatsappIntegration: true,
            extraPages: 'Rs.599/page'
        },
    },
    {
        name: 'Business',
        price: 34999,
        color: 'bg-green-500',
        features: {
            homePage: true,
            numberOfPages: 7,
            designQuality: 'Business',
            navigationSystem: true,
            domain: 'Domain (.in)*',
            webSpace: '1GB',
            numberOfEmailId: 1,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            liveChatIntegration: false,
            whatsappIntegration: true,
            extraPages: 'Rs.599/page'
        },
    },
    {
        name: 'Professional',
        price: 39999,
        color: 'bg-red-500',
        features: {
            homePage: true,
            numberOfPages: 10,
            designQuality: 'Professional',
            navigationSystem: true,
            domain: 'Domain (.com)*',
            webSpace: '2GB',
            numberOfEmailId: 2,
            inquiryPage: 1,
            mobileTabletFriendly: true,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            liveChatIntegration: true,
            whatsappIntegration: true,
            extraPages: 'Rs.999/page'
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
            webSpace: '2GB',
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
            <div className="flex-1 bg-black bg-opacity-80 py-48">
              <div className="flex flex-col items-start justify-center px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl text-white font-semibold">
                  Ecommerce Website Development That Grows Your Business — Not Just Your Website
                </h1>
                <p className="text-white mt-4 leading-relaxed font-light">
                  Your website should do more than just exist online. It should attract customers, build trust, and generate sales 24/7. At Avyukt Tech Labs, we create powerful, conversion-focused ecommerce website development solutions that help businesses stand out, sell more, and scale faster in today’s competitive digital world.
                </p>
                <p className="text-white mt-4 leading-relaxed font-light">
                  We don’t believe in copy-paste designs or generic development. We build real ecommerce websites for real businesses—websites that look premium, load fast, and turn visitors into paying customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Ecommerce Web Development Designed for Sales & Scalability</h2>
              </div>
              <div>
                <p>
                  A successful online store needs more than good looks. It needs speed, security, and smart functionality. Our ecommerce web development services are crafted to deliver smooth user experiences that customers trust and love.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Fast-loading, mobile-first performance</li>
                  <li>Secure payment gateway integrations</li>
                  <li>Easy product & order management</li>
                  <li>SEO-friendly structure for higher Google rankings</li>
                  <li>Scalable architecture for future growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Ecommerce Website Design That Converts Visitors into Buyers</h2>
              </div>
              <div>
                <p>
                  Design plays a major role in buying decisions. That’s why our ecommerce website design focuses on user behavior, trust signals, and conversion strategy—not just visuals.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Clean, modern, and brand-focused layouts</li>
                  <li>Mobile-friendly responsive designs</li>
                  <li>High-converting product pages</li>
                  <li>Smooth navigation and fast checkout flow</li>
                  <li>Strong call-to-actions that drive sales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Why Businesses Trust Avyukt Tech Labs</h2>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Business-driven development strategy</li>
                  <li>Transparent communication & support</li>
                  <li>SEO-ready website foundation</li>
                  <li>Affordable pricing with premium quality</li>
                  <li>Long-term partnership mindset</li>
                </ul>
                <p className="mt-4">
                  We don’t just build websites—we build digital assets that help you grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Let’s Create a High-Performance Website That Drives Business Growth</h2>
              </div>
              <div>
                <p>
                  If you’re looking for ecommerce website development, ecommerce web development, ecommerce website design, <Link href="/static-website" className="text-blue-600 hover:underline">static web design services</Link>, or <Link href="/dynamic-website" className="text-blue-600 hover:underline">dynamic web development services</Link>, Avyukt Tech Labs is ready to deliver.
                </p>
                <p className="mt-4">
                  Let’s create a website that attracts clients, builds trust, and increases revenue.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Our Ecommerce Website Packages</h2>
              </div>
              <PricingTable packages={packages} />
            </div>
          </div>
        </section>
        {/* Related Services Section */}
        <section className="py-12 px-4 md:px-0 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-bold text-2xl mb-6 text-center">Explore Our Other Services</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete your digital presence with our full range of web development and hosting services.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/dynamic-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Dynamic Websites</h3>
                <p className="text-gray-600 text-sm">CMS-powered websites with easy content management and updates.</p>
              </Link>
              <Link href="/enterprise-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600 text-sm">Large-scale platforms with advanced integrations and security.</p>
              </Link>
              <Link href="/web-hosting" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Web Hosting</h3>
                <p className="text-gray-600 text-sm">Reliable, fast hosting to power your eCommerce store 24/7.</p>
              </Link>
              <Link href="/mobile-app-development" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">Bring your store to mobile with custom app development.</p>
              </Link>
            </div>
          </div>
        </section>

        <BlogPosts
          title="Our Fresh eCommerce Blogs"
          category="ecommerce-website"
        />
        <ContactUs />
      </article>
    );
}