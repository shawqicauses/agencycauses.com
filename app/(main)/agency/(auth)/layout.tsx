// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {PropsWithChildren} from "react"

const AuthLayout = function AuthLayout({children}: PropsWithChildren) {
  return <div className="flex min-h-screen items-center justify-center py-20">{children}</div>
}

export default AuthLayout
