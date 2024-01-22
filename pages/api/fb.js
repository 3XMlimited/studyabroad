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
    let result = await collection.findOne(data);
    // console.log(result);
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

const fetch_ads = async (campaign) => {
  if (campaign && campaign.length > 1) {
    const db_result = await connectDB("Market", "Traffic", {
      traffic: "Facebook",
    });
    if (db_result.success) {
      const ids = db_result.result;

      try {
        // let url = "https://graph.facebook.com/v18.0/" + campaign;
        let url =
          "https://graph.facebook.com/v18.0/" + campaign + "/adcreatives?";

        // const response = await axios.get(url + "/insights", {
        const response = await fetch(
          url +
            new URLSearchParams({
              access_token: ids.FB_token,
              level: "ad",
              fields: JSON.stringify([
                "name",
                "id",
                "object_story_spec",
                "image_url",
              ]),
            }),
          {
            headers: {
              "Access-Control-Allow-Headers": "Content-Type",
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response.data);
        const data = await response.json();
        //   console.log(data);
        return data.data[0].object_story_spec.link_data;
      } catch (error) {
        console.log(error);
        return { name: "404" };
      }
    } else {
      return { name: "404" };
    }
  } else {
    return;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = await req.body;

    // Process a POST request
    const result = await fetch_ads(id);

    res.status(200).json({ result });
  }
}

100;
