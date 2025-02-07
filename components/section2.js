"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/shared/ui/carousel';
import Image from '@/components/shared/Image';
import { Button } from '@/components/shared/ui/button';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const exampleItems = [
  {
    imageSrc: '/r1.jpg',
    name: 'Amy Lawrence',
    location: 'Atlanta, GA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: '/r2.png',
    name: 'Jane Doe',
    location: 'Los Angeles, CA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: '/r3.png',
    name: 'Alice Doe',
    location: 'Chicago, IL',
    socials: [InstagramIcon, LinkedinIcon],
  },
  {
    imageSrc: '/r1.jpg',
    name: 'Amy Lawrence',
    location: 'Atlanta, GA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: '/r2.png',
    name: 'Jane Doe',
    location: 'Los Angeles, CA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: '/r3.png',
    name: 'Alice Doe',
    location: 'Chicago, IL',
    socials: [InstagramIcon, LinkedinIcon],
  },
  {
    imageSrc: '/r1.jpg',
    name: 'Amy Lawrence',
    location: 'Atlanta, GA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: '/r2.png',
    name: 'Jane Doe',
    location: 'Los Angeles, CA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: '/r3.png',
    name: 'Alice Doe',
    location: 'Chicago, IL',
    socials: [InstagramIcon, LinkedinIcon],
  },
  {
    imageSrc: '/r1.jpg',
    name: 'Amy Lawrence',
    location: 'Atlanta, GA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: '/r2.png',
    name: 'Jane Doe',
    location: 'Los Angeles, CA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: '/r3.png',
    name: 'Alice Doe',
    location: 'Chicago, IL',
    socials: [InstagramIcon, LinkedinIcon],
  },
  
];

function Section2() {
  return (
    <>
      <div className="flex flex-col items-center p-4 mt-12">
        <h2 className="text-5xl font-semibold leading-tight text-center">
          Made with Ai
        </h2>
        <p className="mt-4 md:text-xl max-w-xl text-center">
        Our AI-powered resume assistant helps you build a professional, ATS-friendly resume in just a few minutes. No design skills required—just answer a few questions, and we’ll generate the perfect resume for you!
        </p>
      </div>

      <Carousel className="w-full py-12" opts={{ dragFree: true, dragThreshold: 0.5 }}>
        <CarouselContent className="ml-0">
          {exampleItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis/1/5 3xl:basis-1/6 p-0 ml-1">
              <div className="w-full flex flex-col">
                <Image src={item.imageSrc} alt={item.name} width={500} height={500} className="object-cover rounded-xl" />
                <div className="p-4 flex gap-4 justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-50">{item.location}</p>
                  </div>

                  <div className="flex gap-2">
                    {item.socials.map((SocialIcon, index) => (
                      <div key={index} className="bg-neutral-100 dark:bg-neutral-900 rounded-full w-10 h-10 p-2">
                        <SocialIcon size={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}

          <CarouselItem key="cta" className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-secondary-500/5 rounded-xl">
              <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
                <a href="#">Try Gnomie for free</a>
              </Button>
              <p className="text-sm opacity-50">No credit card required</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </>
  );
}

export default Section2;
