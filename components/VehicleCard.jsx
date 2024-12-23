import Link from "next/link";
import Image from "next/image";
const VehicleCard = ({ vehicle }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${vehicle.images[0]}`}
        width='0'
        height='0'
        sizes="100vw"
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          
          <h3 className="text-xl font-bold">{vehicle.name}</h3>
          <div className="text-red-500 font-bold">Ksh.{vehicle.price}</div>
        </div>
        

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <i className="fa-solid fa-bed"></i> Engine: 
            <span className="md:hidden lg:inline">{vehicle.engine}</span>
          </p>
          <p>
            <i className="fa-solid fa-bath"></i> 
            <span className="md:hidden lg:inline">{vehicle.capacity}</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            <span className="md:hidden lg:inline">{vehicle.mileage}</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <i className="fa-solid fa-money-bill"></i> Weekly
          </p>
          <p>
            <i className="fa-solid fa-money-bill"></i> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <span className="text-orange-700"> Boston MA </span>
          </div>
          <Link
            href={`/vehicles/${vehicle._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
