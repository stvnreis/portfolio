'use client'

import { Button } from "@/components/button/Button"
import { TextInterface } from "@/texts/text-interface"
import Image from "next/image"
import Eu from '../../../../public/eu.jpg'

export const PresentationSection = (props: { text: TextInterface }) => {
  
  return <section className="h-full flex flex-col items-center justify-center">
    <div className="flex flex-col gap-5 items-center justify-center h-full text-center md:w-3/6">
      <div className="flex justify-center items-center w-1/2 md:w-1/2 h-1/5 md:h-1/3 relative rounded-full">
          <Image 
            src={Eu}
            alt="Minha foto"
            style={{
              objectFit: 'cover',
              borderRadius: '200px'
            }}
            fill
          />  
        </div>

        <h1 className="text-2xl md:text-5xl">
          {props.text.presentationSection.greatings}
        </h1>
        <p className="md:w-2/3 text-sm md:text-lg">
          {props.text.presentationSection.experience}
        </p>
      </div>
    </section>
}