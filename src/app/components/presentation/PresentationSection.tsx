'use client'

import { TextInterface } from "@/texts/text-interface"
import Image from "next/image"
import Eu from '../../../../public/eu.jpg'

export const PresentationSection = (props: { text: TextInterface }) => {
  
  return <section className="h-full flex flex-col items-center justify-center">
    <div className="flex flex-col gap-5 items-center justify-center h-full text-center md:w-3/6">
      <div className="flex justify-center items-center w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] relative">
          <Image 
            src={Eu}
            alt="Minha foto"
            style={{
              objectFit: 'cover',
            }}
            className="rounded-full"
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