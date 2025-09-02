// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, MapPin, DollarSign, Users, Ticket } from "lucide-react";

// export default function EventDetail() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [showTicket, setShowTicket] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const dummyEvent = {
//       id,
//       title: "Music Festival 2025",
//       description:
//         "Join us for an unforgettable night of music, lights, and celebration. Experience live performances, food stalls, and fun activities!",
//       date: "11/5/2025, 9:00:00 AM",
//       location: "San Francisco",
//       price: 150,
//       seats: 199,
//     };

//     setEvent(dummyEvent);
//   }, [id]);

//   if (!event) return <p className="text-center text-white">Loading...</p>;

//   const total = quantity * event.price;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white pt-28 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//         {/* Event Details */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-purple-700/80 to-indigo-700/80"
//         >
//           <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
//           <p className="text-gray-200 mb-6">{event.description}</p>

//           <div className="space-y-4">
//             <p className="flex items-center gap-3">
//               <Calendar className="text-yellow-400" /> {event.date}
//             </p>
//             <p className="flex items-center gap-3">
//               <MapPin className="text-green-400" /> {event.location}
//             </p>
//             <p className="flex items-center gap-3">
//               <DollarSign className="text-pink-400" /> ₹{event.price.toFixed(2)}
//             </p>
//             <p className="flex items-center gap-3">
//               <Users className="text-blue-400" /> {event.seats} seats left
//             </p>
//           </div>
//         </motion.div>

//         {/* Booking Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-700/80 to-pink-700/80 flex flex-col justify-between"
//         >
//           <div>
//             <label className="block mb-2 font-semibold">Select Quantity</label>
//             <input
//               type="number"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               className="w-full p-2 rounded-lg bg-transparent border border-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//             <p className="mt-4 text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
//           </div>

//           {/* Modern Book Now Button */}
//           <motion.button
//             whileHover={{ scale: 1.07, rotateX: 8 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowModal(true)}
//             className="w-full py-3 mt-6 text-lg font-semibold 
//                        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
//                        text-white rounded-xl shadow-xl transition-all duration-300
//                        hover:shadow-pink-500/50"
//           >
//             🚀 Book Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Confirmation Popup */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl shadow-2xl text-center w-[90%] max-w-md"
//             >
//               <Ticket className="mx-auto mb-4 text-pink-400" size={50} />
//               <h2 className="text-2xl font-bold mb-2">Booking Confirmed 🎉</h2>
//               <p className="text-gray-200 mb-4">{event.title}</p>
//               <p className="mb-2">Quantity: <b>{quantity}</b></p>
//               <p className="mb-4">Total Paid: <b>₹{total.toFixed(2)}</b></p>

//               <div className="flex gap-4 justify-center">
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => { setShowModal(false); setShowTicket(true); }}
//                   className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600"
//                 >
//                   View Ticket
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Ticket Preview Popup */}
//       <AnimatePresence>
//         {showTicket && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ y: 80, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 80, opacity: 0 }}
//               className="bg-gradient-to-r from-black via-gray-900 to-purple-900 p-8 rounded-2xl shadow-2xl text-white w-[90%] max-w-lg"
//             >
//               <h2 className="text-xl font-bold text-center mb-4">🎟️ Your Ticket</h2>
//               <div className="border-dashed border-2 border-gray-500 rounded-xl p-6 text-center">
//                 <p className="text-lg font-semibold">{event.title}</p>
//                 <p className="text-gray-300">{event.date}</p>
//                 <p className="text-gray-400 mb-2">{event.location}</p>
//                 <p>Seats: <b>{quantity}</b></p>
//                 <p>Total: <b>₹{total.toFixed(2)}</b></p>
//               </div>
//               <button
//                 onClick={() => setShowTicket(false)}
//                 className="mt-6 w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-700"
//               >
//                 Close Ticket
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// import { useEffect, useState, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import API from "../api/api";
// import Loader from "../components/common/Loader";
// import BookingForm from "../components/events/BookingForm";
// import useAuth from "../hooks/useAuth";
// import { BookingContext } from "../context/BookingContext";

