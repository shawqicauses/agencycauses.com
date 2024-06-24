// DONE REVIEWING: GITHUB COMMIT 1️⃣
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

  if (!data) return null

  let logo = user.agency.logo_url
  const isAgencyWithLabel = user.agency.with_label
  if (!isAgencyWithLabel)
    if (type === "SUB_ACCOUNT")
      logo =
        user.agency.sub_accounts.find((subAccount) => subAccount.id === id)?.logo_url ||
        user.agency.logo_url

  const subAccounts = user.agency.sub_accounts.filter((subAccount) =>
    user.permissions.find(
      (permission) => permission.sub_account_id === subAccount.id && permission.access
    )
  )

  const options =
    type === "AGENCY"
      ? user.agency.sidebar_options || []
      : user.agency.sub_accounts.find((subAccount) => subAccount.id === id)?.sidebar_options || []

  return <div>Side Navigation</div>
}

export default SideNavigation
