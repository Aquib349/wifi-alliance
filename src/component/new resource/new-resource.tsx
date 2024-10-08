import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { CircleArrowRight, CircleChevronRight } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";

const NewResource: React.FC = () => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing once it's in view
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
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
    <div className="new-resource-component pb-8" ref={elementRef}>
      <div className="main text-sm flex gap-8 mt-[6rem] m-auto w-[90%]">
        {/* Left side component */}
        <div className="">
          <Fade delay={200}>
            <div className="heading-button flex items-center gap-8">
              <h1 className="text-2xl poppins-semibold">
                H2 Featured News and Resources
              </h1>
              <p className="flex items-center gap-2 text-[#2C106A]">
                View all news{" "}
                <IoIosArrowForward className="text-[#2c1262] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
              </p>
            </div>
          </Fade>

          {/* Image with Framer Motion Animation */}
          <div className="image mt-4 relative overflow-hidden">
            <motion.div
              className="absolute -top-[9rem] -left-[9rem] border-2 border-white rounded-full w-[350px] h-[350px] z-20"
              variants={{
                hidden: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
                visible: { scale: 1, opacity: 1, x: "0%", y: "0%" },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />

            {/* Image Slide from Left to Right with Transparency */}
            <motion.img
              src="assets/iStock-1166494652.jpg"
              alt="new-resource-img"
              className="h-[300px] w-[600px] rounded-md object-cover"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />

            {/* Second Animated Circle */}
            <motion.div
              className="absolute -right-52 -bottom-52 border-[3px] border-[#2C106A] rounded-full w-[515px] h-[515px]"
              variants={{
                hidden: { scale: 0.005, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              style={{
                transformOrigin: "bottom right",
              }}
            />
          </div>

          {/* Descriptions */}
          <Fade delay={200}>
            <div className="descriptions mt-4">
              <h1 className="text-xl poppins-semibold text-[#2C106A]">
                H3 Resource Title Lorem Ipsum
              </h1>
              <p className="text-xs text-[#1F1F1F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                sed.
              </p>
            </div>
          </Fade>
        </div>

        {/* Right side component */}
        <Fade delay={200}>
          <div className="mt-12">
            <h4 className="text-lg font-semibold text-[#2C106A] mb-4">
              Other News
            </h4>
            <div className="border-t border-gray-300 pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Press Release</p>
                <a href="#" className="text-sm text-[#2C106A] hover:underline font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </a>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Blog</p>
                <a href="#" className="text-sm text-[#2C106A] hover:underline font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </a>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Press Release</p>
                <a href="#" className="text-sm text-[#2C106A] hover:underline font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </a>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Blog</p>
                <a href="#" className="text-sm text-[#2C106A] hover:underline font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default NewResource;
