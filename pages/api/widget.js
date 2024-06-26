import { MongoClient, ServerApiVersion } from "mongodb";

const connectDB = async (db_name, collection_name, condition, country) => {
  const client = new MongoClient(process.env.MONGODB_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db(db_name);
    let collection = db.collection(collection_name);
    let result = await collection.findOne(condition);
    // console.log(result);
    if (result) {
      const data = await randomUrl(result, country);
      return data;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const randomUrl = async (result, country) => {
  let url = "";
  if (result.case.includes("All")) {
    let uri = result.url?.action;
    let urls = [];

    Object.values(uri).map((r, i) => {
      if (r.state === true) {
        urls.push({
          client: Object.keys(uri)[i],
          value: r["%"] != 0 ? r["%"] / 100 : 0,
        });
      }
    });

    var randomNumber = Math.random();
    var randomKey;
    let value = 0;
    for (let i = 0; i < urls.length; i++) {
      const element = urls[i];
      value += element.value;
      if (randomNumber < value) {
        randomKey = element.client;
        break;
      } else if (i === urls.length) {
        randomKey = element.client;
      }
    }
    url = result.url?.url[randomKey];
    if (result.url.count) {
      if (result.url.count[`${randomKey}`]) {
        result.url.count[`${randomKey}`] += 1;
      } else {
        result.url.count[`${[randomKey]}`] = 1;
      }
    } else {
      result.url.count = {};
      result.url.count[`${[randomKey]}`] = 1;
    }
    await countView("Market_V2", "indexes", result, { url: result.url });
    return url;
  } else if (result.case.includes("Country")) {
    try {
      url = result.url.url[`${country}`];
      if (url === undefined) {
        url = result.url.url[`OTHER`];
      }

      if (result.url.count) {
        if (result.url.count[`${country}`]) {
          result.url.count[`${country}`] += 1;
        } else {
          result.url.count[`${[country]}`] = 1;
        }
      } else {
        result.url.count = {};
        result.url.count[`${[country]}`] = 1;
      }
    } catch (error) {
      console.log(error);
    }
    await countView("Market_V2", "indexes", result, { url: result.url });
    return url;
  } else if (result.case === "Post Creation") {
    if (result.count) {
      result.count = result.count + 1;
    } else {
      result.count = 1;
    }
    await countView("Market_V2", "indexes", result, { count: result.count });
    return { url: result.final_url, img: result.picture[0] };
  }
};

export const countView = async (db_name, collection_name, update, url) => {
  const client = new MongoClient(process.env.MONGODB_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db(db_name);
    let collection = db.collection(collection_name);

    let result = await collection.updateOne(
      { widget: update.widget },
      {
        $set: url,
      }
    );

    if (result) {
      return result;
    } else {
      return [];
    }
  } catch (err) {
    return [];
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.body;
      console.log(body);
      const widget = Number(body?.widget);
      const country = body.country;
      console.log(country);
      let data = await connectDB("Market_V2", "indexes", { widget }, country);

      // const result = await randomUrl(data);

      return res.json(data);
    } catch (error) {
      console.log(error);

      return res.json(error);
    }
  }
}

export const PATCH = async (req) => {
  try {
    const body = await req.json();

    const widget = Number(body.widget);

    const data = await countView("Market_V2", "indexes", { widget });

    // let data = await connectDB("Market_V2", "indexes", { widget });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new post", { status: 500 });
  }
};
