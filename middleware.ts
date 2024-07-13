import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// bangla (bn), english (en), urdu (ur), russian (ru), chinese (zh), french (fr)

const locales = process.env.LOCALES.split(",");

let defaultLocale = "en";

function getLocale(request: Request) {
  const acceptLanguage = request.headers.get("accept-Language") ?? undefined;

  const headers = { "accept-language": acceptLanguage };

  const lenguages = new Negotiator({ headers }).languages();

  return match(lenguages, locales, defaultLocale);
}

export function middleware(request: Request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
