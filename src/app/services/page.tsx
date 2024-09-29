'use client'
import ContactUs from "@/components/ContactUs";
import { motion } from 'framer-motion';
import { Building, Database, Globe, Server, ShoppingCart, Smartphone } from 'lucide-react';
import Link from "next/link";

const services = [
  {
    title: 'Static Websites',
    description: 'To introduce small business at startup point. HTML, CSS based website with fixed information, content, graphics. Website with faster loading quality at affordable rates.',
    icon: Globe,
    color: 'bg-blue-500/90',
    link: "/static-website"
  },
  {
    title: 'Dynamic Websites(CMS)',
    description: "Dynamic website's absolute solution with combination of our latest technology & professional experience in multeity & budget range.",
    icon: Database,
    color: 'bg-green-500/90',
    link: "/dynamic-website"
  },
  {
    title: 'Ecommerce Websites',
    description: 'Wide spectrum of avyukt tech lab\'s eCommerce end-to-end solution with fully customized platform to fit in your requirments as well as in your budget range.',
    icon: ShoppingCart,
    color: 'bg-purple-500/90',
    link: "/ecommerce-website"
  },
  {
    title: 'Enterprise Websites',
    description: 'Advanced custom enterprise websites and portals development services to evaluates entrepreneurs needs and business goals for better customer experience at budget',
    icon: Building,
    color: 'bg-red-500/90',
    link: "/enterprise-website"
  },
  {
    title: 'Mobile Applications',
    description: 'We offer services as Mobile Application Development Company in multiple segments of services. We build Hybrid and Native both mobile applications.',
    icon: Smartphone,
    color: 'bg-yellow-500/90',
    link: "/mobile-app-development"
  },
  {
    title: 'Web Hosting',
    description: 'Buy Web hosting server at affordable cost, where you can scale your website as per your need. We have multiple plans for Shared Web Hosting Plans.',
    icon: Server,
    color: 'bg-pink-500/90',
    link: "/web-hosting"
  }
]

const sectors = [
  {
    title: 'Education',
    description: 'We create highly interactive websites and apps for educational purposes, and we use LMS technology for a robust experience.',
    image: '/img/web_sectors/education.webp'
  },
  {
    title: 'eCommerce',
    description: 'With attractive and user-friendly functions, we build highly creative website designs that stand out in front of the crowd.',
    image: '/img/web_sectors/ecommerce.webp'
  },
  {
    title: 'Travel & Transport',
    description: 'We are confident in our ability to offer complete website development and marketing solutions for online travel agencies.',
    image: '/img/web_sectors/travels.webp'
  },
  {
    title: 'Legal Firm',
    description: 'We left no stone unturned, which is why we have expertise in making every kind of website.',
    image: '/img/web_sectors/legal_firm.webp'
  },
  {
    title: 'Real Estate',
    description: 'We are a top provider of commercial real estate web development services, assisting businesses in setting up and maintaining an online presence.',
    image: '/img/web_sectors/real_estate.webp'
  },
  {
    title: 'Health & Beauty',
    description: 'Due to the increasing demand for health and beauty services, if you are thinking of investing in the health industry, a website is your best option.',
    image: '/img/web_sectors/health_beauty.webp'
  },
  {
    title: 'Finance',
    description: 'With the help of top-notch technology and experienced developers, we put all our efforts into your project.',
    image: '/img/web_sectors/finance.webp'
  },
  {
    title: 'Cleaning Services',
    description: 'We deliver effective website marketing strategies to all of our clients by combining data and experience.',
    image: '/img/web_sectors/cleaning_services.webp'
  },
  {
    title: 'Restaurant',
    description: 'We create appetizing websites that showcase your culinary delights and enhance your online presence.',
    image: '/img/web_sectors/restaurant.webp'
  },
  {
    title: 'IT & Software',
    description: 'Our expertise in IT and software allows us to create cutting-edge websites that showcase your technological prowess.',
    image: '/img/web_sectors/it_software.webp'
  },
  {
    title: 'Food & Beverage',
    description: 'We craft mouthwatering websites that bring your food and beverage offerings to life online.',
    image: '/img/web_sectors/food_beverage.webp'
  },
  {
    title: 'Hotels',
    description: 'Our hotel websites provide a luxurious online experience that mirrors the comfort of your accommodations.',
    image: '/img/web_sectors/hotels.webp'
  }
]

const Page = () => {
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
          <div className="flex-1 bg-black bg-opacity-60 py-24">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-semibold text-center">
                Website Design and Development Services
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 md:pb-32 px-4 md:px-0">
        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-col items-center md:space-y-20 space-y-8 justify-between">
            <div>
              <p className="text-center">
                Avyukt Tech Labs is a professional website designing company in india specializes in web design, eCommerce CMS development, mobile app development (Android/iPhone), responsive website designs, web hosting, speed optimization services to its worldwide clients. At avyukt tech labs we have a group of experienced experts adroit in most recent innovation. we give our customers a bleeding edge by making highlight rich site that associates and communicates with their clients and prompts enhanced changes.
              </p>
            </div>
            <div className="w-full bg-slate-200 rounded-lg">
              <div className="max-w-6xl mx-auto p-6 flex flex-row items-center justify-center">
                <p className="font-bold text-3xl text-black text-center">
                  We offer the following web design and development services.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* {services.map((service) => (
                <div
                  key={service.id}
                  className="border border-gray-300 rounded-lg hover:border-yellow-400 transition ease-in-out bg-white py-8 px-8"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col space-y-8">
                      <h1 className="text-2xl font-semibold text-center md:text-left">
                        {service.title}
                      </h1>
                      <p className="text-lg leading-loose text-gray-800  text-center md:text-left">
                        {service.content}
                      </p>
                    </div>
                    <div className="mt-8 w-full">
                      <a
                        target="_blank"
                        href="https://forms.gle/W9547VW4uPHr4V957"
                      >
                        <button className="cta-btn w-full">
                          <span>Know More</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))} */}
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`${service.color} rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105`}
                  whileHover={{ scale: 1.05 }}
                >
                  <service.icon className="w-12 h-12 text-white mb-4" />
                  <h2 className="text-2xl font-semibold text-white mb-4">{service.title}</h2>
                  <p className="text-white mb-6">{service.description}</p>
                  <motion.button
                    className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={service.link} title={`Know more about ${service.title} service at Avyukt Tech Labs`}>
                      <span>
                        Know More
                      </span>
                    </Link>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 md:pb-32 px-4 md:px-0">
        <div className="container mx-auto max-w-8xl">
          <div className="min-h-screen">
            <motion.h1
              className="text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Website Development for Sectors We Serve
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.title}
                  className="bg-white rounded-lg hover:shadow-lg border overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={sector.image} alt={sector.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{sector.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3">{sector.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </article>
  );
};

export default Page;
