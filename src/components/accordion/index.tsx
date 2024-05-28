import React from "react";

type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b container">
      <button
        className="w-full text-left h-19 px-4 py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}>
        <span className="font-semibold text-xl">{title}</span>
        <span
          className="transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}>
        <div className="px-4 py-2 text-lg text-gray-700 mb-2">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
