import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./components/AboutPage";
import NotFound from "./pages/NotFound";
import {ProductDetails} from "./components/productDetails";


// Import your Header and Footer
import { Header } from "./components/Header"; 
// Assuming you have a Footer component in the same folder
import { Footer } from "./components/Footer"; 
// import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { ContactUs } from "./components/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Header stays outside Routes so it never unmounts */}
        <Header />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer stays outside Routes so it appears on every page */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;