import { motion } from "framer-motion";
import { Button } from "../ui/button";
import React from "react";
import { CircleArrowRight } from "lucide-react";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="relative bg-[#111133] flex flex-col justify-center items-center h-[650px] overflow-hidden">
        {/* Left-Top Circle */}
        <motion.div
          className="absolute -top-[7.5rem] -left-[7.5rem] border-2 border-white rounded-full w-[750px] h-[750px] z-20"
          variants={{
            hidden: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
            visible: { scale: 1, opacity: 1, x: "0%", y: "0%" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Right-Top Circle */}
        <motion.div
          className="absolute top-32 right-60 rounded-full"
          variants={{
            hidden: {
              scale: 0.005,
              width: 3,
              height: 3,
              opacity: 0,
              x: 0,
              y: 0,
            },
            visible: {
              width: 1100,
              height: 1100,
              scale: 1,
              opacity: 1,
              x: "40%",
              y: "-65%",
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
          style={{
            transformOrigin: "top right",
            backgroundImage: 'url("/assets/iStock-1305282522.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Left-Bottom Circle */}
        <motion.div
          className="absolute -bottom-[24rem] -left-[22rem] translate-x-[-50%] translate-y-[50%] bg-[#2c1262] rounded-full w-[700px] h-[700px] z-10" // Lower z-index
          variants={{
            hidden: { scale: 0, opacity: 0, x: "-100%", y: "100%" },
            visible: { scale: 1, opacity: 1, x: "0%", y: "0%" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Text Content */}
        <motion.div
          className=" text-white mt-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          style={{ width: "90%" }}
        >
          <div className="grid grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-[2.5rem] leading-[2.8rem] font-bold poppins-medium ">
                Wi-Fi Alliance - <br />
                connecting everyone <br />
                and everything, <br />
                everywhere.
              </h1>
              <p>
                Discover how WI-FI and unlicensed spectrum drive <br /> global
                connectivity, foster innovation and generate <br /> immense
                economic impact
              </p>
            </div>
            <div className="absolute bottom-4 right-14 z-20 text-white">
              <div className="flex gap-8">
                <div className="space-y-3 border-r pr-4">
                  <p className="text-lg">
                    Lack of spectrum jeoparadizes <br /> Europe's gigabit
                    connectivity goals
                  </p>
                  <div className="text-xs flex items-center gap-3">
                    Read the latest edition{" "}
                    <CircleArrowRight
                      size={20}
                      className="text-yellow-400 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xl">
                    Experience the 25th <br /> annivarsary of WI-FI
                  </p>
                  <div className="text-xs flex items-center gap-3">
                    learn why 6 Ghz is crucial{" "}
                    <CircleArrowRight
                      size={20}
                      className="text-yellow-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="mt-4 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
            Our Story
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Welcome;
