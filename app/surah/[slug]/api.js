import fsPromises from "fs/promises";
import path from "path";

export const mainData = async (slug) => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/data/main.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData.find((item) => item.slug === slug);
};

export const detailsData = async (id) => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/data/verses.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData.find((item) => item.id === +id);
};

export const revelationLang = async (revelation, lang) => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/data/name.json");
  // Read the json file
  const jsonData = JSON.parse(await fsPromises.readFile(filePath));

  const res = jsonData.find((item) => item.english === revelation);

  // Parse data as json
  return res[lang];
};

export const indexOfLang = (lang) => {
  let index;
  switch (lang) {
    case "bangla":
      index = 0;
      break;
    case "english":
      index = 1;
      break;
    case "chinese":
      index = 2;
      break;
    case "french":
      index = 3;
      break;
    case "russian":
      index = 4;
      break;
    case "urdu":
      index = 5;
      break;
    default:
      index = 0;
      break;
  }

  return index;
};
