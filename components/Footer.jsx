const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Motor Space</h2>
            <p>Your Premier Car Dealership</p>
          </div>

          {/* Navigation Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="/financing-options" className="hover:underline">
                  Financing Options
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/financing-assistance"
                  className="hover:underline"
                >
                  Financing Assistance
                </a>
              </li>
              <li>
                <a
                  href="/services/trade-in-evaluations"
                  className="hover:underline"
                >
                  Trade-In Evaluations
                </a>
              </li>
              <li>
                <a href="/services/car-maintenance" className="hover:underline">
                  Car Maintenance & Service
                </a>
              </li>
              <li>
                <a href="/services/test-drive" className="hover:underline">
                  Test Drive Scheduling
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-500 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Reach Out</h3>
            <p>
              <a href="tel:7205888452" className="hover:underline">
                0716 884 011
              </a>
            </p>
            <p>
              <a href="mailto:info@motorspace.com" className="hover:underline">
                info.motorspace@gmail.com
              </a>
            </p>
            <p>Nairobi, Kenya</p>
          </div>

          {/* CopyRight */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} Motor Space. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
