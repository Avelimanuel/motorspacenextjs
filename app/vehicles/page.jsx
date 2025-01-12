import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";
import VehicleSearch from "@/components/VehicleSearchForm";
import Pagination from "@/components/Pagination";

const VehiclesPage = async ({ searchParams }) => {
  const { page = 1, pageSize = 9 } = await searchParams;
  await connectToDatabase();
  const skip = (page - 1) * pageSize;
  const total = await Vehicle.countDocuments({});
  console.log(`The total vehicles are ${total}`)
  const vehicles = await Vehicle.find({}).skip(skip).limit(pageSize).lean();

  const showPagination = total > pageSize;

  return (
    <section className="px-4 py-6">
      <div className="max-width-7xl mx-auto flex flex-col items-start sm:px-6 lg:px-8">
        <VehicleSearch />
      </div>
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
        {showPagination && (
          <Pagination
            page={parseInt(page)}
            pageSize={parseInt(pageSize)}
            totalItems={total}
          />
        )}
      </div>
    </section>
  );
};

export default VehiclesPage;
