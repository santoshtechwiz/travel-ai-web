import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    x: -1000,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

function Card({ title, text, imageUrl, isAlternate }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className="mt-10"
      viewport={{ amount: 1 }}
    >
      <motion.div
        className={`flex bg-white flex-col lg:flex-row ${
          isAlternate ? "lg:flex-row-reverse" : ""
        }`}
        variants={cardVariants}
      >
        <div className="w-20 h-20 object-cover rounded-full mx-auto mb-4 lg:mb-0 lg:mr-4">
          <img className="w-full h-full object-cover rounded-full" src={imageUrl} alt={title} />
        </div>
        <div className="rounded overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{text}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const servicesData = [
  {
    title: "AI-Generated Solutions",
    description:
      "Harness the power of artificial intelligence for innovative solutions.",
    imageUrl: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Travel Planning Made Easy",
    description:
      "Plan your dream vacations with our hassle-free travel services.",
    imageUrl: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Save Time and Effort",
    description:
      "Efficient solutions that save you time and effort in your daily tasks.",
    imageUrl: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Personalized Recommendations",
    description: "Receive personalized recommendations tailored just for you.",
    imageUrl: "https://picsum.photos/800/600?random=4",
  },
];

export default function Services() {
  return servicesData.map((service, index) => (
    <Card
      key={index}
      title={service.title}
      text={service.description}
      imageUrl={service.imageUrl}
      isAlternate={index % 2 === 1}
    />
  ));
}
