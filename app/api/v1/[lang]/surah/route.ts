import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  {
    params: { lang },
  }: {
    params: { lang: string };
  }
) => {
  try {
    const response = require(`@/data/${[lang]}/${[lang]}.main.json`);
    return NextResponse.json({
      status: 200,
      message: "Successfully fetched data",
      data: response,
    });
  } catch (error) {
    const typedError = error as { error: { message?: string } };
    return NextResponse.json({
      status: 500,
      message: typedError.error?.message || "An unexpected error occurred",
      data: null,
    });
  }
};
