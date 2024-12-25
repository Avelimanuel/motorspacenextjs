import InfoBoxes from "@/components/InfoBoxes";
import Hero from "@/components/Hero";
import HomeVehicles from "@/components/HomeVehicles";
import Link from "next/link";
import connectToDatabase from "@/config/databaseconnection";
const HomePage = () => {
  connectToDatabase();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeVehicles />
    </>
  );
};

export default HomePage;
