import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasVehicleName = searchParams.has("vehicleName");
    const carname = hasVehicleName
      ? searchParams.get("vehicleName") // Use the correct parameter here
      : "Motor Space Kenya";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            fontSize: 48,
            fontWeight: "bold",
            backgroundColor: "#f5f5f5",
            color: "#333",
          }}
        >
          {carname}
        </div>
      )
    );
  } catch (error) {
    return new Response("Failed to generate OpenGraph image", { status: 500 });
  }
}
