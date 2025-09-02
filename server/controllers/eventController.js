// import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } from "../models/EventModel.js";

// export const getEvents = async (req, res) => {
//   try {
//     const events = await getAllEvents();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const getEventDetails = async (req, res) => {
//   try {
//     const event = await getEventById(req.params.id);
//     if (!event) return res.status(404).json({ message: "Event not found" });
//     res.json(event);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const addEvent = async (req, res) => {
//   try {
//     const id = await createEvent(req.body);
//     res.json({ id, message: "Event created successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const editEvent = async (req, res) => {
//   try {
//     await updateEvent(req.params.id, req.body);
//     res.json({ message: "Event updated successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const removeEvent = async (req, res) => {
//   try {
//     await deleteEvent(req.params.id);
//     res.json({ message: "Event deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import multer from "multer";
// import path from "path";
// import {
//   getAllEvents,
//   getEventById,
//   createEvent,
//   updateEvent,
//   deleteEvent,
// } from "../models/EventModel.js";

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save inside /uploads
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// export const upload = multer({ storage });

// // ================== Controllers ==================

// // Get all events
// export const getEvents = async (req, res) => {
//   try {
//     const events = await getAllEvents();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get event by ID
// export const getEventDetails = async (req, res) => {
//   try {
//     const event = await getEventById(req.params.id);
//     if (!event) return res.status(404).json({ message: "Event not found" });
//     res.json(event);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Add event
// export const addEvent = async (req, res) => {
//   try {
//     let img_url;

//     if (req.file) {
//       // Uploaded file
//       img_url = `/uploads/${req.file.filename}`;
//     } else if (req.body.img_url) {
//       // URL from body
//       img_url = req.body.img_url;
//     } else {
//       img_url = null;
//     }

//     const eventData = { ...req.body, img_url };
//     const eventId = await createEvent(eventData);

//     res.status(201).json({ id: eventId, ...eventData });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Edit event
// export const editEvent = async (req, res) => {
//   try {
//     let img_url;

//     if (req.file) {
//       img_url = `/uploads/${req.file.filename}`;
//     } else if (req.body.img_url) {
//       img_url = req.body.img_url;
//     }

//     const eventData = { ...req.body, ...(img_url && { img_url }) };

//     await updateEvent(req.params.id, eventData);

//     res.json({ message: "Event updated", eventData });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Delete event
// export const removeEvent = async (req, res) => {
//   try {
//     await deleteEvent(req.params.id);
//     res.json({ message: "Event deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


import multer from "multer";
import path from "path";
import fs from "fs";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../models/EventModel.js";

// ================== Config ==================
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

// ================== Multer Config ==================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save in /server/uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

export const upload = multer({ storage });

// ================== Upload Only API ==================
export const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `${BASE_URL}/uploads/${req.file.filename}`;

    res.json({
      url: fileUrl, // ✅ frontend will directly use this in <img src={url} />
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================== Controllers ==================

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await getAllEvents();

    const updatedEvents = events.map(event => ({
      ...event,
      img_url: event.img_url
        ? event.img_url.startsWith("http")
          ? event.img_url
          : `${BASE_URL}${event.img_url.startsWith("/") ? "" : "/"}${event.img_url}`
        : null,
    }));

    res.json(updatedEvents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get event by ID
export const getEventDetails = async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const updatedEvent = {
      ...event,
      img_url: event.img_url
        ? event.img_url.startsWith("http")
          ? event.img_url
          : `${BASE_URL}${event.img_url.startsWith("/") ? "" : "/"}${event.img_url}`
        : null,
    };

    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add event
export const addEvent = async (req, res) => {
  try {
    let img_url = null;

    if (req.file) {
      img_url = `/uploads/${req.file.filename}`;
    } else if (req.body.img_url) {
      img_url = req.body.img_url;
    }

    const eventData = { ...req.body, img_url };
    const eventId = await createEvent(eventData);

    res.status(201).json({
      id: eventId,
      ...eventData,
      img_url: img_url
        ? img_url.startsWith("http")
          ? img_url
          : `${BASE_URL}${img_url.startsWith("/") ? "" : "/"}${img_url}`
        : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Edit event
export const editEvent = async (req, res) => {
  try {
    let img_url = req.body.img_url;

    if (req.file) {
      // delete old file if exists
      const oldEvent = await getEventById(req.params.id);
      if (oldEvent && oldEvent.img_url && oldEvent.img_url.startsWith("/uploads/")) {
        const oldPath = `.${oldEvent.img_url}`;
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      img_url = `/uploads/${req.file.filename}`;
    }

    const eventData = { ...req.body, ...(img_url && { img_url }) };
    await updateEvent(req.params.id, eventData);

    res.json({
      message: "Event updated",
      eventData: {
        ...eventData,
        img_url: img_url
          ? img_url.startsWith("http")
            ? img_url
            : `${BASE_URL}${img_url.startsWith("/") ? "" : "/"}${img_url}`
          : null,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete event
export const removeEvent = async (req, res) => {
  try {
    const oldEvent = await getEventById(req.params.id);

    if (oldEvent && oldEvent.img_url && oldEvent.img_url.startsWith("/uploads/")) {
      const oldPath = `.${oldEvent.img_url}`;
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    await deleteEvent(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
