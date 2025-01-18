import connectToDatabase from "@/config/databaseconnection";
import VehicleHeaderImage from "@/components/VehicleHeaderImage";
import LocallyUsedVehicles from "@/models/LocallyUsed";
import Link from "next/link";
import VehicleImages from "@/components/VehicleImages";
import mongoose from "mongoose";

const SingleVehiclePage = async ({ params }) => {
  const { slug } = await params;
  await connectToDatabase();

  const [make, model, _id] = slug.split("-");

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900">Invalid Vehicle ID</h1>
        <p className="text-gray-600 mt-4">
          The vehicle ID in the URL is invalid. Please check the URL and try
          again.
        </p>
        <Link
          href="/locallyused"
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold mt-6 inline-block"
        >
          Back to Vehicles
        </Link>
      </div>
    );
  }

  const single_vehicle = await LocallyUsedVehicles.findOne({ _id, make, model }).lean();

  if (!single_vehicle) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900">Vehicle Not Found</h1>
        <p className="text-gray-600 mt-4">
          The vehicle you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/vehicles"
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold mt-6 inline-block"
        >
          Back to Vehicles
        </Link>
      </div>
    );
  }

  // List of all possible features
  const possibleFeatures = [
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

  // Normalize the features from the database to avoid case mismatches
  const availableFeatures = possibleFeatures.filter((feature) =>
    single_vehicle.features.some((vehicleFeature) =>
      vehicleFeature.toLowerCase().includes(feature.toLowerCase())
    )
  );

  return (
    <>
      {/* Header Image */}
      <VehicleHeaderImage
        single_vehicle={single_vehicle}
        image={single_vehicle.images[0]}
      />
      <VehicleImages
        single_vehicle={single_vehicle}
        image={single_vehicle.images}
      />

      {/* Back Link Section */}
      <section className="bg-gray-50 py-4">
        <div className="container m-auto max-w-4xl px-6">
          <Link
            href="/vehicles"
            className="text-blue-600 hover:text-blue-800 flex items-center text-lg font-semibold"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Vehicles
          </Link>
        </div>
      </section>

      {/* Vehicle Details Section */}
      <section className="px-4 py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container m-auto max-w-4xl rounded-xl shadow-xl bg-white p-8">
          <h1 className="font-bold text-5xl text-gray-900 mb-6 font-[Poppins]">
            {single_vehicle.make} {single_vehicle.model}
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg font-light font-[Lato]">
            {single_vehicle.description}
          </p>

          {/* Key Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <DetailCard title="Price" value={`Ksh. ${single_vehicle.price}`} />
            <DetailCard title="Engine" value={single_vehicle.engineSize} />
            <DetailCard
              title="Mileage"
              value={`${single_vehicle.mileage} km`}
            />
            <DetailCard title="Year" value={single_vehicle.yearOfManufacture} />
            <DetailCard
              title="Transmission"
              value={single_vehicle.transmissionType}
            />
            <DetailCard title="Fuel" value={single_vehicle.fuelType} />
            <DetailCard
              title="Passengers"
              value={single_vehicle.passengerCapacity}
            />
          </div>

          {/* Vehicle Features Section */}
          {availableFeatures.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-bold text-3xl text-gray-900 mb-6 font-[Poppins]">
                More Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="p-4 bg-indigo-50 text-indigo-700 rounded-lg shadow-md font-medium text-sm font-[Montserrat]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-6 text-gray-600">
              No more features available for this vehicle.
            </p>
          )}
        </div>
      </section>
      {/* Vehicle images */}
    </>
  );
};

// Reusable Detail Card Component
const DetailCard = ({ title, value }) => (
  <div className="p-6 bg-gradient-to-br from-indigo-50 to-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-medium text-indigo-700 font-[Montserrat] mb-2">
      {title}
    </h3>
    <p className="text-gray-800 text-lg font-[Roboto]">{value}</p>
  </div>
);

export default SingleVehiclePage;
