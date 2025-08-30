// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-6">
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-black animate-gradient" />

//       {/* Floating glowing blobs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//       <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

//       {/* Page Content */}
//       <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
//         Smart Event Booking 🎉
//       </h1>

//       <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
//         Browse events, book seats, and manage reservations with ease.
//       </p>

//       <Link
//         to="/events"
//         className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
//       >
//         🚀 Explore Events
//       </Link>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { Calendar, Ticket, Users } from "lucide-react";

// export default function LandingPage() {
//   return (
//     <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center py-24 px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
//           Smart Event Booking 🎉
//         </h1>
//         <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
//           Discover events, book your seats instantly, and manage reservations — all in one place.
//         </p>

//         <div className="flex gap-4">
//           <Link
//             to="/events"
//             className="px-6 py-3 rounded-lg font-semibold bg-white text-indigo-700 shadow-lg hover:shadow-2xl transition"
//           >
//             Explore Events
//           </Link>
//           <Link
//             to="/login"
//             className="px-6 py-3 rounded-lg font-semibold bg-pink-500 hover:bg-pink-600 transition"
//           >
//             Login
//           </Link>
//         </div>
//       </section>

//       {/* Features Row */}
//       <section className="bg-white/10 backdrop-blur-md py-12">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <Calendar size={36} className="mx-auto mb-3 text-pink-300" />
//             <h3 className="text-xl font-semibold">Easy Scheduling</h3>
//             <p className="text-gray-200 text-sm">
//               Browse and discover upcoming events effortlessly.
//             </p>
//           </div>
//           <div>
//             <Ticket size={36} className="mx-auto mb-3 text-purple-300" />
//             <h3 className="text-xl font-semibold">Quick Booking</h3>
//             <p className="text-gray-200 text-sm">
//               Reserve seats instantly with just a few clicks.
//             </p>
//           </div>
//           <div>
//             <Users size={36} className="mx-auto mb-3 text-indigo-300" />
//             <h3 className="text-xl font-semibold">For Everyone</h3>
//             <p className="text-gray-200 text-sm">
//               Join thousands of people enjoying SmartEvent.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import { Calendar, Ticket, Users } from "lucide-react";

export default function LandingPage() {
  const recentEvents = [
    { id: 1, title: "Tech Conference 2025", date: "Sep 10, 2025", location: "Bangalore" },
    { id: 2, title: "Music Fest Live", date: "Sep 15, 2025", location: "Mumbai" },
    { id: 3, title: "Startup Meetup", date: "Sep 22, 2025", location: "Delhi" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Smart Event Booking 🎉
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
          Discover events, book your seats instantly, and manage reservations — all in one place.
        </p>
        <Link
          to="/events"
          className="px-6 py-3 rounded-lg font-semibold bg-white/20 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 backdrop-blur-md"
        >
          Explore Events
        </Link>
      </section>

      {/* Features Row */}
      <section className="bg-white/10 backdrop-blur-md py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 hover:scale-105 shadow-lg">
            <Calendar size={36} className="mx-auto mb-3 text-pink-300" />
            <h3 className="text-xl font-semibold">Easy Scheduling</h3>
            <p className="text-gray-200 text-sm">
              Browse and discover upcoming events effortlessly.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 hover:scale-105 shadow-lg">
            <Ticket size={36} className="mx-auto mb-3 text-purple-300" />
            <h3 className="text-xl font-semibold">Quick Booking</h3>
            <p className="text-gray-200 text-sm">
              Reserve seats instantly with just a few clicks.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 hover:scale-105 shadow-lg">
            <Users size={36} className="mx-auto mb-3 text-indigo-300" />
            <h3 className="text-xl font-semibold">For Everyone</h3>
            <p className="text-gray-200 text-sm">
              Join thousands of people enjoying SmartEvent.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">🎟️ Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md 
                           hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-200">{event.date}</p>
                <p className="text-sm text-gray-200">{event.location}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block mt-4 text-pink-300 font-semibold hover:text-pink-400 transition"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
