import Vehicle from "@/models/Vehicle";
import connectToDatabase from "@/config/databaseconnection";
import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import VehicleSearch from "@/components/VehicleSearchForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SearchResultsPage = async ({ searchParams }) => {
  await connectToDatabase();

  const vehicleName = await searchParams?.vehicleName;

  if (!vehicleName || vehicleName.trim() === "") {
    
    return <div>No search results found.</div>;
  }

  const vehicleNamePattern = new RegExp(vehicleName.trim(), "i");

  const query = {
    $or: [
      { make: vehicleNamePattern },
      { model: vehicleNamePattern },
      { description: vehicleNamePattern },
    ],
  };

  const vehicleQueryResults = await Vehicle.find(query).lean();

  return (
    <>
      <section>
        <div className="max-width-7xl mx-auto flex flex-col items-start sm:px-6 lg:px-8">
          <VehicleSearch />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
            <Link href="/vehicles" className="mb-3 hover:underline flex items-center text-blue-500">
                <FaArrowAltCircleLeft className="mr-2 mb-1"/> Back to vehicles
            </Link>
            <h1 className="text-2 mb-4 mx-auto text-center">Search results</h1>
            {vehicleQueryResults.length === 0 ? (<p className="text-red-500">No vehicle found</p>) :(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {vehicleQueryResults.map((vehicle)=>(
                        <VehicleCard vehicle={vehicle} key={vehicle._id} />
                    ))}
                </div>
            )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
