import InfoBoxes from "@/components/InfoBoxes";
import Hero from "@/components/Hero";
import HomeVehicles from "@/components/HomeVehicles";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeVehicles/>
    </>
  );
};

export default HomePage;
