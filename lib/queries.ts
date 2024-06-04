"use server"

// DONE REVIEWING: GITHUB ACTION 1️⃣

import {currentUser} from "@clerk/nextjs/server"
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

    return data
  }
}
