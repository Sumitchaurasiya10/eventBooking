import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import LoginRegister from "./pages/LoginRegister";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/login" element={<LoginRegister />} />
    </Routes>
  );
}
