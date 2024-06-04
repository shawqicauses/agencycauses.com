"use server"

// DONE REVIEWING: GITHUB ACTION 2️⃣

import {clerkClient, currentUser} from "@clerk/nextjs/server"
import {User} from "@prisma/client"
import {redirect} from "next/navigation"
import {db} from "./db"

export const getUser = async function getUser() {
  const user = await currentUser()
  if (!user) return redirect("/sign-in")

  const data = await db.user.findUnique({
    where: {email: user.emailAddresses[0].emailAddress},
    include: {
      agency: {
        include: {
          sidebar_options: true,
          sub_accounts: {
            include: {
              sidebar_options: true
            }
          }
        }
      }
    }
  })

  return data
}

export const createNotificationActivity = async function createNotificationActivity({
  agencyId,
  subAccountId,
  description
}: {
  agencyId?: string
  subAccountId?: string
  description: string
}) {
  const user = await currentUser()
  let data

  if (!user) {
    const response = await db.user.findFirst({
      where: {
        agency: {
          sub_accounts: {
            some: {
              id: subAccountId
            }
          }
        }
      }
    })

    if (response) data = response
  } else data = await db.user.findUnique({where: {email: user.emailAddresses[0].emailAddress}})

  if (!data) throw new Error("Error: could not find a user.")

  let notificationActivityAgencyId = agencyId
  if (!notificationActivityAgencyId) {
    if (!subAccountId)
      throw new Error("Error: you need to provide at least an agency or sub-account ID.")

    const response = await db.subAccount.findUnique({where: {id: subAccountId}})
    if (response) notificationActivityAgencyId = response.agency_id
  }

  if (subAccountId)
    await db.notification.create({
      data: {
        notification: [data.name, description].join(" | "),
        user: {connect: {id: data.id}},
        agency: {connect: {id: notificationActivityAgencyId}},
        sub_account: {connect: {id: subAccountId}}
      }
    })
  else
    await db.notification.create({
      data: {
        notification: [data.name, description].join(" | "),
        user: {connect: {id: data.id}},
        agency: {connect: {id: data.agency_id}}
      }
    })
}

export const createUserTeam = async function createUserTeam(user: User, agencyId: string) {
  if (user.role === "AGENCY_OWNER") return null
  const response = await db.user.create({data: {...user}})
  return response
}

export const verifyAcceptInvitation = async function verifyAcceptInvitation() {
  const user = await currentUser()
  if (!user) return redirect("/sign-in")

  const invitation = await db.invitation.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
      status: "PENDING"
    }
  })

  if (invitation) {
    const userDate = new Date()
    const data = await createUserTeam(
      {
        id: user.id,
        avatar_url: user.imageUrl,
        name: [user.firstName, user.lastName].join(" ").trim(),
        email: invitation.email,
        role: invitation.role,
        agency_id: invitation.agency_id,
        created_at: userDate,
        updated_at: userDate
      },
      invitation.agency_id
    )

    await createNotificationActivity({
      agencyId: invitation?.agency_id,
      subAccountId: undefined,
      description: "has successfully joined."
    })

    if (data) {
      await clerkClient.users.updateUserMetadata(user.id, {
        privateMetadata: {
          role: data.role || "SUB_ACCOUNT_USER"
        }
      })

      await db.invitation.delete({where: {email: data.email}})
      return data.agency_id
    }

    return null
  }

  const agency = await db.user.findUnique({where: {email: user.emailAddresses[0].emailAddress}})
  return agency ? agency.agency_id : null
}
