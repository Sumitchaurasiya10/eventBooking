// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// export default function Navbar() {
//   const { auth, logout } = useAuth();
//   const nav = useNavigate();

//   return (
//     <nav className="bg-primary text-white px-6 py-3 shadow">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <Link to="/" className="font-bold text-xl">SmartEvent</Link>
//         <div className="flex items-center gap-5">
//           <Link to="/events" className="hover:text-amber-200">Events</Link>
//           {auth && <Link to="/bookings" className="hover:text-amber-200">My Bookings</Link>}
//           {auth?.user?.role === "admin" && (
//             <Link to="/admin" className="hover:text-amber-200">Admin</Link>
//           )}
//           {!auth ? (
//             <Link to="/login" className="bg-white text-primary px-3 py-1 rounded">Login</Link>
//           ) : (
//             <button
//               onClick={() => { logout(); nav("/"); }}
//               className="bg-white text-primary px-3 py-1 rounded"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const { auth, logout } = useAuth();
//   const nav = useNavigate();
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        
//         {/* Logo */}
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link to="/" className="font-extrabold text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
//             SmartEvent
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 text-white font-medium">
//           <motion.div whileHover={{ scale: 1.1 }}><Link to="/events" className="hover:text-pink-300 transition">Events</Link></motion.div>
//           {auth && (
//             <motion.div whileHover={{ scale: 1.1 }}>
//               <Link to="/bookings" className="hover:text-pink-300 transition">My Bookings</Link>
//             </motion.div>
//           )}
//           {auth?.user?.role === "admin" && (
//             <motion.div whileHover={{ scale: 1.1 }}>
//               <Link to="/admin" className="hover:text-pink-300 transition">Admin</Link>
//             </motion.div>
//           )}
//           {!auth ? (
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Link to="/login" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl transition">
//                 Login
//               </Link>
//             </motion.div>
//           ) : (
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => { logout(); nav("/"); }}
//               className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition"
//             >
//               Logout
//             </motion.button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setOpen(!open)} className="md:hidden text-white">
//           {open ? <X size={28}/> : <Menu size={28}/>}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 px-6 py-4 flex flex-col gap-4 text-white font-medium"
//         >
//           <Link to="/events" onClick={() => setOpen(false)} className="hover:text-pink-300">Events</Link>
//           {auth && <Link to="/bookings" onClick={() => setOpen(false)} className="hover:text-pink-300">My Bookings</Link>}
//           {auth?.user?.role === "admin" && <Link to="/admin" onClick={() => setOpen(false)} className="hover:text-pink-300">Admin</Link>}
//           {!auth ? (
//             <Link to="/login" onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
//               Login
//             </Link>
//           ) : (
//             <button
//               onClick={() => { logout(); nav("/"); setOpen(false); }}
//               className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
//             >
//               Logout
//             </button>
//           )}
//         </motion.div>
//       )}
//     </nav>
//   );
// }



// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import useAuth from "../../hooks/useAuth";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const { auth, logout } = useAuth();
//   const nav = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { to: "/events", label: "Events" },
//     auth && { to: "/bookings", label: "My Bookings" },
//     auth?.user?.role === "admin" && { to: "/admin", label: "Admin" },
//   ].filter(Boolean);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
//         >
//           SmartEvent
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6">
//           {navLinks.map((link, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.1, y: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Link
//                 to={link.to}
//                 className="text-white/90 hover:text-pink-300 font-medium transition"
//               >
//                 {link.label}
//               </Link>
//             </motion.div>
//           ))}

//           {!auth ? (
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to="/login"
//                 className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg"
//               >
//                 Login
//               </Link>
//             </motion.div>
//           ) : (
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 logout();
//                 nav("/");
//               }}
//               className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg"
//             >
//               Logout
//             </motion.button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 p-6 space-y-4"
//           >
//             {navLinks.map((link, i) => (
//               <Link
//                 key={i}
//                 to={link.to}
//                 className="block text-white/90 hover:text-pink-300 font-medium transition"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             {!auth ? (
//               <Link
//                 to="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-center shadow-lg"
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={() => {
//                   logout();
//                   nav("/");
//                   setMenuOpen(false);
//                 }}
//                 className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg"
//               >
//                 Logout
//               </button>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


















import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { auth, logout } = useAuth();
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/events", label: "Events" },
    auth && { to: "/bookings", label: "My Bookings" },
    auth?.user?.role === "admin" && { to: "/admin", label: "Admin" },
  ].filter(Boolean);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 
                   bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 
                   backdrop-blur-md shadow-xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg hover:scale-110 transition-transform duration-300"
          >
            SmartEvent
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="text-white/90 hover:text-yellow-300 font-medium transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {!auth ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                >
                  Login
                </Link>
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  logout();
                  nav("/");
                }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-red-500/40 transition-all duration-300"
              >
                Logout
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 
                         backdrop-blur-md border-t border-white/20 p-6 space-y-4 shadow-lg"
            >
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="block text-white/90 hover:text-yellow-300 font-medium transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!auth ? (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-center shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    nav("/");
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-red-500/40 transition-all duration-300"
                >
                  Logout
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer so content doesn't hide behind navbar */}
      <div className="h-20"></div>
    </>
  );
}
