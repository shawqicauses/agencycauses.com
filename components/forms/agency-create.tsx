"use client"

// DONE REVIEWING: GITHUB COMMIT 5️⃣

import {zodResolver} from "@hookform/resolvers/zod"
import {Agency} from "@prisma/client"
import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import FileUploader from "../global/file-uploader"
import {
  AlertDialog,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "../ui"

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

  const isLoading = form.formState.isSubmitting
  const handleSubmit = async function handleSubmit() {}

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
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                name="logo_url"
                control={form.control}
                disabled={isLoading}
                render={({field}) => (
                  <FormItem className="flex-1">
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <FileUploader
                        resource="agencyLogo"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4 md:flex-row">
                <FormField
                  name="name"
                  control={form.control}
                  disabled={isLoading}
                  render={({field}) => (
                    <FormItem className="flex-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your agency name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  disabled
                  render={({field}) => (
                    <FormItem className="flex-1">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your agency email" {...field} readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <FormField
                  name="phone"
                  control={form.control}
                  disabled={isLoading}
                  render={({field}) => (
                    <FormItem className="flex-1">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your agency phone number" {...field} readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  )
}

export default AgencyCreate
