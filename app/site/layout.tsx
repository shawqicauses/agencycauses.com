// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {PropsWithChildren} from "react"
import Navigation from "../../components/site/navigation"

const SiteLayout = function SiteLayout({children}: PropsWithChildren) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <Navigation />
      {children}
    </ClerkProvider>
  )
}

export default SiteLayout
