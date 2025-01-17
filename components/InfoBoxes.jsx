import Link from "next/link";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="mt-2 mb-4">
              Premium Vehicle Selection at Motor Space
            </p>
            <Link
              href="/vehicles"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse new Vehicles
            </Link>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">We enhance your automobile experience </h2>
            {/* <p className="mt-2 mb-4">
              Premium cars selected for
              you at Motor Space
            </p> */}
            <Link
              href="/locallyused"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse locally used Vehicles
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