// export default function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { auth } = useAuth();
//   const { setLastBooking } = useContext(BookingContext);
//   const nav = useNavigate();

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await API.get(`/events/${id}`);
//         setEvent(data);
//       } catch (e) { console.error(e); }
//       finally { setLoading(false); }
//     })();
//   }, [id]);

//   const handleBook = async ({ quantity, event_id }) => {
//     if (!auth) return nav("/login");
//     try {
//       const { data } = await API.post("/bookings", { event_id, quantity });
//       setLastBooking({ event: event.title, quantity, total: data.total_amount });
//       alert("Booking successful!");
//       nav("/bookings");
//     } catch (e) {
//       alert(e?.response?.data?.message || "Booking failed");
//     }
//   };

//   if (loading) return <Loader />;
//   if (!event) return <div className="p-6">Event not found.</div>;

//   return (
//     <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
//       <div>
//         {event.img && <img src={event.img} alt={event.title} className="rounded-lg shadow mb-4" />}
//         <h2 className="text-3xl font-bold">{event.title}</h2>
//         <p className="text-gray-600 mt-2">{event.description}</p>
//         <div className="mt-4 space-y-1 text-sm">
//           <div><b>Date:</b> {new Date(event.date).toLocaleString()}</div>
//           <div><b>Location:</b> {event.location}</div>
//           <div><b>Price:</b> ₹{event.price}</div>
//           <div><b>Available Seats:</b> {event.available_seats}</div>
//         </div>
//       </div>
//       <div className="bg-white border rounded-lg p-5 h-fit">
//         <h3 className="font-semibold mb-3">Book tickets</h3>
//         <BookingForm eventId={event.id} price={event.price} onSubmit={handleBook} />
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import API from "../api/api";
// import Loader from "../components/common/Loader";
// import useAuth from "../hooks/useAuth";
// import { BookingContext } from "../context/BookingContext";
// import { motion, AnimatePresence } from "framer-motion";
// import BookingForm from "../components/events/BookingForm";

// export default function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { auth } = useAuth();
//   const { setLastBooking } = useContext(BookingContext);
//   const nav = useNavigate();

//   const [ticketPopup, setTicketPopup] = useState(null);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     (async () => {
//       try {
//         const { data } = await API.get(`/events/${id}`);
//         setEvent(data);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [id]);

//   const handleBook = async ({ quantity, event_id }) => {
//     if (!auth) return nav("/login");
//     try {
//       const { data } = await API.post("/bookings", { event_id, quantity });
//       setLastBooking({
//         event: event.title,
//         quantity,
//         total: data.total_amount,
//       });

//       // 🎟 Show ticket popup
//       setTicketPopup({
//         event: event.title,
//         qty: quantity,
//         total: data.total_amount,
//         date: event.date,
//         location: event.location,
//       });
//     } catch (e) {
//       alert(e?.response?.data?.message || "Booking failed");
//     }
//   };

//   const handleDownloadTicket = () => {
//     console.log("Downloading ticket...");
//     setTicketPopup(null);
//     nav("/bookings");
//   };

//   if (loading) return <Loader />;
//   if (!event) return <div className="p-6">Event not found.</div>;

//   // ✅ Ensure correct image field is picked
//   const eventImage =
//     event.image || event.img || event.event_image || "/default-event.jpg";

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 max-w-7xl mx-auto px-6 pt-28 pb-20">
//       {/* 🎟 Ticket Popup */}
//       <AnimatePresence>
//         {ticketPopup && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl w-[380px] p-6 relative overflow-hidden"
//             >
//               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

//               <h2 className="text-2xl font-bold text-purple-700 text-center mb-3">
//                 🎟 Your Ticket
//               </h2>

//               <div className="border-t border-b border-dashed border-gray-400 py-4 space-y-2">
//                 <p className="text-lg font-semibold text-gray-800">{ticketPopup.event}</p>
//                 <p className="text-sm text-gray-600">📍 {ticketPopup.location}</p>
//                 <p className="text-sm text-gray-600">
//                   📅 {new Date(ticketPopup.date).toLocaleString()}
//                 </p>
//                 <p className="text-sm text-gray-700">Seats: {ticketPopup.qty}</p>
//                 <p className="text-md font-bold text-purple-800">
//                   💰 Total: ₹{ticketPopup.total}
//                 </p>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleDownloadTicket}
//                 className="w-full mt-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-md"
//               >
//                 ⬇️ Download Ticket
//               </motion.button>

