import { connectToDB } from "@/utils/database";
import Ads from "@/models/ads";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = await req.body;
    console.log("id", id);

    // Process a POST request
    try {
      await connectToDB("Template");

      const ads = await Ads.findOne({ ad_id: id });
      await Ads.findOneAndUpdate(
        { ad_id: id },
        { $inc: { __v: 1 } }
        // { upsert: true }
      );

      return res.json(ads);
    } catch (error) {
      console.log(error);
      return new Response(
        JSON.stringify({ message: "Failed to create a new post" }),
        { status: 500 }
      );
    }
  }
}
