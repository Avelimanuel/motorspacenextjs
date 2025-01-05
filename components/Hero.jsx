import VehicleSearch from "./VehicleSearchForm";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-white">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl leading-tight mb-6">
            Discover & Drive Your Dream Car
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Unleash Your Style, Drive the Future. <br />
            Contact us now on{" "}
            <span className="font-semibold">0716 884 011</span>.
          </p>

          <VehicleSearch />
        </div>
      </section>
    </>
  );
};

export default Hero;
