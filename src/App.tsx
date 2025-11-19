import Navbar from "./components/layout/Navbar";
import AppRoutes from "./app/routes";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* FIX: removed mt-20 because navbar is NOT fixed */}
      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}
