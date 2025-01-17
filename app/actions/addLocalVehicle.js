'use server'
import connectToLocalVehicleDb from "@/config/localvehicledbconnection"
import LocallyUsedVehicles from "@/models/LocallyUsed"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import cloudinary from "@/config/cloudinary"

async function AddLocalVehicle(formData){
    await connectToLocalVehicleDb()
}
export default AddLocalVehicle;