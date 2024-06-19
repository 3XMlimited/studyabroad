import { MongoClient, ServerApiVersion } from "mongodb";

const connectDB = async (db_name, collection_name, condition) => {
  // const client = await MongoClient.connect(process.env.MONGODB_URL, {
  //   // useNewUrlParser: true,
  // }).catch((err) => {
  //   console.log(err);
  // });

  // if (!client) {
  //   return;
  // }
  // try {
  //   const db = client.db(db_name);

  //   let collection = db.collection(collection_name);
  //   let checkResult = await collection.findOne(condition);
  //   if (checkResult) {
  //     return checkResult;
  //   } else {
  //     return [];
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return [];
  // } finally {
  //   client.close();
  // }
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
      return result;
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

export const countView = async (
  db_name,
  collection_name,
  condition,
  update
) => {
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

    let result = await collection.updateOne(condition, {
      $set: { url: update },
    });

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

      let data = await connectDB("Market_V2", "indexes", { widget });

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
    const update = body.update;

    const data = await countView("Market_V2", "indexes", { widget }, update);

    // let data = await connectDB("Market_V2", "indexes", { widget });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new post", { status: 500 });
  }
};
