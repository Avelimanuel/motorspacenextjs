import VehicleCard from "@/components/VehicleCard";
import LocallyUsedVehicles from "@/models/LocallyUsed";
import connectToLocalVehicleDb from "@/config/localvehicledbconnection";
import VehicleSearch from "@/components/VehicleSearchForm";

const LocallyUsed = async () => {
  await connectToLocalVehicleDb();
  const localvehicles = await LocallyUsedVehicles.find({});

  return (
    <section className="px-4 py-6">
      <div className="max-width-7xl mx-auto flex flex-col items-start sm:px-6 lg:px-8">
        <VehicleSearch />
      </div>
      <div className="container-xl lg:container m-auto px-4 py-6">
        {localvehicles.length === 0 ? (
          <h1 className="font-bold text-red-500 text-center">No Locally used vehicles found...we are curretlly working to restore</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localvehicles.map((localvehicle) => (
              <VehicleCard key={localvehicle._id} vehicle={localvehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocallyUsed;
