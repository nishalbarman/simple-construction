import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import AccordionItem from "./components/ui/accordion";

function App() {
  const steps = [
    {
      id: 1,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-2.webp",
      label: "Raise a<br/>Request",
      description:
        "Raise a service request or call us at 7505205205. Our technical expert will get in touch with you.",
    },
    {
      id: 2,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-3.webp",
      label: "Meet our<br/>Expert",
      description:
        "Our experts visit you to take all the requirements and submit exhaustive specifications.",
    },
    {
      id: 3,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-4.webp",
      label: "Book with<br/>us",
      description:
        "Good to go. You pay 5% of the estimated project cost as Booking Amount.",
    },
    {
      id: 4,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-5.webp",
      label: "Receive<br/>Plans",
      description:
        "Our Professional will provide exhaustive drawings and designs till the customer is fully satisfied. Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.",
    },
    {
      id: 5,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-6.webp",
      label: "Track &<br/>Transact",
      description:
        "To ensure absolute trust, Brick&Bolt provides an escrow model where you transfer the amount for stage of the project. You can track the project through our customer application.",
    },
    {
      id: 6,
      img: "https://www.bricknbolt.com/c/img/webp/how-it-works-7.webp",
      label: "Settle<br/>in",
      description:
        "We make sure you are well settled in your new home. Our journey together doesn't end here. We provide 5 years of warranty.",
    },
  ];

  const [selectedStep, setSelectedStep] = useState(0);

  const interValId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    interValId.current = setInterval(() => {
      clearInterval(interValId.current);
      setSelectedStep((prev) => {
        if (prev === steps.length - 1) return 0;
        return prev + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interValId.current);
    };
  }, [selectedStep]);

  const fadeVariant = useMemo(
    () => ({
      enter: { opacity: 0 },
      center: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    }),
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "1. What is Brick & Bolt",
      content:
        "Brick & Bolt is a tech-enabled construction company simplifying home construction. It uses technology-based solutions to deliver high quality homes on time & within budget",
    },
    {
      title: "2. Is Brick & Bolt an authentic company?",
      content:
        "Yes, Brick & Bolt is an authentic company registered as Pluckwalk Technologies Pvt. Ltd. It currently employs over 300 people and has been recognized for its achievements in Forbes India, The Economic Times, etc.",
    },
    {
      title: "3. Is it more expensive than local contractor?",
      content:
        "No, Brick & Bolt is not more expensive than a local contractor. It offers packages at par with market rates and ensures 0 cost overruns during the construction project.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center bg-[rgb(255,246,244)] p-4 w-full  py-11">
        <h1 className="text-2xl font-bold mb-8 text-[rgb(31,7,86)]">
          We serve our customers better than others
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 underline text-center">
              Brick & Bolt
            </h2>
            <ul className="list-none space-y-2 flex flex-col items-start text-[#1F0756]">
              <li>✅ ESCROW Facility for 100% Money Safety</li>
              <li>✅ Top Quality Assurance with QASCON</li>
              <li>✅ Monitor The Progress From Home using App</li>
              <li>✅ ZERO Cost Overruns</li>
              <li>✅ Guaranteed On Time Delivery</li>
            </ul>
          </div>
          <div className="flex flex-1 border border-dashed border-[#F05A29] h-[200px]"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 underline text-center text-[#1F0756]">
              Contractors
            </h2>
            <ul className="list-none space-y-2 flex flex-col items-start">
              <li>❌ No Safety of Money & High Risk</li>
              <li>❌ Improper quality checks</li>
              <li>❌ No App. Have to go to construction site</li>
              <li>❌ Costs keep increasing</li>
              <li>❌ No guarantee on timely delivery</li>
            </ul>
          </div>
        </div>

        <h2 className="text-center text-xl text-[#1F065A]">
          Experience Tech-Enabled Construction with us
        </h2>
        <button className="mt-7 bg-orange-600 text-white font-bold py-2 px-4 rounded  hover:bg-orange-700 duration-200 h-12">
          Start Your Construction
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-white py-12">
        <header className="text-center mb-8">
          <p className="text-[#1F0756]">India’s Only Company with</p>
          <p className="text-orange-600 font-bold ">
            REGISTERED QUALITY ASSESSMENT
          </p>
          <p className="text-[#1F0756]"> in home construction</p>
          <h1 className="text-3xl font-bold text-red-600 mt-4">QASCON®</h1>
          <div className="w-full border-gray-300 border-b mt-2"></div>
          <h2 className="text-lg font-medium mt-2">
            Quality Assessment System for Construction
          </h2>
        </header>

        <section className="text-center mb-2">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://www.bricknbolt.com/c/img/BnBTrademark.webp"
              alt="Trademark"
              className="w-40 h-40 mr-1"
            />
            <div className="">
              <h2 className="text-4xl font-bold text-red-600 mb-2">470+</h2>
              <p className="text-xl text-[rgb(31,7,86)]">Quality Checks</p>
              <p className="text-[rgb(31,7,86)] font- text-sm">
                (on each floor for construction)
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-1">
          <p className="text-gray-700 mb-4">
            Experience Tech-Enabled Construction with us
          </p>
          <button className="mt-5 bg-orange-600 text-white font-bold py-2 px-4 rounded  hover:bg-orange-700 duration-200 h-12">
            Start Your Construction
          </button>
        </section>
      </div>
      (
      <div className="flex flex-col items-center justify-center bg-[rgb(255,246,244)] p-4 w-full  py-11">
        <h2 className="text-3xl text-[rgb(52,6,86)] font-bold mb-3">
          How it works
        </h2>
        <p className="w-[400px] text-center text-[rgb(52,6,86)] ">
          Our house construction steps are simple and easy to understand: Plan -
          Build - Track - Settle in.
        </p>
        <div className="flex justify-between my-9 max-md:zoom-out container">
          {steps.map((step, index, array) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <span
                  onClick={() => {
                    setSelectedStep(index);
                  }}
                  className={`font-bold w-2 h-2 p-5 flex items-center justify-center rounded-full cursor-pointer border-black border ${
                    selectedStep >= index
                      ? "text-white bg-black"
                      : "text-black bg-transparent"
                  }`}>
                  {step.id}
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: step.label }}
                  className={`text-sm whitespace-pre leading-[18px] mt-4 font-semibold  ${
                    selectedStep >= index ? "text-black" : "text-gray-500 "
                  }  `}></span>
              </div>
              <div
                className={`w-[100px] max-md:w-[25px] border border-gray-600 border-dashed h-[1px] self-center top-0 ${
                  array.length - 1 === index && "hidden"
                }`}></div>
            </React.Fragment>
          ))}
        </div>

        <div className="w-fit h-fit mt-1 mb-7">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[selectedStep].id}
              src={steps[selectedStep].img}
              alt={steps[selectedStep].label.replace("<br/>", " ")}
              className="w-74 h-74 aspect-1/1 mix-blend-multiply max-md:w-[100%] max-md:max-w-[100%]"
              variants={fadeVariant}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        <div className="container bg-white p-8 rounded-lg shadow-md flex overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[selectedStep].id}
              variants={fadeVariant}
              initial="enter"
              animate="center"
              exit="exit">
              <h3 className="text-xl font-bold mb-4">
                {selectedStep + 1}.{" "}
                {steps[selectedStep].label.replace("<br/>", " ")}
              </h3>
              <p className="text-gray-700 mb-6 indent-5">
                {steps[selectedStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="container mt-5 bg-orange-600 text-white font-bold py-2 px-4 rounded  hover:bg-orange-700 duration-200 h-12">
          Start Your Construction
        </button>
      </div>
      );
      <div className="flex flex-col items-center justify-center bg-white p-4 w-full pt-8 pb-11">
        <h2 className="text-3xl text-[rgb(52,6,86)] font-bold mb-3">FAQ</h2>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
