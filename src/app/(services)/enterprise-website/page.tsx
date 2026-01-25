import ContactUs from "@/components/ContactUs";
import BlogPosts from "@/components/shared/BlogPosts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Website Development Services | Avyukt Tech Labs",
  description:
    "Custom enterprise website development for scalable, secure businesses. We build high-performance enterprise websites that drive traffic, leads & growth.",
  keywords: [
    "enterprise website development",
    "enterprise web development company",
    "enterprise website design services",
    "enterprise website development india",
    "enterprise web development services",
    "enterprise web solutions",
    "scalable enterprise websites",
    "Avyukt labs",
  ],
};

const faqs = [
  {
    question: "What is enterprise website development?",
    answer:
      "Enterprise website development is the process of building large-scale, secure, and scalable websites for businesses that need high performance, advanced features, and system integrations.",
  },
  {
    question: "Why do enterprises need custom website development?",
    answer:
      "Enterprises need custom website development to handle complex workflows, high traffic, security requirements, and seamless integration with CRM, ERP, and third-party systems.",
  },
  {
    question: "How much does enterprise website development cost?",
    answer:
      "Enterprise website development costs depend on features, integrations, design complexity, and scalability requirements. Prices typically vary based on project scope and business needs.",
  },
  {
    question: "How long does it take to develop an enterprise website?",
    answer:
      "An enterprise website usually takes 8–16 weeks to develop, depending on functionality, customization, integrations, and approval cycles.",
  },
  {
    question: "What technologies are used for enterprise web development?",
    answer:
      "Common technologies include React, Angular, Node.js, Java, .NET, PHP, cloud platforms, and headless CMS, ensuring scalability, performance, and security.",
  },
  {
    question: "Is enterprise website development scalable for future growth?",
    answer:
      "Yes, enterprise websites are built with scalable architecture, allowing businesses to add features, handle higher traffic, and expand without performance issues.",
  },
  {
    question: "Do you provide secure enterprise web development solutions?",
    answer:
      "Yes, enterprise websites include advanced security features such as SSL, data encryption, role-based access, and compliance standards to protect business data.",
  },
  {
    question: "Can enterprise websites integrate with existing systems?",
    answer:
      "Enterprise websites can integrate with CRM, ERP, payment gateways, cloud services, APIs, and third-party tools for smooth business operations.",
  },
  {
    question: "Do you offer enterprise website development in India?",
    answer:
      "Yes, Avyukt Labs provides enterprise website development services in India and globally, delivering scalable and high-performance solutions for businesses.",
  },
  {
    question: "Why choose Avyukt Labs for enterprise website development?",
    answer:
      "Avyukt Labs delivers custom, secure, and scalable enterprise websites with modern technology, SEO-friendly architecture, and long-term support.",
  },
];

