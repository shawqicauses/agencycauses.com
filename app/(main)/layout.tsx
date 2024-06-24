// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {PropsWithChildren} from "react"

const MainLayout = function MainLayout({children}: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          input: "shc-input-base",
          formButtonPrimary: "shc-button-base shc-button-normal shc-button-accent"
        }
      }}>
      {children}
    </ClerkProvider>
  )
}

export default MainLayout
