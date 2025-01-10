import Link from "next/link";
import Image from "next/image";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="rounded-xl shadow-lg relative bg-white transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <Link href={`/vehicles/${vehicle.make}-${vehicle.model}-${vehicle._id}`}>
        <Image
          src={vehicle.images[0]}
          width="0"
          height="0"
          sizes="100vw"
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-auto rounded-t-xl object-cover"
          priority
        />
      </Link>

      {/* Card Content */}
      <div className="p-5">
        {/* Title and Price */}
        <div className="text-left md:text-center lg:text-left mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {vehicle.make} {vehicle.model}
          </h3>
          <div className="text-lg font-semibold text-red-500">
            Ksh.{vehicle.price.toLocaleString()}
          </div>
        </div>

        {/* Availability Tag */}
        <span className="absolute top-[10px] right-[10px] bg-white px-3 py-1 rounded-lg shadow-md text-blue-500 text-sm font-semibold">
          Available
        </span>

        {/* Features Section */}
        <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-cogs text-green-600"></i>
            <span>{vehicle.engineSize}cc</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-gas-pump text-green-600"></i>
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-road text-green-600"></i>
            <span>Mileage: {vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-calendar-alt text-blue-500"></i>
            <span>{vehicle.yearOfManufacture} Model</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-gear text-blue-500"></i>
            <span>{vehicle.transmissionType}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Location and Action Button */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-orange-600">
            <i className="fa-solid fa-location-dot text-lg"></i>
            <span className="font-medium">Kiambu Road</span>
          </div>
          <Link
            href={`/vehicles/${vehicle.make}-${vehicle.model}-${vehicle._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm font-medium shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
