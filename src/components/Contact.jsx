import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section
      id="contact"
      className="my-20 flex items-center text-[#0F5132] justify-center p-7 lg:p-2  font-poppins"
    >
      <div className=" xl:max-w-6xl lg:max-w-5xl flex flex-col md:flex-row justify-center lg:items-center w-full">
        <div className="flex flex-col justify-between mb-2 md:mb-0 w-full lg:w-[50%]  md:mr-9">
          <h1 className="text-[#1D2E28] text-5xl lg:text-6xl xl:text-[60px] font-bold mb-6 xl:mb-8 text-center md:text-left">
            CONTACT US
          </h1>
          <div className="space-y-7 w-full max-w-[340px] mx-auto md:mx-0 lg:text-[16px]">
            <div className="flex items-center justify-center md:justify-start mr-[10px] md:mr-0 ">
              <FaPhoneAlt className="mr-4" />
              <a href="tel:+918910398827">+91 89103 98827</a>
            </div>
            <div className="flex items-center justify-center md:justify-start ml-[40px] md:ml-0 ">
              <FaEnvelope className="mr-4" />
              <a href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a>
            </div>
            <div className="flex items-start justify-center md:justify-start ml-[92px] md:ml-0 w-[180px] md:w-auto  ">
              <FaMapMarkerAlt className="mr-4" />
              <span>
                Jadavpur University
                <br />
                188, Raja S.C. Mallick Rd, Jadavpur
                <br />
                Kolkata-700032
              </span>
            </div>
          </div>
          <div className="flex space-x-6 mt-12 mb-4  justify-center md:justify-start ">
            <FaTwitter className="hover:text-gray-500 text-[22px]" />
            <FaInstagram className="hover:text-gray-500 text-[22px]" />
          </div>
        </div>
        <div className="w-full lg:w-[55%] bg-green-100 py-5 px-7 lg:mt-[25px] rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-4 py-3 bg-transparent border-b border-gray-700 focus:outline-none placeholder:text-[#0F5132]"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-4 py-3 bg-transparent border-b border-gray-700 focus:outline-none placeholder:text-[#0F5132]"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-4 pt-3 pb-12 bg-transparent border-b border-gray-700 focus:outline-none placeholder:text-[#0F5132]"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-4 pt-3 pb-12 bg-transparent border-b border-gray-700 focus:outline-none placeholder:text-[#0F5132]"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:outline-none placeholder:text-[#0F5132]"
                required
              ></textarea>
            </div>
            <div className="text-center lg:text-right mt-1 mb-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#14452F] text-white border border-gray-700 rounded hover:bg-green-800 hover:text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
