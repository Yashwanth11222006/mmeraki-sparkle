import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Customer Pages
import Home from "./pages/Home";
import OccasionPage from "./pages/OccasionPage";
import EventDetails from "./pages/EventDetails";
import EventDetail from "./pages/EventDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import Login from "./pages/Auth/Login";

// Category Pages
import BirthdayPage from "./pages/Categories/BirthdayPage";

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
              <Route path="/anniversary" element={<OccasionPage />} />
              <Route path="/birthdays" element={<BirthdayPage />} />
              <Route path="/birthdays/:subcategory" element={<BirthdayPage />} />
              <Route path="/gifts" element={<OccasionPage />} />
              <Route path="/candlelight" element={<OccasionPage />} />
              <Route path="/decorations" element={<OccasionPage />} />
              <Route path="/festivals" element={<OccasionPage />} />
              <Route path="/kids" element={<OccasionPage />} />
              <Route path="/corporate" element={<OccasionPage />} />
              
              {/* Event Details */}
              <Route path="/event/:id" element={<EventDetail />} />
              
              {/* Other Pages */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/login" element={<Login />} />
              
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