export default function EnterprisePage() {
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
                Enterprise Website Development Services That Drive Scalable
                Business Growth
              </h1>
              <p className="text-white mt-4 leading-relaxed font-light">
                Avyukt Tech Labs is a trusted enterprise web development company
                delivering powerful, scalable, and secure digital platforms for
                modern businesses. We specialize in enterprise website
                development that goes beyond design — our solutions are
                engineered to handle complexity, high traffic, and long-term
                growth while delivering an exceptional user experience.
              </p>
              <p className="text-white mt-4 leading-relaxed font-light">
                In today&apos;s digital-first world, enterprises need websites
                that are fast, reliable, and adaptable. Our enterprise web
                development services are built to support evolving business
                needs, integrate seamlessly with internal systems, and convert
                visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance, Scale & Security */}
      <section className="py-12 pb-4 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Enterprise Website Development Built for Performance, Scale &
                Security
              </h2>
              <p className="text-lg leading-relaxed">
                An enterprise website is not just an online presence — it is a
                mission-critical business asset. At Avyukt Tech Labs, our
                enterprise website design services focus on building platforms
                that are robust, scalable, and future-ready.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                We create scalable enterprise websites that can manage high
                traffic volumes, complex data structures, and advanced user
                interactions without compromising speed or stability. Our
                development approach ensures that your website grows
                effortlessly as your business expands.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Security is at the core of everything we build. Our secure
                enterprise websites follow best practices for data protection,
                compliance, and risk mitigation, ensuring your business and
                customer data remain protected at all times. Combined with
                performance optimization, we deliver high performance enterprise
                websites that load fast, rank better, and engage users
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Enterprise Development */}
      <section className="py-12 pb-4 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Custom Enterprise Website Development Tailored to Your Business
              </h2>
              <p className="text-lg leading-relaxed">
                Every enterprise has unique goals, processes, and challenges.
                That&apos;s why we provide fully custom enterprise website
                development solutions designed around your specific business
                requirements.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our team collaborates closely with stakeholders to understand
                your objectives and translate them into a powerful digital
                platform. From complex enterprise portals to dynamic corporate
                websites, we deliver enterprise web solutions that align with
                your brand, operations, and growth strategy.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our custom services include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-lg">
                <li>Enterprise website development for large-scale organizations</li>
                <li>Enterprise web application development with advanced functionality</li>
                <li>Corporate website development for professional brand presence</li>
                <li>End-to-end business website development services</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Each solution is built with flexibility, scalability, and
                long-term performance in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Web Application Development */}
      <section className="py-12 pb-4 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Enterprise Web Application Development for Modern Enterprises
              </h2>
              <p className="text-lg leading-relaxed">
                As a leading enterprise web development company, Avyukt Tech
                Labs also specializes in enterprise web application development.
                We build web applications that streamline operations, automate
                workflows, and enhance productivity across departments.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our enterprise applications are designed to integrate seamlessly
                with your existing systems such as CRM, ERP, and third-party
                tools. This ensures smooth data flow, improved efficiency, and
                better decision-making.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By combining advanced technology with user-centric design, we
                create enterprise applications that are intuitive, secure, and
                scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 pb-4 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Why Choose Avyukt Tech Labs as Your Enterprise Web Development
                Partner
              </h2>
              <p className="text-lg leading-relaxed">
                Choosing the right professional web development company is
                critical for enterprise success. Avyukt Tech Labs brings
                technical expertise, strategic thinking, and a results-driven
                approach to every project.
              </p>
              <p className="text-lg leading-relaxed mt-4 font-semibold">
                What Sets Us Apart
              </p>
              <ul className="space-y-3 mt-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Proven experience in enterprise website development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Deep understanding of scalable architecture
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  SEO-optimized development for better visibility
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Enterprise-grade security standards
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Performance-focused engineering
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  Ongoing support and optimization
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Our enterprise web development services are designed to deliver
                measurable results, reduce operational complexity, and provide a
                strong return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India with Global Standards */}
      <section className="py-12 pb-4 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-6 justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-4">
                Enterprise Website Development in India with Global Standards
              </h2>
              <p className="text-lg leading-relaxed">
                Avyukt Tech Labs is a reliable provider of enterprise website
                development India, serving businesses across diverse industries
                including IT, finance, healthcare, manufacturing, education, and
                eCommerce.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Based in India, we combine cost-effective development with
                global quality standards. Our team follows industry best
                practices to deliver enterprise platforms that meet
                international performance, security, and usability benchmarks.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Whether you are an Indian enterprise or a global organization
                looking for a trusted development partner, we deliver enterprise
                solutions that support digital transformation and sustainable
                growth. We also offer <Link href="/ecommerce-website" className="text-blue-600 hover:underline">eCommerce website development</Link> and <Link href="/mobile-app-development" className="text-blue-600 hover:underline">mobile app development</Link> services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Performance & Conversion */}
      <section className="py-12 pb-4 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-bold text-2xl mb-4">
                High-Performance Enterprise Websites Built to Convert
              </h2>
              <p className="text-lg leading-relaxed">
                Performance directly impacts user experience and conversions.
                Our high performance enterprise websites are optimized for fast
                loading times, smooth navigation, and seamless interactions
                across devices.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By focusing on usability and conversion optimization, we help
                enterprises turn visitors into leads and customers. From clear
                calls-to-action to intuitive user journeys, every element is
                designed to maximize engagement and results.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl mb-4">
                Secure Enterprise Websites You Can Trust
              </h2>
              <p className="text-lg leading-relaxed">
                Security is a top priority for enterprises. Our secure
                enterprise websites are built using advanced security
                frameworks, regular vulnerability testing, and compliance-driven
                development practices.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                We ensure data protection, secure authentication, and reliable
                hosting environments to safeguard your digital assets. This
                commitment to security builds trust with users and protects your
                business reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-bold text-3xl mb-4 text-white">
            Build Your Enterprise Website with Avyukt Tech Labs
          </h2>
          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            If you are looking for a dependable enterprise web development
            company that understands scalability, security, and performance,
            Avyukt Tech Labs is your ideal partner.
          </p>
          <p className="text-lg leading-relaxed text-white/90 mt-4 max-w-3xl mx-auto">
            We help businesses build enterprise websites that attract traffic,
            enhance brand credibility, and support long-term growth. Our team is
            ready to transform your vision into a powerful digital platform.
          </p>
          <p className="text-xl font-semibold text-white mt-6">
            Partner with Avyukt Tech Labs today and take your enterprise website
            development to the next level.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl mb-8 text-center">
            Frequently Asked Questions
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
          <h2 className="font-bold text-2xl mb-6 text-center">Explore Our Other Services</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Build a complete digital ecosystem with our comprehensive suite of web development and hosting solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/dynamic-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dynamic Websites</h3>
              <p className="text-gray-600 text-sm">Flexible CMS-based websites for growing businesses.</p>
            </Link>
            <Link href="/ecommerce-website" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">eCommerce Solutions</h3>
              <p className="text-gray-600 text-sm">Powerful online stores that drive sales and growth.</p>
            </Link>
            <Link href="/web-hosting" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Web Hosting</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade hosting for high-traffic websites.</p>
            </Link>
            <Link href="/mobile-app-development" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Mobile Apps</h3>
              <p className="text-gray-600 text-sm">Custom enterprise mobile applications for your workforce.</p>
            </Link>
          </div>
        </div>
      </section>

      <BlogPosts
        title="Our Enterprise Development Insights"
        category="enterprise-website"
      />
      <ContactUs />
    </article>
  );
}