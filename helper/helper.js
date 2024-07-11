export const numberConverter = (lang, number) => {
  const numberTrans = require("@/data/number.json");

  const changeLangs = ["fr", "zh", "ur", "ru"];

  let num;

  if (changeLangs.includes(lang)) {
    const res = numberTrans.find((numb) => {
      return numb[lang] === number;
    });

    num = res?.en;
  } else {
    num = number;
  }

  return num;
};
