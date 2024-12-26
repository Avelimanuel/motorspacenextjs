import connectToDatabase from "@/config/databaseconnection";
import Vehicle from "@/models/Vehicle";
export const GET = async () => {
  try {
    await connectToDatabase();
    const vehicles = await Vehicle.find({});
    return new Response(
      JSON.stringify(
        vehicles
      ),
      { status: 200 }
    );
  } catch (error) {
    return new Response(`Something went wrong!!`, { status: 500 });
  }
};
