"use server"

// DONE REVIEWING: GITHUB COMMIT

import {Agency} from "@prisma/client"
import {db} from "../../lib/db"

export const upsertAgency = async function upsertAgency(agency: Agency) {
  if (!agency.id) return
  try {
    await db.agency.upsert({
      where: {id: agency.id},
      update: agency,
      create: {
        users: {connect: {email: agency.email}},
        ...agency,
        sidebar_options: {
          create: [
            {
              icon: "CATEGORY",
              name: "Dashboard",
              link: `/agency/${agency.id}`
            }
          ]
        }
      }
    })
  } catch (error) {
    throw new Error("Ops! Could not create your agency.")
  }
}

export default upsertAgency

// TODO: ICONS
