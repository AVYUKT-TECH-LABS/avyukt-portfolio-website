import React from "react";

const contactInput = "py-4 px-3 rounded-lg border border-gray-200";

function ContactUs() {
  return (
    <section>
      <div
        style={{
          backgroundImage: 'url("img/home-bg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex-1 bg-200 bg-opacity-95 py-4 md:py-12">
          <div className="md:container md:mx-auto md:max-w-6xl w-full">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between  px-4 md:px-0">
              <div className="flex flex-col md:py-12 space-y-6 items-center">
                <div className="relative hidden md:block">
                  <h2 className="theme-headline">
                    <span className="heading">Contact Us </span>
                    <p className="mt-4 text-4xl md:text-5xl">
                      Start Your Digital Transformation Journey
                    </p>
                  </h2>
                </div>
                <div className="block md:hidden">
                  <h2 className="text-4xl font-semibold text-left">
                    Contact Us
                  </h2>
                </div>
                <div>
                  <p className="leading-9 text-center md:text-left">
                    Ready to elevate your digital presence? Avyukt Tech Labs is
                    here to help. Whether you have questions about our services,
                    need expert advice, or want to start a project, our team is
                    eager to assist you. Reach out today, and let&apos;s turn
                    your digital aspirations into reality.
                  </p>
                </div>
                <div className="w-full">
                  {/* <div className="bg-white rounded-lg p-6 border-l-8 border-black mb-8">
                    <h2 className="text-xl font-semibold">Location</h2>
                    <span>
                      A-7, Flat no.8, 2nd Floor, Jawahar park, Khanpur, New
                      Delhi, Delhi - 110062, India
                    </span>
                  </div> */}
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
              <div className="md:p-12 items-center justify-center flex mt-8 md:mt-0 ">
                <div className="flex-1 w-[400px] md:w-[540px] h-[640px] bg-white rounded-lg p-12 shadow">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      className={contactInput}
                      placeholder="Name"
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                      <input
                        type="text"
                        className={contactInput}
                        placeholder="Phone"
                      />
                      <input
                        type="text"
                        className={contactInput}
                        placeholder="Email"
                      />
                    </div>
                    <textarea
                      rows={12}
                      placeholder="Comment"
                      className={contactInput}
                    />
                    <button className="cta-btn !py-3">Contact Us</button>
                  </div>
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
