"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VehicleSearch = () => {
  const [vehicleName, setVehicleName] = useState(""); // Corrected casing for consistency
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (vehicleName.trim() === "") {
      router.push("/vehicles"); // Redirect to /vehicles if input is empty
    } else {
      const query = `?vehicleName=${vehicleName.trim()}`; // Correct query parameter name
      router.push(`/vehicles/search-results${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg bg-opacity-70"
    >
      <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="vehicleName" className="sr-only">
          Vehicle Name
        </label>
        <input
          type="text"
          id="vehicleName"
          placeholder="Enter car name"
          className="w-full px-5 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)} // Updated casing for consistency
        />
      </div>

      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
};

export default VehicleSearch;
