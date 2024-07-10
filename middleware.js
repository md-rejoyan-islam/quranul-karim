import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// bangla (bn), english (en), urdu (ur), russian (ru), chinese (zh), french (fr)

const locales = ["bn", "en", "ur", "ru", "zh", "fr"];
let defaultLocale = "en";

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-Language") ?? undefined;

  const headers = { "accept-language": acceptLanguage };

  const lenguages = new Negotiator({ headers }).languages();

  return match(lenguages, locales, defaultLocale);
}

export function middleware(request) {
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
  matcher: [
    // Skip all internal paths (_next,assets,api)
    "/((?!api|static|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
