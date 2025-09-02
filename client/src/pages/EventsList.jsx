// import { useEffect, useState } from "react";
// import API from "../api/api";
// import EventCard from "../components/events/EventCard";
// import Loader from "../components/common/Loader";

// export default function EventsList() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [q, setQ] = useState("");
//   const [loc, setLoc] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await API.get("/events");
//         setEvents(data);
//       } catch (e) { console.error(e); }
//       finally { setLoading(false); }
//     })();
//   }, []);

//   const filtered = events.filter((e) =>
//     (e.title?.toLowerCase().includes(q.toLowerCase()) || e.description?.toLowerCase().includes(q.toLowerCase())) &&
//     (loc ? e.location?.toLowerCase().includes(loc.toLowerCase()) : true)
//   );

//   if (loading) return <Loader />;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="flex gap-3 mb-6">
//         <input className="border px-3 py-2 rounded w-full" placeholder="Search"
//                value={q} onChange={(e)=>setQ(e.target.value)} />
//         <input className="border px-3 py-2 rounded w-64" placeholder="Location"
//                value={loc} onChange={(e)=>setLoc(e.target.value)} />
//       </div>
//       {filtered.length === 0 ? (
//         <p className="text-gray-600">No events found.</p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((ev) => <EventCard key={ev.id} ev={ev} />)}
//         </div>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import API from "../api/api";
// import EventCard from "../components/events/EventCard";
// import Loader from "../components/common/Loader";

// export default function EventsList() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [q, setQ] = useState("");
//   const [loc, setLoc] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await API.get("/events");
//         setEvents(data);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   const filtered = events.filter(
//     (e) =>
//       (e.title?.toLowerCase().includes(q.toLowerCase()) ||
//         e.description?.toLowerCase().includes(q.toLowerCase())) &&
//       (loc ? e.location?.toLowerCase().includes(loc.toLowerCase()) : true)
//   );

//   if (loading) return <Loader />;

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Title */}
//       <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-10">
//         Explore Events 🎉
//       </h1>

//       {/* Search Filters */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
//         <input
//           className="px-4 py-3 rounded-xl w-full sm:w-1/2 text-white bg-gradient-to-r from-purple-800/60 to-indigo-800/60 border border-purple-500/40 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 transition duration-300 shadow-md"
//           placeholder="🔍 Search events..."
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//         />
//         <input
//           className="px-4 py-3 rounded-xl w-full sm:w-1/3 text-white bg-gradient-to-r from-purple-800/60 to-indigo-800/60 border border-purple-500/40 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 transition duration-300 shadow-md"
//           placeholder="📍 Location"
//           value={loc}
//           onChange={(e) => setLoc(e.target.value)}
//         />
//       </div>

//       {/* Event Grid */}
//       {filtered.length === 0 ? (
//         <p className="text-gray-300 text-center animate-pulse">
//           No events found 😔
//         </p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map((ev, idx) => (
//             <div
//               key={ev.id || idx}
//               className="transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
//             >
//               <EventCard ev={ev} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import API from "../api/api";
import Loader from "../components/common/Loader";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("");
  const [imageErrors, setImageErrors] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/events");
        setEvents(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleImageError = (eventId) => {
    setImageErrors(prev => new Set([...prev, eventId]));
  };

  const filtered = events.filter(
    (e) =>
      (e.title?.toLowerCase().includes(q.toLowerCase()) ||
        e.description?.toLowerCase().includes(q.toLowerCase())) &&
      (loc ? e.location?.toLowerCase().includes(loc.toLowerCase()) : true)
  );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 max-w-7xl mx-auto p-6">
      {/* Back Arrow Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-xl 
                   bg-gradient-to-r from-purple-600/50 to-pink-600/50 
                   backdrop-blur-lg border border-white/20 
                   hover:from-purple-600/70 hover:to-pink-600/70 
                   transition-all duration-300 shadow-lg text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </motion.button>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-10 drop-shadow-lg">
        Explore Events 🎉
      </h1>

      {/* Search Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
        <input
          className="px-4 py-3 rounded-xl w-full sm:w-1/2 text-white bg-gradient-to-r from-purple-800/60 to-indigo-800/60 border border-purple-500/40 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 transition duration-300 shadow-md"
          placeholder="🔍 Search events..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <input
          className="px-4 py-3 rounded-xl w-full sm:w-1/3 text-white bg-gradient-to-r from-purple-800/60 to-indigo-800/60 border border-purple-500/40 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 transition duration-300 shadow-md"
          placeholder="📍 Location"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
        />
      </div>

      {/* Event Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-300 text-center animate-pulse">
          No events found 😔
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((ev, idx) => (
            <motion.div
              key={ev.id || idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                rotateX: 8,
                rotateY: -8,
                boxShadow:
                  "0px 20px 40px rgba(255, 0, 150, 0.3), 0px 10px 20px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl transform-gpu perspective-1000 transition-all duration-500 bg-white/10 shadow-xl backdrop-blur-lg overflow-hidden"
            >
              {/* Event Image */}
              {ev.img_url && !imageErrors.has(ev.id) ? (
                <img
                  src={ev.img_url}
                  alt={ev.title}
                  className="w-full h-48 object-cover"
                  onError={() => handleImageError(ev.id)}
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs opacity-80">Event Image</p>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 text-white">
                <h3 className="text-xl font-bold">{ev.title}</h3>
                <p className="text-gray-300 text-sm">{ev.date}</p>
                <p className="mt-2 text-gray-200 line-clamp-2">
                  {ev.description}
                </p>

                <Link
                  to={`/events/${ev.id}`}
                  className="inline-block mt-3 text-pink-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}