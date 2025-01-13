import VehicleSearch from "./VehicleSearchForm";

const Hero = () => {
  return (
    <>
      <section className="relative bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNhciUyMGtleXxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-900 bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-white py-20">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-md">
            Discover & Drive Your Dream Car
          </h1>
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm">
            Unleash Your Style, Drive the Future.
            <br />
            Contact us now on{" "}
            <span className="font-semibold text-yellow-400 hover:underline transition duration-300">
              0716 884 011
            </span>.
          </p>
          {/* Vehicle Search Form */}
          <div className="w-full max-w-2xl">
            <VehicleSearch />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
