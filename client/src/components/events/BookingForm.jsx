// import { useState } from "react";

// export default function BookingForm({ eventId, price, onSubmit }) {
//   const [quantity, setQuantity] = useState(1);
//   const total = (Number(price) || 0) * quantity;

//   return (
//     <form
//       onSubmit={(e)=>{e.preventDefault(); onSubmit({ quantity, event_id: eventId });}}
//       className="space-y-3 max-w-sm"
//     >
//       <label className="block text-sm">Quantity</label>
//       <input
//         type="number" min="1"
//         className="border rounded px-3 py-2 w-full"
//         value={quantity}
//         onChange={(e)=>setQuantity(Number(e.target.value))}
//         required
//       />
//       <div className="font-semibold">Total: ₹{total.toFixed(2)}</div>
//       <button className="bg-primary text-white px-4 py-2 rounded w-full">
//         Book Now
//       </button>
//     </form>
//   );
// }




import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm({ eventId, price, onSubmit }) {
  const [quantity, setQuantity] = useState(1);
  const total = (Number(price) || 0) * quantity;

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ quantity, event_id: eventId });
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 w-full max-w-sm mx-auto p-6 
                 rounded-2xl shadow-xl backdrop-blur-md 
                 bg-gradient-to-br from-purple-800/80 via-pink-700/80 to-purple-900/80 
                 border border-white/20"
    >
      {/* Quantity Label */}
      <label className="block text-lg font-semibold text-white/90">
        🎟️ Select Tickets
      </label>

      {/* Quantity Input */}
      <motion.input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
        whileFocus={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,0,150,0.6)" }}
        className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 
                   font-medium border-2 border-pink-400/50 focus:outline-none
                   shadow-md"
      />

      {/* Total Amount */}
      <div className="text-lg font-bold text-pink-200">
        💰 Total: <span className="text-white">₹{total.toFixed(2)}</span>
      </div>

      {/* Book Now Button */}
      <motion.button
        type="submit"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 8px 25px rgba(255, 0, 150, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-700 
                   text-white font-bold py-3 rounded-xl shadow-lg text-lg
                   transition-all duration-300"
      >
        🚀 Book Now
      </motion.button>
    </motion.form>
  );
}
