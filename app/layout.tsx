// DONE REVIEWING: GITHUB COMMIT 4️⃣
import {PropsWithChildren} from "react"
import {Toaster} from "../components/ui"
import "../styles/global.css"
import Providers from "./providers"

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
