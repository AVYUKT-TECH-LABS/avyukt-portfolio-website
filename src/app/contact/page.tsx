import Header from '@/components/header/header'
import ConnectWithUs from '@/components/shared/ConnectWithUs'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      <section
        className="h-[50vh] relative"
        style={{
          backgroundImage: 'url("img/home-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex-1 h-full bg-opacity-80 bg-[#312f2f]">
          <Header />

          <div className="container mx-auto max-w-6xl flex flex-col gap-12 justify-center h-full -mt-24 px-3">
            <div className='border-200 border-2 w-20'></div>

            <h1 className="lg:text-7xl text-5xl text-white w-full md:w-4/5 lg:text-left text-center">
              Contact
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-200 w-full md:py-36 py-16 md:px-0 px-8">
        <div className="custom-container flex justify-between items-center md:flex-row flex-col gap-12 relative">
          <div className="flex flex-col md:gap-16 gap-8 md:w-1/2 w-full">
            <div className="flex flex-col gap-8">
              <h2 className="md:text-5xl text-3xl !leading-none">We are here to help!</h2>

              <div>
                <button className="p-2 px-4 border border-black text-lg font-semibold">
                  Connect with us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page