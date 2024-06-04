// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en">
        <head />
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default Layout
