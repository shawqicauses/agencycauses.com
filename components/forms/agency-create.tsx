"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {zodResolver} from "@hookform/resolvers/zod"
import {Agency} from "@prisma/client"
import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {AlertDialog, Card, CardContent, CardDescription, CardHeader, CardTitle, Form} from "../ui"

type AgencyCreateProps = {
  data?: Partial<Agency>
}

const AgencyCreateFormSchema = z.object({
  logo_url: z.string().url(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  zip_code: z.number().min(1),
  address: z.string().min(1),
  with_label: z.boolean()
})

const AgencyCreate = function AgencyCreate({data}: AgencyCreateProps) {
  const router = useRouter()
  const [isDeletingAgency, setIsDeletingAgency] = useState(false)
  const form = useForm<z.infer<typeof AgencyCreateFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(AgencyCreateFormSchema),
    defaultValues: {
      logo_url: data?.logo_url,
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      country: data?.country,
      state: data?.state,
      city: data?.city,
      zip_code: data?.zip_code,
      address: data?.address,
      with_label: data?.with_label
    }
  })

  useEffect(() => {
    if (data) form.reset(data)
  }, [data, form])

  return (
    <AlertDialog>
      <Card>
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Let us create an agency for your business. You can update the agency settings later from
            the agency settings tab.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>Agency Create Form</form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  )
}

export default AgencyCreate
