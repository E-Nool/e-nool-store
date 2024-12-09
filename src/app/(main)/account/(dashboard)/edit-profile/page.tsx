import EditProfileTemplate from "@modules/account/templates/edit-profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your eNOOL profile.",
}

export default function Profile() {
  return (
      <EditProfileTemplate />
  )
}
