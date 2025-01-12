// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { MongoClient, ServerApiVersion } from "mongodb";
import moment from "moment";
import axios from "axios";
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

const Beehiiv = async (email) => {
  // pub_1d2935ed-9327-464a-b360-850e04146855
  // pub_b6f880b1-9806-4df9-8956-e838eabed16e/
  const response = await fetch(
    "https://api.beehiiv.com/v2/publications/pub_1d2935ed-9327-464a-b360-850e04146855/subscriptions",

    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.Beehiiv,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        send_welcome_email: true,
      }),
    }
  );
  const result = await response.json();
  // console.log("beehiv", result);
  return true;
};

const Igalfer = async (data, name) => {
  try {
    const response = await fetch("http://goatrack.io/api/igalfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: data?.FirstName,
        phone: data?.Phone,
        id: Number(name) ? Number(name) : name,
        publisher: "Template",
      }),
    });
    const result = await response.json();
    console.log(result);
    return true;

    // res.status(200).json({ result: true });
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, topic, name, email, country, beehiiv } = await req.body;
    // console.log("name", name);

    // Process a POST request
    try {
      const response = await fetch(
        `https://emailoctopus.com/api/1.6/lists/${id}/contacts?api_key=` +
          process.env.octopus_api,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // later here need to add  limit / page default limit =100
          body: JSON.stringify({
            email_address: email,
            api_key: process.env.octopus_api,
            tags: [topic],
            fields: {
              FirstName: name,
              Country: country,
              Topic: topic,
              Date: moment().format("YYYY-MM-DD"),
            },
          }),
        }
      );
      await response.json();
      // console.log(List);
      // const data = await connectDB("Template", "emails", {
      //   id,
      //   topic,
      //   name,
      //   email,
      //   location: country,
      //   state: "active",
      //   date: moment().format("YYYY-MM-DD"),
      // });

      if (topic === "croxroad" || beehiiv) {
        await Beehiiv(email);
      }

      res.status(200).json({ result: true });
    } catch (error) {
      console.log(error);
      res.json({ error: "failed to load data" });
      // res.status(500).json({ error: "failed to load data" });
    }
  } else if (req.method === "PATCH") {
    // Handle any other HTTP method
    const { data, name } = await req.body;
    const id = "cda3dc92-b5bf-11ee-a15c-13cef91ec7d4"; // TOTAL

    // test
    const igalfer = await Igalfer(data, name);

    try {
      const response = await fetch(
        `https://emailoctopus.com/api/1.6/lists/${id}/contacts?api_key=` +
          process.env.octopus_api,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // later here need to add  limit / page default limit =100
          body: JSON.stringify({
            email_address: data.email_address,
            api_key: process.env.octopus_api,
            tags: [data.products],
            fields: data,
          }),
        }
      );
      const result = await response.json();

      console.log(result);

      res.status(200).json({ result: true });
    } catch (error) {
      console.log(error);
      res.json({ error: "failed to load data" });
    }
  } else {
  }
}
