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

          <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg bg-opacity-70">
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter car name"
                className="w-full px-5 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
              />
            </div>
            <div className="w-full md:w-2/5 md:pl-2 mb-4 md:mb-0">
              <label htmlFor="vehicle-type" className="sr-only">
                Vehicle Type
              </label>
              <select
                id="vehicle-type"
                className="w-full px-5 py-4 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
              >
                <option value="All">All Vehicles</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Truck">Truck</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Van">Van</option>
                <option value="Electric">Electric</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
