import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "photoswipe/dist/photoswipe.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata = {
  title: "Motor space kenya",
  description:
    "Discover new and used cars for sale in Kenya at unbeatable prices. Browse SUVs, sedans, and electric vehicles. Easy financing options and trade-ins available.",
  keywords: [
    "car dealership Nairobi Kenya",
    "buy cars online here in Kenya",
    "new cars for sale in Nairobi Kenya",
    "used cars for sale in Kenya",
    "affordable cars in Nairobi Kenya",
    "luxury cars-Nairobi",
    "electric vehicles in Kenya",
    "car inventory",
    "SUVs for sale in Kenya",
    "car financing in Kenya",
  ],
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
