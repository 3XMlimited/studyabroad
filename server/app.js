import express from "express";

import fs from "fs";
import bodyParser from "body-parser";
const app = express();

async function getImageFromURL(widget, imageUrl) {
  console.log("widget", widget, imageUrl);
  const response = await fetch(imageUrl, {
    method: "GET",
    headers: {},
    responseType: "stream",
  });

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  //   console.log(buffer);
  fs.writeFile(`../public/uploads/${widget}.jpg`, buffer, function (err) {
    if (err) {
      console.log(err);
    }

    console.log("File written successfully");
  });
  //   console.log("done");
  return;
}

const router = async (req, res, next) => {
  //   const result = await req;
  const { widget, imageUrl } = await req.query;
  //   console.log(widget, imageUrl);
  const result = await getImageFromURL(widget, imageUrl);
  res.json(result);
};

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", router);

const server = async () => {
  try {
    app.listen(5001, () => {
      console.log("server listening on 5001");
    });
  } catch (error) {
    console.log(error);
  }
};

server();
