// import { Link } from "react-router-dom";

// export default function EventCard({ ev }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
//       {ev.img && <img src={ev.img} alt={ev.title} className="h-40 w-full object-cover rounded-md mb-3" />}
//       <h3 className="text-lg font-semibold">{ev.title}</h3>
//       <p className="text-sm text-gray-600">{new Date(ev.date).toLocaleString()}</p>
//       <p className="text-sm text-gray-500">{ev.location}</p>
//       <div className="flex justify-between items-center mt-3">
//         <span className="text-primary font-semibold">₹{ev.price}</span>
//         <span className={`text-xs px-2 py-1 rounded ${ev.available_seats>0?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}`}>
//           {ev.available_seats} seats
//         </span>
//       </div>
//       <Link to={`/events/${ev.id}`} className="mt-4 inline-block text-primary">View details →</Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function EventCard({ ev }) {
  const backendUrl = "http://localhost:5000"; // ✅ backend URL
  let imageUrl = null;

  // ✅ Check if `ev.img` is a full URL or just a filename
  if (ev.img) {
    if (ev.img.startsWith("http://") || ev.img.startsWith("https://")) {
      imageUrl = ev.img; // direct external URL
    } else {
      imageUrl = `${backendUrl}/uploads/${ev.img}`; // file stored in backend uploads folder
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden 
                 hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* Event Image */}
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt={ev.title}
          className="h-48 w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{ev.title}</h3>
        <p className="text-sm text-gray-600 flex items-center">
          📅 {new Date(ev.date).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">📍 {ev.location}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-indigo-600">
            ₹{ev.price}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium 
              ${
                ev.available_seats > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            {ev.available_seats} seats
          </span>
        </div>

        {/* Button */}
        <Link
          to={`/events/${ev.id}`}
          className="mt-4 w-full inline-block text-center py-2 
                     bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                     rounded-lg font-medium shadow hover:from-indigo-600 
                     hover:to-purple-700 transition-all duration-300"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
