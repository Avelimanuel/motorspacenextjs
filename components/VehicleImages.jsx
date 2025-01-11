'use client'
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const VehicleImages = ({ single_vehicle, image }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {image.length === 1 ? (
            <Item
              original={image[0]}
              thumbnail={image[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  src={image[0]}
                  alt={`${single_vehicle.make}`}
                  ref={ref}
                  onClick={open}
                  className="object-cover mx-auto rounded-xl"
                  width={1200}
                  height={600}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {image.map((pic, index) => (
                <div key={index} className="relative w-full h-60 md:h-80">
                  <Item
                    original={pic}
                    thumbnail={pic}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        src={pic}
                        ref={ref}
                        onClick={open}
                        alt={`${single_vehicle.make}`}
                        className="object-cover rounded-xl"
                        layout="fill"
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};

export default VehicleImages;
