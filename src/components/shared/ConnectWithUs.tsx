import Image from "next/image";
import React from "react";

const ConnectWithUs = () => {
  return (
    <section className="bg-400 text-white py-20 flex flex-col pt-0 mt-[140px] pb-40">
      <div className="relative -top-[150px] md:h-[580px] custom-container flex lg:flex-row flex-col bg-200 justify-between w-full md:px-0  px-8">
        <div className="flex flex-col justify-between py-12 text-black lg:w-1/3 lg:pl-16 w-full px-3 gap-6">
          <div className="flex flex-col gap-12">
            <h4 className="lg:text-5xl text-2xl !leading-none">
              Have a Project on mind?
            </h4>

            <p className="text-xl font-light">
              We can help you bring your ideas to life. Let&apos;s talk about
              what we can build and raise together.
            </p>
          </div>

          <div>
            <a
              href="https://forms.gle/W9547VW4uPHr4V957"
              target="_blank"
              className="p-2 px-4 border border-black text-lg font-semibold hover:text-white hover:bg-black transition-colors"
            >
              Connect with us!
            </a>
          </div>
        </div>

        <div className="md:w-3/5 w-full md:mb-0 mb-2">
          <Image
            className="w-full h-full"
            src="/img/connect-with-us-home.jpg"
            alt="Avyukt Logo"
            width={600}
            height={660}
            priority
          />
        </div>
      </div>

      <div className="custom-container flex flex-col md:flex-row justify-between gap-y-6 items-center -m-12 px-8 md:px-0">
        <h2 className="md:text-6xl text-3xl w-full">
          Let us together build a flourishing business
        </h2>

        <p className="md:w-3/4 text-lg font-light w-full">
          When connected with us, you aren&apos;t growing your business alone.
          We have your back and put in our best to contribute to the growth of
          your entire team and organization. So, if you are looking for the
          right agency that&apos;ll help you build a good online presence and
          bring in more conversions and revenue, we are right here!
        </p>
      </div>
    </section>
  );
};

export default ConnectWithUs;
