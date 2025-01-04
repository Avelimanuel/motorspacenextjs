import Image from "next/image";

const VehicleImages = ({ single_vehicle, image }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {image.length === 1 ? (
          <Image
            src={image[0]}
            alt={`${single_vehicle.make}`}
            className="object-cover mx-auto rounded-xl"
            width={1200}
            height={600}
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {image.map((pic, index) => (
              <div key={index} className="relative w-full h-60 md:h-80">
                <Image
                  src={pic}
                  alt={`${single_vehicle.make}`}
                  className="object-cover rounded-xl"
                  layout="fill"
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
