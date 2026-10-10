import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const formatQuery = request.nextUrl.searchParams.get("format");

  // Check if client explicitly requests Markdown via Accept header or ?format=md query parameter
  const isMarkdownRequested =
    acceptHeader.includes("text/markdown") || formatQuery === "md";

  if (isMarkdownRequested) {
    const pathname = request.nextUrl.pathname;

    // Do not rewrite static files, API routes, or Next.js internals
    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/api/md";
    url.searchParams.set("path", pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, llms.txt
     * - Static asset extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};
