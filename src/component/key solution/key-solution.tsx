import React from "react";
import {
  Ambulance,
  Box,
  CircleChevronRight,
  EarthLock,
  Lightbulb,
  Plus,
  SquareRadical,
  X,
} from "lucide-react";
import { motion } from "framer-motion"; // Import motion for animations

function KeySolution() {
  const cardData = [
    {
      id: 1,
      heading: "IoT",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <Box className="group-hover:text-transparent" />,
    },
    {
      id: 2,
      heading: "Operators",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <EarthLock className="group-hover:text-transparent" />,
    },
    {
      id: 3,
      heading: "Enterprise Networks",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <SquareRadical className="group-hover:text-transparent" />,
    },
    {
      id: 4,
      heading: "Automotive",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <Lightbulb className="group-hover:text-transparent" />,
    },
    {
      id: 5,
      heading: "Healthcare",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <Ambulance className="group-hover:text-transparent" />,
    },
    {
      id: 6,
      heading: "Extended Reality (AR/VR/XR)",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consectetur assumenda maiores quas sapiente explicabo!",
      icon: <Box className="group-hover:text-transparent" />,
    },
  ];

  return (
    <>
      <div className="w-[90%] mx-auto my-10 text-sm">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2c1262]">
            H2 Key Solutions
          </h2>
          <p className="text-gray-500 mt-4 max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr,
            sed diam dolor nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
            lorem ips sadipscing.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-[#2c1262] text-white px-6 py-2 rounded-full focus:outline-none">
            By Industry
          </button>
          <button className="bg-[#d8d6ff] text-[#2c1262] px-6 py-2 rounded-full focus:outline-none">
            By Technology
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white p-6 rounded-lg border group-hover:shadow-md group-hover:border-0 relative group overflow-hidden
             cursor-pointer hover:bg-[#2c1262] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover="hover"
            >
              {/* Icon */}
              <motion.div
                className="w-9 h-9 bg-yellow-400 rounded-full flex justify-center items-center group-hover:bg-transparent"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>

              {/* Heading and Description */}
              <motion.div
                className="mt-2"
                variants={{
                  hover: { y: -20 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-lg font-bold text-[#2c1262] group-hover:text-white">
                  {card.heading}
                </h3>
                <p className="text-gray-500 mt-2 text-xs group-hover:text-white">
                  {card.description}
                </p>
              </motion.div>

              {/* Learn More Button (Appears on Hover) */}
              <motion.div
                className="mt-2 flex gap-2 items-center space-x-2 opacity-0 group-hover:opacity-100 group-hover:text-white"
                variants={{
                  hover: { y: -20 },
                }}
                transition={{ duration: 0.8 }}
              >
                Learn More
                <CircleChevronRight className="text-yellow-400" size={20} />
              </motion.div>

              <div
                className={`absolute bottom-4 right-4 w-6 h-6 rounded-full flex justify-center items-center 
                ${
                  card.heading === "Operators" ? "bg-red-300" : "bg-purple-400"
                }`}
              >
                {card.heading === "Operators" ? (
                  <X size={20} />
                ) : (
                  <Plus className="text-white" size={20} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-[90%] mx-auto my-[10rem] text-sm">
        <div className="flex flex-col sm:flex-row items-start mb-8">
          <h3 className="text-2xl font-bold text-[#2c1262] w-full sm:w-[30%] mb-4 sm:mb-0">
            Wi-Fi Alliance Mission
          </h3>
          <p className="text-gray-600 w-full sm:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            laoreet lacinia nisi a sagittis. Aliquam erat volutpat. Nullam eros
            nunc, placerat et rutrum non, suscipit ut mauris. Vivamus vulputate
            leo nec est vehicula, vitae auctor ligula tempor. Integer suscipit
            ultricies mi vel dapibus.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start">
          <h3 className="text-2xl font-bold text-[#2c1262] w-full sm:w-[30%] mb-4 sm:mb-0">
            Our Vision
          </h3>
          <p className="text-gray-600 w-full sm:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            laoreet lacinia nisi a sagittis. Aliquam erat volutpat. Nullam eros
            nunc, placerat et rutrum non, suscipit ut mauris. Vivamus vulputate
            leo nec est vehicula, vitae auctor ligula tempor. Integer suscipit
            ultricies mi vel dapibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default KeySolution;
