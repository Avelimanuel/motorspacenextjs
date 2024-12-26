import Image from "next/image";
const VehicleHeaderImage = ({ single_vehicle, image }) => {
  return (
    <section className="bg-gray-200 p-5">
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt=""
            className="object-contain h-[400px] mx-auto mt-8 rounded-lg"
            width={1200}
            height={800}
            sizes='100vw'
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleHeaderImage;
