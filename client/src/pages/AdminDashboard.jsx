// import { useEffect, useState } from "react";
// import API from "../api/api";
// import useAuth from "../hooks/useAuth";
// import AdminSidebar from "../components/admin/AdminSidebar";
// import Loader from "../components/common/Loader";

// const empty = {
//   title: "",
//   description: "",
//   location: "",
//   date: "",
//   total_seats: "",
//   available_seats: "",
//   price: "",
//   img: "", // we store this in the form, but backend gets img_url
// };

// export default function AdminDashboard() {
//   const { auth } = useAuth();
//   const [events, setEvents] = useState(null);
//   const [form, setForm] = useState(empty);
//   const [editId, setEditId] = useState(null);

//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("date");

//   // ✅ helper to fix relative image paths
//   const getImageUrl = (path) => {
//     if (!path) return "";
//     return path.startsWith("http") ? path : `${API.defaults.baseURL}${path}`;
//   };

//   // ---- Load events ----
//   const load = async () => {
//     try {
//       const { data } = await API.get("/events");
//       setEvents(data || []);
//     } catch (err) {
//       console.error("Error loading events:", err);
//       alert("Failed to load events");
//     }
//   };

//   useEffect(() => {
//     load();
//     return () => {
//       if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
//     };
//   }, []); // eslint-disable-line

//   if (!auth || auth.user?.role !== "admin") {
//     return <div className="p-6">Admin access only.</div>;
//   }

//   // ---- Save (create or update) ----
//   const save = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       let payload = { ...form };

//       // ✅ ensure numeric values
//       payload.total_seats = Number(payload.total_seats);
//       payload.available_seats = Number(payload.available_seats);
//       payload.price = Number(payload.price);

//       // ✅ handle image upload
//       if (file) {
//         const formDataImg = new FormData();
//         formDataImg.append("image", file);

//         const res = await API.post("/events/upload", formDataImg, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         console.log("✅ Upload response:", res.data);
//         payload.img_url = res.data.url; // backend should return url/path
//       } else if (payload.img) {
//         // if user entered image URL manually
//         payload.img_url = payload.img;
//       }

//       // ✅ cleanup: backend should only get img_url
//       delete payload.img;

//       console.log("📤 Sending payload:", payload);

//       if (editId) {
//         await API.put(`/events/${editId}`, payload);
//         alert("Event updated successfully!");
//       } else {
//         await API.post("/events", payload);
//         alert("Event added successfully!");
//       }

//       // ✅ reset form
//       setFile(null);
//       setForm(empty);
//       setEditId(null);
//       setPreview("");
//       load();
//     } catch (err) {
//       console.error("❌ Error saving event:", err.response?.data || err.message);
//       alert("Failed to save event: " + (err.response?.data?.message || err.message));
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ---- Delete ----
//   const del = async (id) => {
//     if (confirm("Delete event?")) {
//       try {
//         await API.delete(`/events/${id}`);
//         setEvents((prev) => prev.filter((ev) => ev.id !== id));
//       } catch (err) {
//         console.error("Delete error:", err);
//         alert("Failed to delete event");
//       }
//     }
//   };

//   // ---- Edit ----
//   const startEdit = (ev) => {
//     setEditId(ev.id);
//     setForm({
//       title: ev.title || "",
//       description: ev.description || "",
//       location: ev.location || "",
//       date: ev.date ? new Date(ev.date).toISOString().slice(0, 16) : "",
//       total_seats: Number(ev.total_seats) || "",
//       available_seats: Number(ev.available_seats) || "",
//       price: Number(ev.price) || "",
//       img: ev.img || ev.img_url || "",
//     });
//     setFile(null);
//     setPreview(ev.img || ev.img_url || "");
//   };

