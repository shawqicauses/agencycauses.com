// DONE REVIEWING: GITHUB COMMIT
import {getUser} from "../lib/queries"

type SideNavigationProps = {
  id: string
  type: "AGENCY" | "SUB_ACCOUNT"
}

const SideNavigation = async function SideNavigation({id, type}: SideNavigationProps) {
  const user = await getUser()
  if (!user) return null
  if (!user.agency) return null

  const data =
    type === "AGENCY"
      ? user.agency
      : user.agency.sub_accounts.find((subAccount) => subAccount.id === id)
  return <div>Side Navigation</div>
}

export default SideNavigation
