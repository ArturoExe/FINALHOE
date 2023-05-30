import { connectDb } from "@/utils/dbCon";
import appoinment from "@/models/Appoinment";
import { Types } from "mongoose";

export default async function task(req, res) {
  connectDb();

  switch (req.method) {
    case "POST":
      try {
        const id = req.body._id;
        const appoint = await appoinment.findByIdAndDelete(id);
        return res.status(201).json("completed");
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }

    default:
      return res.status(400).json("Invalid Method");
  }
}