//   // ---- Filter + Sort ----
//   const filteredEvents = events
//     ? [...events]
//         .filter(
//           (ev) =>
//             ev.title?.toLowerCase().includes(search.toLowerCase()) ||
//             ev.location?.toLowerCase().includes(search.toLowerCase())
//         )
//         .sort((a, b) => {
//           if (sortBy === "date") return new Date(a.date) - new Date(b.date);
//           if (sortBy === "price") return a.price - b.price;
//           if (sortBy === "seats") return b.available_seats - a.available_seats;
//           return 0;
//         })
//     : [];

//   // ---- File Change ----
//   const handleFileChange = (e) => {
//     const f = e.target.files?.[0] || null;

//     if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);

//     setFile(f);

//     if (f) {
//       const blobUrl = URL.createObjectURL(f);
//       setPreview(blobUrl);
//       setForm((prev) => ({ ...prev, img: "" }));
//     } else {
//       setPreview(form.img || "");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 text-white">
//       <AdminSidebar />
//       <div className="flex-1 p-6">
//         <h1 className="text-3xl font-bold mb-6 text-pink-300 drop-shadow-lg">
//           🎤 Manage Events
//         </h1>

//         {/* form */}
//         <form
//           onSubmit={save}
//           className="grid md:grid-cols-2 gap-4 bg-black/40 p-6 border border-pink-400/30 rounded-2xl shadow-xl backdrop-blur-md"
//         >
//           {[{ key: "title", label: "📌 Event Title" },
//             { key: "description", label: "📝 Description" },
//             { key: "location", label: "📍 Location" }].map(({ key, label }) => (
//             <div key={key} className="flex flex-col">
//               <label className="text-sm text-pink-300 mb-1">{label}</label>
//               <input
//                 required
//                 className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
//                 placeholder={label}
//                 value={form[key]}
//                 onChange={(e) => setForm({ ...form, [key]: e.target.value })}
//               />
//             </div>
//           ))}

//           {/* Date & Time */}
//           <div className="flex flex-col">
//             <label className="text-sm text-pink-300 mb-1">📅 Date & Time</label>
//             <input
//               type="datetime-local"
//               required
//               className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white focus:ring-2 focus:ring-pink-400 transition"
//               value={form.date}
//               onChange={(e) => setForm({ ...form, date: e.target.value })}
//             />
//           </div>

//           {/* numeric inputs */}
//           {[{ key: "total_seats", label: "💺 Total Seats" },
//             { key: "available_seats", label: "🎟 Available Seats" },
//             { key: "price", label: "💰 Ticket Price" }].map(({ key, label }) => (
//             <div key={key} className="flex flex-col">
//               <label className="text-sm text-pink-300 mb-1">{label}</label>
//               <input
//                 type="number"
//                 min="0"
//                 required
//                 className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
//                 value={form[key]}
//                 onChange={(e) => setForm({ ...form, [key]: e.target.value })}
//                 placeholder={label}
//               />
//             </div>
//           ))}

//           {/* Image URL + File upload + preview */}
//           <div className="col-span-full grid md:grid-cols-3 gap-4 items-start">
//             <div className="md:col-span-2 flex flex-col">
//               <label className="text-sm text-pink-300 mb-1">🖼 Image URL</label>
//               <input
//                 type="text"
//                 placeholder="Paste image URL (or upload below)"
//                 className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
//                 value={form.img}
//                 onChange={(e) => {
//                   setForm({ ...form, img: e.target.value });
//                   setPreview(e.target.value);
//                   setFile(null);
//                 }}
//               />
//               <div className="mt-3">
//                 <label className="text-sm text-pink-300 mb-1 block">
//                   📁 Upload from device
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="text-sm w-full"
//                 />
//                 <div className="text-xs text-gray-400 mt-2">
//                   If you upload a file, it will be sent to the server and its
//                   returned URL will be saved.
//                 </div>
//               </div>
//             </div>

