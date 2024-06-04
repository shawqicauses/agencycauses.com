// DONE REVIEWING: GITHUB COMMIT
import {PrismaClient} from "@prisma/client"

/* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-var: "off" */
/* eslint vars-on-top: "off" */

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

export default db
