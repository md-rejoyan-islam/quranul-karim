import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  try {
    const { lang } = context.params;

    const response = require(`@/data/${[lang]}/${[lang]}.main.json`);
    return NextResponse.json({
      status: 200,
      message: "Successfully fetched data",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};
