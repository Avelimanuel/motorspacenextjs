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
  "Pre collision system",
  "Turbo charged",
];

const AddVehicleForm = () => {
  return (
    <form
      action={addVehicle}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-3xl text-center font-semibold mb-6">Add Vehicle</h2>

      {/* Make, Model, Year */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="make" className="block text-gray-700 font-bold mb-2">
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. Toyota"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="model" className="block text-gray-700 font-bold mb-2">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. Corolla"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="yearOfManufacture"
            className="block text-gray-700 font-bold mb-2"
          >
            Year of Manufacture
          </label>
          <input
            type="number"
            id="yearOfManufacture"
            name="yearOfManufacture"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. 2020"
            required
          />
        </div>
      </div>

      {/* Mileage, Engine Size, Passenger Capacity */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="mileage"
            className="block text-gray-700 font-bold mb-2"
          >
            Mileage
          </label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. 50000"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="engineSize"
            className="block text-gray-700 font-bold mb-2"
          >
            Engine Size
          </label>
          <input
            type="text"
            id="engineSize"
            name="engineSize"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. 1.5 cc"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="passengerCapacity"
            className="block text-gray-700 font-bold mb-2"
          >
            Passenger Capacity
          </label>
          <input
            type="number"
            id="passengerCapacity"
            name="passengerCapacity"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. 5"
            required
          />
        </div>
      </div>

      {/* Transmission Type, Fuel Type, Color */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="transmissionType"
            className="block text-gray-700 font-bold mb-2"
          >
            Transmission Type
          </label>
          <select
            id="transmissionType"
            name="transmissionType"
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="fuelType"
            className="block text-gray-700 font-bold mb-2"
          >
            Fuel Type
          </label>
          <select
            id="fuelType"
            name="fuelType"
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="border rounded w-full py-2 px-3"
            placeholder="e.g. Silver"
            required
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-4">
        <label
          htmlFor="features"
          className="block text-gray-700 font-bold mb-2"
        >
          Features
        </label>
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

      {/* Is Featured */}
      <div className="mb-4">
        <label
          htmlFor="isFeatured"
          className="block text-gray-700 font-bold mb-2"
        >
          Mark as Featured?
        </label>
        <input type="checkbox" id="isFeatured" name="isFeatured" />
      </div>

      {/* Images */}
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          Upload Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3"
          multiple
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add a description of the vehicle"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add Vehicle
        </button>
      </div>
    </form>
  );
};

export default AddVehicleForm;
