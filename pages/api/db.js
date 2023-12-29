// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { MongoClient, ServerApiVersion } from "mongodb";
import moment from "moment";
// import * as dotenv from "dotenv";
// dotenv.config();

const connectDB = async (db_name, collection_name, data) => {
  const client = await MongoClient.connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  try {
    const db = client.db(db_name);

    let collection = db.collection(collection_name);
    let result = await collection.insertOne(data);
    console.log(result);
    if (result) {
      return {
        success: true,
        result,
      };
    } else {
      return {
        success: false,
        result: [],
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      result: [],
    };
  } finally {
    client.close();
  }
};
const beehiiv = async (email) => {
  const response = await fetch(
    "https://api.beehiiv.com/v2/publications/pub_b6f880b1-9806-4df9-8956-e838eabed16e/subscriptions",
    {
      headers: {
        Authorization: "Bearer " + process.env.Beehiiv,
      },

      email,
      send_welcome_email: true,
    }
  );
  const result = await response.json();
  // console.log(result);
  return true;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, topic, name, email } = await req.body;
    console.log("name", name);
    // Process a POST request
    try {
      const data = await connectDB("Template", "emails", {
        id,
        topic,
        name,
        email,
        location: country,
        state: "active",
        date: moment().format("YYYY-MM-DD"),
      });
      if (topic === "croxroad") {
        await beehiiv(email);
      }

      if (data.success) {
        res.status(200).json({ result: true });
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
