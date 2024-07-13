import { NextResponse } from "next/server";

export const GET = async (request: Request, context) => {
  try {
    const { lang, slug } = context.params;
    const response = require(`@/data/${[lang]}/${[lang]}.main.json`);

    const findData = response.find((item) => item.slug === slug);

    if (!findData) {
      throw new Error("Data not found");
    }

    const details = require(`@/data/${[lang]}/${[lang]}.details.json`);

    const findDetails = details.find((item) => item.id === String(findData.id));

    if (!findDetails) {
      throw new Error("Data not found");
    }

    return NextResponse.json({
      status: 200,
      message: "Successfully fetched data",
      data: {
        name: findData.transliteration,
        total_verses: findData.total_verses,
        translation: findData.translation,
        ...findDetails,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};
