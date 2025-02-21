"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Cards from "@/components/Cards";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function Home() {
  const cards = [
    {
      title: 'Brand Fundamentals',
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and strong impact in every, interaction."  
    },
    {
      title: 'Design Identity',
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and strong impact in every, interaction."  
    },
    {
      title: 'Digital Presence',
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and strong impact in every, interaction."  
    },
    {
      title: 'Product Design',
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and strong impact in every, interaction."  
    }
  ]

  const container = useRef(null);
  useGSAP(() => {
    
      const cards  = gsap.utils.toArray(".card") 

      ScrollTrigger.create({
        trigger: cards[0] as HTMLElement,
        start: "top 35%",
        endTrigger: cards[cards.length - 1] as HTMLElement,
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });
      cards.forEach((card: any, index) => {
        const isLastCard = index === cards.length;
        
        const cardInner = card.querySelector(".card-inner")

        if(!isLastCard) {
          ScrollTrigger.create({
            trigger: cardInner,
            start: 'top 35%',
            endTrigger: ".outro",
            end: 'top 10%',
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: cardInner,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 10%",
              scrub: true,
              pin: true,
              }
            })
           }
         })

         return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
         }
    },
   {scope: container}
  
);
  

  return (
    <ReactLenis root>

    <div className="app" ref={container}>
      <section className="hero w-fit h-screen">
        <img src="/assets/heroes.jpg" alt="hero" />
      </section>
      <section className="intro text-black">
        <h1>establishing brands that brings joy & profit to the world.</h1>
      </section>
      <section className="cards">
        {cards.map((card: any, index: number) => (
          <Cards key={index}  copy={card.copy} title={card.title} index={index} />
        ))}
      </section>
      <section className="outro text-black">
      <h1>Brands that leaves a mark.</h1>
      </section>
    </div>

    </ReactLenis>
  );
}
