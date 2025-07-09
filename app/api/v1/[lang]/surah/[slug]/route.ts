import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  {
    params: { lang, slug },
  }: {
    params: { lang: string; slug: string };
  }
) => {
  try {
    const response = require(`@/data/${[lang]}/${[lang]}.main.json`);

    const findData = response.find(
      (item: {
        slug: string;
        id: number;
        transliteration: string;
        total_verses: number;
        translation: string;
      }) => item.slug === slug
    );

    if (!findData) {
      throw new Error("Data not found");
    }

    const details = require(`@/data/${[lang]}/${[lang]}.details.json`);

    const findDetails = details.find(
      (item: {
        id: string;
        title: string;
        description: string;
        name: string;
        revelation: string;
        number: string;
        total_verses: string;
        translation: string;
      }) => item.id === String(findData.id)
    );

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
    // Use a type assertion inside the catch block if necessary
    const typedError = error as { error: { message?: string } };
    return NextResponse.json({
      status: 500,
      // Ensure you're accessing the nested message correctly
      message: typedError.error?.message || "An unexpected error occurred",
      data: null,
    });
  }
};
