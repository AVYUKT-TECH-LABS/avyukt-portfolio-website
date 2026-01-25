import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Web Hosting Services in India – Fast, Secure & Affordable",
  description:
    "Reliable web hosting for startups & businesses. High-speed servers, free SSL, daily backups & WordPress hosting with 24/7 support.",
  keywords: [
    "web hosting",
    "web hosting services",
    "best web hosting",
    "cheap web hosting",
    "fast web hosting",
    "secure web hosting",
    "WordPress hosting",
    "cloud hosting",
    "business web hosting",
    "shared hosting",
    "VPS hosting",
    "India web hosting",
    "global web hosting",
    "reliable hosting provider",
  ],
};

const hostingPlans = [
  {
    name: "Shared Hosting",
    tagline: "Simple & Affordable",
    description:
      "Perfect for beginners, blogs, and small websites. Our shared hosting gives you dependable performance at a price that makes sense.",
    highlight:
      "If you're looking for cheap web hosting that still delivers speed and uptime, this is your starting point.",
    bestFor: ["Personal websites", "Startups", "Hosting for small business"],
    icon: "🏠",
    color: "bg-blue-500",
  },
  {
    name: "WordPress Hosting",
    tagline: "Built for Speed",
    description:
      "Our WordPress hosting is fully optimized to give your WordPress site faster load times and stronger security. No manual tuning required—just install and grow.",
    highlight: null,
    bestFor: [
      "Faster WordPress performance",
      "Enhanced security",
      "SEO-friendly setup",
    ],
    icon: "⚡",
    color: "bg-purple-500",
  },
  {
    name: "Cloud Hosting",
    tagline: "Flexible & Scalable",
    description:
      "Traffic growing? No problem. Our cloud hosting automatically scales resources to handle spikes without slowing your site.",
    highlight: "Ideal for growing brands and high-traffic websites.",
    bestFor: null,
    icon: "☁️",
    color: "bg-cyan-500",
  },
  {
    name: "VPS Hosting",
    tagline: "More Power, More Control",
    description:
      "Need dedicated resources? Our VPS hosting gives you full control, higher performance, and better stability—without the cost of a full dedicated server.",
    highlight: null,
    bestFor: null,
    icon: "🖥️",
    color: "bg-orange-500",
  },
  {
    name: "Business Hosting",
    tagline: "Built for Growth",
    description:
      "Our business web hosting is designed for companies that depend on their website. Faster speed, advanced security, and priority support keep your business online and competitive.",
    highlight: null,
    bestFor: null,
    icon: "🏢",
    color: "bg-green-500",
  },
];

const faqs = [
  {
    question: "What is the best web hosting for beginners?",
    answer:
      "Shared hosting is the best choice for beginners because it's affordable, easy to use, and reliable.",
  },
  {
    question: "Do you offer cheap web hosting without sacrificing quality?",
    answer:
      "Yes. Our cheap web hosting plans are optimized for speed and uptime, making them ideal for startups and small businesses.",
  },
  {
    question: "Is your WordPress hosting optimized?",
    answer:
      "Absolutely. Our WordPress hosting is built for fast performance, better security, and smooth updates.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Yes. You can upgrade anytime as your website grows—no downtime, no hassle.",
  },
  {
    question: "Is your web hosting secure?",
    answer:
      "Yes. Every plan includes SSL, malware protection, and daily backups for maximum security.",
  },
  {
    question: "Do you provide global web hosting?",
    answer:
      "Yes. Our global infrastructure ensures fast performance for visitors around the world.",
  },
];

const securityFeatures = [
  { icon: "🔒", text: "Free SSL certificates" },
  { icon: "🛡️", text: "Firewall protection" },
  { icon: "🔍", text: "Malware monitoring" },
  { icon: "💾", text: "Daily backups" },
  { icon: "🏰", text: "Secure server environments" },
];

const whyChooseUs = [
  "Best web hosting at affordable prices",
  "Fast, secure & reliable infrastructure",
  "WordPress, cloud, VPS & shared hosting",
  "Simple control & scalable plans",
  "Trusted hosting provider for long-term growth",
];

