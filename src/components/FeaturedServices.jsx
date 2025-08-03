import { FaPills, FaAmbulance, FaUserMd, FaStethoscope } from "react-icons/fa";

export default function MedicalPage() {
  const services = [
    {
      icon: <FaPills className="text-5xl text-black" />,
      title: "Medical Treatment",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueque",
    },
    {
      icon: <FaAmbulance className="text-5xl text-black" />,
      title: "Emergency Help",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueque",
    },
    {
      icon: <FaUserMd className="text-5xl text-black" />,
      title: "Qualified Doctors",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueque",
    },
    {
      icon: <FaStethoscope className="text-5xl text-black" />,
      title: "Medical Professionals",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueque",
    },
  ];

  const doctors = [
    {
      img: "doctor1.jpg",
      name: "Marc Parcival",
      title: "Professor",
    },
    {
      img: "doctor2.jpg",
      name: "Marc Parcival",
      title: "Professor",
    },
    {
      img: "doctor3.jpg",
      name: "Marc Parcival",
      title: "Professor",
    },
    {
      img: "doctor4.jpg",
      name: "Marc Parcival",
      title: "Professor",
    },
  ];

  return (
    <div className="bg-white">
      {/* Featured Services */}
      <section className="py-12">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Featured Services
            </h2>
            <p className="text-gray-500 mt-2">
              We cover a big variety of medical services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center hover:shadow-xl transition duration-300"
              >
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {doctor.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
