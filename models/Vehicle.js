import { Schema, model, models } from "mongoose";

const VehicleSchema = new Schema(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    yearOfManufacture: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    engineSize: {
      type: Number,
      required: true,
    },
    passengerCapacity: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    transmissionType: {
      type: String,
      enum: ["Manual", "Automatic"],
      required: true,
    },
    isLocal: {
      type: Boolean,
      required: true,
      default: false, // False for foreign used
    },
    description: {
      type: String,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
    features: {
      type: [String], 
      default: [], 
    },
  },
  { timestamps: true }
);


const Vehicle = models.Vehicle || model("Vehicle", VehicleSchema);

export default Vehicle;
