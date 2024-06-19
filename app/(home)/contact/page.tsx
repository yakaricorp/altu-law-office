import GetInTouch from "app/ui/components/homepage/get-in-touch"
import withTranslations from "app/ui/components/hoc/withTranslations/server"

const GetInTouchWithT = withTranslations(GetInTouch)

export default function ContactPage() {
  return <GetInTouchWithT></GetInTouchWithT>
}