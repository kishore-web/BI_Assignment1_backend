const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect");
const Event = require("./models/event.model");
require("dotenv").config();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

app.use(express.json());

initializeDatabase();

app.listen(PORT, () => {
  console.log("Port is running on", PORT);
});

app.post("/events", async (req, res) => {
  try {
    const {
      eventTitle,
      imageUrl,
      eventTime,
      hostedBy,
      sessionStartTime,
      sessionEndTime,
      details,
    } = req.body;
    const createEvent = new Event(req.body);
    const saveEvent = await createEvent.save();
    if (
      !eventTitle ||
      !imageUrl ||
      !eventTime ||
      !hostedBy ||
      !sessionStartTime ||
      !sessionEndTime ||
      !details
    ) {
      res.status(400).json({ message: "Missing require fields" });
    }
    return res.status(201).json(saveEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    if (events.length === 0) {
      return res.status(404).json({ message: "Event data not found" });
    }
    return res.status(200).json({ events });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to fetch event data" });
  }
});

app.get("/events/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).send(event);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to fetch event data" });
  }
});
