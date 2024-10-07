import { motion } from "framer-motion";
import { CircleChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Membership() {
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
    <div className="w-[90%] m-auto text-sm mb-12" ref={elementRef}>
      <div className="main grid grid-cols-2">
        <div className="relative overflow-hidden w-[500px] rounded-lg">
          <motion.div
            className="absolute -top-16 -left-[35%] border-2 border-white rounded-full w-[450px] h-[450px] z-30"
            variants={{
              hidden: { scale: 0, opacity: 0, x: "-100%" },
              visible: { scale: 1, opacity: 1, x: "0%" },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.div
            className="absolute -top-16 -left-[5rem] w-[450px] h-[450px] bg-blue-200 rounded-full curved-edge z-20"
            variants={{
              hidden: { scale: 0, opacity: 0, x: "-100%" },
              visible: { scale: 1, opacity: 1, x: "0%" },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -top-4 right-[-15rem] bg-purple-900/80 rounded-full w-[350px] h-[350px] z-20"
            variants={{
              hidden: { scale: 0, opacity: 0, x: "100%" },
              visible: { scale: 1, opacity: 1, x: "0%" },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.img
            src="assets/large-iStock-1423632920.jpg"
            alt="image"
            className="w-[500px] h-[320px] rounded-lg relative"
            initial={{ opacity: 0.2 }}
            animate={inView ? { opacity: 1 } : { opacity: 0.2 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        <div className="mt-4">
          <h3 className="text-3xl font-bold text-[#2c1262]">Membership</h3>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <ul className="mt-4 text-gray-600">
            <li className="mb-2">• Lorem ipsum dolor sit amet, consectetur</li>
            <li className="mb-2">
              • Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore aliquyam erat, sed diam voluptua.
            </li>
          </ul>
          <p className="flex items-center gap-2 mt-4">
            Learn More
            <CircleChevronRight className="text-yellow-400" size={20} />
          </p>
        </div>
      </div>

      <div className="main grid grid-cols-2 gap-8 mt-16">
        <div>
          <h3 className="text-3xl font-bold text-[#2c1262]">Certification</h3>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <ul className="mt-4 text-gray-600">
            <li className="mb-2">• Lorem ipsum dolor sit amet, consectetur</li>
            <li className="mb-2">
              • Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore aliquyam erat, sed diam voluptua.
            </li>
          </ul>
          <p className="flex items-center gap-2 mt-4 text-yellow-400">
            Learn More
            <CircleChevronRight size={20} />
          </p>
        </div>

        <div className="h-[350px] w-[550px] overflow-hidden relative rounded-lg">
          <motion.div
            className="absolute -top-4 -left-[35%] bg-purple-900/60 rounded-full w-[400px] h-[400px] z-30"
            variants={{
              hidden: { scale: 0, opacity: 0, x: "-100%" },
              visible: { scale: 1, opacity: 1, x: "0%" },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-40 -right-[6rem] border-2 border-white rounded-full w-[400px] h-[400px] z-30"
            style={{ transformOrigin: "bottom right" }}
            variants={{
              hidden: { scale: 0.5, opacity: 0, x: "0%", y: "0%" },
              visible: { scale: 1, opacity: 1, x: "0%", y: "0%" },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />

          <motion.img
            src="assets/iStock-1327072542.jpg"
            alt="Certification"
            className="rounded-lg h-[350px] w-full"
            initial={{ opacity: 0.2 }}
            animate={inView ? { opacity: 1 } : { opacity: 0.2 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Membership;
