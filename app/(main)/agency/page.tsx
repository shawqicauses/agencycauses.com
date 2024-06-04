// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {currentUser} from "@clerk/nextjs/server"
import {redirect} from "next/navigation"

const Page = async function Page() {
  const user = await currentUser()
  if (!user) return redirect("/sign-in")
  return <div>Agency</div>
}

export default Page
