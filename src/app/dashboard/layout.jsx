import Sidebar from "@/ui/Sidebar/Sidebar";
import Status from "@/ui/Status/Status";
import Navbar from "@/ui/Navbar/Navbar";
import Footer from "@/ui/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-1/6">
        <div>
          <Sidebar />
        </div>
        <div className="sticky top-full">
          <Status />
        </div>
      </div>

      <div className="w-5/6">
        <div className="flex flex-col min-h-screen flex-1">
          <Navbar />
          {children}
          <div className="sticky top-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