//               <button
//                 onClick={() => setTicketPopup(null)}
//                 className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
//               >
//                 ✕
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Event + Booking Form */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* 🎤 Event Details */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.03, rotateY: 5, rotateX: -3 }}
//           transition={{ type: "spring", stiffness: 180, damping: 12 }}
//           className="relative bg-gradient-to-br from-purple-600/80 to-pink-600/80 
//                      p-8 rounded-2xl shadow-xl border border-pink-300/40 
//                      backdrop-blur-lg group overflow-hidden"
//         >
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 to-purple-400/20 
//                           opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

//           {eventImage && (
//             <motion.img
//               src={eventImage}
//               alt={event.title}
//               className="rounded-xl mb-6 shadow-lg w-full max-h-80 object-cover"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           )}
//           <h2 className="text-3xl font-bold text-white drop-shadow-lg">{event.title}</h2>
//           <p className="text-pink-100 mt-3">{event.description}</p>
//           <div className="mt-6 space-y-2 text-pink-50">
//             <div><b>Date:</b> {new Date(event.date).toLocaleString()}</div>
//             <div><b>Location:</b> {event.location}</div>
//             <div><b>Price:</b> ₹{event.price}</div>
//             <div><b>Available Seats:</b> {event.available_seats}</div>
//           </div>
//         </motion.div>

//         {/* 🎟 Booking Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.03, rotateY: -5, rotateX: 3 }}
//           transition={{ type: "spring", stiffness: 180, damping: 12 }}
//           className="relative bg-gradient-to-br from-pink-700/80 to-purple-700/80 
//                      border border-pink-400/50 rounded-2xl p-8 shadow-2xl 
//                      backdrop-blur-lg group overflow-hidden"
//         >
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
//                           opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

//           <h3 className="text-xl font-semibold text-white mb-4">🎟 Book Your Tickets</h3>

//           {/* ✅ Stylish Booking Form */}
//           <BookingForm eventId={event.id} price={event.price} onSubmit={handleBook} />
//         </motion.div>
//       </div>

