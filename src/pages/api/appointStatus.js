import { connectDb } from "@/utils/dbCon";
import appoinment from "@/models/Appoinment";

export default async function task(req, res) {
  connectDb();

  switch (req.method) {
    case "PUT":
      try {
        const id = req.body._id;
        const body = req.body;
        const appoint = await appoinment.findByIdAndUpdate(id, body, {
          new: true,
        });
        return res.status(201).json("Updated - ", appoint);
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }

    default:
      return res.status(400).json("Invalid Method");
  }
}
