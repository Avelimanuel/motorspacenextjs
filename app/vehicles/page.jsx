import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";

const VehiclesPage = async () => {
  await connectToDatabase();
  const vehicles = await Vehicle.find({}).lean();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {vehicles.length === 0 ? (
          <h1>No vehicles found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehiclesPage;
