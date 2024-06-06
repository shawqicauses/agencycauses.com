// DONE REVIEWING: GITHUB COMMIT
import {Agency} from "@prisma/client"

type AgencyCreateProps = {
  data?: Partial<Agency>
}

const AgencyCreate = function AgencyCreate({data}: AgencyCreateProps) {
  return <div>Agency Create Form: {data?.email}</div>
}

export default AgencyCreate
