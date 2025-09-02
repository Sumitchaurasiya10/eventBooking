// import { useEffect, useState } from "react";
// import API from "../api/api";
// import Loader from "../components/common/Loader";

// export default function BookingPage() {
//   const [rows, setRows] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     try {
//       const { data } = await API.get("/bookings/my");
//       setRows(data);
//     } catch (e) { console.error(e); }
//     finally { setLoading(false); }
//   };

//   useEffect(() => { load(); }, []);

//   const cancel = async (id) => {
//     if (!confirm("Cancel this booking?")) return;
//     await API.put(`/bookings/${id}/cancel`);
//     load();
//   };

//   if (loading) return <Loader />;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
//       {(!rows || rows.length===0) ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <div className="space-y-3">
//           {rows.map(b => (
//             <div key={b.id} className="border rounded p-4 flex justify-between">
//               <div>
//                 <div className="font-semibold">Booking #{b.id}</div>
//                 <div className="text-sm text-gray-600">Event: {b.event_id}</div>
//                 <div className="text-sm">Qty: {b.quantity} • Total: ₹{b.total_amount}</div>
//                 <div className="text-sm">Status: {b.status}</div>
//               </div>
//               {b.status !== "cancelled" && (
//                 <button onClick={()=>cancel(b.id)} className="text-red-600">Cancel</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import API from "../api/api";
// import Loader from "../components/common/Loader";

// export default function BookingPage() {
//   const [rows, setRows] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     try {
//       const { data } = await API.get("/bookings/my");
//       setRows(data);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const cancel = async (id) => {
//     if (!confirm("Cancel this booking?")) return;
//     await API.put(`/bookings/${id}/cancel`);
//     load();
//   };

//   if (loading) return <Loader />;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-20">
//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
//       >
//         🎟 My Bookings
//       </motion.h2>

//       {(!rows || rows.length === 0) ? (
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center text-lg text-gray-400"
//         >
//           No bookings yet. Start exploring events!
//         </motion.p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {rows.map((b, i) => (
//             <motion.div
//               key={b.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateY: 8,
//                 rotateX: -4,
//                 boxShadow: "0px 15px 40px rgba(255,0,150,0.4)",
//               }}
//               className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 
//                          rounded-2xl p-6 shadow-xl text-white transition-all"
//             >
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold text-pink-400">
//                   Booking #{b.id}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-1">
//                   Event ID: <span className="font-medium">{b.event_id}</span>
//                 </p>
//               </div>

//               <div className="space-y-1 text-gray-200 text-sm">
//                 <p>
//                   <b>Quantity:</b> {b.quantity}
//                 </p>
//                 <p>
//                   <b>Total:</b> ₹{b.total_amount}
//                 </p>
//                 <p>
//                   <b>Status:</b>{" "}
//                   <span
//                     className={`px-2 py-1 rounded-lg text-xs ${
//                       b.status === "cancelled"
//                         ? "bg-red-500/30 text-red-300"
//                         : "bg-green-500/30 text-green-300"
//                     }`}
//                   >
//                     {b.status}
//                   </span>
//                 </p>
//               </div>

//               {b.status !== "cancelled" && (
//                 <motion.button
//                   whileHover={{
//                     scale: 1.1,
//                     boxShadow: "0px 10px 25px rgba(255,50,50,0.6)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => cancel(b.id)}
//                   className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 
//                              text-white font-semibold py-2 rounded-xl 
//                              shadow-md transition-all"
//                 >
//                   ❌ Cancel Booking
//                 </motion.button>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/api";
import Loader from "../components/common/Loader";
import { Link, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState(new Set());
  const navigate = useNavigate();

  const load = async () => {
    try {
      const { data } = await API.get("/bookings/my");
      setRows(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const cancel = async (id) => {
    if (!confirm("Cancel this booking?")) return;
    try {
      await API.put(`/bookings/${id}/cancel`);
      load();
    } catch (e) {
      console.error(e);
      alert("Failed to cancel booking");
    }
  };

  const handleImageError = (bookingId) => {
    setImageErrors(prev => new Set([...prev, bookingId]));
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-black px-6 py-20 text-white">
      {/* Back Arrow Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/events')}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-xl 
                   bg-gradient-to-r from-purple-600/50 to-pink-600/50 
                   backdrop-blur-lg border border-white/20 
                   hover:from-purple-600/70 hover:to-pink-600/70 
                   transition-all duration-300 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </motion.button>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text"
      >
        🎟 My Bookings
      </motion.h2>

      {(!rows || rows.length === 0) ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-lg text-gray-400"
        >
          No bookings yet. Start exploring events!
        </motion.p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rows.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                rotateX: -4,
                boxShadow: "0px 15px 40px rgba(255,0,150,0.4)",
              }}
              className="relative bg-gradient-to-br from-pink-700/40 to-purple-800/40 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10"
            >
              {/* Event Image */}
              {b.event_image && !imageErrors.has(b.id) ? (
                <img
                  src={b.event_image.startsWith('http') 
                    ? b.event_image 
                    : `http://localhost:5000${b.event_image.startsWith("/uploads/") ? b.event_image : "/uploads/" + b.event_image}`
                  }
                  alt={b.event_title}
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                  onError={() => handleImageError(b.id)}
                />
              ) : (
                <div className="w-full h-40 bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-xl mb-4 shadow-md flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs opacity-80">Event Image</p>
                  </div>
                </div>
              )}

              {/* Event Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-300">
                  {b.event_title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Booking #{b.id}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-2 text-gray-100 text-sm">
                <p>🎫 <b>Quantity:</b> {b.quantity}</p>
                <p>💰 <b>Total:</b> ₹{b.total_amount}</p>
                <p>
                  📌 <b>Status:</b>{" "}
                  <span
                    className={`px-2 py-1 rounded-lg text-xs ${
                      b.status === "cancelled"
                        ? "bg-red-500/30 text-red-300"
                        : "bg-green-500/30 text-green-300"
                    }`}
                  >
                    {b.status}
                  </span>
                </p>
              </div>

              {/* Event Date & Time */}
              <div className="mt-3 text-gray-300 text-sm">
                📅 {b.event_date} | ⏰ {b.event_time}
              </div>

              {/* Cancel Button */}
              {b.status !== "cancelled" && (
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 10px 25px rgba(255,50,50,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => cancel(b.id)}
                  className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 
                             text-white font-semibold py-2 rounded-xl 
                             shadow-md transition-all"
                >
                  ❌ Cancel Booking
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA Footer */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 
                       bg-clip-text text-transparent mb-4">
          🎉 Discover More Events
        </h3>
        <p className="text-gray-300 mb-6">
          Find your next experience and keep your tickets safe here.
        </p>

        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl font-semibold 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
                       shadow-lg text-white"
          >
            🔍 Explore Events
          </motion.button>
        </Link>
      </div>
    </div>
  );
}