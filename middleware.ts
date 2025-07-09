import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import type { NextRequest } from "next/server";

const locales: string[] | undefined = process.env.LOCALES
  ? process.env.LOCALES.split(",")
  : undefined;

let defaultLocale = "en";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-Language") ?? undefined;

  const headers = { "accept-language": acceptLanguage };

  const lenguages = new Negotiator({ headers }).languages();

  if (!locales) return defaultLocale;

  return match(lenguages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales?.some(
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
