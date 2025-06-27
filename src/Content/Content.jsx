import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section id="Contact" className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">📞 Contact Information</h2>

        <div className="space-y-6 text-lg text-gray-700">
          <div className="flex items-center justify-center gap-3">
            <MdEmail className="text-xl text-blue-600" />
            <a href="mailto:nurhassanrabbi150@email.com" className="hover:underline">
              nurhassanrabbi@email.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <MdPhone className="text-xl text-green-600" />
            <a href="tel:+8801234567890" className="hover:underline">
              +880 185 545 249 4
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp className="text-xl text-green-500" />
            <a
              href="https://wa.me/8801855452494"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
