import Image from "next/image";

const VehicleImages = ({ single_vehicle, image }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {image.length === 1 ? (
          <Image
            src={image[0]}
            alt={`${single_vehicle.make}`}
            className="object-cover h-[400px] mx-auto rounded-xl"
            width={1800}
            height={400}
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {image.map((pic, index) => (
              <div key={index} className="col-span-1">
                <Image
                  src={pic}
                  alt={`${single_vehicle.make}`}
                  className="object-cover h-[400px] width-full rounded-xl"
                  width={1800}
                  height={400}
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleImages;
