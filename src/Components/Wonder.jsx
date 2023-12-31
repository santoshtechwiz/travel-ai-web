import React from "react";
import China from "../assets/china.jpg";
import Petra from "../assets/peta.jpg";
import Brazil from "../assets/brazil.jpg";
import Peru from "../assets/Peru.jpg";
import Chicen from "../assets/chicen.jpg";
import Rome from "../assets/rome.jpg";
import Taj from "../assets/taj.jpg";
const SevenWondersComponent = () => {
  const wonders = [
    {
      name: "Great Wall of China",
      description:
        "A series of fortifications made of stone, brick, tamped earth, and other materials, generally built along an east-to-west line across the northern borders of China.",
      imageUrl: China,
      wikipediaLink: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    },
    {
      name: "Petra, Jordan",
      description:
        "A historical and archaeological city famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone out of which it is carved.",
      imageUrl: Petra,
      wikipediaLink: "https://en.wikipedia.org/wiki/Petra",
    },
    {
      name: "Christ the Redeemer, Brazil",
      description:
        "An Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.",
      imageUrl: Brazil,
      wikipediaLink:
        "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
    },
    {
      name: "Machu Picchu, Peru",
      description:
        "An Incan citadel set high in the Andes Mountains in Peru, renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.",
      imageUrl: Peru,
      wikipediaLink: "https://en.wikipedia.org/wiki/Machu_Picchu",
    },
    {
      name: "Chichen Itza, Mexico",
      description:
        "A large pre-Columbian archaeological site built by the Maya civilization. The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.",
        imageUrl: Chicen,
      wikipediaLink: "https://en.wikipedia.org/wiki/Chichen_Itza",
    },
    {
      name: "Roman Colosseum, Italy",
      description:
        "An oval amphitheatre in the centre of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built and is considered one of the greatest works of architecture and engineering.",
        imageUrl:Rome,
      wikipediaLink: "https://en.wikipedia.org/wiki/Colosseum",
    },
    {
      name: "Taj Mahal, India",
      description:
        "An ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
        imageUrl: Taj,
      wikipediaLink: "https://en.wikipedia.org/wiki/Taj_Mahal",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
      Explore the Wonders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {wonders.map((wonder) => (
          <div
            key={wonder.name}
            className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={wonder.imageUrl}
              alt={wonder.name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{wonder.name}</h2>
              <p className="text-gray-700 mb-4">{wonder.description}</p>
              <a
                href={wonder.wikipediaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More on Wikipedia
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SevenWondersComponent;
