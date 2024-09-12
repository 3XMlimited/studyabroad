import { MongoClient, ServerApiVersion } from "mongodb";
import fs from "fs";
// const { MongoClient, ServerApiVersion } = require("mongodb");
// import path from "path";
// import { writeFile } from "fs/promises";

// var fs = require("fs");
// const dotenv = require("dotenv");
// dotenv.config();

// async function getImageFromURL(widget, imageUrl) {
//   console.log("widget", widget, imageUrl);
//   const response = await fetch(imageUrl, {
//     method: "GET",
//     headers: {},
//     responseType: "stream",
//   });

//   // const result = await response.data.pipe(
//   //   fs.createWriteStream("ada_lovelace.jpg")
//   // );
//   const arrayBuffer = await response.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   console.log(buffer);
//   fs.writeFile(`public/uploads/${widget}.jpg`, buffer, function (err) {
//     if (err) {
//       console.log(err);
//     }

//     console.log("File written successfully");
//   });
// }
// const fetchImageServer = async (widget, imageUrl) => {
//   // console.log(widget, imageUrl);
//   const url =
//     "http://127.0.0.1:5001?" +
//     new URLSearchParams({
//       widget,
//       imageUrl,
//     }).toString();

//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const result = await response.json();
//   console.log(result);
// };

// const connectDB = async (db_name, collection_name, condition, country) => {
//   const client = new MongoClient(process.env.MONGODB_URL, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const db = client.db(db_name);
//     let collection = db.collection(collection_name);
//     let result = await collection.findOne(condition);

//     if (result) {
//       const data = await randomUrl(result, country);
//       return data;
//     } else {
//       return [];
//     }
//   } catch (err) {
//     return [];
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };

// const randomUrl = async (result, country) => {
//   let url = "";
//   if (result.case.includes("All")) {
//     let uri = result.url?.action;
//     let urls = [];

//     Object.values(uri).map((r, i) => {
//       if (r.state === true) {
//         urls.push({
//           client: Object.keys(uri)[i],
//           value: r["%"] != 0 ? r["%"] / 100 : 0,
//         });
//       }
//     });

//     var randomNumber = Math.random();
//     var randomKey;
//     let value = 0;
//     for (let i = 0; i < urls.length; i++) {
//       const element = urls[i];
//       value += element.value;
//       if (randomNumber < value) {
//         randomKey = element.client;
//         break;
//       } else if (i === urls.length) {
//         randomKey = element.client;
//       }
//     }
//     url = result.url?.url[randomKey];
//     if (result.url.count) {
//       if (result.url.count[`${randomKey}`]) {
//         result.url.count[`${randomKey}`] += 1;
//       } else {
//         result.url.count[`${[randomKey]}`] = 1;
//       }
//     } else {
//       result.url.count = {};
//       result.url.count[`${[randomKey]}`] = 1;
//     }
//     await countView("Market_V2", "indexes", result, { url: result.url });
//     return url;
//   } else if (result.case.includes("Country")) {
//     try {
//       url = result.url.url[`${country}`];
//       if (url === undefined) {
//         url = result.url.url[`OTHER`];
//       }

//       if (result.url.count) {
//         if (result.url.count[`${country}`]) {
//           result.url.count[`${country}`] += 1;
//         } else {
//           result.url.count[`${[country]}`] = 1;
//         }
//       } else {
//         result.url.count = {};
//         result.url.count[`${[country]}`] = 1;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     await countView("Market_V2", "indexes", result, { url: result.url });
//     return url;
//   } else if (result.case === "Post Creation") {
//     if (result.count) {
//       result.count = result.count + 1;
//     } else {
//       result.count = 1;
//     }
//     if (result.imageState) {
//       await countView("Market_V2", "indexes", result, {
//         count: result.count,
//       });
//     } else {
//       console.log("start saving image ...");

//       await fetchImageServer(result.widget, result.picture[0]);
//       await countView("Market_V2", "indexes", result, {
//         count: result.count,
//         imageState: true,
//       });
//     }

//     return result.final_url;
//   }
// };

// export const countView = async (db_name, collection_name, update, url) => {
//   const client = new MongoClient(process.env.MONGODB_URL, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const db = client.db(db_name);
//     let collection = db.collection(collection_name);

//     let result = await collection.updateOne(
//       { widget: update.widget },
//       {
//         $set: url,
//       }
//     );

//     if (result) {
//       return result;
//     } else {
//       return [];
//     }
//   } catch (err) {
//     return [];
//     console.log(err);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };
const fetchData = async (widget, country) => {
  let response = await fetch("https://goatrack.io/api/esquiz/widget", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      widget: Number(widget),
      country,
    }),
  });
  let data = await response.json();
  console.log(data);
  return data;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.body;
      console.log(body);
      const widget = Number(body?.widget);
      const country = body.country;
      console.log(country);

      const data = await fetchData(widget, country);
      // let data = await connectDB("Market_V2", "indexes", { widget }, country);

      // const result = await randomUrl(data);

      return res.json(data);
    } catch (error) {
      console.log(error);

      return res.json(error);
    }
  }
}

// connectDB("Market_V2", "indexes", { widget: 122007 }, "");

// "dev": "next dev",

// server {
//         listen 80;
//         server_name 18.163.193.85;

//         location / {
//                 proxy_pass http://127.0.0.1:3000;
//                 proxy_http_version 1.1;
//                 proxy_set_header Upgrade $http_upgrade;
//                 proxy_set_header Connection "upgrade";
//                 proxy_set_header Host $hsot;
//                 proxy_cache_bypass $http_upgrade;
//         }

// }
