// DONE REVIEWING: GITHUB COMMIT
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {PropsWithChildren} from "react"

const SiteLayout = function SiteLayout({children}: PropsWithChildren) {
  return <ClerkProvider appearance={{baseTheme: dark}}>{children}</ClerkProvider>
}

export default SiteLayout