export default function WebHostingPage() {
  return (
    <article>
      {/* Hero Section */}
      <section>
        <div
          style={{
            backgroundImage: 'url("/img/home-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex-1 bg-black bg-opacity-80 py-48">
            <div className="flex flex-col items-start justify-center px-4 max-w-6xl mx-auto">
              <h1 className="text-4xl text-white font-semibold">
                Powerful, Fast & Reliable Web Hosting – Avyukt Tech Labs
              </h1>
              <p className="text-white/90 mt-2 text-xl font-light">
                Build your website on hosting that&apos;s designed to perform.
              </p>
              <p className="text-white mt-4 leading-relaxed font-light">
                At Avyukt Tech Labs, we deliver modern web hosting services
                inspired by top global hosting brands—simple to use, lightning
                fast, and built for growth. Whether you&apos;re launching your
                first <Link href="/static-website" className="text-blue-200 hover:text-white hover:underline">static website</Link> or managing a growing business with a <Link href="/dynamic-website" className="text-blue-200 hover:text-white hover:underline">dynamic website</Link>, our hosting gives you
                speed, security, and reliability without complexity.
              </p>
              <p className="text-white mt-4 leading-relaxed font-light">
                If you&apos;re searching for best web hosting, cheap web
                hosting, or a reliable hosting provider, Avyukt Tech Labs is
                built for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Hosting That Just Works */}
      <section className="py-12 pb-4 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Web Hosting That Just Works
              </h2>
              <p className="text-lg leading-relaxed">
                Your website should load fast, stay online, and remain
                secure—no excuses. That&apos;s why our infrastructure is
                optimized for performance from day one.
              </p>
              <ul className="space-y-3 mt-6 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Fast web hosting powered by SSD storage
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Secure web hosting with free SSL
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  99.9% uptime guarantee
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Easy setup & smooth performance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Built for India and global audiences
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-4 font-medium">
                This website hosting is made simple and powerful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-12 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl mb-8 text-center">
            Choose the Hosting That Fits Your Goal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className={`${plan.color} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{plan.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {plan.name}
                      </h3>
                      <p className="text-white/80 text-sm">{plan.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {plan.description}
                  </p>
                  {plan.highlight && (
                    <p className="text-gray-800 font-medium mt-3">
                      {plan.highlight}
                    </p>
                  )}
                  {plan.bestFor && (
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800 text-sm mb-2">
                        {plan.name === "WordPress Hosting"
                          ? "Why users choose it:"
                          : "Best for:"}
                      </p>
                      <ul className="space-y-1">
                        {plan.bestFor.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 text-sm flex items-center"
                          >
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Secure Web Hosting You Can Trust
              </h2>
              <p className="text-lg leading-relaxed">
                Security is built into every hosting plan. With Avyukt Tech
                Labs, you get:
              </p>
              <ul className="space-y-4 mt-6">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mt-4 font-medium">
                Our secure web hosting protects your website, your data, and
                your customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Fast Web Hosting That Helps You Rank
              </h3>
              <p className="leading-relaxed">
                Speed matters. Faster websites rank better, convert more users,
                and keep visitors engaged. Our fast web hosting uses optimized
                servers and global delivery to ensure quick load times
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domain & Hosting */}
      <section className="py-12 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-bold text-2xl mb-4">
                Domain and Hosting – One Simple Solution
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Register your domain and host your website in one place. Our
                domain and hosting solution keeps everything easy to manage, so
                you can focus on growing your business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-bold text-2xl mb-4">
                India Web Hosting with Global Performance
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                As a trusted India web hosting provider, we understand local
                needs while delivering global web hosting performance. Whether
                your visitors are in India or worldwide, your site stays fast
                and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-bold text-3xl mb-8 text-white">
            Why Choose Avyukt Tech Labs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white flex items-center"
              >
                <span className="text-green-400 mr-2 text-xl">✓</span>
                <span className="text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl mb-8 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-2xl mb-6 text-center">Need a Website to Host?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our professional web development services to create the perfect website for your hosting plan.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/static-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Static Websites</h3>
              <p className="text-gray-600 text-sm">Fast, lightweight websites perfect for shared hosting.</p>
            </Link>
            <Link href="/dynamic-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dynamic Websites</h3>
              <p className="text-gray-600 text-sm">CMS-powered sites ideal for WordPress hosting.</p>
            </Link>
            <Link href="/ecommerce-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">eCommerce Websites</h3>
              <p className="text-gray-600 text-sm">Online stores optimized for business hosting plans.</p>
            </Link>
            <Link href="/enterprise-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Enterprise Solutions</h3>
              <p className="text-gray-600 text-sm">Large-scale platforms suited for VPS and cloud hosting.</p>
            </Link>
          </div>
        </div>
      </section>

      <BlogPosts title="Latest Hosting & Tech Insights" category="web-hosting" />
      <ContactUs />
    </article>
  );
}