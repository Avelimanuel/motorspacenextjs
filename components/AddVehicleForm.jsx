"use client";
import { useState } from "react";
import addVehicle from "@/app/actions/addvehicle";

const predefinedFeatures = [
  "Heated Seats",
  "Blindspot Monitoring",
  "Reverse Camera",
  "Parking Sensors",
  "Leather Seats",
  "Heated Steering",
  "Steering Controls",
  "Cruise Control",
  "Lane Assist",
  "Pre-collision System",
  "Turbo Charged",
  "Keyless entry",
  "Fog lights",
  "Sun roof",
  "Non hybrid",
  "Hybrid",
  "AWD",
  "Four wheel drive",
  "Headlight washers",
  "i-stop"
];

const AddVehicleForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      await addVehicle(formData); // Call the backend function

      event.target.reset(); // Reset the form after success
    } catch (error) {
      console.error("Error adding vehicle:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg"
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Add New Vehicle
      </h1>

      {/* Make, Model, Year */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label
            htmlFor="make"
            className="block text-gray-700 font-medium mb-2"
          >
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. Toyota"
            required
          />
        </div>
        <div>
          <label
            htmlFor="model"
            className="block text-gray-700 font-medium mb-2"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. Corolla"
            required
          />
        </div>
        <div>
          <label
            htmlFor="yearOfManufacture"
            className="block text-gray-700 font-medium mb-2"
          >
            Year
          </label>
          <input
            type="number"
            id="yearOfManufacture"
            name="yearOfManufacture"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. 2020"
            required
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label
            htmlFor="mileage"
            className="block text-gray-700 font-medium mb-2"
          >
            Mileage (km)
          </label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. 50000"
            required
          />
        </div>
        <div>
          <label
            htmlFor="engineSize"
            className="block text-gray-700 font-medium mb-2"
          >
            Engine Size (cc)
          </label>
          <input
            type="text"
            id="engineSize"
            name="engineSize"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. 1500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="passengerCapacity"
            className="block text-gray-700 font-medium mb-2"
          >
            Passenger Capacity
          </label>
          <input
            type="number"
            id="passengerCapacity"
            name="passengerCapacity"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. 5"
            required
          />
        </div>
      </div>

      {/* Transmission Type, Fuel Type, Color */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label
            htmlFor="transmissionType"
            className="block text-gray-700 font-medium mb-2"
          >
            Transmission
          </label>
          <select
            id="transmissionType"
            name="transmissionType"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="fuelType"
            className="block text-gray-700 font-medium mb-2"
          >
            Fuel Type
          </label>
          <select
            id="fuelType"
            name="fuelType"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="color"
            className="block text-gray-700 font-medium mb-2"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. Silver"
            required
          />
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Features</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {predefinedFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="features"
                value={feature}
                className="form-checkbox"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
          Price (kes)
        </label>
        <input
          type="text"
          id="price"
          name="price"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="e.g. 25000"
          required
        />
      </div>

      {/* Images */}
      <div className="mb-6">
        <label
          htmlFor="images"
          className="block text-gray-700 font-medium mb-2"
        >
          Upload Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          multiple
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Write a brief description of the vehicle"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className={`w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add Vehicle"}
        </button>
      </div>
    </form>
  );
};

export default AddVehicleForm;
