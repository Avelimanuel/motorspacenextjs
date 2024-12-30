"use server";
import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";
async function addVehicle(formData) {
  await connectToDatabase();
  const features = formData.getAll("features");
  const images = formData.getAll("images").filter((image) => image !== "");

  const vehicleData = {
    make: formData.get("make"),
    model: formData.get("model"),
    yearOfManufacture: formData.get("yearOfManufacture"),
    mileage: formData.get("mileage"),
    engineSize: formData.get("engineSize"),
    passengerCapacity: formData.get("passengerCapacity"),
    transmissionType: formData.get("transmissionType"),
    fuelType: formData.get("fuelType"),
    color: formData.get("color"),
    price: formData.get("price"),
    features: features, // Add collected features
    isFeatured: formData.get("isFeatured") === "on", // Convert checkbox to boolean

    description: formData.get("description"),
  };

  const imageUrls = [];
  for (let imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    //convert to base 64
    const imageBase64 = imageData.toString("base64");

    //make request to cloudinary
    const results = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "motorspace",
      }
    );
    imageUrls.push(results.secure_url);
  }

  vehicleData.images = imageUrls;

  const newVehicle = new Vehicle(vehicleData);
  await newVehicle.save();
  revalidatePath("/", "layout");
  redirect(`/vehicles/${newVehicle.make}-${newVehicle.model}`);
}

export default addVehicle;
