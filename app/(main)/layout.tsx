// DONE REVIEWING: GITHUB COMMIT
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {PropsWithChildren} from "react"

const MainLayout = function MainLayout({children}: PropsWithChildren) {
  return <ClerkProvider appearance={{baseTheme: dark}}>{children}</ClerkProvider>
}

export default MainLayout
