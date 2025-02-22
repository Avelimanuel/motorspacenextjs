"use server";
import connectToDatabase from "@/config/databaseconnection";
import LocallyUsedVehicles from "@/models/LocallyUsed";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function AddLocalVehicle(formData) {
  await connectToDatabase()
  const features = formData.getAll("features");
  const images = formData.getAll("images").filter((image) => image !== "");
  const localvehicleData = {
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

    // Convert to base64
    const imageBase64 = imageData.toString("base64");

    // Generate a unique public_id for the image
    const uniqueId = `${localvehicleData.make}-${
      localvehicleData.model
    }-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Upload image to Cloudinary
    const results = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "motorspace",
        public_id: uniqueId, // Ensure uniqueness
      }
    );
    imageUrls.push(results.secure_url);
  }
  localvehicleData.images = imageUrls;
  const newLocalVehicle = new LocallyUsedVehicles(localvehicleData)
  await newLocalVehicle.save()
  revalidatePath('/','layout')
  redirect('/locallyused')
}
export default AddLocalVehicle;
