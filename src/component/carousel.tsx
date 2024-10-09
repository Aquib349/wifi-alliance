import { Card, CardContent } from "../component/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../component/ui/carousel";
import React, { useEffect, useRef, useState } from "react";
import { CircleChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowForward } from "react-icons/io";

function CarouselSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Disconnect observer after first intersection
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <>
      <div
        className="carousel-component w-[95%] my-[10rem] m-auto"
        ref={elementRef}
      >
        <div className="main mt-16">
          <h2 className="text-3xl text-center font-bold text-[#2c1262] my-4">
            H2 Case study quote with optional testimonial vedio
          </h2>
          <Carousel
            plugins={[plugin.current]}
            className="w-[95%] m-auto  h-[350px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full">
              {Array.from({ length: 1 }).map((_, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-1">
                    <Card className="w-full shadow-none border-0 bg-transparent">
                      <CardContent>
                        <div className="rounded-tl-lg bg-[#D9E2FF] text-sm flex">
                          <div className="left-content w-2/3 m-8">
                            <blockquote className="font-medium text-[#2c1262] leading-relaxed text-lg poppins-italic">
                              "Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore at, sed diam voluptua. At vero eos et
                              accusam et justo duo dolores et ea rebum. Lorem
                              ipsum dolor sit amet, consetetur lorem ips
                              sadipscing elitr, sed diam nonumy eirmod. Lorem
                              ipsum dolor sit amet, consetetur lorem ips
                              sadipscing"
                            </blockquote>
                            <div className="mt-8">
                              <h4 className="font-bold text-[#2c1262] text-lg">
                                John Doeington
                              </h4>
                              <div className="flex items-center mt-1 gap-3">
                                <p className="text-[#2C106A]">Company Name</p>
                                <span>
                                  -----------------------------------------
                                </span>
                                <div className="flex items-center gap-2 font-semibold text-[#2C106A]">
                                  Read their story
                                  <IoIosArrowForward className="text-[#2c1262] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right side - Image with Play Button */}
                          <div className="relative w-1/3 overflow-hidden rounded-r-lg flex justify-end">
                            <motion.div
                              className="absolute -top-[7.5rem] -left-[7.5rem] border-2 border-black rounded-full w-[230px] h-[230px] z-20"
                              variants={{
                                hidden: {
                                  scale: 0,
                                  opacity: 0,
                                  x: "-50%",
                                  y: "-50%",
                                },
                                visible: {
                                  scale: 1,
                                  opacity: 1,
                                  x: "0%",
                                  y: "0%",
                                },
                              }}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.div
                              className="absolute top-4 -right-52 border-2 border-white rounded-full w-[450px] h-[450px] z-10"
                              style={{ transformOrigin: "bottom right" }}
                              variants={{
                                hidden: {
                                  scale: 0.5,
                                  opacity: 0,
                                  x: "0%",
                                  y: "0%",
                                },
                                visible: {
                                  scale: 1,
                                  opacity: 1,
                                  x: "0%",
                                  y: "0%",
                                },
                              }}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: 0.3,
                              }}
                            />
                            <img
                              src="assets/pexels-rdne-8123861.jpg"
                              alt="Testimonial"
                              className="w-full h-auto object-cover rounded-r-lg"
                            />
                            <div className="absolute z-30 cursor-pointer top-[40%] left-[50%] w-9 h-9 bg-yellow-400 rounded-full flex justify-center items-center">
                              <Play size={20} />
                            </div>
                          </div>
                        </div>
                        <Fade delay={200}>
                          <div className="bg-[#2C106A] text-white w-[68.5%] grid grid-cols-2 gap-4 p-4 rounded-b-xl">
                            <div className="flex gap-2">
                              <h3 className="text-3xl font-bold text-yellow-400">
                                2m
                              </h3>
                              <p className="text-xs">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <h3 className="text-3xl font-bold text-yellow-400">
                                80%
                              </h3>
                              <p className="text-xs">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                              </p>
                            </div>
                          </div>
                        </Fade>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#A7B5FE]" />
            <CarouselNext className="bg-[#A7B5FE]" />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CarouselSection;
