import React, { useState } from "react";
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
    subject: "",
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
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center text-[#0F5132] justify-center p-4 md:pt-2 font-poppins"
    >
      <div className="container xl:max-w-6xl lg:max-w-5xl flex flex-col lg:flex-row justify-center lg:items-center w-full">
        <div className="flex flex-col justify-between mb-8 md:mb-0 w-full lg:w-[50%] lg:mb-[85px] xl:mr-9">
          <h1 className="text-[#1D2E28] text-4xl md:text-6xl lg:text-6xl font-bold mb-6 xl:mb-8 text-center lg:text-left">
            CONTACT US
          </h1>
          <div className="space-y-7 w-full max-w-sm mx-auto lg:mx-0 lg:text-[16px]">
            <div className="flex items-center justify-center lg:justify-start">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+918910398827">+91 89103 98827</a>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaEnvelope className="mr-3" />
              <a href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a>
            </div>
            <div className="flex items-start justify-center lg:justify-start">
              <FaMapMarkerAlt className="mr-2.5" />
              <span>
                Jadavpur University
                <br />
                188, Raja S.C. Mallick Rd, Jadavpur
                <br />
                Kolkata-700032
              </span>
            </div>
          </div>
          <div className="flex space-x-6 mt-12 mb-4 justify-center lg:justify-start">
            <FaTwitter className="hover:text-gray-500 text-2xl" />
            <FaInstagram className="hover:text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="w-full lg:w-[55%] bg-[#c2c7bf] py-5 px-7 mb-12 rounded-xl">
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
