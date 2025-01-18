import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "photoswipe/dist/photoswipe.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Motor Space Kenya",
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
    <html lang="en">
      <head>
        {/* General Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://motorspace.co.ke" />
        <meta
          property="og:image"
          content="https://www.motorspace.co.ke/vehicles/Honda-Fit-6779ac810897fa89f59625b3" // Replace with the correct image URL
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Motor Space Kenya" />

        {/* X/Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.motorspace.co.ke/vehicles/Nissan-noteEpower-6785663ef8b4bee2a45d94df" // Replace with the correct image URL
        />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Optional: Replace with your X handle */}
        <meta name="twitter:creator" content="@YourTwitterHandle" /> {/* Optional */}
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
