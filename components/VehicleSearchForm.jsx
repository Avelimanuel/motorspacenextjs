"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const VehicleSearch = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (vehicleName.trim() === "") {
        router.push("/vehicles");
      } else {
        const query = `?vehicleName=${encodeURIComponent(vehicleName.trim())}`;
        router.push(`/vehicles/search-results${query}`);
      }
      // Simulate a delay (e.g., while waiting for results)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Searching for:", vehicleName);
    } catch (error) {
      console.error(`Search failed: ${error}`);
    } finally {
      setLoading(false);
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
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out ${
          loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        }`}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default VehicleSearch;
