import vehicles from "@/vehicles.json";
import VehicleCard from "./VehicleCard";
import Link from "next/link";
const HomeVehicles = () => {
  const hotCars = vehicles.slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
            High-Performance Vehicles
          </h2>
          {vehicles.length === 0 ? (
            <h1>No vehicles found</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotCars.map((vehicle) => (
                <VehicleCard key={vehicle._id} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="mx-auto px-6 my-6 max-w-lg">
        <Link href='/vehicles' className="block text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 bg-black">View all vehicles</Link>
      </section>
    </>
  );
};

export default HomeVehicles;
