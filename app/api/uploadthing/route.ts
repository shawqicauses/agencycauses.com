// DONE REVIEWING: GITHUB COMMIT
import {auth} from "@clerk/nextjs/server"
import {createUploadthing, type FileRouter as FileRouterType} from "uploadthing/next"

const uploadthing = createUploadthing()

const userAuthenticated = function userAuthenticated() {
  const user = auth()
  if (!user) throw new Error("Not Authenticated.")
  return user
}

const uploadthingBase = uploadthing({image: {maxFileSize: "4MB", maxFileCount: 1}})
  .middleware(userAuthenticated)
  .onUploadComplete(() => {})

const FileRouter = {
  avatar: uploadthingBase,
  agencyLogo: uploadthingBase,
  subAccountLogo: uploadthingBase,
  media: uploadthingBase
} satisfies FileRouterType

export default FileRouter
