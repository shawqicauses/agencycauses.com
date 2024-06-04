// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {authMiddleware} from "@clerk/nextjs/server"
import {NextResponse} from "next/server"

export default authMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
  afterAuth: async (auth, request) => {
    const {nextUrl, headers} = request
    const {searchParams} = nextUrl
    const searchParamsString = searchParams.toString()
    const pathnameWithSearchParams = `${nextUrl.pathname}${searchParamsString.length > 0 ? ["?", searchParamsString].join("") : ""}`

    // 1. if (https:[domain]/[sub-domain]) -> (https://[sub-domain].[domain])
    const subDomainCustom = headers
      .get("host")
      ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0]

    if (subDomainCustom)
      return NextResponse.rewrite(
        new URL(`/${subDomainCustom}${pathnameWithSearchParams}`, request.url)
      )

    // 2. if ("/sign-up" | "/sign-in") -> (https://[domain]/agency/[sign-up | sign-in])
    if (nextUrl.pathname === "/sign-up" || nextUrl.pathname === "/sign-in")
      return NextResponse.redirect(new URL(`/agency${nextUrl.pathname}`, request.url))

    // 3. if ("/"" | "/site") -> (https://[domain]/site)
    if (
      nextUrl.pathname === "/" ||
      (nextUrl.pathname === "/site" && nextUrl.host === process.env.NEXT_PUBLIC_DOMAIN)
    )
      return NextResponse.rewrite(new URL("/site", request.url))

    // 4. -> (https://[domain]/[path-name][search-params])
    if (nextUrl.pathname.startsWith("/agency") || nextUrl.pathname.startsWith("/sub-account"))
      return NextResponse.rewrite(new URL(`${pathnameWithSearchParams}`, request.url))
  }
})

export const config = {matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]}
