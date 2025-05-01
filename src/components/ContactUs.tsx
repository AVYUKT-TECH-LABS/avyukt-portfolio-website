"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { sendGTMEvent } from "@next/third-parties/google";

const contactInput = "py-4 px-3 rounded-lg border border-gray-200";

function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | string>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .sendForm(
        "service_sol1htd",
        "template_v1u6027",
        form.current as any,
        "bkSFddeD7-g26cgAk"
      )
      .then((result: any) => {
        // console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        sendGTMEvent({
          event: "lead",
          value: {
            send_to: "AW-17025867407/fC5yCKL_mb8aEI-9yLY_",
          },
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error: any) => {
        console.error("Failed to send email:", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section>
      <div
        style={{
          backgroundImage: 'url("img/home-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex-1 bg-[#134A45] bg-opacity-90 py-4 md:py-12">
          <div className="md:container md:mx-auto md:max-w-6xl w-full">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0">
              <div className="flex flex-col md:py-12 space-y-6 items-center">
                <div className="relative hidden md:block">
                  <h2 className="theme-headline">
                    <p className="mt-4 text-4xl md:text-5xl text-white font-extrabold">
                      Contact us for robust web design & development services in
                      India
                    </p>
                  </h2>
                </div>
                <div className="block md:hidden">
                  <h2 className="text-4xl font-semibold text-left text-white">
                    Contact Us
                  </h2>
                </div>
                <div>
                  <p className="leading-7 text-center md:text-left text-lg text-white font-medium">
                    As the best web design and development service provider, we
                    guarantee the highest caliber web design service at
                    competitive rates to support the online success of your
                    organization. Utilize our top-notch web development services
                    to accelerate lead conversions for your company.
                  </p>
                </div>
                <div className="w-full">
                  <div className="bg-white rounded-lg p-3 border-l-8 border-black mb-8">
                    <h2 className="text-xl font-semibold">Call Us</h2>
                    <span>(+91) 8178392040</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-8 border-black">
                    <h2 className="text-xl font-semibold">E-Mail Us</h2>
                    <span>divyansh@avyuktlabs.in</span>
                  </div>
                </div>
              </div>
              <div className="md:p-12 items-center justify-center flex mt-8 md:mt-0">
                <div className="flex-1 w-full md:w-[540px] h-[640px] bg-white rounded-lg p-12 shadow">
                  <form
                    ref={form as any}
                    onSubmit={sendEmail}
                    className="flex flex-col space-y-4"
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={contactInput}
                      placeholder="Name"
                      required
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={contactInput}
                        placeholder="Phone"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={contactInput}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <textarea
                      rows={12}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className={contactInput}
                      required
                    />
                    <button
                      type="submit"
                      className="cta-btn !py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Get Quote"}
                    </button>

                    {submitStatus === "success" && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                        Your message has been sent successfully! We&apos;ll get
                        back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Failed to send your message. Please try again later.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
