"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; 

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-600">
            Get in Touch with Motorspace 🚗
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Contact us through the details below. We're here to help!
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6 lg:p-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-gray-700">Contact Details</h3>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <span className="text-red-600 text-4xl">📞</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-700 text-sm">
                  <Link href="tel:+254716884011" className="hover:underline">
                    +254 716 884 011
                  </Link>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              
              <Link
                    href="https://wa.me/254716884011"
                    target="_blank"
                    className="hover:underline flex items-center"
                  >
                    <FaWhatsapp className="text-green-600 text-4xl" />
                  </Link>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  WhatsApp
                </h4>
                <p className="text-gray-700 text-sm">
                  <Link
                    href="https://wa.me/254716884011"
                    target="_blank"
                    className="hover:underline flex items-center"
                  >
                    Chat with us on WhatsApp
                  </Link>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <span className="text-red-600 text-4xl">📍</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Location
                </h4>
                <p className="text-gray-700 text-sm">
                  Kiambu Road
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <span className="text-red-600 text-4xl">✉️</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-700 text-sm">
                  <Link
                    href="mailto:info.motorspace@gmail.com"
                    className="hover:underline"
                  >
                    info.motorspace@gmail.com
                  </Link>
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-4">
              <span className="text-red-600 text-4xl">🌐</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Website</h4>
                <p className="text-gray-700 text-sm">
                  <Link
                    href="https://motorspace.vercel.app"
                    target="_blank"
                    className="hover:underline"
                  >
                    motorspace.vercel.app
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Social Media */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-gray-700">
              Follow Us on Social Media
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center justify-center text-center text-blue-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm"
              >
                Facebook
              </Link>

              {/* Twitter */}
              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex items-center justify-center text-center text-blue-400 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm"
              >
                Twitter
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center justify-center text-center text-pink-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
