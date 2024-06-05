// DONE REVIEWING: GITHUB COMMIT
import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogHeader = function AlertDialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
  )
}

AlertDialogHeader.displayName = "AlertDialogHeader"
export default AlertDialogHeader