//             <div className="bg-black/20 border border-purple-400/20 rounded-lg p-2 flex items-center justify-center">
//               {preview ? (
//                 <img
//                   src={getImageUrl(preview)}
//                   alt="preview"
//                   className="w-full h-36 object-cover rounded-md"
//                 />
//               ) : (
//                 <div className="text-sm text-gray-300 text-center">
//                   Image preview<br />(URL or upload)
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             disabled={saving}
//             className="col-span-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transform transition text-white px-6 py-3 rounded-xl shadow-lg font-semibold disabled:opacity-50"
//           >
//             {saving ? "⏳ Saving..." : editId ? "✨ Update Event" : "🚀 Create Event"}
//           </button>
//         </form>

//         {/* Search + Sort */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
//           <input
//             type="text"
//             placeholder="🔍 Search by title or location..."
//             className="px-4 py-2 rounded-lg bg-black/40 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 w-full md:w-1/2"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select
//             className="px-4 py-2 rounded-lg bg-black/40 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 text-white"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="date">📅 Sort by Date</option>
//             <option value="price">💰 Sort by Price</option>
//             <option value="seats">💺 Sort by Seats</option>
//           </select>
//         </div>

//         {/* Event list */}
//         {!events ? (
//           <Loader />
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6 mt-8">
//             {filteredEvents.map((ev) => (
//               <div
//                 key={ev.id}
//                 className="border border-purple-400/30 bg-black/40 rounded-2xl p-5 shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-pink-500/40 transition"
//               >
//                 <div className="flex gap-4">
//                   {ev.img || ev.img_url ? (
//                     <img
//                       src={getImageUrl(ev.img || ev.img_url)}
//                       alt={ev.title}
//                       className="w-28 h-20 object-cover rounded-md"
//                     />
//                   ) : (
//                     <div className="w-28 h-20 bg-black/30 rounded-md flex items-center justify-center text-sm text-gray-400">
//                       No image
//                     </div>
//                   )}

//                   <div className="flex-1">
//                     <div className="font-semibold text-lg text-pink-300">
//                       {ev.title}
//                     </div>
//                     <div className="text-sm text-gray-300">
//                       {ev.date
//                         ? new Date(ev.date).toLocaleString()
//                         : "No date"}{" "}
//                       • {ev.location}
//                     </div>
//                     <div className="text-sm mt-1">
//                       Seats:{" "}
//                       <span className="text-pink-400 font-semibold">
//                         {ev.available_seats}
//                       </span>{" "}
//                       / {ev.total_seats} •{" "}
//                       <span className="text-green-400 font-semibold">
//                         ₹{ev.price}
//                       </span>
//                     </div>

//                     <div className="mt-4 flex gap-4">
//                       <button
//                         onClick={() => startEdit(ev)}
//                         className="text-pink-400 hover:text-pink-300"
//                       >
//                         ✏️ Edit
//                       </button>
//                       <button
//                         onClick={() => del(ev.id)}
//                         className="text-red-400 hover:text-red-300"
//                       >
//                         🗑 Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {filteredEvents.length === 0 && (
//               <div className="text-center text-gray-400 col-span-full">
//                 ❌ No events found
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API from "../api/api";
import useAuth from "../hooks/useAuth";
import AdminSidebar from "../components/admin/AdminSidebar";
import Loader from "../components/common/Loader";

const empty = {
  title: "",
  description: "",
  location: "",
  date: "",
  total_seats: "",
  available_seats: "",
  price: "",
  img: "", // we store this in the form, but backend gets img_url
};

