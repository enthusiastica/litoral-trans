import "react-slideshow-image/dist/styles.css"

import React, { useState } from "react"

import { Slide } from "react-slideshow-image"

import { Label } from ".."

const slides = [
  {
    slideContent: (
      <>
        <p className="text-2xl font-semibold">LA MEJOR MANERA</p>
        <p className="text tracking-thight">PARA ENVIAR TUS PAQUETES</p>
      </>
    ),
    image: "/images/slide/slide_1.jpg",
  },
  {
    slideContent: (
      <>
        <p className="text-lg tracking-tighter font-semibold mb-4">SOLUCIONES DE LOGÍSTICA</p>
        <p className="text-sm tracking-wider">BRINDADA POR SUS DUEÑOS</p>
        <p className="text-sm">DISFRUTADA POR SUS CLIENTES</p>
      </>
    ),
    image: "/images/slide/slide_2.jpg",
  },
]

export const Slideshow = () => {
  const [nextIndex, setNextIndex] = useState(null)
  const props = {
    arrows: false,
    transitionDuration: 500,
    indicators: (i: Number) => (
      <div
        className={`cursor-pointer rounded-full shadow-strong p-1 mx-1 mb-24 -mt-24 z-1 hover:opacity-90 ${
          (!nextIndex && i === 0) || nextIndex === i ? "bg-primary opacity-100" : "bg-light opacity-40"
        }`}
      />
    ),
    onChange: (_: Number, next: Number) => {
      setNextIndex(next)
    },
  }

  return (
    <div className="flex flex-col-reverse -mb-7">
      <Slide {...props}>
        {slides.map((value, index) => {
          return (
            <div className="each-fade" key={index}>
              <div className="bg-center bg-cover h-50vh flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${value.image})` }}>
                <div className="bg-dots">
                  <div className="m-8">
                    <Label className="bg-primary text-light p-4 select-none">{value.slideContent}</Label>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slide>
      <div className="absolute z-1 w-full mb-7">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={process.env.colorPrimary}
            fillOpacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}
