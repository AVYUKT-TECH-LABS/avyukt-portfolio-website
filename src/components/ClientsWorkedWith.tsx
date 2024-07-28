import { CLIENTS } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const ClientsWorkedWith = () => {
  return (
    <section className="custom-container md:py-36 py-16 md:px-0 px-8 flex flex-col md:space-y-48 space-y-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="md:text-6xl text-3xl !leading-none">
          Clients we worked with
        </h2>
        <div className="w-full flex justify-center flex-wrap gap-6">
          {CLIENTS.map(({ imgSrc, name }, index) => (
            <div className="flex items-center justify-center rounded-lg md:mb-0 mb-4" key={index}>
              <Image
                src={imgSrc}
                className="rounded-lg"
                width={250}
                height={75}
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <h2 className="md:text-6xl text-3xl !leading-none">Why Choose Us?</h2>

        <strong className="text-lg">
          We have the expertise and knowledge to offer impartial advice and
          services at an honest price.
        </strong>

        <p className="text-lg">
          With us you&apos;ll feel heard. We listen to our client requirements
          and then select the right solution that fits. We care for your
          business as our own. We take a sincere interest in it and genuinely
          want to help your company reach its potential.
        </p>
      </div>
    </section>
  )
}

export default ClientsWorkedWith