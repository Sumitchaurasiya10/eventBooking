// import { Link, useLocation } from "react-router-dom";

// export default function AdminSidebar() {
//   const { pathname } = useLocation();
//   const Item = ({ to, children }) => (
//     <Link
//       to={to}
//       className={`block px-3 py-2 rounded ${pathname===to?'bg-primary text-white':'hover:bg-gray-100'}`}
//     >
//       {children}
//     </Link>
//   );
//   return (
//     <aside className="w-60 p-4 border-r min-h-[calc(100vh-64px)]">
//       <h2 className="font-bold mb-4">Admin</h2>
//       <nav className="space-y-2">
//         <Item to="/admin">Overview</Item>
//         <Item to="/admin/events">Events</Item>
//         <Item to="/admin/bookings">Bookings</Item>
//       </nav>
//     </aside>
//   );
// }

import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Overview", to: "/admin", color: "from-pink-500 to-purple-600" },
    { name: "Events", to: "/events", color: "from-pink-400 to-purple-500" },
    { name: "Bookings", to: "/bookings", color: "from-pink-600 to-purple-700" },
  ];

  const Item = ({ to, children, color }) => {
    const isActive = pathname === to;
    return (
      <Link
        to={to}
        className={`
          relative block px-5 py-3 rounded-xl font-semibold text-white text-lg
          transition-transform transform perspective-1000
          overflow-hidden
          ${isActive 
            ? `bg-gradient-to-r ${color} shadow-[0_0_25px_rgba(255,0,255,0.6)] scale-105` 
            : 'bg-gray-900 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]'}
        `}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          e.currentTarget.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.05)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        }}
      >
        {children}
        {/* Neon border pulse */}
        <span className={`
          absolute inset-0 rounded-xl
          border-2 border-transparent
          ${isActive ? 'animate-pulse' : 'hover:border-pink-400'}
        `}></span>
      </Link>
    );
  };

  return (
    <aside className="relative w-64 p-6 border-r min-h-[calc(100vh-64px)] bg-gradient-to-b from-pink-700 to-purple-900 shadow-lg overflow-hidden">
      {/* Animated Light Streak */}
      <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <span className="absolute w-64 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 opacity-30
          animate-lightmove"></span>
      </span>

      <h2 className="font-bold text-2xl mb-6 text-white tracking-wider">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Item key={item.to} to={item.to} color={item.color}>
            {item.name}
          </Item>
        ))}
      </nav>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes lightmove {
            0% { transform: translateX(-100%) }
            50% { transform: translateX(100%) }
            100% { transform: translateX(-100%) }
          }
          .animate-lightmove {
            animation: lightmove 5s linear infinite;
          }
        `}
      </style>
    </aside>
  );
}
