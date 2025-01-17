import { Schema, model, models } from "mongoose";

const LocallyUsed = new Schema({
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
  yearOfManufacture: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  mileage: {
    type: String,
    required: true,
    trim: true,
  },
  engineSize: {
    type: Number,
    required: true,
  },
  transmissionType: {
    type: String,
    enum: ["Manual", "Automatic"],
    required: true,
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
  features: {
    type: [String],
    default: [],
  },
},{timestamps:true});

const LocallyUsedVehicles = models.Locallyusedvehicles || model("Locallyusedvehicles",LocallyUsed)
export default LocallyUsedVehicles;
