"use server"

// DONE REVIEWING: GITHUB ACTION

import {currentUser} from "@clerk/nextjs/server"
import {db} from "./db"

export const getUser = async function getUser() {
  const user = await currentUser()
  if (!user) return

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

export default {getUser}
