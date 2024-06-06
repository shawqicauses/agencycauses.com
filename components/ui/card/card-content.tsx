// DONE REVIEWING: GITHUB COMMIT
import {forwardRef, HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
)

CardContent.displayName = "CardContent"
export default CardContent
