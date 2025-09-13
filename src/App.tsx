import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Customer Pages
import Home from "./pages/Home";
import Experiences from "./pages/Categories/Experiences";
import Decorations from "./pages/Categories/Decorations";
import Gifts from "./pages/Categories/Gifts";
import Corporate from "./pages/Categories/Corporate";
import EventDetail from "./pages/EventDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/Dashboard";
import AdminEvents from "./admin/Events";
import AdminOrders from "./admin/Orders";
import AdminUsers from "./admin/Users";
import AdminReports from "./admin/Reports";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<Home />} />
              
              {/* Main Categories */}
              <Route path="/anniversary" element={<Experiences />} />
              <Route path="/birthdays" element={<Experiences />} />
              <Route path="/gifts" element={<Gifts />} />
              <Route path="/candlelight" element={<Experiences />} />
              <Route path="/decorations" element={<Decorations />} />
              <Route path="/festivals" element={<Experiences />} />
              <Route path="/kids" element={<Experiences />} />
              <Route path="/corporate" element={<Corporate />} />
              
              {/* Legacy routes */}
              <Route path="/experiences" element={<Experiences />} />
              
              {/* Subcategory routes */}
              <Route path="/decorations/:type" element={<Decorations />} />
              <Route path="/gifts/:type" element={<Gifts />} />
              <Route path="/kids/:type" element={<Experiences />} />
              <Route path="/baby-shower" element={<Experiences />} />
              <Route path="/baby-welcome" element={<Experiences />} />
              <Route path="/activities" element={<Experiences />} />
              
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="events" element={<AdminEvents />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="reports" element={<AdminReports />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