export default function AdminDashboard() {
  const { auth } = useAuth();
  const [events, setEvents] = useState(null);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // ✅ helper to fix relative image paths but allow blob/http
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `${API.defaults.baseURL}${path}`;
  };

  // ---- Load events ----
  const load = async () => {
    try {
      const { data } = await API.get("/events");
      setEvents(data || []);
    } catch (err) {
      console.error("Error loading events:", err);
      alert("Failed to load events");
    }
  };

  useEffect(() => {
    load();
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, []); // eslint-disable-line

  if (!auth || auth.user?.role !== "admin") {
    return <div className="p-6">Admin access only.</div>;
  }

  // ---- Save (create or update) ----
  const save = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let payload = { ...form };

      // ✅ ensure numeric values
      payload.total_seats = Number(payload.total_seats);
      payload.available_seats = Number(payload.available_seats);
      payload.price = Number(payload.price);

      // ✅ handle image upload
      if (file) {
        const formDataImg = new FormData();
        formDataImg.append("image", file);

        const res = await API.post("/events/upload", formDataImg, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("✅ Upload response:", res.data);
        payload.img_url = res.data.url; // backend should return url/path
      } else if (payload.img) {
        // if user entered image URL manually
        payload.img_url = payload.img;
      }

      // ✅ cleanup: backend should only get img_url
      delete payload.img;

      console.log("📤 Sending payload:", payload);

      if (editId) {
        await API.put(`/events/${editId}`, payload);
        alert("Event updated successfully!");
      } else {
        await API.post("/events", payload);
        alert("Event added successfully!");
      }

      // ✅ reset form
      setFile(null);
      setForm(empty);
      setEditId(null);
      setPreview("");
      load();
    } catch (err) {
      console.error("❌ Error saving event:", err.response?.data || err.message);
      alert("Failed to save event: " + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  // ---- Delete ----
  const del = async (id) => {
    if (confirm("Delete event?")) {
      try {
        await API.delete(`/events/${id}`);
        setEvents((prev) => prev.filter((ev) => ev.id !== id));
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete event");
      }
    }
  };

  // ---- Edit ----
  const startEdit = (ev) => {
    setEditId(ev.id);
    setForm({
      title: ev.title || "",
      description: ev.description || "",
      location: ev.location || "",
      date: ev.date ? new Date(ev.date).toISOString().slice(0, 16) : "",
      total_seats: Number(ev.total_seats) || "",
      available_seats: Number(ev.available_seats) || "",
      price: Number(ev.price) || "",
      img: ev.img || ev.img_url || "",
    });
    setFile(null);

    // ✅ always normalize preview through getImageUrl
    setPreview(getImageUrl(ev.img || ev.img_url || ""));
  };

  // ---- Filter + Sort ----
  const filteredEvents = events
    ? [...events]
        .filter(
          (ev) =>
            ev.title?.toLowerCase().includes(search.toLowerCase()) ||
            ev.location?.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (sortBy === "date") return new Date(a.date) - new Date(b.date);
          if (sortBy === "price") return a.price - b.price;
          if (sortBy === "seats") return b.available_seats - a.available_seats;
          return 0;
        })
    : [];

  // ---- File Change ----
  const handleFileChange = (e) => {
    const f = e.target.files?.[0] || null;

    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);

    setFile(f);

    if (f) {
      const blobUrl = URL.createObjectURL(f);
      setPreview(blobUrl);
      setForm((prev) => ({ ...prev, img: "" }));
    } else {
      setPreview(form.img || "");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 text-white">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-pink-300 drop-shadow-lg">
          🎤 Manage Events
        </h1>

        {/* form */}
        <form
          onSubmit={save}
          className="grid md:grid-cols-2 gap-4 bg-black/40 p-6 border border-pink-400/30 rounded-2xl shadow-xl backdrop-blur-md"
        >
          {[{ key: "title", label: "📌 Event Title" },
            { key: "description", label: "📝 Description" },
            { key: "location", label: "📍 Location" }].map(({ key, label }) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm text-pink-300 mb-1">{label}</label>
              <input
                required
                className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
                placeholder={label}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            </div>
          ))}

          {/* Date & Time */}
          <div className="flex flex-col">
            <label className="text-sm text-pink-300 mb-1">📅 Date & Time</label>
            <input
              type="datetime-local"
              required
              className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white focus:ring-2 focus:ring-pink-400 transition"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>

          {/* numeric inputs */}
          {[{ key: "total_seats", label: "💺 Total Seats" },
            { key: "available_seats", label: "🎟 Available Seats" },
            { key: "price", label: "💰 Ticket Price" }].map(({ key, label }) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm text-pink-300 mb-1">{label}</label>
              <input
                type="number"
                min="0"
                required
                className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                placeholder={label}
              />
            </div>
          ))}

          {/* Image URL + File upload + preview */}
          <div className="col-span-full grid md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm text-pink-300 mb-1">🖼 Image URL</label>
              <input
                type="text"
                placeholder="Paste image URL (or upload below)"
                className="border border-purple-400/40 bg-black/30 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition"
                value={form.img}
                onChange={(e) => {
                  setForm({ ...form, img: e.target.value });
                  setPreview(e.target.value);
                  setFile(null);
                }}
              />
              <div className="mt-3">
                <label className="text-sm text-pink-300 mb-1 block">
                  📁 Upload from device
                </label>
                <input
                  key={file ? file.name : "empty"} // ✅ force reset
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="text-sm w-full"
                />
                <div className="text-xs text-gray-400 mt-2">
                  If you upload a file, it will be sent to the server and its
                  returned URL will be saved.
                </div>
              </div>
            </div>

            <div className="bg-black/20 border border-purple-400/20 rounded-lg p-2 flex items-center justify-center">
              {preview ? (
                <img
                  src={
                    preview.startsWith("blob:") || preview.startsWith("http")
                      ? preview
                      : getImageUrl(preview)
                  }
                  alt="preview"
                  className="w-full h-36 object-cover rounded-md"
                />
              ) : (
                <div className="text-sm text-gray-300 text-center">
                  Image preview<br />(URL or upload)
                </div>
              )}
            </div>
          </div>

          <button
            disabled={saving}
            className="col-span-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transform transition text-white px-6 py-3 rounded-xl shadow-lg font-semibold disabled:opacity-50"
          >
            {saving ? "⏳ Saving..." : editId ? "✨ Update Event" : "🚀 Create Event"}
          </button>
        </form>

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
          <input
            type="text"
            placeholder="🔍 Search by title or location..."
            className="px-4 py-2 rounded-lg bg-black/40 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-lg bg-black/40 border border-purple-400/30 focus:ring-2 focus:ring-pink-400 text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">📅 Sort by Date</option>
            <option value="price">💰 Sort by Price</option>
            <option value="seats">💺 Sort by Seats</option>
          </select>
        </div>

        {/* Event list */}
        {!events ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="border border-purple-400/30 bg-black/40 rounded-2xl p-5 shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-pink-500/40 transition"
              >
                <div className="flex gap-4">
                  {ev.img || ev.img_url ? (
                    <img
                      src={getImageUrl(ev.img || ev.img_url)}
                      alt={ev.title}
                      className="w-28 h-20 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-28 h-20 bg-black/30 rounded-md flex items-center justify-center text-sm text-gray-400">
                      No image
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="font-semibold text-lg text-pink-300">
                      {ev.title}
                    </div>
                    <div className="text-sm text-gray-300">
                      {ev.date
                        ? new Date(ev.date).toLocaleString()
                        : "No date"}{" "}
                      • {ev.location}
                    </div>
                    <div className="text-sm mt-1">
                      Seats:{" "}
                      <span className="text-pink-400 font-semibold">
                        {ev.available_seats}
                      </span>{" "}
                      / {ev.total_seats} •{" "}
                      <span className="text-green-400 font-semibold">
                        ₹{ev.price}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => startEdit(ev)}
                        className="text-pink-400 hover:text-pink-300"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => del(ev.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredEvents.length === 0 && (
              <div className="text-center text-gray-400 col-span-full">
                ❌ No events found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
