import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";

const packages = [
    {
        name: 'Basic',
        price: 4499,
        color: 'bg-blue-500',
        features: {
            homePage: true,
            numberOfPages: 5,
            designQuality: 'Basic',
            navigationSystem: true,
            domain: '-',
            webSpace: '300MB',
            numberOfEmailId: 1,
            inquiryPage: true,
            secureAdminPanel: true,
            editableContent: true,
            blogPage: true,
            zoomGallery: true,
            editableSlider: false,
            numberOfSliders: 1,
            parallax: 'No',
            menuCreation: false,
            freeAndroidMobileApplication: false,
            multipleUser: false,
            mobileTabletFriendlyDesign: false,
            searchEngineFriendly: true,
            forms: 1,
            socialMediaLinkIntegration: false,
            googleMapIntegration: false,
            whatsappChatIntegration: false,
            liveChatIntegration: false,
            freeSSLCertificate: false,
            onpageOptimization: false,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Business',
        price: 9999,
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
            secureAdminPanel: true,
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
            socialMediaLinkIntegration: false,
            googleMapIntegration: false,
            whatsappChatIntegration: false,
            liveChatIntegration: false,
            freeSSLCertificate: false,
            onpageOptimization: false,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Professional',
        price: 14999,
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
            liveChatIntegration: false,
            freeSSLCertificate: false,
            onpageOptimization: false,
            extraPages: 'Rs.500/page'
        },
    },
    {
        name: 'Creative',
        price: 24999,
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
            liveChatIntegration: false,
            freeSSLCertificate: false,
            onpageOptimization: false,
            extraPages: 'Rs.500/page'
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
                        <h2 className="font-bold text-2xl">What is dynamic website?</h2>
                    </div>
                    <div>
                        <p>
                            A <b>dynamic website</b> gives you the flexibility to change the content whenever you need to. They display different content on various pages, unlike <Link className="text-amber-500" href="/static-website">static websites</Link> that display the same content to all users. Dynamic websites are editable web pages. The user can easily modify these types of websites/web pages without any web design and development or any technical knowledge. We at <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link> provide various affordable dynamic website design packages as per your requirements and budget.
                            <br /><br /><span className="text-amber-500 text-lg">
                                Content can be edited in dynamic website.
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
                        <h2 className="font-bold text-2xl">Cost of dynamic website development</h2>
                    </div>
                    <div>
                        <p>
                            Explore our dynamic website packages at <Link className="text-amber-500" href="/">Avyukt Tech Labs</Link>, expertly tailored for your business needs at an affordable price. Specializing in dynamic website design and development services in India, we bring your online presence to life with customized solutions. Our cost-effective plans ensure a dynamic and engaging website, delivering exceptional value without compromising quality.
                        </p>
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
}