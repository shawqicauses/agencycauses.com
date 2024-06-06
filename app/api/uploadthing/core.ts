// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {auth} from "@clerk/nextjs/server"
import {createUploadthing, type FileRouter as UploadthingFileRouter} from "uploadthing/next"

const uploadthing = createUploadthing()

const userAuthenticated = function userAuthenticated() {
  const user = auth()
  if (!user) throw new Error("Not Authenticated.")
  return user
}

const uploadthingBase = uploadthing({image: {maxFileSize: "4MB", maxFileCount: 1}})
  .middleware(userAuthenticated)
  .onUploadComplete(() => {})

export const FileRouter = {
  avatar: uploadthingBase,
  agencyLogo: uploadthingBase,
  subAccountLogo: uploadthingBase,
  media: uploadthingBase
} satisfies UploadthingFileRouter

export type FileRouterType = typeof FileRouter
