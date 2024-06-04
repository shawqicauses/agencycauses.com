// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
