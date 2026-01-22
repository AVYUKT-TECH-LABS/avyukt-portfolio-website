import ContactUs from "@/components/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AvyuktLabs | Web & App Development Company India",
  description: "Get in touch with AvyuktLabs for expert web design, app development & digital marketing services. Call, email, or fill the form to accelerate your online growth.",
  keywords: [
    "contact avyuktlabs",
    "contact avyukt tech labs",
    "web development contact india",
    "app development contact",
    "digital marketing contact",
    "IT solutions contact",
    "get quote avyuktlabs",
    "reach out avyuktlabs",
    "AvyuktLabs phone email",
    "IT company contact india",
    "contact web design company"
  ],
};

const page = () => {
  return (
    <div className="mt-20">
      <ContactUs />
    </div>
  );
};

export default page;
