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

export default function BookingPage() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);

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
    await API.put(`/bookings/${id}/cancel`);
    load();
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-900 px-6 py-20 text-white">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl text-gray-100 transition-all overflow-hidden
                         border-t border-b border-gray-700
                         before:absolute before:top-2 before:left-0 before:w-4 before:h-4 before:bg-gray-900 before:rounded-full
                         after:absolute after:bottom-2 after:left-0 after:w-4 after:h-4 after:bg-gray-900 after:rounded-full"
            >
              {/* Event Image */}
              {b.event_image && (
                <img
                  src={b.event_image}
                  alt={b.event_title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              {/* Event Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-pink-400">
                  {b.event_title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Booking #{b.id}
                </p>
              </div>

              <div className="space-y-1 text-gray-200 text-sm">
                <p>
                  <b>Quantity:</b> {b.quantity}
                </p>
                <p>
                  <b>Total:</b> ₹{b.total_amount}
                </p>
                <p>
                  <b>Status:</b>{" "}
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

              {/* Glassmorphism Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-md rounded-2xl flex flex-col justify-end p-4 transition-opacity pointer-events-none"
              >
                <p className="text-sm text-gray-200">
                  📅 {b.event_date} | ⏰ {b.event_time}
                </p>
              </motion.div>

              {b.status !== "cancelled" && (
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 10px 25px rgba(255,50,50,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => cancel(b.id)}
                  className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 
                             text-gray-100 font-semibold py-2 rounded-xl 
                             shadow-md transition-all relative z-10"
                >
                  ❌ Cancel Booking
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* ✨ CTA Footer Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 
                       bg-clip-text text-transparent mb-4">
          🎉 Discover More Events
        </h3>
        <p className="text-gray-400 mb-6">
          Find your next experience and keep your tickets here.
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
                     shadow-lg"
        >
          🔍 Explore Events
        </motion.button>
      </div>
    </div>
  );
}
