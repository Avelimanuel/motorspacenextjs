"use server";
import connectToLocalVehicleDb from "@/config/localvehicledbconnection";
import LocallyUsedVehicles from "@/models/LocallyUsed";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function AddLocalVehicle(formData) {
  //await connectToLocalVehicleDb()
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
  console.log(localvehicleData);
}
export default AddLocalVehicle;
