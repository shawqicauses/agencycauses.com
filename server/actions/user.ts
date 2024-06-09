"use server"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {clerkClient, currentUser} from "@clerk/nextjs/server"
import {User} from "@prisma/client"
import {db} from "../../lib/db"

export const upsertUser = async function upsertUser(user: Partial<User>) {
  const userAuthenticated = await currentUser()
  if (!userAuthenticated) return

  const response = await db.user.upsert({
    where: {email: userAuthenticated.emailAddresses[0].emailAddress},
    update: user,
    create: {
      id: userAuthenticated.id,
      avatar_url: userAuthenticated.imageUrl,
      name: `${userAuthenticated.firstName} ${userAuthenticated.lastName}`.trim(),
      email: userAuthenticated.emailAddresses[0].emailAddress,
      role: user.role || "SUB_ACCOUNT_USER"
    }
  })

  await clerkClient.users.updateUserMetadata(userAuthenticated.id, {
    privateMetadata: {
      role: response.role || "SUB_ACCOUNT_USER"
    }
  })
}

export default upsertUser
