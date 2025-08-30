// import { useState } from "react";
// import API from "../api/api";
// import useAuth from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

// export default function LoginRegister() {
//   const [mode, setMode] = useState("login");
//   const [form, setForm] = useState({ name:"", email:"", password:"" });
//   const { login } = useAuth();
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       if (mode === "register") {
//         await API.post("/auth/register", form);
//         alert("Registered! Please login.");
//         setMode("login");
//       } else {
//         const { data } = await API.post("/auth/login", { email: form.email, password: form.password });
//         login(data);
//         nav("/");
//       }
//     } catch (e) {
//       alert(e?.response?.data?.message || "Request failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center py-16">
//       <div className="bg-white border rounded p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">{mode === "login" ? "Login" : "Register"}</h2>
//         <form onSubmit={submit} className="space-y-3">
//           {mode === "register" && (
//             <input className="border px-3 py-2 rounded w-full" placeholder="Name"
//                    value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
//           )}
//           <input className="border px-3 py-2 rounded w-full" type="email" placeholder="Email"
//                  value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/>
//           <input className="border px-3 py-2 rounded w-full" type="password" placeholder="Password"
//                  value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required/>
//           <button className="bg-primary text-white px-4 py-2 rounded w-full">
//             {mode === "login" ? "Login" : "Register"}
//           </button>
//         </form>
//         <p className="mt-3 text-sm">
//           {mode === "login" ? "No account?" : "Already registered?"}{" "}
//           <button className="text-primary" onClick={()=>setMode(mode==="login"?"register":"login")}>
//             {mode === "login" ? "Create one" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import API from "../api/api";
// import useAuth from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function LoginRegister() {
//   const [mode, setMode] = useState("login");
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const { login } = useAuth();
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       if (mode === "register") {
//         await API.post("/auth/register", form);
//         alert("Registered! Please login.");
//         setMode("login");
//       } else {
//         const { data } = await API.post("/auth/login", {
//           email: form.email,
//           password: form.password,
//         });
//         login(data);
//         nav("/");
//       }
//     } catch (e) {
//       alert(e?.response?.data?.message || "Request failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60, scale: 0.9 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white"
//       >
//         <motion.h2
//           key={mode}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="text-2xl font-bold mb-6 text-center"
//         >
//           {mode === "login" ? "Welcome Back 👋" : "Create an Account 🚀"}
//         </motion.h2>

//         <form onSubmit={submit} className="space-y-4">
//           {mode === "register" && (
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               className="bg-white/20 border border-white/30 px-4 py-3 rounded-xl w-full text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//           )}
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="email"
//             className="bg-white/20 border border-white/30 px-4 py-3 rounded-xl w-full text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="password"
//             className="bg-white/20 border border-white/30 px-4 py-3 rounded-xl w-full text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             required
//           />

//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg text-white"
//           >
//             {mode === "login" ? "Login" : "Register"}
//           </motion.button>
//         </form>

//         <p className="mt-6 text-sm text-center">
//           {mode === "login" ? "No account?" : "Already registered?"}{" "}
//           <button
//             onClick={() =>
//               setMode(mode === "login" ? "register" : "login")
//             }
//             className="text-purple-300 hover:underline"
//           >
//             {mode === "login" ? "Create one" : "Login"}
//           </button>
//         </p>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";
import API from "../api/api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function LoginRegister() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (mode === "register" && !form.name.trim()) {
      setError("Name is required for registration.");
      return;
    }
    if (!form.email.trim() || !form.password.trim()) {
      setError("Email and Password are required.");
      return;
    }

    try {
      if (mode === "register") {
        await API.post("/auth/register", form);
        setMode("login");
        setForm({ name: "", email: "", password: "" });
        setError("✅ Registered! Please login.");
      } else {
        const { data } = await API.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        login(data);
        nav("/");
      }
    } catch (e) {
      setError(e?.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600">
      <div className="bg-gradient-to-br from-purple-900/70 to-indigo-900/70 backdrop-blur-xl border border-purple-400/30 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-[1.02] duration-300">
        
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300 animate-pulse">
          {mode === "login" ? "Welcome Back 👋" : "Create Account ✨"}
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-300 bg-red-800/30 px-3 py-2 rounded-md animate-bounce">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          {mode === "register" && (
            <input
              className="w-full px-4 py-2 rounded-lg bg-purple-800/40 text-white placeholder-gray-300 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          )}

          <input
            className="w-full px-4 py-2 rounded-lg bg-purple-800/40 text-white placeholder-gray-300 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 transition"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Password with toggle */}
          <div className="relative">
            <input
              className="w-full px-4 py-2 rounded-lg bg-purple-800/40 text-white placeholder-gray-300 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 transition pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-300 hover:text-pink-400 transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:brightness-110 duration-300"
          >
            {mode === "login" ? "Login 🚀" : "Register 🎉"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-300">
          {mode === "login" ? "No account?" : "Already registered?"}{" "}
          <button
            className="text-pink-400 font-semibold hover:underline transition"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Create one" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
