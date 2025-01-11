import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "photoswipe/dist/photoswipe.css"
export const metadata = {
  title: "Motor space kenya",
  description:
    "Discover new and used cars for sale at unbeatable prices. Browse SUVs, sedans, and electric vehicles. Easy financing options and trade-ins available.",
  keywords: [
    "car dealership",
    "buy cars online",
    "new cars for sale",
    "used cars for sale",
    "affordable cars",
    "luxury cars",
    "electric vehicles",
    "car inventory",
    "SUVs for sale",
    "car financing",
  ],
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
