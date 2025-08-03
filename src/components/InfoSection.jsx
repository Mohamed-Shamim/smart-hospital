import React from "react";

const InfoSection = () => {
  return (
    <div className="container">
      {/* Top Blue Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12 bg-white">
        {[
          {
            title: "Clinic News",
            text: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed",
            button: "Read More",
          },
          {
            title: "Top Doctors",
            text: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed",
            button: "Read More",
          },
          {
            title: "24 Hours Service",
            text: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed",
            button: "Read More",
          },
          {
            title: "Opening Hours",
            text: `Monday - Friday 8.00 - 17.00\nSaturday 9.30 - 17.30\nSunday 9.30 - 15.00`,
            button: null,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-6 rounded-md shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <div className="w-10 border-b-2 border-white mb-4"></div>
            <p className="text-sm whitespace-pre-line mb-4">{card.text}</p>
            {card.button && (
              <button className="border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-blue-500 transition">
                {card.button}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* About & Vision Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 py-16 bg-white gap-10">
        {/* Text Content */}
        <div className="flex-1 space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">About Us</h3>
            <p className="text-sm text-gray-600 mt-1">
              What we are and our history
            </p>
            <p className="text-gray-700 mt-4 border-b pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Vision & Mission
            </h3>
            <p className="text-sm text-gray-600 mt-1">Our goal and thoughts</p>
            <p className="text-gray-700 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/aboutDr.jpg"
            alt="Doctor"
            className="max-w-xs w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
