import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Dynamic Web development Services | Avyukt Tech Labs",
  description: "Expert dynamic web development services for growing businesses. Build mobile responsive dynamic websites with custom CMS, real-time updates, and user-friendly dashboards.",
  keywords: [
    "dynamic web development services",
    "responsive dynamic website",
    "SEO friendly dynamic websites",
    "professional dynamic web design services",
    "custom dynamic web design company",
    "business dynamic website solutions",
    "dynamic eCommerce website development",
    "mobile responsive dynamic websites"
  ],
};

const packages = [
    {
        name: 'Basic',
        price: 14999,
        color: 'bg-blue-500',
        features: {
            homePage: true,
            numberOfPages: 5,
            designQuality: 'Basic',
            navigationSystem: true,
            domain: '.in*',
            webSpace: '300MB',
            numberOfEmailId: 1,
            inquiryPage: true,
            secureAdminPanel: false,
            editableContent: false,
            blogPage: true,
            zoomGallery: true,
            editableSlider: false,
            numberOfSliders: 1,
            parallax: 'No',
            menuCreation: false,
            freeAndroidMobileApplication: false,
            multipleUser: false,
            mobileTabletFriendlyDesign: true,
            searchEngineFriendly: true,
            forms: 1,
            socialMediaLinkIntegration: true,
            googleMapIntegration: false,
            whatsappChatIntegration: false,
            liveChatIntegration: false,
            freeSSLCertificate: true,
            onpageOptimization: true,
            extraPages: 'Rs.599/page'
        },
    },
    {
        name: 'Business',
        price: 24999,
        color: 'bg-green-500',
        features: {
            homePage: true,
            numberOfPages: 8,
            designQuality: 'Business',
            navigationSystem: true,
            domain: '.in*',
            webSpace: '500MB',
            numberOfEmailId: 2,
            inquiryPage: true,
            secureAdminPanel: false,
            editableContent: true,
            blogPage: true,
            zoomGallery: true,
            editableSlider: false,
            numberOfSliders: 2,
            parallax: 1,
            menuCreation: false,
            freeAndroidMobileApplication: false,
            multipleUser: false,
            mobileTabletFriendlyDesign: true,
            searchEngineFriendly: true,
            forms: 1,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            whatsappChatIntegration: true,
            liveChatIntegration: true,
            freeSSLCertificate: true,
            onpageOptimization: true,
            extraPages: 'Rs.999/page'
        },
    },
    {
        name: 'Professional',
        price: 29999,
        color: 'bg-red-500',
        features: {
            homePage: true,
            numberOfPages: 12,
            designQuality: 'Professional',
            navigationSystem: true,
            domain: '.com/.net/.in*',
            webSpace: '700MB',
            numberOfEmailId: 3,
            inquiryPage: true,
            secureAdminPanel: true,
            editableContent: true,
            blogPage: 'With Comments',
            zoomGallery: true,
            editableSlider: true,
            numberOfSliders: 3,
            parallax: 2,
            menuCreation: true,
            freeAndroidMobileApplication: false,
            multipleUser: true,
            mobileTabletFriendlyDesign: true,
            searchEngineFriendly: true,
            forms: 2,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            whatsappChatIntegration: true,
            liveChatIntegration: true,
            freeSSLCertificate: true,
            onpageOptimization: true,
            extraPages: 'Rs.1199/page'
        },
    },
    {
        name: 'Creative',
        price: 34999,
        color: 'bg-yellow-500',
        features: {
            homePage: true,
            numberOfPages: 15,
            designQuality: 'Creative',
            navigationSystem: true,
            domain: '.com/.net/.in*',
            webSpace: '1GB',
            numberOfEmailId: 5,
            inquiryPage: true,
            secureAdminPanel: true,
            editableContent: true,
            blogPage: 'With Comments',
            zoomGallery: true,
            editableSlider: true,
            numberOfSliders: '-',
            parallax: 3,
            menuCreation: true,
            freeAndroidMobileApplication: true,
            multipleUser: true,
            mobileTabletFriendlyDesign: true,
            searchEngineFriendly: true,
            forms: 2,
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            whatsappChatIntegration: true,
            liveChatIntegration: true,
            freeSSLCertificate: true,
            onpageOptimization: true,
            extraPages: 'Rs.1199/page'
        },
    },
    {
        name: 'Extra Creative',
        price: 39999,
        color: 'bg-purple-500',
        features: {
            homePage: true,
            numberOfPages: 'Unlimited',
            designQuality: 'Extra Creative',
            navigationSystem: 'editable',
            domain: '.com/.net/.in*',
            webSpace: '2GB',
            numberOfEmailId: 7,
            inquiryPage: true,
            secureAdminPanel: true,
            editableContent: true,
            blogPage: 'With Comments',
            zoomGallery: true,
            editableSlider: true,
            numberOfSliders: 'Unlimited',
            parallax: 'Unlimited',
            menuCreation: true,
            freeAndroidMobileApplication: true,
            multipleUser: true,
            mobileTabletFriendlyDesign: true,
            searchEngineFriendly: true,
            forms: 'Multiple',
            socialMediaLinkIntegration: true,
            googleMapIntegration: true,
            whatsappChatIntegration: true,
            liveChatIntegration: true,
            freeSSLCertificate: true,
            onpageOptimization: true,
            extraPages: '-'
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
            <div className="flex-1 bg-black bg-opacity-80 py-32 md:py-16">
              <div className="flex flex-col items-center justify-center  md:pt-0 pt-24">
                <h1 className="text-4xl text-white font-semibold text-center">
                  Dynamic Website Development
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-3xl mb-4">
                  Dynamic Web Development Services That Truly Represent Your
                  Brand
                </h2>
                <p className="text-lg leading-relaxed">
                  Your website is often the first impression people have of your
                  business—and first impressions matter. At Avyukt Tech Labs, we
                  believe a website should do more than just look good. It
                  should tell your story, earn trust, and drive real results.
                  That&apos;s why we deliver powerful, scalable dynamic web
                  development services designed to help businesses grow in the
                  real world, not just online.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  We don&apos;t believe in cookie-cutter solutions. Every brand
                  is different, and your website should reflect that.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-2xl mb-4">
                  Build Smarter with Professional Dynamic Web Design Services
                </h2>
                <p className="text-lg leading-relaxed">
                  A dynamic website is not just a trend—it&apos;s a necessity.
                  Users today expect speed, interaction, and personalization.
                  With our professional dynamic web design services, we create
                  websites that respond to user behavior, update content in real
                  time, and offer a smooth, engaging experience.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Our design philosophy is simple: Make it beautiful. Make it
                  functional. Make it effective.
                </p>
                <p className="text-lg leading-relaxed mt-4">We focus on:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-lg">
                  <li>Clean and modern design that feels premium</li>
                  <li>Easy navigation that users actually enjoy</li>
                  <li>Thoughtful layouts that guide visitors naturally</li>
                  <li>Brand-focused visuals that create credibility</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Every element on your website has a purpose—to keep users
                  engaged and encourage action.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-2xl mb-4">
                  Mobile Responsive Dynamic Websites That Perform Everywhere
                </h2>
                <p className="text-lg leading-relaxed">
                  Today, most users will visit your website from their phone
                  before anything else. If your site doesn&apos;t perform well
                  on mobile, you&apos;re already losing business. At Avyukt Tech
                  Labs, we build mobile responsive dynamic websites that adapt
                  perfectly to every screen size.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  What this means for you:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-lg">
                  <li>Seamless experience on mobile, tablet, and desktop</li>
                  <li>Faster loading times and smoother interactions</li>
                  <li>Better Google rankings with mobile-first design</li>
                  <li>Higher engagement and lower bounce rates</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Your website will not just resize—it will rethink the
                  experience for every device.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-2xl mb-4">
                  Dynamic Web Development Services That Scale With You
                </h2>
                <p className="text-lg leading-relaxed">
                  We design and develop websites that grow as your business
                  grows. Whether you&apos;re a startup looking to establish your
                  presence or an established brand aiming to scale, our dynamic
                  web development services are built for long-term success.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Our expertise includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-lg">
                  <li>Custom dynamic website development</li>
                  <li>CMS-based dynamic websites</li>
                  <li>eCommerce and business websites</li>
                  <li>Web applications and portals</li>
                  <li>Database and API integrations</li>
                  <li>Speed optimization and security implementation</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  We use modern technologies and best practices to ensure your
                  website is fast, secure, SEO-friendly, and future-ready.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-2xl mb-4">
                  Why Businesses Trust Avyukt Tech Labs
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>100% custom-built solutions</li>
                  <li>Experienced designers and developers</li>
                  <li>Transparent communication at every step</li>
                  <li>SEO-ready structure for better visibility</li>
                  <li>Reliable support even after launch</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  We don&apos;t just deliver projects—we build long-term
                  relationships. Your success is our success, and we take that
                  seriously.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-2xl mb-4">
                  Let&apos;s Create a Website People Actually Love
                </h2>
                <p className="text-lg leading-relaxed">
                  If you&apos;re searching for dynamic web development services,
                  professional dynamic web design services, or mobile responsive
                  dynamic websites that feel real, perform fast, and deliver
                  results—Avyukt Tech Labs is here to help.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Let&apos;s build a website that:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-lg">
                  <li>Represents your brand authentically</li>
                  <li>Engages real users</li>
                  <li>Converts visitors into customers</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Contact Avyukt Tech Labs today and take the first step toward
                  a powerful digital presence that truly stands out.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">
                  Our Dynamic Website Packages
                </h2>
              </div>
              <PricingTable packages={packages} />
            </div>
          </div>
        </section>
        <BlogPosts
          title="Our Dynamic Website Devleopment Blogs"
          category="dynamic-website"
        />
        <ContactUs />
      </article>
    );
}