import { connectToDB } from "@/utils/database";
import Products from "@/models/products";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = await req.body;
    console.log(id);
    // console.log("name", name);
    // Process a POST request
    try {
      await connectToDB();

      const result = await Products.findOne({ _id: id });

      await Products.findOneAndUpdate(
        { _id: id },
        { $inc: { __v: 1 } }
        // { upsert: true }
      );

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(200).json({ success: false, error: "failed to load data" });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: "failed to load data" });
      // res.status(500).json({ error: "failed to load data" });
    }
  } else {
    // Handle any other HTTP method
  }
}
