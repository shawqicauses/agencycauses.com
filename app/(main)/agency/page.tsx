// DONE REVIEWING: GITHUB COMMIT 3️⃣

import {currentUser} from "@clerk/nextjs/server"
import {redirect} from "next/navigation"
import AgencyCreate from "../../../components/forms/agency-create"
import {getUser, verifyAcceptInvitation} from "../../../lib/queries"

const Page = async function Page({
  searchParams
}: {
  searchParams: {plan: any; state: string; code: string}
}) {
  const user = await getUser()
  const agencyId = await verifyAcceptInvitation()

  if (agencyId) {
    if (user?.role === "SUB_ACCOUNT_USER" || user?.role === "SUB_ACCOUNT_GUEST")
      return redirect("/sub-account")
    if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
      if (searchParams.plan)
        return redirect(
          [`/agency/${agencyId}/billing`, ["plan", searchParams.plan].join("=")].join("?")
        )

      if (searchParams.state) {
        const statePathname = searchParams.state.split("__")[0]
        const stateAgencyId = searchParams.state.split("__")[1]

        if (!stateAgencyId) return <div>Not Authorized Access.</div>
        return redirect(
          [`/agency/${stateAgencyId}/${statePathname}`, ["code", searchParams.code].join("=")].join(
            "?"
          )
        )
      }

      return redirect(`/agency/${agencyId}`)
    }

    return <div>Not Authorized Access.</div>
  }

  const userAuthenticated = await currentUser()
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="max-w-[53.125rem] rounded-xl border border-border p-4">
        <h1>Create an Agency</h1>
        <AgencyCreate data={{email: userAuthenticated?.emailAddresses[0].emailAddress}} />
      </div>
    </div>
  )
}

export default Page
