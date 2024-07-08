"use client";
import fsPromises from "fs/promises";
import path from "path";

export const getIdName = async (number) => {
  console.log(number);
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/data/number.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  console.log(objectData);

  return "1";
};
