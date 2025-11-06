export const themeColors = [
  "#5857f9",
  "#fb5457",
  "#9c34f0",
  "#f07f34",
  "#134A45",
  "#f0b934",
  "#f034b4",
];

export const getThemeColor = (base: string, idx: number) =>
  `${base}-[${themeColors[idx]}]`;

export const sectors: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Education",
    description:
      "We create highly interactive websites and apps for educational purposes, and we use LMS technology for a robust experience.",
    image: "/img/web_sectors/education.avif",
  },
  {
    title: "eCommerce",
    description:
      "With attractive and user-friendly functions, we build highly creative website designs that stand out in front of the crowd.",
    image: "/img/web_sectors/ecommerce.avif",
  },
  {
    title: "Travel & Transport",
    description:
      "We are confident in our ability to offer complete website development and marketing solutions for online travel agencies.",
    image: "/img/web_sectors/travels.avif",
  },
  {
    title: "Legal Firm",
    description:
      "We left no stone unturned, which is why we have expertise in making every kind of website.",
    image: "/img/web_sectors/legal_firm.avif",
  },
  {
    title: "Real Estate",
    description:
      "We are a top provider of commercial real estate web development services, assisting businesses in setting up and maintaining an online presence.",
    image: "/img/web_sectors/real_estate.avif",
  },
  {
    title: "Health & Beauty",
    description:
      "Due to the increasing demand for health and beauty services, if you are thinking of investing in the health industry, a website is your best option.",
    image: "/img/web_sectors/health_beauty.avif",
  },
  {
    title: "Finance",
    description:
      "With the help of top-notch technology and experienced developers, we put all our efforts into your project.",
    image: "/img/web_sectors/finance.avif",
  },
  {
    title: "Cleaning Services",
    description:
      "We deliver effective website marketing strategies to all of our clients by combining data and experience.",
    image: "/img/web_sectors/cleaning_services.avif",
  },
  {
    title: "Restaurant",
    description:
      "We create appetizing websites that showcase your culinary delights and enhance your online presence.",
    image: "/img/web_sectors/restaurant.avif",
  },
  {
    title: "IT & Software",
    description:
      "Our expertise in IT and software allows us to create cutting-edge websites that showcase your technological prowess.",
    image: "/img/web_sectors/it_software.avif",
  },
  {
    title: "Food & Beverage",
    description:
      "We craft mouthwatering websites that bring your food and beverage offerings to life online.",
    image: "/img/web_sectors/food_beverage.avif",
  },
  {
    title: "Hotels",
    description:
      "Our hotel websites provide a luxurious online experience that mirrors the comfort of your accommodations.",
    image: "/img/web_sectors/hotels.webp",
  },
];