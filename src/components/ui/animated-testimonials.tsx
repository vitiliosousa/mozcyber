"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: StaticImageData;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

 
  useEffect(() => {
    setIsMounted(true);
    setRotations(
      Array(testimonials.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 21) - 10)
    );
  }, [testimonials.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay && isMounted) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isMounted]);

  // Renderização simplificada inicial (incluindo SSR)
  if (rotations.length === 0) {
    return (
      <div className="mx-auto w-full px-4 py-12 antialiased sm:py-16 md:max-w-4xl md:px-8 lg:px-12 lg:py-20">
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div className="relative h-64 w-full sm:h-72 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`absolute inset-0 origin-bottom transition-opacity duration-300 ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={400}
                  height={400}
                  draggable={false}
                  className="h-full w-full rounded-2xl object-cover object-center sm:rounded-3xl"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between py-2 md:py-4">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text sm:text-2xl">
                {testimonials[active]?.name}
              </h3>
              <p className="text-xs bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text sm:text-sm">
                {testimonials[active]?.designation}
              </p>
              <p className="mt-4 text-sm text-zinc-300 sm:mt-6 sm:text-base lg:mt-8">
                {testimonials[active]?.quote}
              </p>
            </div>
            <div className="flex gap-3 pt-6 md:gap-4 md:pt-8 lg:pt-12">
              <button
                onClick={handlePrev}
                className="group/button flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7"
              >
                <IconArrowLeft className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7"
              >
                <IconArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto w-full px-4 py-12 antialiased sm:py-16 md:max-w-4xl md:px-8 lg:px-12 lg:py-20"
    >
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div>
          <div className="relative h-64 w-full sm:h-72 md:h-80">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index] || 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index] || 0,
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index] || 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    draggable={false}
                    className="h-full w-full rounded-2xl object-cover object-center sm:rounded-3xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2 md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text sm:text-2xl">
              {testimonials[active].name}
            </h3>
            <p className="text-xs bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text sm:text-sm">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-4 text-sm text-zinc-300 sm:mt-6 sm:text-base lg:mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(8px)",
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-3 pt-6 md:gap-4 md:pt-8 lg:pt-12">
            <button
              onClick={handlePrev}
              className="group/button flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7"
            >
              <IconArrowLeft className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7"
            >
              <IconArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};