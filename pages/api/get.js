// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { connectToDB } from "@/utils/database";
import Templates from "@/models/template";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = await req.body;
    console.log("name", name);
    // Process a POST request
    try {
      await connectToDB();

      const result = await Templates.findOne({ topic: name });

      if (result) {
        res.status(200).json({ result });
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