//       {/* 🎉 Event Highlights Section */}
//       <div className="mt-20">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
//           ✨ Event Highlights
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             { title: "🎶 Live Performances", desc: "Experience electrifying shows with immersive lights & sound from top artists." },
//             { title: "🤝 Networking Lounge", desc: "Meet, connect, and collaborate with like-minded people in a premium lounge setup." },
//             { title: "🛍️ Exclusive Merch", desc: "Get your hands on limited edition event merchandise & collectibles." },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ rotateY: 15, rotateX: -8, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               className="relative bg-gradient-to-br from-purple-600/50 to-pink-600/50 
//                          backdrop-blur-xl border border-white/20 rounded-2xl 
//                          p-6 sm:p-8 shadow-2xl cursor-pointer group"
//             >
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 to-purple-500/20 
//                               opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
//               <p className="text-sm sm:text-base text-pink-100 leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/api";
import Loader from "../components/common/Loader";
import useAuth from "../hooks/useAuth";
import { BookingContext } from "../context/BookingContext";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "../components/events/BookingForm";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  const { setLastBooking } = useContext(BookingContext);
  const nav = useNavigate();
  const [imageError, setImageError] = useState(false);

  const [ticketPopup, setTicketPopup] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    (async () => {
      try {
        const { data } = await API.get(`/events/${id}`);
        setEvent(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleBook = async ({ quantity, event_id }) => {
    if (!auth) return nav("/login");
    try {
      const { data } = await API.post("/bookings", { event_id, quantity });
      setLastBooking({
        event: event.title,
        quantity,
        total: data.total_amount,
      });

      setTicketPopup({
        event: event.title,
        qty: quantity,
        total: data.total_amount,
        date: event.date,
        location: event.location,
      });
    } catch (e) {
      alert(e?.response?.data?.message || "Booking failed");
    }
  };

  const handleDownloadTicket = () => {
    console.log("Downloading ticket...");
    setTicketPopup(null);
    nav("/bookings");
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) return <Loader />;
  if (!event) return <div className="p-6 text-white">Event not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 max-w-7xl mx-auto p-6">
      {/* Back Arrow Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => nav('/events')}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-xl 
                   bg-gradient-to-r from-purple-600/50 to-pink-600/50 
                   backdrop-blur-lg border border-white/20 
                   hover:from-purple-600/70 hover:to-pink-600/70 
                   transition-all duration-300 shadow-lg text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </motion.button>

      {/* 🎟 Ticket Popup */}
      <AnimatePresence>
        {ticketPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl w-[380px] p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <h2 className="text-2xl font-bold text-purple-700 text-center mb-3">
                🎟 Your Ticket
              </h2>

              <div className="border-t border-b border-dashed border-gray-400 py-4 space-y-2">
                <p className="text-lg font-semibold text-gray-800">{ticketPopup.event}</p>
                <p className="text-sm text-gray-600">📍 {ticketPopup.location}</p>
                <p className="text-sm text-gray-600">
                  📅 {new Date(ticketPopup.date).toLocaleString()}
                </p>
                <p className="text-sm text-gray-700">Seats: {ticketPopup.qty}</p>
                <p className="text-md font-bold text-purple-800">
                  💰 Total: ₹{ticketPopup.total}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadTicket}
                className="w-full mt-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-md"
              >
                ⬇️ Download Ticket
              </motion.button>

              <button
                onClick={() => setTicketPopup(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event + Booking Form */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* 🎤 Event Details WITH image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.07,
            rotateX: 8,
            rotateY: -8,
            boxShadow: "0px 20px 40px rgba(255, 0, 150, 0.3), 0px 10px 20px rgba(0,0,0,0.4)"
          }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="rounded-2xl transform-gpu perspective-1000 transition-all duration-500 bg-white/10 shadow-xl backdrop-blur-lg overflow-hidden"
        >
          {/* 🖼 Event Image */}
          {event.img_url && !imageError ? (
            <img
              src={event.img_url}
              alt={event.title}
              className="w-full h-60 object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-60 bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm opacity-80">Event Image</p>
              </div>
            </div>
          )}

          {/* Card Content */}
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-3">{event.title}</h2>
            <p className="text-gray-300 mb-4">{event.description}</p>
            <div className="space-y-2 text-gray-200">
              <div><b>Date:</b> {new Date(event.date).toLocaleString()}</div>
              <div><b>Location:</b> {event.location}</div>
              <div><b>Price:</b> ₹{event.price}</div>
              <div><b>Available Seats:</b> {event.available_seats}</div>
            </div>
          </div>
        </motion.div>

        {/* 🎟 Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.07,
            rotateX: 8,
            rotateY: 8,
            boxShadow: "0px 20px 40px rgba(255, 0, 150, 0.3), 0px 10px 20px rgba(0,0,0,0.4)"
          }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="rounded-2xl transform-gpu perspective-1000 transition-all duration-500 bg-white/10 shadow-xl backdrop-blur-lg overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-xl font-semibold text-white mb-4">🎟 Book Your Tickets</h3>
            <BookingForm eventId={event.id} price={event.price} onSubmit={handleBook} />
          </div>
        </motion.div>
      </div>

      {/* 🎉 Event Highlights Section */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-12 drop-shadow-lg">
          ✨ Event Highlights
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "🎶 Live Performances", desc: "Experience electrifying shows with immersive lights & sound from top artists." },
            { title: "🤝 Networking Lounge", desc: "Meet, connect, and collaborate with like-minded people in a premium lounge setup." },
            { title: "🛍️ Exclusive Merch", desc: "Get your hands on limited edition event merchandise & collectibles." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 20px 40px rgba(255, 0, 150, 0.3), 0px 10px 20px rgba(0,0,0,0.4)"
              }}
              className="rounded-2xl transform-gpu perspective-1000 transition-all duration-500 bg-white/10 shadow-xl backdrop-blur-lg overflow-hidden cursor-pointer"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}