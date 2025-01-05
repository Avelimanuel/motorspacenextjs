import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";
import VehicleCard from "./VehicleCard";
import Link from "next/link";

const HomeVehicles = async () => {
  await connectToDatabase();
  const hotCars = await Vehicle.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section className="px-6 py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-red-600 mb-8">
            🚗 Featured Vehicles 🚗
          </h2>
          {hotCars.length === 0 ? (
            <p className="text-lg text-gray-600">
              Sorry, no vehicles are available at the moment. Check back later!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hotCars.map((vehicle) => (
                <VehicleCard key={vehicle._id} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="px-6 py-8 bg-white">
        <div className="container mx-auto text-center">
          <Link
            href="/vehicles"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            View All Vehicles
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeVehicles;
