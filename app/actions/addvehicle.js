"use server";
import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function addVehicle(formData) {
  await connectToDatabase();
  const features = formData.getAll("features");
  const images = formData
    .getAll("images")
    .filter((image) => image !== "") //filter any empty name
    .map((image) => image.name); //get the image name

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
    price:formData.get('price'),
    features: features, // Add collected features
    isFeatured: formData.get("isFeatured") === "on", // Convert checkbox to boolean
    images: images, // Collected image file names
    description: formData.get("description"),
  };
  const newVehicle = new Vehicle(vehicleData)
  await newVehicle.save()
  revalidatePath('/','layout')
  redirect(`/vehicles/${newVehicle._id}`)
}

export default addVehicle;
